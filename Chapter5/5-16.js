var debounce = function (eventName, func, wait) {
    var timeoutId = null;
    return function (event) {
    console.log(eventName, 'event 발생');
        var self = this;
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func.bind(self, event), wait);
    }
};