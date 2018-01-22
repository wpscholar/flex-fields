<?php

namespace FlexFields\Storage;

/**
 * Class OptionStorage
 *
 * @package FlexFields\Storage
 */
class OptionStorage implements FieldStorage {

	/**
	 * Fetch field value from post meta.
	 *
	 * @param int $id
	 * @param string $key
	 *
	 * @return mixed
	 */
	public function load( $id, $key ) {
		return get_option( $key );
	}

	/**
	 * Save field value to post meta.
	 *
	 * @param int $id
	 * @param string $key
	 * @param mixed $value
	 */
	public function save( $id, $key, $value ) {
		update_option( $key, $value );
	}

	/**
	 * Delete field value from post meta.
	 *
	 * @param int $id
	 * @param string $key
	 */
	public function delete( $id, $key ) {
		delete_option( $key );
	}

}