<?php

namespace FlexFields\Fields;

/**
 * Class AjaxUploadField
 *
 * @package FlexFields\Fields
 */
class AjaxUploadField extends Field {

	/**
	 * Field constructor.
	 *
	 * @param string $name
	 * @param array  $args
	 */
	public function __construct( $name, array $args = [] ) {
		parent::__construct( $name, $args );

		// Set file handle, if not explicitly set
		if ( ! array_key_exists( 'file_handle', $this->_data ) ) {
			$this->setData( 'file_handle', "{$name}_file" );
		}

		// If field is a multiple file upload field
		if ( $this->isMultiFileUpload() ) {
			$this->setData( 'file_handle', $this->getData( 'file_handle' ) . '[]' );
		}

	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );

		$imageSize  = $this->getData( 'image_size', 'thumbnail' );
		$maxUploads = $this->getData( 'max_uploads', $this->isMultiFileUpload() ? 10 : 1 );
		$maxSize    = $this->getData( 'max_size', $this->formatBytes( wp_max_upload_size() ) );

		$this->_data['field_atts']['data-config'] = wp_json_encode( [
			'imageSize'        => $imageSize,
			'maxUploads'       => $maxUploads,
			'maxSize'          => $maxSize,
			'allowedMimeTypes' => $this->getData( 'allowed_mime_types', [] ),
		] );

		$input = $this->renderTemplate( 'ajax-upload.php', [
			'type'               => 'file',
			'name'               => $this->getData( 'name' ),
			'value'              => $this->value,
			'atts'               => $this->getData( 'atts', [] ),
			'fileHandle'         => $this->getData( 'file_handle' ),
			'imageSize'          => $imageSize,
			'maxUploads'         => $maxUploads,
			'maxSize'            => $maxSize,
			'label'              => $this->getData( 'label' ),
			'labelPosition'      => $this->getData( 'label_position', 'before' ),
			'labelOnError'       => $this->getData( 'label_on_error', __( 'Uh oh. Something went wrong. Please try again.', 'flex-fields' ) ),
			'labelOnLoad'        => $this->getData( 'label_on_load', __( 'Choose a file or drag it here.', 'flex-fields' ) ),
			'labelOnSuccess'     => $this->getData( 'label_on_success', __( 'Upload Successful', 'flex-fields' ) ),
			'labelOnUpload'      => $this->getData( 'label_on_upload', __( 'Uploading...', 'flex-fields' ) ),
			'labelOnMaxUpload'   => $this->getData( 'label_on_max_upload', __( 'Sorry, you are only allowed to upload %d files!', 'flex-fields' ) ),
			'labelOnMaxSize'     => $this->getData( 'label_on_max_size', __( 'Sorry, you can only upload files up to %dMB in size!', 'flex-fields' ) ),
			'labelOnInvalidType' => $this->getData( 'label_on_invalid_type', __( 'Invalid file type!', 'flex-fields' ) ),
		] );

		return $this->fieldWrapper( 'ajax-upload', $input );

	}

	/**
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = array_unique( array_filter( array_map( 'absint', (array) $value ) ) );
	}

	public function isMultiFileUpload() {
		return 'multiple' === $this->getData( [ 'atts', 'multiple' ] );
	}

	public function formatBytes( $size, $precision = 2 ) {
		$base     = log( $size, 1024 );
		$suffixes = array( '', 'K', 'M', 'G', 'T' );

		return round( pow( 1024, $base - floor( $base ) ), $precision ) . ' ' . $suffixes[ floor( $base ) ];
	}

}
