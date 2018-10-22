<?php

use FlexFields\Container;
use FlexFields\Fields\Field;
use FlexFields\Forms\Form;
use FlexFields\Make;

/**
 * Render a field.
 *
 * @param string $name
 * @param string $group
 */
function render_flex_field( $name, $group = 'default' ) {
	$field = get_flex_field( $name, $group );
	if ( $field && is_object( $field ) && method_exists( $field, 'render' ) ) {
		$field->render();
	}
}

/**
 * Render a field from a form.
 *
 * @param string $name
 * @param Form $form
 */
function render_flex_form_field( $name, Form $form ) {
	$field = $form->fields->getField( $name );
	if ( $field && is_object( $field ) && method_exists( $field, 'render' ) ) {
		$field->render();
	}
}

/**
 * Register a field.
 *
 * @param string $name
 * @param array $args
 * @param string $group
 */
function register_flex_field( $name, array $args = [], $group = 'default' ) {
	$fieldGroup = get_flex_field_group( $group );
	$fieldGroup->set( $name, $fieldGroup->factory( function () use ( $name, $args ) {
		return Make::Field( $name, $args );
	} ) );
}

/**
 * Register several fields at once.
 *
 * @param array $fields
 * @param string $group
 */
function register_flex_fields( array $fields, $group = 'default' ) {
	foreach ( $fields as $name => $args ) {
		register_flex_field( $name, $args, $group );
	}
}

/**
 * Get a field.
 *
 * @param string $name
 * @param string $group
 *
 * @return Field|null
 */
function get_flex_field( $name, $group = 'default' ) {
	$field = null;
	try {
		$field = get_flex_field_group( $group )->get( $name );
	} catch ( Exception $e ) {
		trigger_error( $e->getMessage() );
	} finally {
		return $field;
	}
}

/**
 * Get a field group.
 *
 * @param string $group
 *
 * @return Container
 */
function get_flex_field_group( $group = 'default' ) {

	// Get groups container
	$groups = get_flex_field_groups();

	// If group doesn't exist, create it
	if ( ! $groups->has( $group ) ) {
		$groups->set( $group, $groups->service( function () {
			return new Container();
		} ) );
	}

	// Return container for group
	return $groups->get( $group );
}

/**
 * Get all field groups.
 *
 * @return Container
 */
function get_flex_field_groups() {
	return flex_fields_container()->get( 'fields' );
}

/**
 * Iterates over the current field and any child fields (if applicable).
 *
 * @param Field $field
 *
 * @return Generator
 */
function flex_field_iterator( Field $field ) {
	yield $field;
	if ( is_a( $field, 'Traversable' ) ) {
		/**
		 * @var Traversable $field
		 */
		$fields = iterator_to_array( $field );
		foreach ( $fields as $subField ) {
			/**
			 * @var Field $subField
			 */
			yield $subField;
		}
	}
}

/**
 * Validate a field
 *
 * @param Field $flex_field
 * @param Form $form
 *
 * @return bool
 */
function validate_flex_field( Field $flex_field, Form $form = null ) {

	$valid = true;

	foreach ( flex_field_iterator( $flex_field ) as $field ) {
		$rules = (array) $field->getData( 'rules', [] );
		foreach ( $rules as $rule ) {
			if ( \is_callable( $rule ) ) {
				$rule( $field, $form );
			}
		}

		if ( $field->hasErrors() ) {
			$valid = false;
		}
	}

	return $valid;
}

/**
 * Validate a form
 *
 * @param Form $form
 *
 * @return bool
 */
function validate_flex_form( Form $form ) {

	$isValid = true;

	foreach ( $form->fields as $field ) {
		$valid = validate_flex_field( $field, $form );
		if ( ! $valid ) {
			$isValid = false;
		}
	}

	if ( ! $isValid ) {
		$form->addError( esc_html__( 'Sorry, there was a problem with your submission. Errors have been highlighted below.', 'flex-fields' ) );
	}

	return $isValid;
}

/**
 * FlexFields validation rule - Used when a field is required
 *
 * @param Field $field
 */
function flex_field_value_is_required( Field $field ) {
	$value = $field->value;
	switch ( gettype( $value ) ) {
		case 'string':
			$value = trim( $value );
			break;
		case 'array':
			$value = array_filter( $value );
			break;
	}
	if ( empty( $value ) ) {
		$field->addError( esc_html__( 'Field is required.', 'flex-fields' ) );
	}
}

/**
 * FlexFields validation rule - Used to validate an email address
 *
 * @param Field $field
 */
function flex_field_value_is_email( Field $field ) {
	if ( ! is_email( $field->value ) ) {
		$field->addError( esc_html__( 'Please provide a valid email address.', 'flex-fields' ) );
	}
}