<?php

namespace FlexFields\Fields;

/**
 * Class ToggleField
 *
 * @package FlexFields\Fields
 */
class ToggleField extends Field {

	/**
	 * ToggleField constructor.
	 *
	 * @param $name
	 * @param array $args
	 */
	public function __construct( $name, array $args = [] ) {
		// Change default label position.
		$args['label_position'] = isset( $args['label_position'] ) ? $args['label_position'] : 'after';
		// Force value to a boolean.
		$args['value'] = isset( $args['value'] ) ? (bool) $args['value'] : false;

		parent::__construct( $name, $args );
	}

	/**
	 * Override the sanitization on this and convert to a boolean.
	 *
	 * @param string $value
	 *
	 * @return bool
	 */
	public function sanitize( $value ) {
		return 1 === absint( $value );
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );

		$name = $this->getData( 'name' );

		$atts = $this->getData( 'atts', [] );

		if ( $this->value ) {
			$atts['checked'] = 'checked';
		}

		return $this->fieldWrapper( 'toggle', $this->renderTemplate( 'toggle.php', [
			'type'  => 'checkbox',
			'name'  => $name,
			'atts'  => $atts,
			'label' => $this->getData( 'label' ),
		] ) );

	}

	public function fieldLabel( $args ) {
	}

}
