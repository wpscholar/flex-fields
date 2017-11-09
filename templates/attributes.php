<?php

/**
 * @var \FlexFields\TemplateX $x
 */

foreach ( $x->get( 'atts', [] ) as $key => $value ) {
	echo ' ' . str_replace( '_', '-', sanitize_key( $key ) ) . '="' . esc_attr( $value ) . '"';
}