import {AjaxUploadField} from "../classes/AjaxUploadField";

Array
    .from(document.querySelectorAll('.flex-field-ajax-upload'))
    .map(el => new AjaxUploadField(el));