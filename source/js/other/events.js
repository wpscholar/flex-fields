const Events = function () {
    this.listeners = {};
};

Events.prototype = {
    addEventListener: function (type, callback, scope = null) {
        const listener = {type, callback, scope};
        if (this.listeners[type]) {
            this.listeners[type].push(listener);
        } else {
            this.listeners[type] = [listener];
        }
        return listener;
    },
    removeEventListener: function (listener) {
        const listeners = this.listeners[listener.type];
        if (listeners) {
            const index = listeners.indexOf(listener);
            if (index > -1) {
                this.listeners[listener.type] = listeners.splice(index, 1);
            }
        }

    },
    dispatch: function (type, data = {}) {
        if (this.listeners[type]) {
            this.listeners[type].forEach(function (listener) {
                listener.callback.apply(listener.scope, [{type, ...data}]);
            });
        }
    }
};


window.flexFields = window.flexFields || {};

window.flexFields.events = new Events();