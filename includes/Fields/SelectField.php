<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class SelectField
 *
 * @package FlexFields\Fields
 *
 * @property bool $isMultiSelect
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
		if ( $this->isMultiSelect ) {
			return array_map( 'sanitize_text_field', $value );
		} else {
			return sanitize_text_field( $value );
		}
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		$template = TemplateHandler::getInstance();

		return $template->toString( 'field.twig', [
			'fieldType'   => 'select',
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'label.twig', [
				'label'         => $this->getData( 'label' ),
				'labelPosition' => $this->getData( 'label_position', 'before' ),
				'content'       => $template->toString( 'select.twig', [
					'name'    => $this->isMultiSelect ? $this->name . '[]' : $this->name,
					'value'   => $this->value,
					'options' => $this->_normalizeOptions( $this->getData( 'options', [] ) ),
					'atts'    => $this->getData( 'atts', [] ),
				] )
			] ),
		] );

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