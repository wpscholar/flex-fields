<?php

namespace FlexFields\Fields;

use FlexFields\Container;
use FlexFields\Make;

/**
 * Class FieldContainer
 *
 * @package FlexFields\Fields
 */
class FieldContainer implements \IteratorAggregate, \Countable {

	/**
	 * Field collection
	 *
	 * @var Container
	 */
	protected $fields;

	/**
	 * FieldContainer constructor.
	 *
	 * @param array $fields
	 */
	public function __construct( array $fields = [] ) {
		$this->fields = new Container();
		if ( ! empty( $fields ) ) {
			$this->addFields( $fields );
		}
	}

	/**
	 * Check if field exists in container.
	 *
	 * @param string $name
	 *
	 * @return bool
	 */
	public function hasField( $name ) {
		return $this->fields->has( $name );
	}

	/**
	 * Get a field from the container by name
	 *
	 * @param string $name
	 *
	 * @return Field|null
	 */
	public function getField( $name ) {
		$field = null;
		try {
			$this->fields->get( $name );
		} catch ( \Exception $e ) {
			trigger_error( $e->getMessage() );
		} finally {
			return $field;
		}
	}

	/**
	 * Register a field into the container
	 *
	 * @param string $name
	 * @param array $args
	 */
	public function registerField( $name, array $args = [] ) {
		$this->fields->set( $name, $this->fields->service( function () use ( $name, $args ) {
			return Make::Field( $name, $args );
		} ) );
	}

	/**
	 * Add a field to the container
	 *
	 * @param Field $field
	 */
	public function addField( Field $field ) {
		$this->fields->set( $field->name, $this->fields->service( function () use ( $field ) {
			return Make::Field( $field->name, $field->getData() );
		} ) );
	}

	/**
	 * Add multiple fields to the container
	 *
	 * @param array $fields
	 */
	public function addFields( array $fields ) {
		foreach ( $fields as $name => $field ) {
			if ( is_array( $field ) ) {
				if ( is_numeric( $name ) && isset( $field['name'] ) ) {
					$name = $field['name'];
				}
				$this->registerField( $name, $field );
			} else {
				$this->addField( $field );
			}
		}
	}

	/**
	 * Remove a field from the container by name
	 *
	 * @param string $name
	 */
	public function removeField( $name ) {
		$this->fields->delete( $name );
	}

	/**
	 * Remove all fields from the container
	 */
	public function removeAllFields() {
		$this->fields->reset();
	}

	/**
	 * Get field collection.
	 *
	 * @return Container
	 */
	public function getCollection() {
		return $this->fields;
	}

	/**
	 * Setup iterator for looping through fields
	 *
	 * @return Container|\Traversable
	 */
	public function getIterator() {
		return $this->fields;
	}

	/**
	 * Count number of fields in container
	 *
	 * @return int
	 */
	public function count() {
		return count( $this->fields );
	}

	/**
	 * Converts the field container to a string
	 *
	 * @return string
	 */
	public function asString() {
		return $this->__toString();
	}

	/**
	 * Converts the field container to an array
	 *
	 * @return array
	 */
	public function asArray() {
		$data = [];
		foreach ( $this->fields as $field ) {
			/**
			 * @var Field $field
			 */
			$data[ $field->name ] = $field->value;
		}

		return $data;
	}

	/**
	 * Converts the field container, including all contained fields, to a string.
	 *
	 * @return string
	 */
	public function __toString() {
		return implode(
			PHP_EOL,
			array_map( function ( $field ) {
				return "{$field}";
			}, iterator_to_array( $this->fields ) )
		);
	}

}
