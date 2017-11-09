<?php
/**
 * @var \wpscholar\TemplateX $x
 */
?>
<fieldset <?php $x->load( 'attributes.php' ); ?>>
	<?php if ( $x->get( 'legend' ) ): ?>
        <legend><?php echo esc_html( $x->get( 'legend' ) ); ?></legend>
	<?php endif; ?>
    <div>
		<?php foreach ( $x->get( 'value', [] ) as $text ): ?>
            <div>
                <input
                    type="text"
                    name="<?php echo esc_attr( $x->get( 'name' ) . '[]' ); ?>"
                    value="<?php echo esc_attr( $text ); ?>"
                />
                <button
                    type="button"
                    title="<?php esc_attr_e( 'Delete', 'flex-fields' ); ?>"
                    data-action="delete">✕
                </button>
            </div>
		<?php endforeach; ?>
        <div>
            <input
                type="text"
                name="<?php echo esc_attr( $x->get( 'name' ) . '[]' ); ?>"
                value=""
            />
            <button
                type="button"
                title="<?php esc_attr_e( 'Delete', 'flex-fields' ); ?>"
                data-action="delete">✕
            </button>
        </div>
    </div>

    <button type="button" title="<?php esc_attr_e( 'Add', 'flex-fields' ); ?>" data-action="add">
		<?php esc_html_e( '+ Add', 'flex-fields' ); ?>
    </button>

</fieldset>