<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class InputField
 *
 * @package FlexFields\Fields
 */
class InputField extends Field {

	/**
	 * Fetch field value from storage engine
	 *
	 * @param int $id
	 *
	 * @returns mixed
	 */
	public function fetch( $id ) {
		$value = null;
		if ( 'submit' !== $this->getData( 'type', $this->getData( [ 'atts', 'type' ], 'text' ) ) ) {
			$value = parent::fetch( $id );
		}

		return $value;
	}

	/**
	 * Save field value to storage engine
	 *
	 * @param int $id
	 * @param mixed $value
	 */
	public function save( $id, $value ) {
		if ( 'submit' !== $this->getData( 'type', $this->getData( [ 'atts', 'type' ], 'text' ) ) ) {
			parent::save( $id, $value );
		}
	}

	/**
	 * Delete field value from storage engine
	 *
	 * @param int $id
	 */
	public function delete( $id ) {
		if ( 'submit' !== $this->getData( 'type', $this->getData( [ 'atts', 'type' ], 'text' ) ) ) {
			parent::delete( $id );
		}
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
			'fieldType'   => 'input',
			'hidden'      => $this->getData( 'hidden', false ),
			'hasError'    => $this->hasErrors(),
			'error'       => $this->getErrorMessage(),
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'label.twig', [
				'label'         => $this->getData( 'label' ),
				'labelPosition' => $this->getData( 'label_position', 'before' ),
				'content'       => $template->toString( 'input.twig', [
					'type'  => $this->getData( 'type', $this->getData( [ 'atts', 'type' ], 'text' ) ),
					'name'  => $this->name,
					'value' => $this->value,
					'atts'  => $this->getData( 'atts', [] ),
				] )
			] ),
		] );

	}

}