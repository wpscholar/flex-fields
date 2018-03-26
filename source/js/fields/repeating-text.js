import {RepeatingTextField} from '../classes/RepeatingTextField';
import {flexFields} from "../classes/FlexFields";

Array
    .from(document.querySelectorAll('.flex-field-repeating-text'))
    .map(el => new RepeatingTextField(el));

// Ensure field works in repeating field.
flexFields.addEventListener('addChild', function () {
    if ('repeating' === this.type) {
        Array
            .from(this.el.querySelectorAll('.flex-field-repeating-text:not([data-flex-initialized])'))
            .map(el => {
                new RepeatingTextField(el);
            });
    }
});