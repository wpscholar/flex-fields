<?php

namespace FlexFields\Fields;

/**
 * Class HtmlField
 *
 * @package FlexFields\Fields
 */
class HtmlField extends Field {

	/**
	 * Check if there are any errors
	 *
	 * @return bool
	 */
	public function hasErrors() {
		return false;
	}

	/**
	 * Fetch field value from storage engine
	 *
	 * @param int $id
	 *
	 * @returns mixed
	 */
	public function fetch( $id ) {
		return null;

	}

	/**
	 * Save field value to storage engine
	 *
	 * @param int $id
	 * @param mixed $value
	 */
	public function save( $id, $value ) {

	}

	/**
	 * Delete field value from storage engine
	 *
	 * @param int $id
	 */
	public function delete( $id ) {

	}

	/**
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$value = $this->getData( 'value' );

		if ( is_callable( $value ) ) {
			$value = $value( $this );
		}

		return $this->fieldWrapper( 'html', $this->fieldLabel( apply_filters( __CLASS__ . ':content', $value, $this ) ) );

	}

}
