var curry3 = function (func) {
    return function (a) {
        return function (b) {
            return func(a, b);
        };
    };
};

var getMaxWith10 = curry3(Math.max)(10);
console.log(getMaxWith10(0));               //10
console.log(getMaxWith10(25));              //25

var getMinWith10 = curry3(Math,min)(10);
console.log(getMinWith10(0));               //0
console.log(getMinWith10(25));              //10