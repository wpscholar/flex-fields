<?php

use FlexFields\Container;
use FlexFields\Fields\Field;
use FlexFields\Make;

/**
 * Render a field.
 *
 * @param string $name
 * @param string $group
 */
function render_flex_field( $name, $group ) {
	$field = get_flex_field( $name );
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
 * Fetch a field value by name from a data source (e.g. $_GET, $_POST, etc).
 *
 * @param array $data
 * @param string $name
 * @param mixed $default
 *
 * @return mixed
 */
function fetch_flex_field_value_by_name( array $data, $name, $default = null ) {
	$value = $default;
	if ( $name && is_string( $name ) ) {
		$path = str_replace( [ '[]', '[', ']' ], [ '|0', '|', '' ], $name );
		$keys = explode( '|', $path );
		foreach ( $keys as $key ) {
			if ( ! is_array( $data ) || ! array_key_exists( $key, $data ) ) {
				return $default;
			}
			$value = $data = $data[ $key ];
		}
	}

	return $value;
}