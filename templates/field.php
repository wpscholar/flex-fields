<?php
/**
 * @var \FlexFields\TemplateX $x
 *
 * @var string $fieldType
 */

$classes = trim( implode( ' ', [
	'flex-field',
	'flex-field-' . $x->get( 'fieldType' ),
	$x->get( 'hasError', false ) ? 'flex-field-has-error' : '',
] ) );

?>
<?php echo wp_kses( $x->get( 'beforeField' ), flex_fields_allowed_html() ); ?>
    <div class="<?php echo esc_attr( $classes ); ?>" <?php echo $x->is( 'hidden', true ) ? 'hidden' : ''; ?>>
		<?php echo wp_kses( $x->get( 'before' ), flex_fields_allowed_html() ); ?>
		<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>
		<?php echo wp_kses( $x->get( 'after' ), flex_fields_allowed_html() ); ?>
		<?php $x->load( 'error.php' ); ?>
    </div>
<?php echo wp_kses( $x->get( 'afterField' ), flex_fields_allowed_html() ); ?>