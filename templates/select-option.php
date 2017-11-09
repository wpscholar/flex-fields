<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<option
    value="<?php echo esc_attr( $x->get( 'option.value' ) ); ?>"
	<?php selected( $x->is( 'value', $x->get( 'option.value' ) ) ); ?>
><?php echo esc_html( $x->get( 'option.label' ) ); ?></option>