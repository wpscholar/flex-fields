import {Field} from "./Field";
import {flexFields} from "./FlexFields";

export class RepeatingTextField extends Field {

    constructor(el) {

        super(el);

        // Setup template
        this._template = this.container.lastElementChild.cloneNode(true);

        const addButton = this.el.querySelector('[data-action="add"]');
        const deleteButtons = this.el.querySelectorAll('[data-action="delete"]');

        this.el.setAttribute('data-flex-initialized', '');

        // Add click handler for add button
        addButton.addEventListener('click', this.onClickAddButton.bind(this));

        Array.from(deleteButtons).forEach(el => el.addEventListener('click', this.onClickDeleteButton.bind(this)));

    }

    onClickAddButton() {
        const target = this.template;
        const deleteButton = target.querySelector('button');

        // Add handler for delete button
        deleteButton.addEventListener('click', this.onClickDeleteButton.bind(this));

        this.container.appendChild(target);
        this.dispatch('addChild', {target});

    }

    onClickDeleteButton(e) {
        this.container.removeChild(e.target.parentNode);
    }

    get container() {
        return this.el.querySelector('.flex-field-collection');
    }

    get template() {
        return this._template.cloneNode(true);
    }

}

flexFields.addFieldClass(RepeatingTextField);