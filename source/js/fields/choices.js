import {ChoicesField} from "../classes/ChoicesField";

Array
    .from(document.querySelectorAll('.flex-field-autocomplete, .flex-field-choices, .flex-field-choices-input'))
    .map(el => new ChoicesField(el));