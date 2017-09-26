<?php

namespace FlexFields\Traits;

/**
 * Trait Setter
 *
 * @package FlexFields\Traits
 */
trait Setter {

	/**
	 * Setter function.
	 *
	 * @param string $property
	 * @param mixed $value
	 */
	public function __set( $property, $value ) {
		$method = "_set_{$property}";
		if ( method_exists( $this, $method ) && is_callable( [ $this, $method ] ) ) {
			$this->$method( $value );
		}
	}

}