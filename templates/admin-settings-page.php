<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<div class="wrap">
    <h2 class="wp-heading-inline"><?php echo esc_html( $x->get( 'title' ) ); ?></h2>
    <form action="<?php echo esc_url( admin_url( 'options.php' ) ); ?>" method="post">
		<?php settings_errors(); ?>
		<?php settings_fields( $x->get( 'page' ) ); ?>
		<?php do_settings_sections( $x->get( 'page' ) ); ?>
        <input name="submit"
               type="submit"
               value="<?php esc_attr_e( 'Save Changes', 'flex-fields' ); ?>"
               class="button button-primary" />
    </form>
</div>