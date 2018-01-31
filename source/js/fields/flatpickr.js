import {FlatpickrField} from "../classes/FlatpickrField";

Array
    .from(document.querySelectorAll('.flex-field-flatpickr'))
    .map(el => new FlatpickrField(el));