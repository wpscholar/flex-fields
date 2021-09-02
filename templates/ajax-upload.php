<?php
/**
 * @var \wpscholar\TemplateX $x
 */

$ids = (array) $x->get( 'value', [] );
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
            <span class="flex-field-ajax-upload__on-max-size"><?php echo esc_html( sprintf( $x->get( 'labelOnMaxSize' ), absint( $x->get( 'maxSize' ) ) ) ); ?></span>
            <span class="flex-field-ajax-upload__on-invalid-type"><?php echo esc_html( $x->get( 'labelOnInvalidType' ) ); ?></span>
            <span class="flex-field-ajax-upload__on-success"><?php echo esc_html( $x->get( 'labelOnSuccess' ) ); ?></span>
            <span class="flex-field-ajax-upload__on-failure"><?php echo esc_html( $x->get( 'labelOnError' ) ); ?></span>
        </label>
        <div class="flex-field-ajax-upload__gallery">
			<?php foreach ( $ids as $id ): ?>
				<?php if ( get_attached_file( $id ) ): // File exists ?>
					<?php $isImage = wp_attachment_is_image( $id ); ?>
                    <a href="#"
                       class="<?php echo esc_attr( 'flex-field-ajax-upload__item' . ( $isImage ? '' : ' --document' ) ); ?>"
                       title="<?php esc_html_e( 'Click to remove', 'flex-fields' ) ?>">
                    <span><?php
	                    if ( $isImage ):
		                    ?><img
                            src="<?php echo esc_url( wp_get_attachment_image_url( $id, $x->get( 'imageSize' ) ) ); ?>" /><?php
	                    else:
		                    echo esc_html( basename( get_post_meta( $id, '_wp_attached_file', true ) ) );
	                    endif; ?>
                    </span>
                        <input name="<?php echo esc_attr( $x->get( 'name' ) . '[]' ); ?>"
                               type="hidden"
                               value="<?php echo esc_attr( $id ); ?>"/>
                    </a>
				<?php endif; ?>
			<?php endforeach; ?>
        </div>

        <a href="#" class="flex-field-ajax-upload__item flex-template" hidden="hidden">
            <span></span>
            <input name="<?php echo esc_attr( $x->get( 'name' ) . '[]' ); ?>"
                   type="hidden"
                   value=""/>
        </a>

    </div>

</fieldset>
