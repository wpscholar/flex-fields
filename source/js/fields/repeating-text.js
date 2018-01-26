function initialize(field) {

    const container = field.querySelector('.flex-field-collection');
    const template = field.querySelector('.flex-field-collection').lastElementChild.cloneNode(true);
    const addButton = field.querySelector('[data-action="add"]');
    const deleteButtons = field.querySelectorAll('[data-action="delete"]');

    const deleteEventHandler = function () {
        this.parentNode.parentNode.removeChild(this.parentNode);
    };

    addButton.addEventListener('click', () => {
        const node = template.cloneNode(true);
        node.querySelector('button').addEventListener('click', deleteEventHandler);
        container.appendChild(node);
    });

    Array.from(deleteButtons).forEach((deleteButton) => {
        deleteButton.addEventListener('click', deleteEventHandler)
    });

}

Array
    .from(document.querySelectorAll('.flex-field-repeating-text'))
    .map(initialize);

window.flexFields = window.flexFields || {};

window.flexFields.repeatingText = {
    initialize: initialize
};