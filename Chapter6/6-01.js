var Person = function (name) {
    this._name = name;
};
Person.prototype.getName = function() {
    return this._name;
};
var Suzi = new Person('Suzi');
Suzi.__proto__.getName();       // Undefined