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
				'aria-autocomplete'    => true,
				'aria-checked'         => true,
				'aria-controls'        => true,
				'aria-current'         => true,
				'aria-describedby'     => true,
				'aria-disabled'        => true,
				'aria-expanded'        => true,
				'aria-has-popup'       => true,
				'aria-hidden'          => true,
				'aria-level'           => true,
				'aria-multiline'       => true,
				'aria-multiselectable' => true,
				'aria-orientation'     => true,
				'aria-pressed'         => true,
				'aria-readonly'        => true,
				'aria-selected'        => true,
				'aria-sort'            => true,
				'aria-valuemax'        => true,
				'aria-valuemin'        => true,
				'aria-valuenow'        => true,
				'aria-valuetext'       => true,
				'data-action'          => true,
				'data-choices'         => true,
				'data-flatpickr'       => true,
				'hidden'               => true
			] ) );

			// Get allowed HTML from WordPress and add our own
			$allowedHtml = array_merge( wp_kses_allowed_html( 'post' ), [
				'datalist' => [],
				'form'     => [
					'accept'         => true,
					'accept-charset' => true,
					'action'         => true,
					'autocomplete'   => true,
					'enctype'        => true,
					'method'         => true,
					'name'           => true,
					'novalidate'     => true,
					'target'         => true,
				],
				'input'    => [
					'aria-invalid'    => true,
					'aria-label'      => true,
					'aria-labelledby' => true,
					'aria-required'   => true,
					'autocomplete'    => true,
					'autofocus'       => true,
					'checked'         => true,
					'form'            => true,
					'formaction'      => true,
					'formenctype'     => true,
					'formmethod'      => true,
					'formnotarget'    => true,
					'formnovalidate'  => true,
					'height'          => true,
					'list'            => true,
					'max'             => true,
					'min'             => true,
					'multiple'        => true,
					'name'            => true,
					'pattern'         => true,
					'placeholder'     => true,
					'readonly'        => true,
					'required'        => true,
					'step'            => true,
					'type'            => true,
					'value'           => true,
					'width'           => true,
				],
				'label'    => array(
					'aria-label'      => true,
					'aria-labelledby' => true,
					'for'             => true,
				),
				'optgroup' => [
					'label' => true,
				],
				'option'   => [
					'selected' => true,
					'value'    => true,
				],
				'select'   => [
					'aria-invalid'    => true,
					'aria-label'      => true,
					'aria-labelledby' => true,
					'aria-required'   => true,
					'name'            => true,
					'required'        => true,
				],
				'span'     => [
					'dir'      => true,
					'align'    => true,
					'lang'     => true,
					'xml:lang' => true,
				],
				'textarea' => array(
					'aria-invalid'    => true,
					'aria-label'      => true,
					'aria-labelledby' => true,
					'aria-required'   => true,
					'cols'            => true,
					'rows'            => true,
					'disabled'        => true,
					'name'            => true,
					'readonly'        => true,
					'required'        => true,
				),
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