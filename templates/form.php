<?php
/**
 * @var \FlexFields\TemplateX $x
 */
?>
<form <?php $x->load( 'attributes.php' ); ?>>
	<?php if ( $x->get( 'hasErrors', false ) ): ?>
        <div class="flex-form-errors">
			<?php
			foreach ( $x->get( 'errors', [] ) as $error ) {
				$x->load( 'error.php', [ 'error' => $error ] );
			}
			?>
        </div>
	<?php endif; ?>
	<?php echo wp_kses( $x->get( 'content' ), flex_fields_allowed_html() ); ?>
</form>