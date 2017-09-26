<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class RepeatingTextField
 *
 * @package FlexFields\Fields
 */
class RepeatingTextField extends Field {

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		$template = TemplateHandler::getInstance();

		return $template->toString( 'field.twig', [
			'fieldType'   => 'repeating-text',
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'repeating-text.twig', [
				'name'   => $this->name,
				'value'  => array_filter( $this->value ),
				'legend' => $this->getData( 'label' ),
				'atts'   => $this->getData( 'atts', [] ),
			] ),
		] );

	}

	/**
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = (array) $value;
	}

}