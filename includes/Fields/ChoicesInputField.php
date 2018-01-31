<?php

namespace FlexFields\Fields;

/**
 * Class ChoicesInputField
 *
 * @package FlexFields\Fields
 */
class ChoicesInputField extends InputField {

	/**
	 * @return array
	 */
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

		// Get field attributes
		$atts = $this->getData( 'atts', [] );

		$config = array_merge( $this->_defaultConfig(), (array) $this->getData( 'config', [] ) );

		// Set Choices.js config
		$atts['data-choices'] = htmlspecialchars( json_encode( (object) $config ), ENT_QUOTES );

		$name = $this->getData( 'name' );
		if ( 'multiple' === $this->getData( [ 'atts', 'multiple' ] ) ) {
			$name .= '[]';
		}

		$input = $this->renderTemplate( 'input.php', [
			'type'  => $this->inputType(),
			'name'  => $name,
			'value' => $this->value,
			'atts'  => $atts,
		] );

		return $this->fieldWrapper( 'choices-input', $this->fieldLabel( $input ) );

	}

}
