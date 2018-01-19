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
		<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>
    </div>

</fieldset>