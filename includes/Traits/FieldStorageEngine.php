<?php

namespace FlexFields\Traits;

use FlexFields\Fields\InputField;
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
	public function load( $id ) {
		$load = $this->getData( 'load' );
		if ( $load && \is_callable( $load ) ) {
			return $load( $id, $this->_name );
		}

		return $this->_storage->load( $id, $this->_name );
	}

	/**
	 * Save field value to storage engine
	 *
	 * @param int $id
	 * @param mixed $value
	 */
	public function save( $id, $value ) {
		$save = $this->getData( 'save' );
		$sanitize = $this->getData( 'sanitize' );
		if ( $sanitize && \is_callable( $sanitize ) ) {
			$clean_value = $sanitize( $value );
		} else {
			$clean_value = $this->sanitize( $value );
		}
		if ( $save && \is_callable( $save ) ) {
			$save( $id, $this->_name, $clean_value );
		} else {
			$this->_storage->save( $id, $this->_name, $clean_value );
		}
	}

	/**
	 * Delete field value from storage engine
	 *
	 * @param int $id
	 */
	public function delete( $id ) {
		$delete = $this->getData( 'delete' );
		if ( $delete && \is_callable( $delete ) ) {
			$delete( $id, $this->_name );
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
