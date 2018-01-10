import Choices from 'choices.js';
import decode from 'lodash.unescape';

Array
    .from(document.querySelectorAll('.flex-field [data-choices]'))
    .forEach(
        (input) => {

            input.addEventListener('click', function (e) {
                e.stopPropagation();
            });

            const config = JSON.parse(decode(input.getAttribute('data-choices')));

            input.data = {
                'Choices': new Choices(input, config)
            };

        }
    );