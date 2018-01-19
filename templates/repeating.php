<?php

/**
 * @var \wpscholar\TemplateX $x
 * @var \FlexFields\Fields\Field $field
 */

$template = $x->get( 'template', '' );
$fields = $x->get( 'fields', [] );

?>
<fieldset <?php $x->load( 'attributes.php' ); ?>>

	<?php if ( $x->get( 'label' ) ): ?>
        <legend class="flex-label-text"><?php echo esc_html( $x->get( 'label' ) ); ?></legend>
	<?php endif; ?>

    <div class="flex-fieldset-content">

        <div class="flex-field-template" data-action="<?php echo esc_attr( $x->get( 'name' ) ); ?>">
            <div>

				<?php echo wp_kses( "{$template}", flex_fields_allowed_html() ); ?>

                <button type="button"
                        title="<?php esc_attr_e( 'Delete', 'flex-fields' ); ?>"
                        data-action="delete">✕
                </button>

            </div>
        </div>

        <div class="flex-field-collection">
			<?php foreach ( $fields as $field ): ?>
                <div>

					<?php echo wp_kses( "{$field}", flex_fields_allowed_html() ); ?>

                    <button type="button"
                            title="<?php esc_attr_e( 'Delete', 'flex-fields' ); ?>"
                            data-action="delete">✕
                    </button>

                </div>
			<?php endforeach; ?>
        </div>

        <button type="button" title="<?php esc_attr_e( 'Add', 'flex-fields' ); ?>" data-action="add">
			<?php esc_html_e( '+ Add', 'flex-fields' ); ?>
        </button>

    </div>

</fieldset>