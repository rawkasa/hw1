var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');         // (공통 코드)

var alertFruitBinder = function (fruit) {
    return function () {
        alert('your choice is ' + fruit);
    };
};
fruits.forEach(function (fruit) {
    var $li = document.createElement('li'); 
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruitBinder(fruit)); // (변경된 부분)
    $ul.appendChild($li); 
});
document.body.appendChild($ul);
alertFruit(fruits[1]);