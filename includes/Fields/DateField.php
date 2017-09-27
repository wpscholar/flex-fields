<?php

namespace FlexFields\Fields;

/**
 * Class DateField
 *
 * @package FlexFields\Fields
 */
class DateField extends FlatpickrField {

	/**
	 * Get default config for Flatpickr
	 *
	 * @return array
	 */
	protected function _defaultConfig() {
		return [
			'altInput'   => true,
			'altFormat'  => 'n/j/Y',
			'dateFormat' => 'Y-m-d',
			'minDate'    => date( 'Y-m-d', time() ),
		];
	}

}