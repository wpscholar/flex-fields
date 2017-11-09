<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<input
    type="<?php echo esc_attr( $x->get( 'type', 'text' ) ); ?>"
    name="<?php echo esc_attr( $x->get( 'name' ) ); ?>"
    value="<?php echo esc_attr( $x->get( 'value' ) ); ?>"
	<?php $x->load( 'attributes.php' ); ?>
/>