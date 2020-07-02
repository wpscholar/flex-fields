import decode from 'lodash/unescape';

import {Field} from "./Field";
import {flexFields} from "./FlexFields";

export class TinyMceField extends Field {

    constructor(el) {
        super(el);
        window.addEventListener('load', this.setup.bind(this));
    }

    setup() {
        wp.editor.initialize(this.textarea.id, this.config);
        this._editor = window.tinymce.get(this.name);
    }

    appendContent(content) {
        this.setContent(this.content + content);
    }

    setContent(content) {
        this._editor.setContent(content);
    }

    focus() {
        this.editor.focus();
        this.editor.selection.select(this.editor.getBody(), true);
        this.editor.selection.collapse(false);
    }

    get config() {
        return JSON.parse(decode(this.textarea.getAttribute('data-config')));
    }

    get content() {
        return this._editor.getContent();
    }

    get editor() {
        return this._editor;
    }

    get textarea() {
        return this.el.querySelector('textarea');
    }

}

flexFields.addFieldClass(TinyMceField);
