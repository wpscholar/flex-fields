<?php
/**
 * @var \FlexFields\TemplateX $x
 */

if ( $x->get( 'hasError', false ) ) {
	?><span class="flex-error"><?php echo wp_kses( $x->get( 'error' ), flex_fields_allowed_html() ); ?></span><?php
}