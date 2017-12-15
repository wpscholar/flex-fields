<?php

namespace FlexFields\Fields;

use Traversable;

/**
 * Class GroupField
 *
 * @package FlexFields\Fields
 */
class GroupField extends Field implements \IteratorAggregate, \Countable {

	/**
	 * @var FieldContainer
	 */
	protected $fields;

	/**
	 * Field constructor.
	 *
	 * @param string $name
	 * @param array $args
	 */
	public function __construct( $name, array $args = [] ) {

		// Run parent constructor
		parent::__construct( $name, $args );

		// Create field container
		$this->fields = new FieldContainer();

		// Setup fields
		if ( isset( $args['fields'] ) && is_array( $args['fields'] ) ) {
			$this->fields->addFields( $args['fields'] );
		}
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
		$value = [];

		foreach ( $this->fields as $field ) {
			/**
			 * @var Field $field
			 */
			$value[ $field->name ] = $field->value;
		}

		return $value;
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

		$group = $this->renderTemplate( 'fieldset.php', [
			'label'   => $this->getData( 'label' ),
			'atts'    => $this->getData( 'atts', [] ),
			'content' => $this->fields->__toString(),
		] );

		return $this->fieldWrapper( 'group', $group );

	}

	/**
	 * @return FieldContainer|Traversable
	 */
	public function getIterator() {
		return $this->fields;
	}

	/**
	 * @return int
	 */
	public function count() {
		return count( $this->fields );
	}


}
