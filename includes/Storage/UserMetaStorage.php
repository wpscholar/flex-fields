<?php

namespace FlexFields\Storage;

/**
 * Class UserMetaStorage
 *
 * @package FlexFields\Storage
 */
class UserMetaStorage implements FieldStorage {

	/**
	 * Fetch field value from user meta.
	 *
	 * @param int $id
	 * @param string $key
	 *
	 * @return mixed
	 */
	public function fetch( $id, $key ) {
		return get_user_meta( $id, $key, true );
	}

	/**
	 * Save field value to user meta.
	 *
	 * @param int $id
	 * @param string $key
	 * @param mixed $value
	 */
	public function save( $id, $key, $value ) {
		update_user_meta( $id, $key, $value );
	}

	/**
	 * Delete field value from user meta.
	 *
	 * @param int $id
	 * @param string $key
	 */
	public function delete( $id, $key ) {
		delete_user_meta( $id, $key );
	}

}