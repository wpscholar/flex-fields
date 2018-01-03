<?php

namespace FlexFields\Fields;

use FlexFields\Container;
use FlexFields\Make;

/**
 * Class RepeatingField
 *
 * @package FlexFields\Fields
 */
class RepeatingField extends Field implements \IteratorAggregate, \Countable {

	/**
	 * @var array
	 */
	protected $field_args;

	/**
	 * @var Container
	 */
	protected $fields;

	/**
	 * Field constructor.
	 *
	 * @param string $name
	 * @param array $args
	 */
	public function __construct( $name, array $args = [] ) {

		// Create container
		$this->fields = new Container();

		// Setup repeating field
		if ( isset( $args['repeating_field'] ) ) {
			if ( is_array( $args['repeating_field'] ) ) {
				$this->field_args = $args['repeating_field'];
			} else if ( is_object( $args['repeating_field'] ) && is_a( $args['repeating_field'], Field::class ) ) {
				$this->field_args = $args['repeating_field']->getData();
			}
		}

		// Run parent constructor
		parent::__construct( $name, $args );

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
	 * @return array
	 */
	protected function _get_value() {
		$value = [];

		$i = 0;
		foreach ( $this->fields as $field ) {
			$value[ $i ] = $field->value;
			$i ++;
		}

		return $value;
	}

	/**
	 * Set field value
	 *
	 * @param array $value
	 */
	protected function _set_value( $value ) {

		// Ensure value is always an array and that keys are always reset.
		$value = array_values( array_filter( (array) $value ) );

		// Empty field container
		$this->fields->reset();

		// Set fields based on values
		foreach ( $value as $index => $field_value ) {
			$field = Make::Field( "{$this->name}[{$index}]", $this->field_args );
			$field->value = $field_value;
			$this->fields->set( $index, $field );
		}

		// Make sure at least one field exists
		$index = count( $this->fields );
		if ( 0 === $index ) {
			$field = Make::Field( "{$this->name}[{$index}]", $this->field_args );
			$this->fields->set( $index, $field );
		}

	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		// Create a template field
		$template_field = Make::Field( "{$this->name}[x]", $this->field_args );

		$group = $this->renderTemplate( 'repeating.php', [
			'label'    => $this->getData( 'label' ),
			'name'     => $this->name,
			'atts'     => $this->getData( 'atts', [] ),
			'fields'   => iterator_to_array( $this->fields ),
			'template' => $template_field,
		] );

		return $this->fieldWrapper( 'repeating', $group );

	}

	/**
	 * @return \Traversable|Container
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
