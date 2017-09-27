<?php

if ( ! function_exists( 'flex_fields_setup' ) ) {

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

	function flex_fields_register_assets() {
		$suffix = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
		wp_register_style( 'flex-fields', FLEX_FIELDS_URL . "/assets/css/flex-fields{$suffix}.css" );
		wp_register_script( 'flex-fields', FLEX_FIELDS_URL . "/assets/js/flex-fields{$suffix}.js" );
	}

	if ( function_exists( 'add_action' ) ) {
		flex_fields_setup();
	}

}