import {TinyMceField} from '../classes/TinyMceField';
import {flexFields} from "../classes/FlexFields";

Array
    .from(document.querySelectorAll('.flex-field-tinymce'))
    .map(el => new TinyMceField(el));

// Ensure TinyMCE field works when in a repeating field.
flexFields.addEventListener('addChild', function () {
    if ('repeating' === this.type) {
        Array
            .from(this.el.querySelectorAll('.flex-field-tinymce'))
            .map(el => {
                const textarea = el.querySelector('textarea');
                textarea.setAttribute('id', textarea.getAttribute('id').replace('x', this._index));
                const tinyMce = new TinyMceField(el);
                tinyMce.setup();
            });
    }
});