<?php

namespace FlexFields;

use FlexFields\Fields\Field;
use FlexFields\Fields\FieldContainer;

/**
 * Class MetaBox
 *
 * @package FlexFields
 */
class MetaBox {

	/**
	 * Meta box ID
	 *
	 * @var string
	 */
	public $id;

	/**
	 * Meta box label
	 *
	 * @var string
	 */
	public $title;

	/**
	 * Meta box screen (post type)
	 *
	 * @var string|null
	 */
	public $screen = null;

	/**
	 * Meta box display context
	 *
	 * @var string
	 */
	public $context = 'advanced';

	/**
	 * Meta box display priority
	 *
	 * @var string
	 */
	public $priority = 'default';

	/**
	 * Meta box nonce action
	 *
	 * @var string
	 */
	public $nonceAction;

	/**
	 * Meta box nonce name
	 *
	 * @var string
	 */
	public $nonceName;

	/**
	 * Meta box fields
	 *
	 * @var FieldContainer
	 */
	public $fields;

	/**
	 * MetaBox constructor.
	 *
	 * @param string $id
	 * @param string $title
	 * @param string $postType
	 */
	public function __construct( $id, $title, $postType = null ) {
		$this->id = sanitize_html_class( $id );
		$this->title = $title;
		$this->screen = $postType;
		$this->nonceName = 'metabox-' . $id . '-nonce';
		$this->nonceAction = 'update-metabox-' . $id;
		$this->fields = new FieldContainer();
		$this->setUp();
	}

	/**
	 * Set up action hooks
	 */
	public function setUp() {
		add_action( 'add_meta_boxes', [ $this, 'register' ] );
		add_action( 'save_post', [ $this, 'save' ] );
	}

	/**
	 * Register our meta box with WordPress
	 */
	public function register() {
		add_meta_box(
			$this->id,
			$this->title,
			[ $this, 'render' ],
			$this->screen,
			$this->context,
			$this->priority
		);
	}

	/**
	 * Save handler
	 *
	 * @param int $post_id
	 */
	public function save( $post_id ) {
		if ( isset( $_POST[ $this->nonceName ] ) && wp_verify_nonce( $_POST[ $this->nonceName ], $this->nonceAction ) ) {
			if ( ! wp_is_post_autosave( $post_id ) && ! wp_is_post_revision( $post_id ) && current_user_can( 'edit_post', $post_id ) ) {
				/**
				 * Filter `FlexFields\MetaBox::save`, allows disabling saving/updating of an entire meta box.
				 *
				 * Expects a boolean value. Defaults to `true`, passing `false` will stop processing of meta box values.
				 *
				 * @param bool $shouldSave Defaults to true, return false to skip saving meta box values.
				 * @param string $metaboxId The string ID of the metabox.
				 * @param int $postId The current post ID.
				 */
				if ( apply_filters( __METHOD__, true, $this->id, $post_id ) ) {
					foreach ( $this->fields as $field ) {
						/**
						 * @var Field $field
						 */
						if ( $field->storage !== 'FlexFields\\Storage\\PostMetaStorage' ) {
							$field->setStorageEngine( 'post-meta' );
						}
						$field->save( $post_id, isset( $_POST[ $field->name ] ) ? $_POST[ $field->name ] : '' );
					}
				}
			}
		}
	}

	/**
	 * Render meta box content
	 *
	 * @param \WP_Post $post
	 */
	public function render( \WP_Post $post ) {
		do_action( __METHOD__ . ':before', $this, $post );
		foreach ( $this->fields as $field ) {
			/**
			 * @var Field $field
			 */
			if ( $field->storage !== 'FlexFields\\Storage\\PostMetaStorage' ) {
				$field->setStorageEngine( 'post-meta' );
			}
			$field->value = $field->load( $post->ID );
			$field->render();
		}
		wp_nonce_field( $this->nonceAction, $this->nonceName );
		wp_enqueue_style( 'flex-fields' );
		do_action( __METHOD__ . ':after', $this, $post );
	}

}
