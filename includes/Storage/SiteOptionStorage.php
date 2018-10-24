<?php

namespace FlexFields\Storage;

/**
 * Class NetworkOptionStorage
 *
 * @package FlexFields\Storage
 */
class SiteOptionStorage implements FieldStorage {

	/**
	 * Fetch field value from post meta.
	 *
	 * @param int $id
	 * @param string $key
	 *
	 * @return mixed
	 */
	public function load( $id, $key ) {
		return get_site_option( $key );
	}

	/**
	 * Save field value to post meta.
	 *
	 * @param int $id
	 * @param string $key
	 * @param mixed $value
	 */
	public function save( $id, $key, $value ) {
		update_site_option( $key, $value );
	}

	/**
	 * Delete field value from post meta.
	 *
	 * @param int $id
	 * @param string $key
	 */
	public function delete( $id, $key ) {
		delete_site_option( $key );
	}

}