<?php

namespace FlexFields\Fields;

/**
 * Class RepeatingTextField
 *
 * @package FlexFields\Fields
 */
class RepeatingTextField extends Field {

	/**
	 * Sanitize field value
	 *
	 * @param array $value
	 *
	 * @return array
	 */
	public function sanitize( $value ) {
		return array_filter( array_map( 'sanitize_text_field', (array) $value ) );
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );

		return $this->fieldWrapper( 'repeating-text', $this->renderTemplate( 'repeating-text.php', [
			'name'  => $this->name,
			'type'  => $this->getData( 'type', $this->getData( [ 'atts', 'type' ], 'text' ) ),
			'value' => array_filter( $this->value ),
			'label' => $this->getData( 'label' ),
			'atts'  => $this->getData( 'atts', [] ),
		] ) );

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
