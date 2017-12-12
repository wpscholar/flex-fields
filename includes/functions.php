<?php

use FlexFields\Container;
use FlexFields\Fields\Field;
use FlexFields\Make;

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