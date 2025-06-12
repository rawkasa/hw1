var Person = function (name) {
    this._name = name;
};
Person.prototype.getName = function() {
    return this._name;
};

var Suzi = new Person('Suzi');
Suzi.__proto__.getName();       // Undefined

var Suzi = new Person('Suzi');
Suzi.__proto__._name = 'SUZI__proto__';
Suzi.__proto__.getName();       // SUZI__proto__

var Suzi = new Person('Suzi', 20);
Suzi.getName();            // Suzi
var iu = new Person('Jieun', 20);
iu.getName();            // Jieun