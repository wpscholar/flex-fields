<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

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

	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$template = TemplateHandler::getInstance();

		$value = $this->getData( 'value' );

		if ( is_callable( $value ) ) {
			$value = $value( $this );
		}

		return $template->toString( 'field.twig', [
			'fieldType'   => 'html',
			'hidden'      => $this->getData( 'hidden', false ),
			'hasError'    => false,
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => apply_filters( __METHOD__, $value, $this ),
		] );

	}

}