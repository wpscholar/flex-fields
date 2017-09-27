<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

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

		$template = TemplateHandler::getInstance();

		// Get field attributes
		$atts = $this->getData( 'atts', [] );

		// Set Flatpickr config
		$atts['data-flatpickr'] = htmlspecialchars(
			json_encode( (object) $this->getData( 'config', $this->_defaultConfig() ) ), ENT_QUOTES, 'UTF-8'
		);

		// This field requires JS
		wp_enqueue_script( 'flex-fields' );

		return $template->toString( 'field.twig', [
			'fieldType'   => 'flatpickr',
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'label.twig', [
				'label'         => $this->getData( 'label' ),
				'labelPosition' => $this->getData( 'label_position', 'before' ),
				'content'       => $template->toString( 'flatpickr.twig', [
					'name'  => $this->name,
					'value' => $this->value,
					'atts'  => $atts,
				] )
			] ),
		] );

	}

}