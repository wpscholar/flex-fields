<?php

namespace FlexFields;

/**
 * Class Container
 *
 * A dependency injection container.
 *
 * @package FlexFields
 */
class Container implements \ArrayAccess, \Countable, \Iterator {

	/**
	 * @var array
	 */
	protected $items = [];

	/**
	 * @var array
	 */
	protected $instances = [];

	/**
	 * @var \SplObjectStorage
	 */
	protected $factories;

	/**
	 * @var \SplObjectStorage
	 */
	protected $services;

	/**
	 * @var int
	 */
	private $pointer = 0;

	/**
	 * Container constructor.
	 *
	 * @param array $items
	 */
	public function __construct( array $items = [] ) {
		$this->reset();
		$this->items = $items;
	}

	/**
	 * Checks if an array keys exists.
	 *
	 * @param string $id
	 *
	 * @return bool
	 */
	public function has( $id ) {
		return array_key_exists( $id, $this->items );
	}

	/**
	 * Get an array value by key.
	 *
	 * @param string $id
	 *
	 * @return mixed
	 *
	 * @throws \InvalidArgumentException
	 */
	public function get( $id ) {

		// Return instance, if available
		if ( isset( $this->instances[ $id ] ) ) {
			return $this->instances[ $id ];
		}

		// Get raw value
		$value = $this->raw( $id );

		// If this is a factory, return a new instance
		if ( $this->isFactory( $value ) ) {
			return $value( $this );
		}

		// If this is a service, return a single instance
		if ( $this->isService( $value ) ) {
			$this->instances[ $id ] = $value( $this );

			return $this->instances[ $id ];
		}

		return $value;
	}

	/**
	 * Set an array value by key.
	 *
	 * @param string $id
	 * @param mixed $value
	 */
	public function set( $id, $value ) {
		$this->items[ $id ] = $value;
	}

	/**
	 * Unset an array value by key.
	 *
	 * @param string $id
	 */
	public function delete( $id ) {
		if ( $this->has( $id ) ) {
			try {
				$value = $this->get( $id );
				if ( $this->isFactory( $value ) ) {
					$this->factories->detach( $value );
				} else if ( $this->isService( $id ) ) {
					$this->services->detach( $value );
				}
			} catch ( \Exception $e ) {
				unset( $e );
			} finally {
				unset( $this->items[ $id ], $this->instances[ $id ] );
			}
		}
	}

	/**
	 * Remove an instance
	 *
	 * @param $id
	 */
	public function removeInstance( $id ) {
		unset( $this->instances[ $id ] );
	}

	/**
	 * Remove all instances
	 */
	public function removeAllInstances() {
		$this->instances = [];
	}

	/**
	 * Reset everything
	 */
	public function reset() {
		$this->pointer = 0;
		$this->instances = [];
		$this->items = [];
		$this->factories = new \SplObjectStorage();
		$this->services = new \SplObjectStorage();
	}

	/**
	 * Get all array keys.
	 *
	 * @return array
	 */
	public function keys() {
		return array_keys( $this->items );
	}

	/**
	 * Get a raw value by key.
	 *
	 * @param string $id
	 *
	 * @return mixed
	 *
	 * @throws \InvalidArgumentException
	 */
	public function raw( $id ) {

		if ( ! $this->has( $id ) ) {
			throw new \InvalidArgumentException( sprintf( 'Identifier "%s" is not defined.', $id ) );
		}

		return $this->items[ $id ];
	}

	/**
	 * Marks a callable as being a factory.
	 *
	 * @param \Closure $closure
	 *
	 * @return \Closure
	 */
	public function factory( \Closure $closure ) {
		$this->factories->attach( $closure );

		return $closure;
	}

	/**
	 * Checks if a value is a factory.
	 *
	 * @param mixed $item
	 *
	 * @return bool
	 */
	public function isFactory( $item ) {
		return is_object( $item ) && isset( $this->factories[ $item ] );
	}

	/**
	 * Marks a callable as being a service.
	 *
	 * @param \Closure $closure
	 *
	 * @return \Closure
	 */
	public function service( \Closure $closure ) {
		$this->services->attach( $closure );

		return $closure;
	}

	/**
	 * Checks if a value is a service.
	 *
	 * @param mixed $item
	 *
	 * @return bool
	 */
	public function isService( $item ) {
		return is_object( $item ) && isset( $this->services[ $item ] );
	}

	/**
	 * Extend a factory by creating a closure that will manipulate the instantiated instance.
	 *
	 * @param string $id
	 * @param \Closure $closure
	 *
	 * @return \Closure
	 *
	 * @throws \InvalidArgumentException
	 * @throws \RuntimeException
	 */
	public function extend( $id, \Closure $closure ) {

		$value = $this->raw( $id );

		if ( ! $this->isService( $value ) && ! $this->isFactory( $value ) ) {
			throw new \RuntimeException( sprintf( 'Identifier "%s" does not contain an object definition.', $id ) );
		}

		$extended = function ( Container $container ) use ( $closure, $value ) {
			return $closure( $value( $container ), $container );
		};

		if ( $this->isFactory( $value ) ) {

			$this->factories->detach( $value );
			$this->factories->attach( $extended );

		} else if ( $this->isService( $value ) ) {

			$this->services->detach( $value );
			$this->services->attach( $extended );

		}

		$this->items[ $id ] = $extended;

		return $extended;
	}

	/**
	 * Checks if an array key exists.
	 *
	 * @param string $id
	 *
	 * @return bool
	 */
	public function offsetExists( $id ) {
		return $this->has( $id );
	}

	/**
	 * Get an array value by key.
	 *
	 * @param string $id
	 *
	 * @return mixed
	 *
	 * @throws \InvalidArgumentException
	 */
	public function offsetGet( $id ) {
		return $this->get( $id );
	}

	/**
	 * Set an array value by key.
	 *
	 * @param string $id
	 * @param mixed $value
	 */
	public function offsetSet( $id, $value ) {
		$this->set( $id, $value );
	}

	/**
	 * Unset an array value by key.
	 *
	 * @param string $id
	 */
	public function offsetUnset( $id ) {
		$this->delete( $id );
	}

	/**
	 * Get number of items.
	 *
	 * @return int
	 */
	public function count() {
		return count( $this->items );
	}

	/**
	 * Rewind
	 */
	public function rewind() {
		$this->pointer = 0;
	}

	/**
	 * Get current key
	 *
	 * @return string
	 */
	public function key() {
		return $this->keys()[ $this->pointer ];
	}

	/**
	 * Get current item
	 *
	 * @return mixed
	 *
	 * @throws \InvalidArgumentException
	 */
	public function current() {
		return $this->offsetGet( $this->key() );
	}

	/**
	 * Move to next item.
	 */
	public function next() {
		++ $this->pointer;
	}

	/**
	 * Check if pointer is valid.
	 *
	 * @return bool
	 */
	public function valid() {
		return isset( $this->keys()[ $this->pointer ] );
	}

}