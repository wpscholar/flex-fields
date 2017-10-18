<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class CheckboxGroupField
 *
 * @package FlexFields\Fields
 *
 * @property array $options
 */
class CheckboxGroupField extends Field {

	/**
	 * Sanitize field value
	 *
	 * @param array $value
	 *
	 * @return array
	 */
	public function sanitize( $value ) {
		return array_map( 'sanitize_text_field', $value );
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$template = TemplateHandler::getInstance();

		return $template->toString( 'field.twig', [
			'fieldType'   => 'checkbox-group',
			'hidden'      => $this->_maybeConvertCallable( $this->getData( 'hidden', false ), $this ),
			'hasError'    => $this->hasErrors(),
			'error'       => $this->getErrorMessage(),
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'checkbox-group.twig', [
				'name'    => $this->name,
				'value'   => $this->value,
				'legend'  => $this->getData( 'label' ),
				'options' => $this->_normalizeOptions( $this->options ),
				'atts'    => $this->getData( 'atts', [] ),
			] ),
		] );

	}

	/**
	 * Get options
	 *
	 * @return array
	 */
	protected function _get_options() {
		$options = $this->_maybeConvertCallable( $this->getData( 'options', [] ), $this );

		return apply_filters( __CLASS__ . ':options', $this->_normalizeOptions( $options ), $this );
	}

	/**
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = (array) $value;
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
