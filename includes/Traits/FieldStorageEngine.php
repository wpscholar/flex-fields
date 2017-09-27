<?php

namespace FlexFields\Traits;

use FlexFields\Make;
use FlexFields\Storage\FieldStorage;

/**
 * Trait FieldStorageEngine
 *
 * @package FlexFields\Traits
 */
trait FieldStorageEngine {

	/**
	 * Field name
	 *
	 * Set during construction, cannot be altered externally
	 *
	 * @var string
	 */
	protected $_name;

	/**
	 * Storage engine
	 *
	 * @var FieldStorage
	 */
	protected $_storage;

	/**
	 * Sanitize field value
	 *
	 * @param string $value
	 *
	 * @return string
	 */
	function sanitize( $value ) {
		return sanitize_text_field( $value );
	}

	/**
	 * Fetch field value from storage engine
	 *
	 * @param int $id
	 *
	 * @returns mixed
	 */
	public function fetch( $id ) {
		return $this->_storage->fetch( $id, $this->_name );
	}

	/**
	 * Save field value to storage engine
	 *
	 * @param int $id
	 * @param mixed $value
	 */
	public function save( $id, $value ) {
		$this->_storage->save( $id, $this->_name, $this->sanitize( $value ) );
	}

	/**
	 * Delete field value from storage engine
	 *
	 * @param int $id
	 */
	public function delete( $id ) {
		$this->_storage->delete( $id, $this->_name );
	}

	/**
	 * Set the storage engine
	 *
	 * @param string|null $engine
	 */
	public function setStorageEngine( $engine = null ) {
		$this->_storage = Make::FieldStorage( $engine );
	}

}