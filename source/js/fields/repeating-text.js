Array
    .from(document.querySelectorAll('.flex-field-repeating-text'))
    .forEach((field) => {

        const container = field.querySelector('fieldset > div');
        const template = container.lastElementChild.cloneNode(true);
        const addButton = field.querySelector('fieldset > button');
        const deleteButtons = container.querySelectorAll('button');

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

    });