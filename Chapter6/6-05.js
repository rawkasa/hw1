var Person = function (name) {
    this.name = name;
};
var p1 = new Person('사람1');                       // (name: '사람1') true
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('사람2'); // (name: '사람2') true
var p3 = new p1Proto.constructor('사람3');          // (name: '사람3') true
var p4 = new p1.__proto__.constructor('사람4');     // (name: '사람4') true
var p5 = new p1.contructor('사람5');                // (name: '사람5') true

[p1, p2, p3, p4, p5].forEach(function (p) {
    console.log(p, p instanceof Person);
});