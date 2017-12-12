<?php

namespace FlexFields\Storage;

/**
 * Class TermMetaStorage
 *
 * @package FlexFields\Storage
 */
class TermMetaStorage implements FieldStorage {

	/**
	 * Fetch field value from post meta.
	 *
	 * @param int $id
	 * @param string $key
	 *
	 * @return mixed
	 */
	public function load( $id, $key ) {
		return get_term_meta( $id, $key, true );
	}

	/**
	 * Save field value to post meta.
	 *
	 * @param int $id
	 * @param string $key
	 * @param mixed $value
	 */
	public function save( $id, $key, $value ) {
		update_term_meta( $id, $key, $value );
	}

	/**
	 * Delete field value from post meta.
	 *
	 * @param int $id
	 * @param string $key
	 */
	public function delete( $id, $key ) {
		delete_term_meta( $id, $key );
	}

}
