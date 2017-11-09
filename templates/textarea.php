<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<textarea
    name="<?php echo esc_attr( $x->get( 'name' ) ); ?>"
	<?php $x->load( 'attributes.php' ); ?>
><?php echo esc_textarea( $x->get( 'value' ) ); ?></textarea>