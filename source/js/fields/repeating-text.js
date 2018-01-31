import {RepeatingTextField} from '../classes/RepeatingTextField';

Array
    .from(document.querySelectorAll('.flex-field-repeating-text'))
    .map(el => new RepeatingTextField(el));