<?php

namespace FlexFields\Forms;

use FlexFields\Fields\Field;
use FlexFields\Fields\FieldContainer;
use FlexFields\Make;
use FlexFields\Traits\Data;
use FlexFields\Traits\Errors;
use FlexFields\Traits\Getter;
use FlexFields\Traits\Setter;

/**
 * Class Form
 *
 * @package FlexFields\Forms
 *
 * @property string $context
 * @property FieldContainer $fields
 * @property string $method
 * @property string $name
 */
class Form {

	use Data,
		Errors,
		Getter,
		Setter;

	/**
	 * Form constructor.
	 *
	 * @param string $name The name of the form.
	 * @param array $args The arguments for the form.
	 */
	public function __construct( $name, array $args = [] ) {

		$this->_data = $args;
		$this->_data['name'] = $name;

		// Setup handler, if provided
		$handler = $this->getData( 'handler' );
		if ( $handler ) {
			$this->registerHandler( $handler );
		}

		// Setup attributes
		$this->_data['atts'] = $this->getData( 'atts', [] );
		$this->_data['atts']['action'] = $this->getData( 'action', '' );

		// Set fields
		$fieldContainer = new FieldContainer( $this->getData( 'fields', [] ) );
		$fieldContainer->registerField( 'form', [
			'type'   => 'hidden',
			'value'  => $name,
			'hidden' => true,
		] );
		$this->_data['fields'] = $fieldContainer;

		// Set core data
		$this->context = $this->getData( 'context', 'custom' );
		$this->method = $this->getData( 'method', $this->getData( [ 'atts', 'method' ], 'GET' ) );

		$this->_data['action'] = $this->getData( 'action', $this->getData( [ 'atts', 'action' ], '' ) );

	}

	/**
	 * Process the form.
	 */
	public function process() {

		// Set field values
		foreach ( $this->fields as $field ) {

			/**
			 * @var Field $field
			 */

			global ${"_{$this->method}"};

			if ( isset( ${"_{$this->method}"}[ $field->name ] ) ) {
				$field->value = ${"_{$this->method}"}[ $field->name ];
			}

		}

		do_action( __METHOD__ . '_' . $this->name, $this );
	}

	/**
	 * Register a form handler
	 *
	 * @param callable $callback
	 */
	public function registerHandler( callable $callback ) {
		add_action( __CLASS__ . '::process_' . $this->name, $callback );
	}

	/**
	 * Render the form.
	 */
	public function render() {
		echo $this->__toString();
	}

	/**
	 * Check if this form should handle a request.
	 *
	 * @return bool
	 */
	public function shouldHandle() {
		return $this->name === filter_input( constant( 'INPUT_' . $this->method ), 'form' );
	}

	/**
	 * Get the field container
	 *
	 * @return FieldContainer
	 */
	protected function _get_fields() {
		return $this->getData( 'fields' );
	}

	/**
	 * Get the method for this form
	 *
	 * @return string
	 */
	protected function _get_method() {
		return $this->getData( 'method', 'GET' );
	}

	/**
	 * Get the name for this form
	 *
	 * @return string
	 */
	protected function _get_name() {
		return $this->getData( 'name' );
	}

	/**
	 * Set context
	 *
	 * @param string $value
	 */
	protected function _set_context( $value ) {
		$this->_data['context'] = $value;
	}

	/**
	 * Set method
	 *
	 * @param string $value
	 */
	protected function _set_method( $value ) {
		$value = strtoupper( $value );
		$valid_methods = [ 'GET', 'POST' ];
		$method = $valid_methods[0];
		if ( in_array( $value, $valid_methods ) ) {
			$method = $value;
		}
		$this->_data['method'] = $method;
		$this->_data['atts']['method'] = $method;
	}

	/**
	 * Return form as string
	 *
	 * @return string
	 */
	public function __toString() {

		$output = '';

		try {
			$render = flex_fields_container()->get( 'render' );
			$output = (string) $render( 'form.php', [
				'atts'      => $this->getData( 'atts', [] ),
				'hasErrors' => $this->hasErrors(),
				'errors'    => $this->getErrorMessages(),
				'content'   => $this->getData( 'fields' )->__toString(),
			] );
		} catch ( \Exception $e ) {
			trigger_error( $e->getMessage(), E_USER_ERROR );
		} finally {
			return $output;
		}

	}


}
