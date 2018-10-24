<?php
/**
 * @var \wpscholar\TemplateX $x
 */

$action = network_admin_url( 'admin.php?page=' . $x->get( 'page' ) );
?>
<div class="wrap">
    <h2 class="wp-heading-inline"><?php echo esc_html( $x->get( 'title' ) ); ?></h2>
    <form action="<?php echo esc_url( $action ); ?>" method="post">
		<?php wp_nonce_field( $x->get( 'page' ) . get_current_user_id(), '_flexFieldsNetworkNonce' ); ?>
		<?php settings_errors(); ?>
		<?php settings_fields( $x->get( 'page' ) ); ?>
		<?php do_settings_sections( $x->get( 'page' ) ); ?>
		<?php submit_button( esc_attr__( 'Save Changes', 'flex-fields' ) ); ?>
    </form>
</div>
