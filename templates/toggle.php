<?php
/**
 * @var \wpscholar\TemplateX $x
 */

$label = $x->get( 'label' );
?>
<label class="flex-label">
	<?php if ( $label && ! $x->is( 'labelPosition', 'after' ) ): ?>
        <span class="flex-label-text"><?php echo esc_html( $label ); ?></span>
	<?php endif; ?>
    <input
            type="checkbox"
            name="<?php echo esc_attr( $x->get( 'name' ) ); ?>"
            value="1"
		<?php $x->load( 'attributes.php' ); ?>
    />
    <span class="flex-field-toggle__toggle"></span>
	<?php if ( $label && $x->is( 'labelPosition', 'after' ) ): ?>
        <span class="flex-label-text"><?php echo esc_html( $label ); ?></span>
	<?php endif; ?>
</label>