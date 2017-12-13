<?php

use FlexFields\Container;
use wpscholar\TemplateX;

if ( ! function_exists( 'flex_fields_setup' ) ) {

	/**
	 * Setup FlexFields.
	 */
	function flex_fields_setup() {

		if ( ! defined( 'FLEX_FIELDS_DIR' ) ) {
			define( 'FLEX_FIELDS_DIR', dirname( __DIR__ ) );
		}

		if ( ! defined( 'FLEX_FIELDS_URL' ) ) {
			define( 'FLEX_FIELDS_URL', home_url( '/' . str_replace( ABSPATH, '', FLEX_FIELDS_DIR ) ) );
		}

		add_action( 'admin_enqueue_scripts', 'flex_fields_register_assets' );
		add_action( 'wp_enqueue_scripts', 'flex_fields_register_assets' );
	}

	/**
	 * Register scripts and stylesheets.
	 */
	function flex_fields_register_assets() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
		wp_register_style( 'flex-fields', FLEX_FIELDS_URL . "/assets/css/flex-fields{$suffix}.css" );
		wp_register_script( 'flex-fields', FLEX_FIELDS_URL . "/assets/js/flex-fields{$suffix}.js" );
	}

	if ( function_exists( 'add_action' ) ) {
		flex_fields_setup();
	}

	/**
	 * Fetch the allowed HTML for FlexFields
	 *
	 * @return array
	 */
	function flex_fields_allowed_html() {

		static $flexAllowedHtml;

		if ( null === $flexAllowedHtml ) {

			// Get allowed global attributes from WordPress and add our own
			$globalAtts = apply_filters( 'flex_fields_global_atts', _wp_add_global_attributes( [
				'data-action'    => true,
				'data-choices'   => true,
				'data-flatpickr' => true,
				'hidden'         => true
			] ) );

			// Get allowed HTML from WordPress and add our own
			$allowedHtml = array_merge( wp_kses_allowed_html( 'post' ), [
				'input'    => [
					'checked' => true,
					'type'    => true,
					'name'    => true,
					'value'   => true,
				],
				'optgroup' => [
					'label' => true,
				],
				'option'   => [
					'selected' => true,
					'value'    => true,
				],
				'select'   => [
					'name' => true,
				],
				'span'     => [],
			] );

			// Add all global attributes to all tags
			$flexAllowedHtml = array_map( function ( $value ) use ( $globalAtts ) {
				if ( is_array( $value ) ) {
					$value = array_merge( $value, $globalAtts );
				}

				return $value;
			}, $allowedHtml );

			// Allow filtering of our custom allowed HTML
			$flexAllowedHtml = (array) apply_filters( __FUNCTION__, $flexAllowedHtml );

		}

		return $flexAllowedHtml;
	}

	/**
	 * Get the FlexFields dependency injection container.
	 *
	 * @return Container
	 */
	function flex_fields_container() {
		static $container;

		if ( null === $container ) {

			// Create new container
			$container = new Container( [
				'template_paths' => apply_filters( 'flex_fields_template_paths', [ dirname( __DIR__ ) . '/templates' ] ),
			] );

			// Create a container for fields
			$container->set( 'fields', $container->service( function () {
				return new Container();
			} ) );

			// Setup template handler
			$container->set( 'x', $container->service( function ( Container $container ) {
				return new TemplateX( $container->get( 'template_paths' ) );
			} ) );

			// Create a function for rendering a template
			$container->set( 'render', $container->service( function ( Container $container ) {

				/**
				 * Renders a template.
				 *
				 * @param string $template
				 * @param array $data
				 *
				 * @return string
				 */
				return function ( $template, array $data = [] ) use ( $container ) {
					/**
					 * @var TemplateX $x
					 */
					$x = $container->get( 'x' );
					$x->setTemplate( $template );
					$x->setContext( $data );

					return $x->render();
				};

			} ) );
		}

		return $container;
	}

}