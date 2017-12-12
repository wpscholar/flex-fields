<?php

namespace FlexFields;

use FlexFields\Fields\Field;
use FlexFields\Fields\FieldContainer;
use FlexFields\Forms\Form;
use FlexFields\Storage\FieldStorage;

/**
 * Class Make
 *
 * @package FlexFields
 */
class Make {

	/**
	 * Factory method for creating a new field instance.
	 *
	 * @param string $name
	 * @param array $args
	 *
	 * @return Field
	 */
	public static function Field( $name, array $args = [] ) {

		// Default to input field
		$fieldClass = __NAMESPACE__ . '\\Fields\\InputField';

		if ( isset( $args['field_class'] ) && class_exists( $args['field_class'] ) ) {

			// If 'field_class' is explicitly set, use it.
			$fieldClass = $args['field_class'];

		} else if ( isset( $args['field'] ) ) {

			// Derive field class based on field type
			$fieldType = str_replace( ' ', '',
				ucwords( str_replace( [ '-', '_' ], ' ', strtolower( $args['field'] ) ) )
			);

			$class = __NAMESPACE__ . "\\Fields\\{$fieldType}Field";

			if ( class_exists( $class ) ) {
				$fieldClass = $class;
			}

		}

		return new $fieldClass( $name, $args );

	}

	/**
	 * Factory method for creating a new field container instance.
	 *
	 * @param array $fields
	 *
	 * @return FieldContainer
	 */
	public static function FieldContainer( array $fields = [] ) {
		return new FieldContainer( $fields );
	}

	/**
	 * Factory for generating a field storage object from a string
	 *
	 * @param string $storageType
	 *
	 * @return FieldStorage
	 */
	public static function FieldStorage( $storageType = null ) {

		// Default storage class
		$storageClass = __NAMESPACE__ . '\\Storage\\PostMetaStorage';

		if ( class_exists( $storageType ) ) {

			// If class is explicitly passed, just use that
			$storageClass = $storageType;

		} else {

			// Otherwise, derive class name from storage type
			$storageType = str_replace( ' ', '',
				ucwords( str_replace( [ '-', '_' ], ' ', strtolower( $storageType ) ) )
			);

			$class = __NAMESPACE__ . '\\Storage\\' . $storageType . 'Storage';

			if ( class_exists( $class ) ) {
				$storageClass = $class;
			}
		}

		return new $storageClass();

	}

	/**
	 * Factory for generating a form
	 *
	 * @param string $name The name of the form.
	 * @param array $args The arguments for the form.
	 *
	 * @return Form
	 */
	public static function Form( $name, array $args = [] ) {
		return new Form( $name, $args );
	}

}