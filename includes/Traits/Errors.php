<?php

namespace FlexFields\Traits;

/**
 * Trait Errors
 *
 * @package FlexFields\Traits
 *
 * @property string $name;
 */
trait Errors {

	/**
	 * Errors
	 *
	 * @var \WP_Error|null
	 */
	protected $_errors;

	/**
	 * Check if there are any errors
	 *
	 * @return bool
	 */
	public function hasErrors() {
		return isset( $this->_errors, $this->_errors->errors ) && count( $this->_errors->errors );
	}

	/**
	 * Add an error message
	 *
	 * @param string $message
	 */
	public function addError( $message ) {
		if ( null === $this->_errors ) {
			$this->_errors = new \WP_Error();
		}

		$this->_errors->add( $this->name, $message );
	}

	/**
	 * Get error message
	 *
	 * @return string
	 */
	public function getErrorMessage() {
		return $this->hasErrors() ? $this->_errors->get_error_message() : '';
	}

	/**
	 * Get error messages
	 *
	 * @return array
	 */
	public function getErrorMessages() {
		return $this->hasErrors() ? $this->_errors->get_error_messages() : [];
	}

}