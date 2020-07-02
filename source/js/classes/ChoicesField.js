import Choices from 'choices.js';
import decode from 'lodash/unescape';

import {Field} from "./Field";
import {flexFields} from "./FlexFields";

export class ChoicesField extends Field {

    constructor(el) {
        super(el);
        this.select.addEventListener('click', e => e.stopPropagation());
        this.select.addEventListener('change', this.onChange.bind(this));
        this._choices = new Choices(this.select, this.config);
    }

    onChange(e) {
        this.dispatch('change', {target: e.target});
    }

    get choices() {
        return this._choices;
    }

    get config() {
        const select = this.el.querySelector('[data-choices]');
        return JSON.parse(decode(select.getAttribute('data-choices')));
    }

    get select() {
        return this.el.querySelector('[data-choices]');
    }

    get value() {
        return this.choices.getValue();
    }

}

flexFields.addFieldClass(ChoicesField);
