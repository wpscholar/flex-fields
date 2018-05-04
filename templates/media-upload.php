<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<fieldset <?php $x->load( 'attributes.php' ); ?>>

	<?php if ( $x->get( 'label' ) ): ?>
        <legend class="flex-label-text"><?php echo esc_html( $x->get( 'label' ) ); ?></legend>
	<?php endif; ?>

    <div class="flex-fieldset-content">

        <div class="flex-field-gallery">
            <img class="flex-field-gallery__item"
                 src="<?php echo esc_url( (string) wp_get_attachment_image_url( absint( $x->get( 'value' ) ) ) ); ?>" />
        </div>

        <p>

            <button class="flex-button" data-action="add" type="button">
				<?php esc_html_e( 'Add Image', 'flex-fields' ); ?>
            </button>

            <button class="flex-button" data-action="remove" type="button">
				<?php esc_html_e( 'Remove Image', 'flex-fields' ); ?>
            </button>

            <input
                    type="hidden"
                    name="<?php echo esc_attr( $x->get( 'name' ) ); ?>"
                    value="<?php echo esc_attr( $x->get( 'value' ) ); ?>"
            />

        </p>

    </div>

</fieldset>
