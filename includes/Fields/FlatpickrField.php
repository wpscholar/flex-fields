<?php

namespace FlexFields\Fields;

/**
 * Class FlatpickrField
 *
 * @package FlexFields\Fields
 */
class FlatpickrField extends Field {

	/**
	 * Get default config for Flatpickr
	 *
	 * @return array
	 */
	protected function _defaultConfig() {
		return [];
	}

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );

		// Get field attributes
		$atts = $this->getData( 'atts', [] );

		$config = array_merge( $this->_defaultConfig(), $this->getData( 'config', [] ) );

		// Set Flatpickr config
		$atts['data-flatpickr'] = htmlspecialchars( wp_json_encode( (object) $config ), ENT_QUOTES, 'UTF-8' );

		$flatpickr = $this->renderTemplate(
			'flatpickr.php',
			[
				'name'  => $this->getData( 'name' ),
				'value' => $this->value,
				'atts'  => $atts,
			]
		);

		return $this->fieldWrapper( 'flatpickr', $this->fieldLabel( $flatpickr ) );

	}

}
