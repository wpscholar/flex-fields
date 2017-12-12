<?php

namespace FlexFields\Fields;

/**
 * Class RadioGroupField
 *
 * @package FlexFields\Fields
 *
 * @property array $options
 */
class RadioGroupField extends Field {

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$radioGroup = $this->renderTemplate( 'radio-group.php', [
			'name'    => $this->name,
			'value'   => $this->value,
			'label'  => $this->getData( 'label' ),
			'options' => $this->_normalizeOptions( $this->options ),
			'atts'    => $this->getData( 'atts', [] ),
		] );

		return $this->fieldWrapper( 'radio-group', $radioGroup );

	}

	/**
	 * Get options
	 *
	 * @return array
	 */
	protected function _get_options() {
		$options = $this->getData( 'options', [] );
		$options = is_callable( $options ) ? $options( $this ) : $options;

		return apply_filters( __CLASS__ . ':options', $this->_normalizeOptions( $options ), $this );
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
				$option['label'] = isset( $data['label'] ) ? $data['label'] : '';
				$option['value'] = isset( $data['value'] ) ? $data['value'] : '';
			}

			$options[ $index ] = (object) $option;

		}

		return $options;
	}

}
