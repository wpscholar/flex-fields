<?php

namespace FlexFields\Fields;

use FlexFields\Traits\Data;
use FlexFields\Traits\Errors;
use FlexFields\Traits\FieldStorageEngine;
use FlexFields\Traits\Getter;
use FlexFields\Traits\Setter;

/**
 * Class Field
 *
 * @package FlexFields\Fields
 *
 * @property string $name
 * @property mixed $value
 * @property string $storage
 */
abstract class Field {

	use Data,
		Errors,
		FieldStorageEngine,
		Getter,
		Setter;

	/**
	 * Field name
	 *
	 * Set during construction, cannot be altered externally
	 *
	 * @var string
	 */
	protected $_name;

	/**
	 * Field value
	 *
	 * @var mixed
	 */
	protected $_value;

	/**
	 * Field constructor.
	 *
	 * @param string $name
	 * @param array $args
	 */
	public function __construct( $name, array $args = [] ) {
		$this->_name = $name;
		$this->_data = $args;
		$this->value = $this->getData( 'value', '' );
		$this->setStorageEngine( $this->getData( 'storage' ) );
	}

	/**
	 * Render field
	 */
	public function render() {
		echo $this->__toString();
	}

	/**
	 * Get field name
	 *
	 * @return string
	 */
	protected function _get_name() {
		return $this->_name;
	}

	/**
	 * Get field value
	 *
	 * @return mixed
	 */
	protected function _get_value() {
		return $this->_value;
	}

	/**
	 * Get storage class
	 *
	 * @return string|null
	 */
	protected function _get_storage() {
		return is_object( $this->_storage ) ? get_class( $this->_storage ) : null;
	}

	/**
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = $value;
	}

	/**
	 * Covert a callable to a value
	 *
	 * @param callable|mixed $value
	 *
	 * @return mixed
	 */
	protected function _maybeConvertCallable( $value ) {

		if ( is_callable( $value ) ) {
			$args = func_get_args();
			array_shift( $args );
			$value = call_user_func_array( $value, $args );
		}

		return $value;
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	abstract public function __toString();

}
