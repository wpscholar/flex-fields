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
        <label class="flex-field-ajax-upload__drop-zone">
			<?php $x->load( 'input.php', [ 'name' => $x->get( 'fileHandle' ), 'value' => '' ] ); ?>
            <span class="flex-field-ajax-upload__on-load"><?php echo esc_html( $x->get( 'labelOnLoad' ) ); ?></span>
            <span class="flex-field-ajax-upload__on-upload"><?php echo esc_html( $x->get( 'labelOnUpload' ) ); ?></span>
            <span class="flex-field-ajax-upload__on-max-upload"><?php echo esc_html( sprintf( $x->get( 'labelOnMaxUpload' ), absint( $x->get( 'maxUploads' ) ) ) ); ?></span>
            <span class="flex-field-ajax-upload__on-success"><?php echo esc_html( $x->get( 'labelOnSuccess' ) ); ?></span>
            <span class="flex-field-ajax-upload__on-failure"><?php echo esc_html( $x->get( 'labelOnError' ) ); ?></span>
        </label>
        <div class="flex-field-ajax-upload__gallery">
			<?php foreach ( (array) $x->get( 'value', [] ) as $id ): ?>
                <a href="#" class="flex-field-ajax-upload__image">
                    <img src="<?php echo esc_url( wp_get_attachment_image_url( $id, $x->get( 'imageSize' ) ) ); ?>" />
                    <input name="<?php echo esc_attr( $x->get( 'name' ) . '[]' ); ?>"
                           type="hidden"
                           value="<?php echo esc_attr( $id ); ?>" />
                </a>
			<?php endforeach; ?>
        </div>

        <a href="#" class="flex-field-ajax-upload__image flex-template" hidden="hidden">
            <img src="" />
            <input name="<?php echo esc_attr( $x->get( 'name' ) . '[]' ); ?>"
                   type="hidden"
                   value="" />
        </a>

        <span class="flex-field-ajax-upload__max-uploads"
              hidden="hidden"><?php echo esc_html( $x->get( 'maxUploads' ) ); ?></span>
        <span class="flex-field-ajax-upload__image-size"
              hidden="hidden"><?php echo esc_html( $x->get( 'imageSize' ) ); ?></span>
    </div>

</fieldset>