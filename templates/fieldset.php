<?php
/**
 * @var \FlexFields\TemplateX $x
 */
?>
<fieldset <?php $x->load( 'attributes.php' ); ?>>

	<?php if ( $x->get( 'legend' ) ): ?>
        <legend><?php echo esc_html( $x->get( 'legend' ) ); ?></legend>
	<?php endif; ?>

	<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>

</fieldset>