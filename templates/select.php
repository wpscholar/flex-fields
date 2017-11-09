<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<select name="<?php echo esc_attr( $x->get( 'name' ) ); ?>" <?php $x->load( 'attributes.php' ); ?>>
	<?php
	foreach ( $x->get( 'options', [] ) as $option ) {
		if ( $x->getIn( $option, 'options' ) ) {
			$x->load( 'select-optgroup.php', [ 'option' => $option ] );
		} else {
			$x->load( 'select-option.php', [ 'option' => $option ] );
		}
	}
	?>
</select>