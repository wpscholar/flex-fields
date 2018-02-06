import {TinyMceField} from '../classes/TinyMceField';

Array
    .from(document.querySelectorAll('.flex-field-tinymce'))
    .map(el => new TinyMceField(el));