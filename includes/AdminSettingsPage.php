<?php

namespace FlexFields;

use FlexFields\Fields\Field;
use FlexFields\Fields\FieldContainer;

/**
 * Class AdminSettingsPage
 *
 * @package FlexFields
 */
class AdminSettingsPage {

	/**
	 * @var array
	 */
	protected $_page_data = [];

	/**
	 * @var array
	 */
	protected $_sections;

	/**
	 * @var FieldContainer
	 */
	protected $_field_container;

	/**
	 * @var bool
	 */
	protected $_network = false;

	/**
	 * AdminSettingsPage constructor.
	 *
	 * @param array $page_args
	 * @param array $sections
	 */
	public function __construct( array $page_args, array $sections ) {

		$this->_sections = $sections;
		$this->_field_container = $field_container = new FieldContainer();

		$this->_network = ! empty( $page_args['network'] );

		$defaults = [
			'capability' => 'manage_options',
			'function'   => '',
			'icon_url'   => '',
			'network'    => false,
			'position'   => null,
		];

		// If creating a network settings page, use a different default permission
		if ( $this->_network ) {
			$defaults['capability'] = 'manage_network_options';
		}

		$page = array_merge( $defaults, $page_args, [ 'function' => [ $this, 'renderPage' ] ] );

		// Allow `slug` as an alias for `menu_slug`
		if ( isset( $page['slug'] ) ) {
			$page['menu_slug'] = $page['slug'];
		}

		// Allow `parent` as an alias for `parent_slug`
		if ( isset( $page['parent'] ) ) {
			$page['parent_slug'] = $page['parent'];
		}

		// Allow `title` as an alias for `page_title`
		if ( isset( $page['title'] ) ) {
			$page['page_title'] = $page['title'];
		}

		// Automatically set `menu_title` to match `page_title` if not provided.
		if ( empty( $page['menu_title'] ) && ! empty( $page['page_title'] ) ) {
			$page['menu_title'] = $page['page_title'];
		}

		$menu_page = [
			'page_title',
			'menu_title',
			'capability',
			'menu_slug',
			'function', // Overridden
			'icon_url', // Optional
			'position', // Optional
		];

		$submenu_page = [
			'parent_slug',
			'page_title',
			'menu_title',
			'capability',
			'menu_slug',
			'function', // Overridden
		];

		if ( isset( $page['parent_slug'] ) ) {
			// Validate submenu page
			foreach ( $submenu_page as $key ) {
				if ( ! array_key_exists( $key, $page ) ) {
					throw new \InvalidArgumentException( sprintf( 'Missing `%s` argument for `add_submenu_page()`', $key ) );
				}
				// Set appropriate arguments
				$this->_page_data[ $key ] = $page[ $key ];
			}
		} else {
			// Validate menu page
			foreach ( $menu_page as $key ) {
				if ( ! array_key_exists( $key, $page ) ) {
					throw new \InvalidArgumentException( sprintf( 'Missing `%s` argument for `add_menu_page()`', $key ) );
				}
				// Set appropriate arguments
				$this->_page_data[ $key ] = $page[ $key ];
			}
		}

		add_action( 'admin_init', [ $this, 'onAdminInit' ] );

		if ( $this->_network ) {
			add_action( 'network_admin_menu', [ $this, 'onAdminMenu' ] );
		} else {
			add_action( 'admin_menu', [ $this, 'onAdminMenu' ] );
		}

	}

	/**
	 * Callback for the `admin_init` hook.
	 */
	public function onAdminInit() {

		$this->registerSections();

		foreach ( $this->_field_container as $field ) {
			$this->registerSetting( $field );
		}

	}

	/**
	 * Callback for the `admin_menu` hook.
	 */
	public function onAdminMenu() {
		if ( isset( $this->_page_data['parent_slug'] ) ) {
			add_submenu_page( ...array_values( $this->_page_data ) );
		} else {
			add_menu_page( ...array_values( $this->_page_data ) );
		}
	}

	/**
	 * Register the page sections
	 */
	public function registerSections() {
		foreach ( $this->_sections as $id => $data ) {
			$data['id'] = isset( $data['id'] ) ? $data['id'] : $id;
			$data['title'] = isset( $data['title'] ) ? $data['title'] : '';
			$this->addSection( $data );
		}
	}

	/**
	 * Register the section fields
	 *
	 * @param array $data
	 */
	public function registerFields( array $data ) {
		$fields = isset( $data['fields'] ) && \is_array( $data['fields'] ) ? $data['fields'] : [];
		foreach ( $fields as $index => $field ) {
			$fields[ $index ]['section'] = $data['id'];
			$fields[ $index ]['storage'] = 'option';
		}
		$this->_field_container->addFields( $fields );
		foreach ( $this->_field_container->getIterator() as $field_name => $field ) {
			$this->addField( $field );
		}
	}

	/**
	 * Register an individual setting.
	 *
	 * @param Field $field
	 */
	public function registerSetting( Field $field ) {
		register_setting( $this->_page_data['menu_slug'], $field->name, [
			'type'              => \gettype( $field->value ),
			'default'           => $field->value,
			'description'       => $field->getData( 'description', '' ),
			'sanitize_callback' => function ( $value ) use ( $field ) {

				$is_valid = validate_flex_field( $field );
				if ( $is_valid ) {
					$field->value = $field->sanitize( $value );
				} else {
					add_settings_error( $field->name, 'flex_field_error', $field->getErrorMessage() );
				}

				return $field->value;
			},
			'show_in_rest'      => $field->getData( 'show_in_rest', false ),
		] );
	}

	/**
	 * Callback for adding a section
	 *
	 * @param array $data
	 */
	public function addSection( array $data ) {

		// Get callback
		$callback = isset( $data['callback'] ) && \is_callable( $data['callback'] ) ? $data['callback'] : null;

		// Setup callback if not defined
		if ( ! $callback ) {
			$callback = '__return_null';
			if ( isset( $data['description'] ) && is_string( $data['description'] ) ) {
				$description = $data['description'];
				$callback = function () use ( $description ) {
					return $description;
				};
			}
		}

		// Add section
		add_settings_section( $data['id'], $data['title'], $callback, $this->_page_data['menu_slug'] );

		// Register fields
		$this->registerFields( $data );
	}

	/**
	 * Callback for adding a field.
	 *
	 * @param Field $field
	 */
	public function addField( Field $field ) {
		add_settings_field(
			$field->name,
			$field->getData( 'label' ),
			function () use ( $field ) {
				$label = $field->getData( 'label' );
				$field->setData( 'label', '' );
				$field->value = $field->load( 0 );
				$field->render();
				$field->setData( 'label', $label );
			},
			$this->_page_data['menu_slug'],
			$field->getData( 'section' )
		);
	}

	/**
	 * Callback for rendering the page.
	 */
	public function renderPage() {
		$render = flex_fields_container()->get( 'render' );
		echo $render( 'admin-settings-page.php', [
			'title' => $this->_page_data['page_title'],
			'page'  => $this->_page_data['menu_slug'],
		] );
	}

}
