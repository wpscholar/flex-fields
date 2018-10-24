<?php

namespace FlexFields;

use FlexFields\Fields\Field;
use FlexFields\Fields\FieldContainer;

/**
 * Class NetworkAdminSettingsPage
 *
 * @package FlexFields
 */
class NetworkAdminSettingsPage {

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
	 * AdminSettingsPage constructor.
	 *
	 * @param array $page_args
	 * @param array $sections
	 */
	public function __construct( array $page_args, array $sections ) {

		$this->_sections = $sections;
		$this->_field_container = new FieldContainer();

		$defaults = [
			'capability' => 'manage_network_options',
			'function'   => '',
			'icon_url'   => '',
			'position'   => null,
		];

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
		add_action( 'network_admin_menu', [ $this, 'onAdminMenu' ] );

	}

	/**
	 * Callback for the `admin_init` hook.
	 */
	public function onAdminInit() {

		$this->registerSections();

	}

	/**
	 * Checks if data needs saving on `load-{$page_slug}` action.
	 */
	public function handleNetworkSave() {
		if ( ! isset( $_POST['_flexFieldsNetworkNonce'] ) ) {
			return;
		}
		check_admin_referer( $this->_page_data['menu_slug'] . get_current_user_id(), '_flexFieldsNetworkNonce' );

		$haveErrors = false;

		foreach ( $this->_field_container as $field ) {
			$is_valid = validate_flex_field( $field );
			if ( $is_valid ) {
				$field->value = $field->save( 0, isset( $_POST[ $field->name ] ) ? $_POST[ $field->name ] : '' );
			} else {
				$haveErrors = true;
				add_settings_error( $field->name, 'flex_field_error', $field->getErrorMessage() );
			}
		}

		if ( ! $haveErrors ) {
			wp_safe_redirect( add_query_arg( [
				'page'   => $this->_page_data['menu_slug'],
				'update' => 'updated',
			], network_admin_url( 'admin.php' ) ) );
			exit();
		}
	}

	/**
	 * Callback for the `network_admin_menu` hook.
	 */
	public function onAdminMenu() {
		if ( isset( $this->_page_data['parent_slug'] ) ) {
			$page = add_submenu_page( ...array_values( $this->_page_data ) );
		} else {
			$page = add_menu_page( ...array_values( $this->_page_data ) );
		}

		// Add action to handle checking for data to save on page load.
		add_action( 'load-' . $page, [ $this, 'handleNetworkSave' ] );
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
			$fields[ $index ]['storage'] = 'site-option';
		}
		$this->_field_container->addFields( $fields );
		foreach ( $this->_field_container->getIterator() as $field_name => $field ) {
			$this->addField( $field );
		}
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
		echo $render( 'network-admin-settings-page.php', [
			'title' => $this->_page_data['page_title'],
			'page'  => $this->_page_data['menu_slug'],
		] );
	}

}
