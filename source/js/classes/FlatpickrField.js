import flatpickr from 'flatpickr';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import decode from 'lodash/unescape';

import {Field} from "./Field";
import {flexFields} from "./FlexFields";

export class FlatpickrField extends Field {

    constructor(el) {
        super(el);
        this._flatpickr = flatpickr(this.input, this.config);
    }

    get clearButton() {
        return this.el.querySelector('.flatpickr-reset');
    }

    get config() {

        const config = JSON.parse(decode(this.input.getAttribute('data-flatpickr')));

        config.onReady = (dateObj, dateStr, instance) => {
            this.clearButton.addEventListener('click', e => {
                e.preventDefault();
                instance.clear();
                instance.close();
            });
        };

        config.plugins = [new confirmDatePlugin({})];

        return config;
    }

    get flatpickr() {
        return this._flatpickr;
    }

    get input() {
        return this.el.querySelector('[data-flatpickr]');
    }

}

flexFields.addFieldClass(FlatpickrField);
