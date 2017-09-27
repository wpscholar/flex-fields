<?php

namespace FlexFields\Fields;

/**
 * Class TimeField
 *
 * @package FlexFields\Fields
 */
class TimeField extends FlatpickrField {

	/**
	 * Get default config for Flatpickr
	 *
	 * @return array
	 */
	protected function _defaultConfig() {
		return [
			'dateFormat' => 'h:i K',
			'noCalendar' => true,
			'enableTime' => true,
		];
	}

}