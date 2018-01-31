<?php

namespace FlexFields\Fields;

/**
 * Class SelectField
 *
 * @package FlexFields\Fields
 *
 * @property bool $isMultiSelect
 * @property array $options
 */
class SelectField extends Field {

	/**
	 * Sanitize field value
	 *
	 * @param string|array $value
	 *
	 * @return array
	 */
	public function sanitize( $value ) {
		return $this->isMultiSelect ? array_map( 'sanitize_text_field', $value ) : sanitize_text_field( $value );
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$name = $this->getData( 'name' );
		if ( $this->isMultiSelect ) {
			$name .= '[]';
		}

		$select = $this->renderTemplate( 'select.php', [
			'name'    => $name,
			'value'   => $this->value,
			'options' => $this->_normalizeOptions( $this->options ),
			'atts'    => $this->getData( 'atts', [] ),
		] );

		return $this->fieldWrapper( 'select', $this->fieldLabel( $select ) );

	}

	/**
	 * Check if field is multi-select
	 *
	 * @return bool
	 */
	protected function _get_isMultiSelect() {
		return (bool) $this->getData( [ 'atts', 'multiple' ] );
	}

	/**
	 * Get options
	 *
	 * @return array
	 */
	protected function _get_options() {
		$options = $this->getData( 'options', [] );
		$options = \is_callable( $options ) ? $options( $this ) : $options;
		$options = $this->_normalizeOptions( $options );

		$default_option = $this->getData( 'default_option' );
		if ( $default_option ) {
			array_unshift( $options, $default_option );
		}

		return apply_filters( __CLASS__ . ':options', $this->_normalizeOptions( $options ), $this );
	}

	/**
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = $this->isMultiSelect ? (array) $value : $value;
	}

	/**
	 * Normalize options
	 *
	 * @param array $options
	 *
	 * @return array
	 */
	protected function _normalizeOptions( array $options ) {

		foreach ( $options as $index => $data ) {

			$option = [
				'label' => '',
				'value' => '',
			];

			// If value is scalar, just normalize using that value
			if ( is_scalar( $data ) ) {
				$option = [
					'label' => $data,
					'value' => $data,
				];
			}

			// If value is an object, convert to an array
			if ( is_object( $data ) ) {
				$data = (array) $data;
			}

			// If value is an array, normalize alternative data structures
			if ( is_array( $data ) ) {

				$label = isset( $data['label'] ) ? $data['label'] : '';

				if ( isset( $data['options'] ) && is_array( $data['options'] ) ) {

					// Setup an option group
					$option = [
						'label'   => $label,
						'options' => $this->_normalizeOptions( $data['options'] ),
					];

				} else {

					$option = [
						'label' => $label,
						'value' => isset( $data['value'] ) ? $data['value'] : '',
					];

				}

			}

			$options[ $index ] = $option;

		}

		return $options;
	}

}
