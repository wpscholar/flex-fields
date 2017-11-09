<?php

namespace FlexFields;

/**
 * Class TemplateX
 *
 * @package FlexFields
 */
class TemplateX {

	/**
	 * Relative path to the template file to be loaded.
	 *
	 * @var string
	 */
	protected $template;

	/**
	 * Paths to the template directory; will be checked in order.
	 *
	 * @var array
	 */
	protected $templatePaths = [];

	/**
	 * An associative array containing variable names and values to be scoped to the current template.
	 *
	 * @var array
	 */
	protected $vars = [];

	/**
	 * TemplateX constructor.
	 *
	 * @param array $templatePaths Paths to the template directory; will be checked in order.
	 */
	public function __construct( array $templatePaths = [] ) {
		$this->templatePaths = $templatePaths;
	}

	/**
	 * Set the template.
	 *
	 * @param string $template Relative path to the template file to be loaded.
	 */
	public function setTemplate( $template ) {
		$this->template = $template;
	}

	/**
	 * Set the template paths.
	 *
	 * @param array $paths Paths to the template directory; will be checked in order.
	 */
	public function setTemplatePaths( array $paths ) {
		$this->templatePaths = $paths;
	}

	/**
	 * Add a template path.
	 *
	 * @param string $path Path to be added to the array of template paths.
	 */
	public function addTemplatePath( $path ) {
		$this->templatePaths[] = $path;
	}

	/**
	 * Set the context.
	 *
	 * @param array $vars An associative array containing variable names and values to be scoped to the current template.
	 */
	public function setContext( array $vars = [] ) {
		$this->vars = $vars;
	}

	/**
	 * Checks if a variable exists.
	 *
	 * @param string $property Name of the variable to check.
	 *
	 * @return bool Whether or not the variable exists.
	 */
	public function has( $property ) {
		return $this->hasIn( $this->vars, $property );
	}

	/**
	 * Check if a value exists in an object or an array. Allows the ability to check a nested value
	 * by defining a path using an array or dot notation.
	 *
	 * @param object|array $data
	 * @param string|array $path
	 *
	 * @return bool
	 */
	public function hasIn( $data, $path ) {

		$value = false;

		if ( is_array( $data ) && array_key_exists( $path, $data ) ) {
			$value = true;
		} else if ( is_object( $data ) && property_exists( $data, $path ) ) {
			$value = true;
		} else if ( is_array( $path ) || ( is_string( $path ) && false !== strpos( $path, '.' ) ) ) {
			$segments = is_array( $path ) ? $path : explode( '.', $path );
			foreach ( $segments as $segment ) {
				if ( is_array( $data ) && array_key_exists( $segment, $data ) ) {
					$value = true;
					$data = $data[ $segment ];
				} else if ( is_object( $data ) && property_exists( $data, $segment ) ) {
					$value = true;
					$data = $data->{$segment};
				} else {
					$value = false;
					break;
				}
			}
		}

		return $value;
	}

	/**
	 * Get a variable.
	 *
	 * @param string|array $property Name (or path) of the variable to be fetched.
	 * @param mixed $default The default value to be returned if variable doesn't exist.
	 *
	 * @return mixed Value of the variable being fetched.
	 */
	public function get( $property, $default = null ) {
		return $this->getIn( $this->vars, $property, $default );
	}

	/**
	 * Get a value from an object or an array. Allows the ability to fetch a nested value
	 * by defining a path using an array or dot notation.
	 *
	 * @param object|array $data An object or array containing the data.
	 * @param string|array $path The path in which to check for a specific value.
	 * @param mixed $default The default value to return if the value is not found.
	 *
	 * @return mixed The value, if found, or the default value otherwise
	 */
	public function getIn( $data, $path, $default = null ) {

		$value = $default;

		if ( is_array( $data ) && array_key_exists( $path, $data ) ) {
			$value = $data[ $path ];
		} else if ( is_object( $data ) && property_exists( $data, $path ) ) {
			$value = $data->{$path};
		} else if ( is_array( $path ) || ( is_string( $path ) && false !== strpos( $path, '.' ) ) ) {
			$segments = is_array( $path ) ? $path : explode( '.', $path );
			foreach ( $segments as $segment ) {
				if ( is_array( $data ) && array_key_exists( $segment, $data ) ) {
					$value = $data = $data[ $segment ];
				} else if ( is_object( $data ) && property_exists( $data, $segment ) ) {
					$value = $data = $data->{$segment};
				} else {
					$value = $default;
					break;
				}
			}
		}

		return $value;
	}

	/**
	 * Set a variable.
	 *
	 * @param string $property Name of the variable to be set.
	 * @param mixed $value Value of the variable.
	 */
	public function set( $property, $value ) {
		$this->vars = $this->setIn( $this->vars, $property, $value );
	}

	/**
	 * Set a value in an object or an array. Allows the ability to set a nested value
	 * by defining a path using an array or dot notation.
	 *
	 * @param object|array $data An object or array containing the data
	 * @param string $path The path in which to set the value.
	 * @param mixed $value The value to be assigned.
	 *
	 * @return object|array Returns the updated value on success or the original value on failure.
	 */
	public function setIn( $data, $path, $value ) {

		if ( ! is_array( $path ) || ! ( is_string( $path ) && false !== strpos( $path, '.' ) ) ) {
			if ( is_object( $data ) ) {
				$data->{$path} = $value;
			} else if ( is_array( $data ) ) {
				$data[ $path ] = $value;
			} else {
				trigger_error(
					sprintf( 'ERROR: Unable to set value on data type % in %', gettype( $data ), __METHOD__ ),
					E_USER_WARNING
				);
			}
		} else {
			$segments = is_array( $path ) ? $path : explode( '.', $path );
			$segment = array_shift( $segments );
			if ( empty( $segments ) ) {
				$this->setIn( $data, $segment, $value );
			} else {
				if ( ! isset( $data[ $segment ], $data->{$segment} ) ) {
					$data[ $segment ] = [];
				}
				$this->setIn( $data[ $segment ], implode( '.', $segments ), $value );
			}
		}

		return $data;
	}

	/**
	 * Check if a variable has a specific value.
	 *
	 * @param string $property Name of the variable to check.
	 * @param mixed $value Value for which to check.
	 *
	 * @return bool Whether or not the values match.
	 */
	public function is( $property, $value ) {
		return $this->get( $property ) === $value;
	}

	/**
	 * Unset a variable by name.
	 *
	 * @param string $property Variable to be deleted.
	 */
	public function delete( $property ) {
		unset( $this->vars[ $property ] );
	}

	/**
	 * Loads a template from within an existing template.
	 *
	 * @param string $template Relative path to the template file to be loaded.
	 * @param array $vars An associative array containing variable names and values to be scoped to the current template.
	 * @param bool $withContext Whether or not to keep the existing context when loading the template.
	 */
	public function load( $template, array $vars = [], $withContext = true ) {
		if ( $withContext ) {
			$vars = array_merge( $this->vars, $vars );
		}
		$x = new self();
		$x->setTemplatePaths( $this->templatePaths );
		$x->setTemplate( $template );
		$x->setContext( $vars );
		echo $x->render();
	}

	/**
	 * Get rendered template as a string.
	 *
	 * @return string Template rendered to a string.
	 */
	public function render() {

		$output = '';
		$template = $this->locateTemplate();

		if ( $template ) {
			$vars = array_merge( $this->vars, [ 'x' => $this ] );
			extract( $vars, EXTR_SKIP );
			ob_start();
			include $template;
			$output = ob_get_clean();
		}

		return $output;
	}

	/**
	 * Locate a template.
	 *
	 * @return string The full path to the template or an empty string if not found.
	 */
	protected function locateTemplate() {
		$template = '';
		foreach ( $this->templatePaths as $path ) {
			$file = rtrim( $path, '/' ) . '/' . $this->template;
			if ( file_exists( $file ) ) {
				$template = $file;
				break;
			}
		}

		return $template;
	}

	/**
	 * Magic get method.
	 *
	 * @param string $property Name of the variable to get.
	 *
	 * @return mixed Value of the variable.
	 */
	public function __get( $property ) {
		return $this->get( $property );
	}

	/**
	 * Magic set method.
	 *
	 * @param string $property Name of the variable to set.
	 * @param mixed $value Value of the variable.
	 */
	public function __set( $property, $value ) {
		$this->set( $property, $value );
	}

	/**
	 * Magic isset method.
	 *
	 * @param string $property Name of the variable to check.
	 *
	 * @return bool Whether or not the variable is set.
	 */
	public function __isset( $property ) {
		return $this->has( $property );
	}

	/**
	 * Convert class instance to a string.
	 *
	 * @return string Template rendered to a string.
	 */
	public function __toString() {
		return $this->render();
	}

}