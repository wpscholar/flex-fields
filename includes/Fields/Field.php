<?php

namespace FlexFields\Fields;

use FlexFields\Traits\Data;
use FlexFields\Traits\Errors;
use FlexFields\Traits\FieldStorageEngine;
use FlexFields\Traits\Getter;
use FlexFields\Traits\Setter;

/**
 * Class Field
 *
 * @package FlexFields\Fields
 *
 * @property string $name
 * @property mixed $value
 * @property string $storage
 */
abstract class Field {

	use Data,
		Errors,
		FieldStorageEngine,
		Getter,
		Setter;

	/**
	 * Field name
	 *
	 * @var string
	 */
	protected $_name;

	/**
	 * Field value
	 *
	 * @var mixed
	 */
	protected $_value;

	/**
	 * Field constructor.
	 *
	 * @param string $name
	 * @param array $args
	 */
	public function __construct( $name, array $args = [] ) {
		$this->_name = $name;
		$this->_data = $args;
		$this->value = $this->getData( 'value', '' );
		$this->setStorageEngine( $this->getData( 'storage' ) );
	}

	/**
	 * Render field.
	 */
	public function render() {
		echo $this->__toString();
	}

	/**
	 * Get field name.
	 *
	 * @return string
	 */
	protected function _get_name() {
		return $this->_name;
	}

	/**
	 * Get field value.
	 *
	 * @return mixed
	 */
	protected function _get_value() {
		return $this->_value;
	}

	/**
	 * Get storage class name.
	 *
	 * @return string
	 */
	protected function _get_storage() {
		return get_class( $this->_storage );
	}

	/**
	 * Set field value.
	 *
	 * @param mixed $value
	 */
	protected function _set_value( $value ) {
		$this->_value = $value;
	}

	/**
	 * Return field markup as string.
	 *
	 * @return string
	 */
	abstract public function __toString();

	/**
	 * @param $template
	 * @param array $data
	 *
	 * @return string
	 */
	protected function renderTemplate( $template, array $data = [] ) {
		$render = flex_fields_container()->get( 'render' );

		return (string) $render( $template, $data );
	}

	/**
	 * Render field wrapper.
	 *
	 * @param string $fieldType
	 * @param string $content
	 *
	 * @return string
	 */
	protected function fieldWrapper( $fieldType, $content ) {

		$hidden = $this->getData( 'hidden', false );

		return $this->renderTemplate( 'field.php', [
			'fieldType'   => $fieldType,
			'field_atts'  => $this->getData( 'field_atts', [] ),
			'hidden'      => is_callable( $hidden ) ? $hidden( $this ) : $hidden,
			'hasError'    => $this->hasErrors(),
			'error'       => $this->getErrorMessage(),
			'before'      => $this->getData( 'before' ),
			'after'       => $this->getData( 'after' ),
			'beforeField' => $this->getData( 'before_field' ),
			'afterField'  => $this->getData( 'after_field' ),
			'description' => $this->getData( 'description' ),
			'content'     => $content,
		] );
	}

	/**
	 * Render field label.
	 *
	 * @param $content
	 *
	 * @return string
	 */
	protected function fieldLabel( $content ) {
		return $this->renderTemplate( 'label.php', [
			'label'         => $this->getData( 'label' ),
			'labelPosition' => $this->getData( 'label_position', 'before' ),
			'content'       => $content,
		] );
	}

}