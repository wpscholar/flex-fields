import {Field} from "./Field";
import {flexFields} from "./FlexFields";

export class RepeatingField extends Field {

    constructor(el) {

        super(el);

        this._name = this._name.replace('[x]', '');

        const addButton = el.querySelector('[data-action="add"][data-action-type="repeating"]');
        const deleteButtons = el.querySelectorAll('[data-action="delete"][data-action-type="repeating"]');
        const templateWrapper = el.querySelector('.flex-field-template');

        // Remove template wrapper and contents from DOM (don't want to submit with form)
        templateWrapper.parentNode.removeChild(templateWrapper);

        // Set index
        this._index = this.count;

        // Set field type
        this._type = 'repeating';

        // Set template to be used for child fields
        this._template = templateWrapper.firstElementChild.cloneNode(true);

        // Setup click handler for add button
        addButton.addEventListener('click', this.onClickAddButton.bind(this));

        // Setup click handler for delete buttons
        Array.from(deleteButtons).forEach((deleteButton) => {
            deleteButton.addEventListener('click', this.onClickDeleteButton.bind(this));
        });

    }

    onClickAddButton() {
        const target = this.template;

        // Setup click handler for delete button
        target.lastElementChild.addEventListener('click', this.onClickDeleteButton.bind(this));

        // Replace field names as needed
        Array.from(target.querySelectorAll(`[name*="${this.name}[x]"]`)).forEach((el) => {
            let name = el.getAttribute('name');
            el.setAttribute('name', name.replace(`${this.name}[x]`, `${this.name}[${this._index}]`));
        });

        // Append new element to DOM
        this.container.appendChild(target);

        // Dispatch our custom addChild event
        this.dispatch('addChild', {target});

        // Globally dispatch
        flexFields.dispatch('addChild', {target}, this);

        this._index++;
    }

    onClickDeleteButton(e) {
        this.container.removeChild(e.target.parentNode);
    }

    get children() {
        return Array.from(this.container.children);
    }

    get container() {
        return this.el.querySelector('.flex-field-collection');
    }

    get count() {
        return this.children.length;
    }

    get template() {
        return this._template.cloneNode(true);
    }

}

flexFields.addFieldClass(RepeatingField);