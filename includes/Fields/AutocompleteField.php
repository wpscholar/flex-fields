<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class AutocompleteField
 *
 * @package FlexFields\Fields
 *
 * @property bool $isMultiSelect
 * @property array $options
 */
class AutocompleteField extends ChoicesField {

	protected function _defaultConfig() {
		// Merge with parent config.
		return array_merge( parent::_defaultConfig(), [
			// Enable search
			'searchEnabled' => true,
			// Default to only searching the label
			'searchFields'  => [ 'label' ],
			// Poorly documented Choices.js options, see http://fusejs.io/ for full options and details.
			'fuseOptions'   => [
				// Set distance to 1000 allows a threshold of .1 to find exact matches within the first 100 characters.
				'distance'       => 1000,
				// Threshold set to .1 to allow matching any location for the text.
				'threshold'      => 0.1,
				// Disable the most fuzziest of searching.
				'tokenize'       => true,
				'matchAllTokens' => true,
			],
		] );
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

		// Set Choices.js config
		$atts['data-choices'] = htmlspecialchars( json_encode( (object) $config ), ENT_QUOTES );

		return $template->toString( 'field.php', [
			'fieldType'   => 'autocomplete',
			'hidden'      => $this->_maybeConvertCallable( $this->getData( 'hidden', false ), $this ),
			'hasError'    => $this->hasErrors(),
			'error'       => $this->getErrorMessage(),
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'label.php', [
				'label'         => $this->getData( 'label' ),
				'labelPosition' => $this->getData( 'label_position', 'before' ),
				'content'       => $template->toString( 'select.php', [
					'name'    => $this->isMultiSelect ? $this->name . '[]' : $this->name,
					'value'   => $this->value,
					'options' => $this->_normalizeOptions( $this->options ),
					'atts'    => $atts,
				] )
			] ),
		] );

	}

}
