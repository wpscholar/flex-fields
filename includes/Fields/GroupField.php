<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class GroupField
 *
 * @package FlexFields\Fields
 */
class GroupField extends Field {

	/**
	 * @var FieldContainer
	 */
	protected $_container;

	/**
	 * Field constructor.
	 *
	 * @param string $name
	 * @param array $args
	 */
	public function __construct( $name, array $args = [] ) {
		parent::__construct( $name, $args );
		$this->_container = new FieldContainer();
	}

	/**
	 * Sanitize field value
	 *
	 * @param string $value
	 *
	 * @return null
	 */
	public function sanitize( $value ) {
		return null;
	}

	/**
	 * Get field value
	 *
	 * @return mixed
	 */
	protected function _get_value() {
		return null;
	}

	/**
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		// This field has no value, so don't allow it to be set.
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		$template = TemplateHandler::getInstance();

		return $template->toString( 'field.twig', [
			'fieldType'   => 'group',
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'fieldset.twig', [
				'legend'  => $this->getData( 'label' ),
				'atts'    => $this->getData( 'atts', [] ),
				'content' => $this->_container->__toString(),
			] ),
		] );

	}

}