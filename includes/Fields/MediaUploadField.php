<?php

namespace FlexFields\Fields;

/**
 * Class MediaUploadField
 *
 * @package FlexFields\Fields
 */
class MediaUploadField extends Field {

	/**
	 * Return field markup as string.
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_media();
		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );

		$name = $this->getData( 'name' );

		$input = $this->renderTemplate( 'media-upload.php', [
			'name'  => $name,
			'value' => $this->value,
			'atts'  => $this->getData( 'atts', [] ),
		] );

		return $this->fieldWrapper( 'media-upload', $this->fieldLabel( $input ) );

	}
}
