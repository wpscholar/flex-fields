<?php

namespace FlexFields\Fields;

/**
 * Class InputField
 *
 * @package FlexFields\Fields
 */
class InputField extends Field {

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$input = $this->renderTemplate( 'input.php', [
			'type'  => $this->inputType(),
			'name'  => $this->getData( 'name' ),
			'value' => $this->value,
			'atts'  => $this->getData( 'atts', [] ),
		] );

		return $this->fieldWrapper( 'input', $this->fieldLabel( $input ) );

	}

	/**
	 * Load field value from storage
	 *
	 * @param int $id
	 *
	 * @returns mixed
	 */
	public function load( $id ) {
		$value = null;
		if ( $this->canStore() ) {
			$value = parent::load( $id );
		}

		return $value;
	}

	/**
	 * Save field value to storage
	 *
	 * @param int $id
	 * @param mixed $value
	 */
	public function save( $id, $value ) {
		if ( $this->canStore() ) {
			parent::save( $id, $value );
		}
	}

	/**
	 * Delete field value from storage
	 *
	 * @param int $id
	 */
	public function delete( $id ) {
		if ( $this->canStore() ) {
			parent::delete( $id );
		}
	}

	/**
	 * Get input type
	 *
	 * @return string
	 */
	protected function inputType() {
		return (string) $this->getData( 'type', $this->getData( [ 'atts', 'type' ], 'text' ) );
	}

	/**
	 * Check if input has a field value that can be stored.
	 *
	 * Inputs of type button, reset, and submit aren't used for data.
	 *
	 * @return bool
	 */
	protected function canStore() {
		return ! in_array( $this->inputType(), [ 'button', 'reset', 'submit' ], SORT_STRING );
	}

}
