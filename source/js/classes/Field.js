export class Field {

    constructor(el) {

        this.listeners = {};

        // Make field instance accessible from element
        el.flexField = this;

        // Make element accessible from field instance
        this.el = el;

        // Set field name
        this._name = el.getAttribute('data-name');

        // Set field type (defaults to input, subclasses should override)
        this._type = el.getAttribute('data-type');

        // Set default value (subclasses should override)
        this._value = '';
    }

    addEventListener(type, callback) {
        const listener = {type, callback};
        if (this.listeners[type]) {
            this.listeners[type].push(listener);
        } else {
            this.listeners[type] = [listener];
        }
        return listener;
    }

    removeEventListener(listener) {
        const listeners = this.listeners[listener.type];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                this.listeners[listener.type] = listeners.splice(index, 1);
            }
        }

    }

    dispatch(type, data = {}) {
        if (this.listeners[type]) {
            this.listeners[type].forEach(listener => {
                listener.callback.apply(this, [{...data, type}]);
            });
        }
    }

    show() {
        this.el.removeAttribute('hidden');
    }

    hide() {
        this.el.setAttribute('hidden', 'hidden');
    }

    get type() {
        return this._type;
    }

    get name() {
        return this._name;
    }

    get value() {
        return this._value;
    }

    set value(value) {
        this._value = value;
    }

}