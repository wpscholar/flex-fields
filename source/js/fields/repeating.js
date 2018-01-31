import {RepeatingField} from "../classes/RepeatingField";

Array
    .from(document.querySelectorAll('.flex-field-repeating'))
    .map(el => new RepeatingField(el));