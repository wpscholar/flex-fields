<?php

namespace FlexFields\Fields;

use FlexFields\Traits\Data;
use FlexFields\Traits\Getter;
use FlexFields\Traits\Setter;

/**
 * Class Field
 *
 * @package FlexFields\Fields
 *
 * @property string $name
 * @property mixed $value
 */
abstract class Field {

	use Data, Getter, Setter;

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
	 * Field data
	 *
	 * Set during construction, cannot be altered externally.
	 *
	 * @var array
	 */
	protected $_data = [];

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
	 * Set field value
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = $value;
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	abstract public function __toString();

}
