<?php
/**
 * @var \FlexFields\TemplateX $x
 */
?>
<?php if ( $x->get( 'label' ) ): ?>
    <label class="flex-label">
		<?php if ( ! $x->is( 'labelPosition', 'after' ) ): ?>
            <span class="flex-label-text"><?php echo esc_html( $x->get( 'label' ) ); ?></span>
		<?php endif; ?>
		<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>
		<?php if ( $x->is( 'labelPosition', 'after' ) ): ?>
            <span class="flex-label-text"><?php echo esc_html( $x->get( 'label' ) ); ?></span>
		<?php endif; ?>
    </label>
<?php else: ?>
	<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>
<?php endif; ?>