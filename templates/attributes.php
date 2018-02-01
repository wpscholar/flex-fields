<?php

/**
 * @var \wpscholar\TemplateX $x
 */

$atts = (array) $x->get( 'atts', [] );
ksort( $atts );

foreach ( $atts as $key => $value ) {
	echo ' ' . str_replace( '_', '-', sanitize_key( $key ) ) . '="' . esc_attr( $value ) . '"';
}