<?php

namespace FlexFields\Forms;

/**
 * Class FormContainer
 *
 * @package FlexFields\Forms
 */
class FormContainer implements \IteratorAggregate, \Countable {

	/**
	 * Form collection
	 *
	 * @var array
	 */
	protected $_forms = [];

	/**
	 * Check if form exists in container.
	 *
	 * @param string $name
	 *
	 * @return bool
	 */
	public function hasForm( $name ) {
		return isset( $this->_forms[ $name ] );
	}

	/**
	 * Get a form from the container by name.
	 *
	 * @param string $name
	 *
	 * @return mixed
	 */
	public function getForm( $name ) {
		$form = null;
		if ( $this->hasForm( $name ) ) {
			$form = $this->_forms[ $name ];
		}

		return $form;
	}

	/**
	 * Add a form to the container
	 *
	 * @param Form $form
	 */
	public function addForm( Form $form ) {
		$this->_forms[ $form->name ] = $form;
	}

	/**
	 * Add multiple forms to the container
	 *
	 * @param Form[] $forms
	 */
	public function addForms( array $forms ) {
		foreach ( $forms as $form ) {
			$this->addForm( $form );
		}
	}

	/**
	 * Remove a form from the container by name.
	 *
	 * @param string $name
	 */
	public function removeForm( $name ) {
		if ( $this->hasForm( $name ) ) {
			unset( $this->_forms[ $name ] );
		}
	}

	/**
	 * Remove all forms from the container.
	 */
	public function removeAllForms() {
		$this->_forms = [];
	}

	/**
	 * Setup iterator for looping through forms
	 *
	 * @return \ArrayIterator
	 */
	public function getIterator() {
		return new \ArrayIterator( $this->_forms );
	}

	/**
	 * Count number of forms in container
	 *
	 * @return int
	 */
	public function count() {
		return count( $this->_forms );
	}

}