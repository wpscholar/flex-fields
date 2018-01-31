class FlexFields {

    constructor() {
        this.classes = {};
        this.listeners = {};
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

    dispatch(type, data = {}, scope = null) {
        if (this.listeners[type]) {
            this.listeners[type].forEach(function (listener) {
                listener.callback.apply(scope, [{...data, type}]);
            });
        }
    }

    addFieldClass(classFunction) {
        this.classes[classFunction.name] = classFunction;
    }

    getFieldClass(className) {
        return this.classes[className];
    }

    hasFieldClass(className) {
        return typeof this.classes[className] !== 'undefined';
    }

}

const flexFields = new FlexFields();

if (window.flexFields) {
    for (const [key, value] of Object.entries(window.flexFields)) {
        if (!flexFields.hasOwnProperty(key)) {
            flexFields[key] = value;
        }
    }
}

window.flexFields = flexFields;

export {flexFields};