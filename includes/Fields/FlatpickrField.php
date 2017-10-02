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

		wp_enqueue_style( 'flex-fields' );
		wp_enqueue_script( 'flex-fields' );

		$template = TemplateHandler::getInstance();

		// Get field attributes
		$atts = $this->getData( 'atts', [] );

		$config = array_merge( $this->_defaultConfig(), $this->getData( 'config', [] ) );

		// Set Flatpickr config
		$atts['data-flatpickr'] = htmlspecialchars( json_encode( (object) $config ), ENT_QUOTES, 'UTF-8' );

		return $template->toString( 'field.twig', [
			'fieldType'   => 'flatpickr',
			'hidden'      => $this->getData( 'hidden', false ),
			'hasError'    => $this->hasErrors(),
			'error'       => $this->getErrorMessage(),
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