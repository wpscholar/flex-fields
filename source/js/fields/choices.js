import {ChoicesField} from "../classes/ChoicesField";

Array
    .from(document.querySelectorAll('.flex-field-autocomplete, .flex-field-choices'))
    .map(el => new ChoicesField(el));