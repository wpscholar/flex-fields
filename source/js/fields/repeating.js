Array
    .from(document.querySelectorAll('.flex-field-repeating'))
    .forEach((field) => {

        let index;

        const container = field.querySelector('.flex-field-collection');
        const templateWrapper = field.querySelector('.flex-field-template');
        const template = templateWrapper.firstElementChild.cloneNode(true);
        const addButton = field.querySelector('[data-action="add"]');
        const deleteButtons = field.querySelectorAll('[data-action="delete"]');
        const fieldName = templateWrapper.getAttribute('data-action');

        const deleteEventHandler = function () {
            this.parentNode.parentNode.removeChild(this.parentNode);
        };

        index = container.childElementCount;

        templateWrapper.parentNode.removeChild(templateWrapper);

        addButton.addEventListener('click', () => {
            const node = template.cloneNode(true);
            node.querySelector('button').addEventListener('click', deleteEventHandler);
            Array.from(node.querySelectorAll(`[name*="${fieldName}[x]"]`)).forEach((el) => {
                let name = el.getAttribute('name');
                el.setAttribute('name', name.replace(`${fieldName}[x]`, `${fieldName}[${index}]`));
            });
            container.appendChild(node);
            index++;
        });

        Array.from(deleteButtons).forEach((deleteButton) => {
            deleteButton.addEventListener('click', deleteEventHandler)
        });

    });