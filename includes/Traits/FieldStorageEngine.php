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
	public function sanitize( $value ) {
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
		$fetch = $this->getData( 'fetch' );
		if ( $fetch && is_callable( $fetch ) ) {
			return call_user_func( $fetch, $id, $this->_name );
		} else {
			return $this->_storage->fetch( $id, $this->_name );
		}

	}

	/**
	 * Save field value to storage engine
	 *
	 * @param int $id
	 * @param mixed $value
	 */
	public function save( $id, $value ) {
		$save = $this->getData( 'save' );
		if ( $save && is_callable( $save ) ) {
			call_user_func( $save, $id, $this->_name, $this->sanitize( $value ) );
		} else {
			$this->_storage->save( $id, $this->_name, $this->sanitize( $value ) );
		}
	}

	/**
	 * Delete field value from storage engine
	 *
	 * @param int $id
	 */
	public function delete( $id ) {
		$delete = $this->getData( 'delete' );
		if ( $delete && is_callable( $delete ) ) {
			call_user_func( $delete, $id, $this->_name );
		} else {
			$this->_storage->delete( $id, $this->_name );
		}
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