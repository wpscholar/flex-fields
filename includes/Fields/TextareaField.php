<?php

namespace FlexFields\Fields;

use FlexFields\TemplateHandler;

/**
 * Class TextareaField
 *
 * @package FlexFields\Fields
 */
class TextareaField extends Field {

	/**
	 * Return field markup as a string
	 *
	 * @return string
	 */
	public function __toString() {

		$template = TemplateHandler::getInstance();

		return $template->toString( 'field.twig', [
			'fieldType'   => 'textarea',
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'content'     => $template->toString( 'label.twig', [
				'label'         => $this->getData( 'label' ),
				'labelPosition' => $this->getData( 'label_position', 'before' ),
				'content'       => $template->toString( 'textarea.twig', [
					'name'  => $this->name,
					'value' => $this->value,
					'atts'  => $this->getData( 'atts', [] ),
				] )
			] ),
		] );

	}

}