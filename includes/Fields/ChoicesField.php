<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class ChoicesField
 *
 * @package FlexFields\Fields
 *
 * @property bool $isMultiSelect
 * @property array $options
 */
class ChoicesField extends SelectField {

	protected function _defaultConfig() {
		return [
			// Change CSS classnames to better restrict CSS/JS scope
			'classNames'     => [
				'containerOuter' => 'flex-choices',
				'containerInner' => 'flex-choices__inner',
				'input'          => 'flex-choices__input',
				'inputCloned'    => 'flex-choices__input--cloned',
				'list'           => 'flex-choices__list',
				'listItems'      => 'flex-choices__list--multiple',
				'listSingle'     => 'flex-choices__list--single',
				'listDropdown'   => 'flex-choices__list--dropdown',
				'item'           => 'flex-choices__item',
				'itemSelectable' => 'flex-choices__item--selectable',
				'itemDisabled'   => 'flex-choices__item--disabled',
				'itemChoice'     => 'flex-choices__item--choice',
				'placeholder'    => 'flex-choices__placeholder',
				'group'          => 'flex-choices__group',
				'groupHeading'   => 'flex-choices__heading',
				'button'         => 'flex-choices__button',
			],
			// Remove select text
			'itemSelectText' => '',
		];
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );

		$template = TemplateHandler::getInstance();

		// Get field attributes
		$atts = $this->getData( 'atts', [] );

		$config = array_merge( $this->_defaultConfig(), $this->getData( 'config', [] ) );

		// Set Choices.js config
		$atts['data-choices'] = htmlspecialchars( json_encode( (object) $config ), ENT_QUOTES );

		// TODO: Need to be able to pass css classes to field wrapper vs. actual input/select field.
		return $template->toString( 'field.php', [
			'fieldType'   => 'choices',
			'hidden'      => $this->_maybeConvertCallable( $this->getData( 'hidden', false ), $this ),
			'hasError'    => $this->hasErrors(),
			'error'       => $this->getErrorMessage(),
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'label.php', [
				'label'         => $this->getData( 'label' ),
				'labelPosition' => $this->getData( 'label_position', 'before' ),
				'content'       => $template->toString( 'select.php', [
					'name'    => $this->isMultiSelect ? $this->name . '[]' : $this->name,
					'value'   => $this->value,
					'options' => $this->_normalizeOptions( $this->options ),
					'atts'    => $atts,
				] )
			] ),
		] );

	}

}