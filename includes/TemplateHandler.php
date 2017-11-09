<?php

namespace FlexFields;

use wpscholar\TemplateX;

/**
 * Class TemplateHandler
 *
 * @package FlexFields
 */
class TemplateHandler {

	/**
	 * Instance of this class.
	 *
	 * @var TemplateHandler
	 */
	protected static $instance;

	/**
	 * @var TemplateX
	 */
	protected $x;

	/**
	 * Get an instance of this class.
	 *
	 * @return TemplateHandler
	 */
	public static function getInstance() {
		if ( ! isset( self::$instance ) ) {
			self::$instance = new self();
		}

		return self::$instance;
	}

	/**
	 * TemplateHandler constructor.
	 */
	protected function __construct() {
		$this->x = new TemplateX( $this->getTemplatePaths() );
	}

	/**
	 * Get template paths
	 *
	 * Template paths at the beginning of the array are checked first.
	 *
	 * @return array
	 */
	protected function getTemplatePaths() {
		return apply_filters( __METHOD__, [ dirname( __DIR__ ) . '/templates' ] );
	}

	/**
	 * Render template
	 *
	 * @param string $template
	 * @param array $data
	 */
	public function render( $template, array $data = [] ) {
		echo $this->toString( $template, $data );
	}

	/**
	 * Return template as string.
	 *
	 * @param string $template
	 * @param array $data
	 *
	 * @return string
	 */
	public function toString( $template, array $data = [] ) {
		$this->x->setTemplate( $template );
		$this->x->setContext( $data );

		return $this->x->render();
	}

}
