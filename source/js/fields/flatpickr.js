import flatpickr from 'flatpickr';
import confirmDatePlugin from 'flatpickr/dist/plugins/confirmDate/confirmDate';
import decode from 'lodash.unescape';

Array
    .from(document.querySelectorAll('.flex-field-flatpickr'))
    .forEach(
        (field) => {

            const input = field.querySelector('[data-flatpickr]');
            const config = JSON.parse(decode(input.getAttribute('data-flatpickr')));

            config.onReady = (dateObj, dateStr, instance) => {

                const clearBtn = field.querySelector('.flatpickr-reset');

                clearBtn.addEventListener('click', (e) => {
                    e.preventDefault();
                    instance.clear();
                    instance.close();
                });

            };

            config.plugins = [new confirmDatePlugin({})];

            flatpickr(input, config);
        }
    );