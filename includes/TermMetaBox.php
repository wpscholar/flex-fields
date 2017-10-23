<?php

namespace FlexFields;

use FlexFields\Fields\FieldContainer;

/**
 * Class TermMetaBox
 *
 * @package FlexFields
 */
class TermMetaBox {

    /**
     * Meta box fields
     *
     * @var FieldContainer
     */
    public $fields;

    /**
     * Taxonomy name
     *
     * @var string
     */
    public $taxonomy;

    /**
     * TermMetaBox constructor.
     *
     * @param string $taxonomy
     */
    public function __construct( $taxonomy ) {
        $this->fields = new FieldContainer();
        $this->taxonomy = $taxonomy;
        $this->setUp();
    }

    /**
     * Set up action hooks
     */
    public function setUp() {
        add_action( $this->taxonomy . '_add_form_fields', [ $this, 'renderAdd' ] );
        add_action( $this->taxonomy . '_edit_form_fields', [ $this, 'renderEdit' ] );
        add_action( 'edit_' . $this->taxonomy, [ $this, 'save' ] );
        add_action( 'create_' . $this->taxonomy, [ $this, 'save' ] );
    }

    /**
     * Save handler
     *
     * @param int $term_id
     */
    public function save( $term_id ) {
        if ( isset( $_POST[ __CLASS__ ] ) && wp_verify_nonce( $_POST[ __CLASS__ ], basename( __FILE__ ) ) ) {
			foreach ( $this->fields as $field ) {
				/**
				 * @var Field $field
				 */
				if ( $field->storage !== 'FlexFields\\Storage\\TermMetaStorage' ) {
					$field->setStorageEngine( 'term-meta' );
				}
				$field->save( $term_id, $_POST[ $field->name ] );
			}
		}
    }

    /**
     * Render meta box content
     */
    public function renderAdd() {
        foreach( $this->fields as $field ) {
            /**
			 * @var Field $field
			 */
			if ( $field->storage !== 'FlexFields\\Storage\\TermMetaStorage' ) {
				$field->setStorageEngine( 'term-meta' );
			}
            echo '<div class="form-field">';
            $field->render();
            echo '</div>';
        }
        wp_nonce_field( basename( __FILE__ ), __CLASS__ );
    }

    /**
     * Render meta box content
     *
     * @param \WP_Term $term
     */
    public function renderEdit( \WP_Term $term ) {
        foreach( $this->fields as $field ) {
            /**
			 * @var Field $field
			 */
			if ( $field->storage !== 'FlexFields\\Storage\\TermMetaStorage' ) {
				$field->setStorageEngine( 'term-meta' );
			}
			$field->value = $field->fetch( $term->term_id );
            $label = $field->getData( 'label', $field->name );
            $field->setData( 'label', '' );
            ?>
            <tr class="form-field">
                <th scope="row">
                    <label><?php echo esc_html( $label ); ?></label>
                </th>
                <td><?php $field->render(); ?></td>
            </tr>
            <?php
            $field->setData( 'label', $label );
        }
        wp_nonce_field( basename( __FILE__ ), __CLASS__ );
    }

}
