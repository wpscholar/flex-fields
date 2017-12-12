<?php

namespace FlexFields\Fields;

/**
 * Class TextareaField
 *
 * @package FlexFields\Fields
 */
class TextareaField extends Field {

	/**
	 * Sanitize field value
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public function sanitize( $value ) {
		return sanitize_textarea_field( $value );
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$textarea = $this->renderTemplate( 'textarea.php', [
			'name'  => $this->name,
			'value' => $this->value,
			'atts'  => $this->getData( 'atts', [] ),
		] );

		return $this->fieldWrapper( 'textarea', $this->fieldLabel( $textarea ) );

	}

}
