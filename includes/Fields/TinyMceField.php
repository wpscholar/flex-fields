<?php

namespace FlexFields\Fields;

/**
 * Class TinyMceField
 *
 * @package FlexFields\Fields
 */
class TinyMceField extends TextareaField {

	/**
	 * Default configuration.
	 *
	 * @return array
	 */
	protected function _defaultConfig() {
		return [
			'tinymce' => [],
		];
	}

	/**
	 * Sanitize field value
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	public function sanitize( $value ) {
		return wp_kses_post( $value );
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );
		wp_enqueue_editor();

		// Get field attributes
		$atts = $this->getData( 'atts', [] );

		$config = array_merge( $this->_defaultConfig(), (array) $this->getData( 'config', [] ) );

		// Set config
		$atts['id'] = $this->getData( 'name' );
		$atts['data-config'] = htmlspecialchars( json_encode( (object) $config ), ENT_QUOTES );

		$editor = $this->renderTemplate( 'textarea.php', [
			'name'  => $this->getData( 'name' ),
			'value' => $this->value,
			'atts'  => $atts,
		] );

		return $this->fieldWrapper( 'tinymce', $this->fieldLabel( $editor ) );

	}

}
