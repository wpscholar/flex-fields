<?php

namespace FlexFields\Forms;

use FlexFields\Traits\Getter;

/**
 * Class FormHandler
 *
 * @package FlexFields\Forms
 *
 * @property FormContainer $forms
 */
class FormHandler {

	use Getter;

	/**
	 * @var FormHandler
	 */
	protected static $_instance;

	/**
	 * Reference to form registry
	 *
	 * @var FormContainer
	 */
	protected $_container;

	/**
	 * Initialize a new form handler instance
	 *
	 * @return FormHandler
	 */
	public static function initialize() {
		$instance = self::getInstance();
		add_action( 'template_redirect', [ $instance, 'maybeProcessForms' ] );

		return $instance;
	}

	/**
	 * Get class instance
	 *
	 * @return FormHandler
	 */
	public static function getInstance() {
		if ( ! isset( self::$_instance ) ) {
			self::$_instance = new self();
		}

		return self::$_instance;
	}

	/**
	 * Register a form into the handler
	 *
	 * @param Form $form
	 */
	public static function registerForm( Form $form ) {
		$instance = self::getInstance();
		$instance->forms->addForm( $form );
	}

	/**
	 * FormHandler constructor.
	 */
	protected function __construct() {
		$this->_container = new FormContainer();
	}

	/**
	 * Handler that initiates processing of forms
	 */
	public function maybeProcessForms() {
		if ( isset( $_GET['form'] ) || isset( $_POST['form'] ) ) {
			foreach ( $this->_container as $form ) {
				/**
				 * @var Form $form
				 */
				if ( $form->shouldHandle() ) {
					$form->process();
				}
			}
		}
	}

	/**
	 * Get forms
	 *
	 * @return FormContainer
	 */
	protected function _get_forms() {
		return $this->_container;
	}

}