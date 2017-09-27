<?php

namespace FlexFields\Fields;

/**
 * Class DateTimeField
 *
 * @package FlexFields\Fields
 */
class DateTimeField extends FlatpickrField {

	/**
	 * Get default config for Flatpickr
	 *
	 * @return array
	 */
	protected function _defaultConfig() {
		return [
			'altInput'   => true,
			'altFormat'  => 'n/j/Y h:i K',
			'dateFormat' => 'Y-m-dTH:i',
			'enableTime' => true,
			'minDate'    => date( 'Y-m-d', time() ),
		];
	}

}