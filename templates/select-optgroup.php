<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<optgroup label="<?php echo esc_attr( $x->get( 'option.label' ) ); ?>">
	<?php foreach ( $x->get( 'option.options', [] ) as $option ) {
		$x->load( 'select-option.php', [ 'option' => $option ] );
	} ?>
</optgroup>