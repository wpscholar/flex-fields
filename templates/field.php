<?php
/**
 * @var \wpscholar\TemplateX $x
 *
 * @var string $fieldType
 */

$atts = $x->get( 'fieldAtts', [] );

$atts['class'] = trim(
	implode( ' ', [
		'flex-field',
		'flex-field-' . $x->get( 'fieldType' ),
		$x->get( 'hasErrors', false ) ? 'flex-field-has-error' : '',
	] ) . $x->get( 'fieldAtts.class', '' )
);

?>
<?php echo wp_kses( $x->get( 'beforeField' ), flex_fields_allowed_html() ); ?>
    <div <?php $x->load( 'attributes.php', [ 'atts' => $atts ] ); ?> <?php echo $x->is( 'hidden', true ) ? 'hidden' : ''; ?>>
		<?php echo wp_kses( $x->get( 'before' ), flex_fields_allowed_html() ); ?>
		<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>
		<?php $x->load( 'error.php' ); ?>
		<?php if ( $x->get( 'description', false ) ): ?>
            <p class="flex-field-description"><?php echo esc_html( $x->get( 'description' ) ); ?></p>
		<?php endif; ?>
		<?php echo wp_kses( $x->get( 'after' ), flex_fields_allowed_html() ); ?>
    </div>
<?php echo wp_kses( $x->get( 'afterField' ), flex_fields_allowed_html() ); ?>