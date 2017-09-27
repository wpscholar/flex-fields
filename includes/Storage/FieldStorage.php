<?php

namespace FlexFields\Storage;

/**
 * Interface FieldStorage
 *
 * @package FlexFields\Storage
 */
interface FieldStorage {

	/**
	 * Fetch field value
	 *
	 * @param int $id
	 * @param string $key
	 *
	 * @return mixed
	 */
	public function fetch( $id, $key );

	/**
	 * Save field value
	 *
	 * @param int $id
	 * @param string $key
	 * @param mixed $value
	 */
	public function save( $id, $key, $value );

	/**
	 * Delete field value
	 *
	 * @param int $id
	 * @param string $key
	 */
	public function delete( $id, $key );
	
}