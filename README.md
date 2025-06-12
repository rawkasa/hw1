<h3 align="center">사물인터넷 김도형 예제풀이</h3>

<div align="center">

</div>

---

<p align="center"> 사물인터넷 HW를 올리기 위한 김도형의 레포지토리입니다.
    <br> 
</p>

## 📝 Table of Contents

- [Chatper1](#chapter1)
- [Chatper2](#chapter2)
- [Chatper3](#chapter3)
- [Chatper4](#chapter4)
- [Chatper5](#chapter5)
- [Chatper6](#chapter6)
- [Chatper7](#chapter7)
- [Acknowledgement](#acknowledgement)


# HW1

## Chatper1 <a name = "chapter1"></a>

### 1-1

객체의 선언

```js
var a;  // 변수 a
```

### 1-2

참조값과 데이터 내에는 변경되는 것과 불변적인 성질이 따로 존재함

```js
var a;          // 변수 a 선언
a = 'abc';      // 변수 a에 데이터 할당

var a = 'abc';  // 변수 선언과 할당을 한 문장으로 표현
```

### 1-3

데이터 재할당 예시

```js
var a = 'abc';
a = a + 'def';  // 변수 a에 데이터 재할당, a = 'abcdef'

var b = 5;
var c = 5;
b = 7;          // 변수 b에 데이터 재할당, b = 7
```

### 1-4

객체(Object)는 참조형 데이터로, 변수에 객체의 주소(참조값)가 저장됨

```js
var obj1 = {
    a: 1,
    b: 'bbb',
};
```

### 1-5

객체{}는 참조형 데이터이며, 변수 obj1은 객체 자체가 아닌 참조값을 저장함. 이 때, a가 상수(constant)라면 변경불가능(immutable)한 기본형(primitive type)임.

```js
var obj1 = {
    a: 1,
    b: 'bbb',
};
obj1.a = 2;
```

### 1-6

중첩된 참조형 객체의 경우, 배열 자체가 아닌 참조값을 저장함.

```js
var obj = {
    x: 3,
    arr: [3, 4, 5],
};
```

### 1-7

Primitive Type은 값 자체를 복사함. 그러나, 객체는 참조값을 복사함.

```js
var a = 10;
var b = a; // b = 10

var obj1 = {C: 10, d: 'ddd'};
var obj2 = obj1; // obj2 = {C: 10, d: 'ddd'}
```

### 1-8

Primitive type 데이터를 복사할 경우, 복사된 데이터를 변경하여도 원본 데이터는 변경되지 않으나, 참조형 데이터를 복사할 경우 단순 값이 아닌 참조값을 복사한 것이기에 복사된 데이터를 변경하면 변경 내용이 원본에도 공유됨. 

```js
var a = 10;
var b = a;
var obj1 = {c: 10, d: 'ddd'};
var obj2 = obj1;

b = 15;
obj2.c = 20;
```

### 1-9

Primitive type 데이터를 복사 후 변경해도 반영되지 않음. 더불어, 객체를 복사 후 재할당하면 참조값 자체가 변경되기에, 데이터를 변경하여도 이는 원본 데이터에 반영되지 않음(독립적).

```js
var a = 10;
var b = a;
var obj1 = {c: 10, d: 'ddd'};
var obj2 = obj1;

b = 15;
obj2 = {c: 20, d: 'ddd'};
```

### 1-10

위의 내용들을 반영할 경우, 아래 newUser는 user 객체의 참조값을 복사하였으며, 이에 따라 프로퍼티 변경이 원본과도 공유됨.

```js
var user = {
    name: 'Jaenam',
    gender: 'male',
};

var changeName = function(user, newName) {
    var newUser = user;
    newUser.name = newName;
    return newUser;
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.');
}
console.log(user.name, user2.name); // Jung Jung
console.log(user === user2); // true
```

### 1-11

이 경우 새로운 객체를 만들게 됨. 다만, 하드코딩 되었음.

```js
var user = {
    name: 'Jaenam',
    gender: 'male',
};

var changeName = function(user, newName) {
    return {
    name: newName,
    gender: user.gender,
    };
};

var user2 = changeName(user, 'Jung');

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
}
console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2); // false
```

### 1-12

아래 함수는 기존 정보를 복사해서 새로운 객체를 반환함

```js
var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};
```

### 1-13

copyObject 함수는 기존 객체의 프로퍼티를 사용해 별개의 참조값을 사용하는 새로운 객체를 반환하기에, 원본 객체에는 영향을 주지 않을 수 있음.

```js
var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};
    
var user = {
    name: 'Jaenam',
    gender: 'male',
};

var user2 = copyObject(user);
user2.name = 'Jung';

if (user !== user2) {
    console.log('유저 정보가 변경되었습니다.'); // 유저 정보가 변경되었습니다.
}
console.log(user.name, user2.name); // Jaenam Jung
console.log(user === user2); // false
```

### 1-14

중첩된 객체의 경우, 얕은 복사 과정에서 복사되지 않고 참조값만 복사됨. 즉, 아래의 user.urls(urls.portfolio, urls.blog, urls.facebook)는 서로 공유됨. 이를 해결하기 위해서는 깊은 복사가 필요함.

```js
var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};
    
var user = {
    name: 'Jaenam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc',
    },
};
var user2 = copyObject(user);
user2.name = 'Jung';
    
console.log(user.name === user2.name); // false

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // true

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // true
```

### 1-15

이 경우, 최상위 객체와 중첩된 객체(urls)를 별도로 한 번 더 복사 및 할당함. 따라서 user.urls와 user2.urls는 각각 독립적인 객체를 참조하나, 그 아래 단계의 객체(user.urls.portfolio, blog, facebook)은 여전히 얕은 복사가 이루어졌기에에 독립적이지 못함.

```js
var copyObject = function(target) {
    var result = {};
    for (var prop in target) {
        result[prop] = target[prop];
    }
    return result;
};
    
var user = {
    name: 'Jaenam',
    urls: {
        portfolio: 'http://github.com/abc',
        blog: 'http://blog.com',
        facebook: 'http://facebook.com/abc',
    },
};

var user2 = copyObject(user);
user2.urls = copyObject(user.urls);

user.urls.portfolio = 'http://portfolio.com';
console.log(user.urls.portfolio === user2.urls.portfolio); // false

user2.urls.blog = '';
console.log(user.urls.blog === user2.urls.blog); // false  
```

### 1-16

객체의 깊은 복사를 수행하는 범용 함수

```js
var copyObjectDeep = function(target) {
    var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};  
```

### 1-17

재귀적 깊은 복사를 수행하는 함수. 다만, 배열(array)을 처리하는 부분이 누락되어 있어 배열을 객체{}로 잘못 복사하게 됨.

```js
var copyObjectDeep = function(target) {
var result = {};
    if (typeof target === 'object' && target !== null) {
        for (var prop in target) {
            result[prop] = copyObjectDeep(target[prop]);
        }
    } else {
        result = target;
    }
    return result;
};

var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
    },
};
var obj2 = copyObjectDeep(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // { a: 1. b: { c: null, d: [1, 3] } }
console.log(obj2); // { a: 3. b: { c: 4, d: { 0: 1, 1: 2 } } }  
```

### 1-18

JSON을 통해 깊은 복사를 수행하는 방법. 다만, 이 경우 일부 데이터(함수 등)을 복사하지 못하고 제거(누락)됨.

```js
var copyObjectViaJSON = function(target) {
    return JSON.parse(JSON.stringify(target));
};
var obj = {
    a: 1,
    b: {
        c: null,
        d: [1, 2],
        func1: function() {
            console.log(3);
        },
    },
    func2: function() {
        console.log(4);
    },
};
var obj2 = copyObjectViaJSON(obj);

obj2.a = 3;
obj2.b.c = 4;
obj.b.d[1] = 3;

console.log(obj); // { a: 1. b: { c: null, d: [1, 3], func1: f() }, func2: f() }
console.log(obj2); // { a: 3. b: { c: 4,    d: [1, 2] } }
```

### 1-19

선언된 변수에 값이 없으면 undefined가 기본 할당되어 접근시 undefined값을 반환함. 그러나, 존재하지 않는 프로퍼티에 접근시 에러를 반환함. 또한, 함수가 아무 값도 반환하지 않으면 undefined가 반환됨.

```js
var a;
console.log(a); // (1) undefined. 값을 대입하지 않은 변수에 접근

var obj = { a: 1 };
console.log(obj.a); // 1
console.log(obj.b); // (2) 존재하지 않는 프로퍼티에 접근
console.log(b); // c.f) ReferenceError: b is not defined

var func = function() {};
var c = func(); // (3) 반환(return)값이 없으면 undefined를 반환한 것으로 간주.
console.log(c); // undefined
```

### 1-20

빈 배열은 빈 슬롯(empty slot)으로 처리하며, 다만 undefined는 명시적으로 값임. 다만, 동일한 falsy값이자 의도적으로 비어있음을 표현하는 null을 써야 함.

```js
var arr1 = [];
arr1.length = 3;
console.log(arr1); // [empty x 3]

var arr2 = new Array(3);
console.log(arr2); // [empty x 3]

var arr3 = [undefined, undefined, undefined];
console.log(arr3); // [undefined, undefined, undefined]
```

### 1-21

빈 슬롯(empty slot)은 순회 메서드에서 무시됨.

```js
var arr1 = [undefined, 1];
var arr2 = [];
arr2[1] = 1;

arr1.forEach(function(v, i) {
  console.log(v, i);
}); // undefined 0 / 1 1
arr2.forEach(function(v, i) {
  console.log(v, i);
}); // 1 1

arr1.map(function(v, i) {
  return v + i;
}); // [NaN, 2]
arr2.map(function(v, i) {
  return v + i;
}); // [empty, 2]

arr1.filter(function(v) {
  return !v;
}); // [undefined]
arr2.filter(function(v) {
  return !v;
}); // []

arr1.reduce(function(p, c, i) {
  return p + c + i;
}, ''); // undefined011
arr2.reduce(function(p, c, i) {
  return p + c + i;
}, ''); // 11
```

### 1-22

null은 primitive인 falsy임에도 버그로 인해 typeof에서 object를 반환함. ==는 형변환을 수행하기에 null과 undefined를 같다고 판단하나, ===는 타입과 값까지 정확히 비교해 null과 undefined를 다르다고 판단함.

```js
var n = null;
console.log(typeof n); // object

console.log(n == undefined); // true
console.log(n == null); // true

console.log(n === undefined); // false
console.log(n === null); // true
```

## Chatper2 <a name = "chapter2"></a>

### 2-1

JS는 Declaration과 Expression를 구분하여 구동됨. Declaration을 찾는 것을 Hoisting이라 하며, 이후 Execution이 수행됨. 구체적으로, Globar Execution Context -> Outer Execution Context -> Inner Execution Context 순으로 콜 스택에 쌓임.

```js
// --------------------------------- (1)
var a = 1;
function outer() {
    function inner() {
        console.log(a); // undefined
        var a = 3;
    }
    inner(); // -------------------- (2)
    console.log(a); // 1
}
outer(); // ------------------------ (3)
console.log(a); // 1
```

### 2-2

해당 함수에서는 각 순서대로 1, undefined, 2가 출력될 것 같으나, 실제로는 1, 1, 2가 출력됨. 이는 Execution Context 상 함수 내에서 매개변수와 변수 선언은 함수 맨 위로 끌어올려져(호이스팅) 처리되기 때문.

```js
function a(x) {
    // 수집 대상 1(매개변수)
    console.log(x); // (1)
    var x; // 수집 대상 2(변수 선언)
    console.log(x); // (2)
    var x = 2; // 수집 대상 3(변수 선언)
    console.log(x); // (3)
}
a(1);
```

### 2-3

같은 변수 이름으로 여러 번 선언되면 호이스팅 단계에서 한 번만 선언된 것으로 간주됨.

```js
function a() {
    var x = 1; // 수집 대상 1(매개변수 선언)
    console.log(x); // (1)
    var x; // 수집 대상 2(변수 선언)
    console.log(x); // (2)
    var x = 2; // 수집 대상 3(변수 선언)
    console.log(x); // (3)
}
a();
```

### 2-4

중복된 변수 선언은 호이스팅 단계에서 맨 위에서 한 번만 선언된 것으로 간주됨. 더불어, 함수 호출 시 인자 개수가 매개변수보다 많으면 초과 인자는 무시됨.

```js
function a() {
    var x; // 수집 대상 1의 변수 선언 부분
    var x; // 수집 대상 2의 변수 선언 부분
    var x; // 수집 대상 3의 변수 선언 부분

    x = 1; // 수집 대상 1의 할당 부분
    console.log(x); // (1)
    console.log(x); // (2)
    x = 2; // 수집 대상 3의 할당 부분
    console.log(x); // (3)
}
a(1);
```

### 2-5

호이스팅시 함수 선언은 변수 선언보다 우선적으로 처리됨 

```js
function a() {
    console.log(b); // (1)
    var b = 'bbb'; // 수집 대상 1(변수 선언)
    console.log(b); // (2)
    function b() {} // 수집 대상 2(함수 선언)
    console.log(b); // (3)
}
a();
```

### 2-6

호이스팅시 함수 선언은 변수 선언보다 우선적으로 전체(선언+정의)가 처리되며, 변수 선언은 선언부만 처리됨

```js
function a() {
    var b; // 수집 대상 1. 변수는 선언부만 끌어올립니다.
    function b() {} // 수집 대상 2. 함수 선언은 전체를 끌어올립니다.

    console.log(b); // (1)
    b = 'bbb'; // 변수의 할당부는 원래 자리에 남겨둡니다.
    console.log(b); // (2)
    console.log(b); // (3)
}
a();
```

### 2-7

호이스팅시 함수 표현식은 끌어올려지지 않고 그대로 남음

```js
function a() {
    var b;
    var b = function b() {}; // <- 바뀐 부분

    console.log(b); // (1)
    b = 'bbb';
    console.log(b); // (2)
    console.log(b); // (3)
}
a();
```

### 2-8

기명 함수 표현식 사용시 외부에서는 함수명으로 함수를 호출할 수 없음

```js
function a() {
    /* ... */
} // 함수 선언문. 함수명 a가 곧 변수명.
a(); // 실행 OK.

var b = function() {
    /* ... */
}; // (익명) 함수 표현식. 변수명 b가 곧 함수명.
b(); // 실행 OK.

var c = function d() {
    /* ... */
}; // 기명 함수 표현식. 변수명은 c, 함수명은 d.
c(); // 실행 OK.
d(); // 에러!
```

### 2-9

함수 선언문은 전체가 호이스팅되어 미리 준비되므로 함수 호출이 가능하나, 함수 표현식은 선언만 호이스팅되기에 호출 불가능함

```js
console.log(sum(1, 2));
console.log(multiply(3, 4));

function sum(a, b) {
    // 함수 선언문 sum
    return a + b;
}

var multiply = function(a, b) {
    // 함수 표현식 multiply
    return a * b;
};
```

### 2-10

함수 선언문은 전체가 호이스팅되어 미리 준비되므로 함수 호출이 가능하나, 함수 표현식은 선언만 호이스팅되기에 호출 불가능함 

```js
var sum = function sum(a, b) {
    // 함수 선언문은 전체를 호이스팅합니다.
    return a + b;
};
var multiply; // 변수는 선언부만 끌어올립니다.
console.log(sum(1, 2));
console.log(multiply(3, 4));

multiply = function(a, b) {
    // 변수의 할당부는 원래 자리에 남겨둡니다.
    return a * b;
};
```

### 2-11

함수 선언문이 중복 선언될 경우 호이스팅 과정에서서 나중에 선언된 함수가 앞서 선언된 함수를 덮어씀 

```js
console.log(sum(3, 4));

function sum(x, y) {
    return x + y;
}

var a = sum(1, 2);

function sum(x, y) {
    return x + ' + ' + y + ' = ' + (x + y);
}

var c = sum(1, 2);
console.log(c);
```

### 2-12

호이스팅 과정에서 변수 선언만 끌어올려지고 나머지 부분은 그대로 남음 

```js
console.log(sum(3, 4)); // Uncaught Type Error: sum is not a function

var sum = function(x, y) {
    return x + y;
};

var a = sum(1, 2);

var sum = function(x, y) {
    return x + ' + ' + y + ' = ' + (x + y);
};

var c = sum(1, 2);
console.log(c);
```

### 2-13

Identifier는 Scope(r/w)와 Lifetime(Callstack)으로 나뉘며, 함수 내부에서 선언된 변수는 내부 함수의 지역 변수로서 전역 변수를 가림

```js
var a = 1;
var outer = function() {
    var inner = function() {
        console.log(a);
        var a = 3;
    };
    inner();
    console.log(a);
};
outer();
console.log(a);
```

## Chatper3 <a name = "chapter3"></a>

### 3-1

전역 공간에서의 This는 전역 객체를 가리킴

```js
console.log(this); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(window); // { alert: f(), atob: f(), blur: f(), btoa: f(), ... }
console.log(this === window); // true
```

### 3-2

전역 공간에서의 This는 전역 객체를 가리킴. 전역 컨텍스트를 생성하는 주체가 전역 객체이기 때문

```js
console.log(this); // { process: { title: 'node', version: 'v10.13.0',... } }
console.log(global); // { process: { title: 'node', version: 'v10.13.0',... } }
console.log(this === global); // true
```

### 3-3

전역 변수가 선언될 경우, 역시 This는 window를 가리킴

```js
var a = 1;
console.log(a); // 1
console.log(window.a); // 1
console.log(this.a); // 1
```

### 3-4

자바스크립트의 모든 변수는 특정 객체의 프로퍼티로서 동작함 

```js
var a = 1;
window.b = 2;
console.log(a, window.a, this.a); // 1 1 1
console.log(b, window.b, this.b); // 2 2 2

window.a = 3;
b = 4;
console.log(a, window.a, this.a); // 3 3 3
console.log(b, window.b, this.b); // 4 4 4
```

### 3-5

전역 변수를 선언할 경우, 해당 프로퍼티의 configurable 속성(변경 및 삭제 가능성)이 false가 됨

```js
var a = 1;
delete window.a; // false
console.log(a, window.a, this.a); // 1 1 1

var b = 2;
delete b; // false
console.log(b, window.b, this.b); // 2 2 2

window.c = 3;
delete window.c; // true
console.log(c, window.c, this.c); // Uncaught ReferenceError: c is not defined

window.d = 4;
delete d; // true
console.log(d, window.d, this.d); // Uncaught ReferenceError: d is not defined
```

### 3-6

This는 함수 호출 방식에 따라 값이 결정됨. 일반 함수 호출의 경우 global 값이 나오나, 메서드 호출의 경우 메서드를 호출한 객체가 됨

```js
var func = function(x) {
    console.log(this, x);
};
func(1); // Window { ... } 1

var obj = {
    method: func,
};
obj.method(2); // { method: f } 2
```

### 3-7

This는 점 표기법 또는 대괄호 표기법에 상관없이 메서드를 호출한 객체가 됨

```js
var obj = {
    method: function(x) {
        console.log(this, x);
    },
};
obj.method(1); // { method: f } 1
obj['method'](2); // { method: f } 2
```

### 3-8

This는 메서드 호출 시점에 따라 대상 객체가 달라짐

```js
var obj = {
    methodA: function() { console.log(this); },
    inner: {
        methodB: function() { console.log(this); },
    },
};
obj.methodA();              // { methodA: f, inner: {...} } ( === obj)
obj['methodA']();           // { methodA: f, inner: {...} } ( === obj)

obj.inner.methodB();        // { methodB: f }               ( === obj.inner)
obj.inner['methodB']();     // { methodB: f }               ( === obj.inner)
obj['inner'].methodB();     // { methodB: f }               ( === obj.inner)
obj['inner']['methodB']();  // { methodB: f }               ( === obj.inner)
```

### 3-9

This는 일반 함수 호출시 전역 객체를 가져오나, 메서드 호출 시 호출한 객체를 가져옴

```js
var obj1 = {
    outer: function() {
        console.log(this); // (1)
        var innerFunc = function() {
            console.log(this); // (2) (3)
        };
        innerFunc();
    
        var obj2 = {
            innerMethod: innerFunc,
        };
        obj2.innerMethod();
    },
};
obj1.outer();
```

### 3-10

일반 함수인 내부 함수 호출시 This는 기본적으로 전역 객체를 가져오며, 내부 함수에서 외부 메서드의 This를 가져오려면 self를 사용해야 함

```js
var obj = {
    outer: function() {
        console.log(this);              // (1) { outer: f }
        var innerFunc1 = function() {
            console.log(this);          // (2) Window { ... }
        };
        innerFunc1();
    
        var self = this;
        var innerFunc2 = function() {
            console.log(self);          // (3) { outer: f }
        };
        innerFunc2();
    },
};
obj.outer();
```

### 3-11

Arrow Function을 사용시 This가 존재하지 않아, Scope chain을 따라서 This를 찾음

```js
var obj = {
    outer: function() {
      console.log(this);        // (1) { outer: f }
        var innerFunc = () => {
            console.log(this);  // (2) { outer: f }
        };
        innerFunc();
    },
};
obj.outer();
```

### 3-12

콜백 함수 내부에서의 This는 전역 객체임. 배열에서의 This는 전역 객체이나, 두 번째 인자를 제공하면 해당 인자가 콜백 함수 내의 This가 됨. 이벤트 핸들러 콜백함수의 This는 이벤트가 발생된 DOM(Document Object Model) 요소를 가리킴.

```js
setTimeout(function() { console.log(this); }, 300);         // (1)

[1, 2, 3, 4, 5].forEach(function(x) {                       // (2)
    console.log(this, x);
});

document.body.innerHTML += '<button id="a">클릭</button>';
document.body.querySelector('#a')
    .addEventListener('click', function(e) {                // (3)
        console.log(this, e);
    });
```

### 3-13

생성자 함수 내부에서 This는 새롭게 생성되는 객체를 가리킴

```js
var Cat = function(name, age) {
    this.bark = '야옹';
    this.name = name;
    this.age = age;
};
var choco = new Cat('초코', 7);
var nabi = new Cat('나비', 5);
console.log(choco, nabi);

/* 결과
Cat { bark: '야옹', name: '초코', age: 7 }
Cat { bark: '야옹', name: '나비', age: 5 }
*/
```

### 3-14

call 메서드를 사용하면 명시적으로 this를 바인딩 할 수 있음

```js
var func = function(a, b, c) {
    console.log(this, a, b, c);
};

func(1, 2, 3);                  // Window{ ... } 1 2 3
func.call({ x: 1 }, 4, 5, 6);   // { x: 1 } 4 5 6
```

### 3-15

일반적인 메서드 호출시 this는 메서드를 호출한 객체가 되나, call을 사용하면 명시적으로 this를 바인딩 할 수 있음

```js
var obj = {
    a: 1,
    method: function(x, y) {
        console.log(this.a, x, y);
    },
};

obj.method(2, 3);                   // 1 2 3
obj.method.call({ a: 4 }, 5, 6);    // 4 5 6
```

### 3-16

apply를 사용하면 명시적으로 첫 번째 인자로 this를 바인딩하며 두 번째 매개변수를 배열 형태로 전달함

```js
var func = function(a, b, c) {
    console.log(this, a, b, c);
};
func.apply({ x: 1 }, [4, 5, 6]);    // { x: 1 } 4 5 6

var obj = {
    a: 1,
    method: function(x, y) {
        console.log(this.a, x, y);
    },
};
obj.method.apply({ a: 4 }, [5, 6]); // 4 5 6
```

### 3-17

array-like object는 인덱스를 키로 가지며, length 속성을 가지고 있음. 이 때 call 메서드를 사용하면 객체에도 배열처럼 동작하여 값을 추가하거나 길이를 조정할 수 있음. 이를 통해 배열 메서드를 일반 객체에 활용 가능함

```js
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
Array.prototype.push.call(obj, 'd');
console.log(obj);                           // { 0: 'a', 1: 'b', 2: 'c', 3: 'd', length: 4 }

var arr = Array.prototype.slice.call(obj);
console.log(arr);                           // [ 'a', 'b', 'c', 'd' ]
```

### 3-18

array-like object는 직접 배열 메서드를 사용할 수 없으나, 배열 변환법을 사용해 실제 배열로 변환할 수 있으며, 이를 통해 배열 메서드를 활용할 수 있음

```js
function a() {
    var argv = Array.prototype.slice.call(arguments);
    argv.forEach(function(arg) {
        console.log(arg);
    });
}
a(1, 2, 3);

document.body.innerHTML = '<div>a</div><div>b</div><div>c</div>';
var nodeList = document.querySelectorAll('div');
var nodeArr = Array.prototype.slice.call(nodeList);
nodeArr.forEach(function(node) {
    console.log(node);
});
```

### 3-19

array-like object는 원본 문자열에 변경을 가하는 메서드는 에러를 던지며, concat처럼 대상이 반드시 배열이어야 하는 경우에 에러는 없으나 제대로 된 결과를 얻을 수 없음

```js
var str = 'abc def';

Array.prototype.push.call(str, ', pushed string');
// Error: Cannot assign to read only property 'length' of object [object String]

Array.prototype.concat.call(str, 'string'); // [String {"abc def"}, "string"]

Array.prototype.every.call(str, function(char) {
    return char !== ' ';
}); // false

Array.prototype.some.call(str, function(char) {
    return char === ' ';
}); // true

var newArr = Array.prototype.map.call(str, function(char) {
    return char + '!';
});
console.log(newArr); // ['a!', 'b!', 'c!', ' !', 'd!', 'e!', 'f!']

var newStr = Array.prototype.reduce.apply(str, [
    function(string, char, i) {
        return string + char + i;
    },
    '',
]);
console.log(newStr); // "a0b1c2 3d4e5f6"
```

### 3-20

Array.from() 메서드는 array-like object를 실제 배열로 변환하여 배열 메서드를 활용할 수 있도록 함

```js
var obj = {
    0: 'a',
    1: 'b',
    2: 'c',
    length: 3,
};
var arr = Array.from(obj);
console.log(arr); // ['a', 'b', 'c']
```

### 3-21

call/apply 메서드를 활용하면 this를 통해 생성자 내부에서 다른 생성자를 호출하고 부모 생성자의 속성을 상속받을 수 있음

```js
function Person(name, gender) {
    this.name = name;
    this.gender = gender;
}
function Student(name, gender, school) {
    Person.call(this, name, gender);
    this.school = school;
}
function Employee(name, gender, company) {
    Person.apply(this, [name, gender]);
    this.company = company;
}
var by = new Student('보영', 'female', '단국대');
var jn = new Employee('재난', 'male', '구골');
```

### 3-22

배열에서 최대/최솟값을 수해야 할 경우 apply를 사용하지 않는다면 길고 가독성 떨어지는 방식으로 직접 구현해야 함

```js
var numbers = [10, 20, 3, 16, 45];
var max = (min = numbers[0]);
numbers.forEach(function(number) {
    if (number > max) {
        max = number;
    }
    if (number < min) {
        min = number;
    }
});
console.log(max, min); // 45 3
```

### 3-23

배열 등 여러 인수를 받는 메서드에 apply를 적용하면 간단하고 가독성 좋게 구성할 수 있음

```js
var numbers = [10, 20, 3, 16, 45];
var max = Math.max.apply(null, numbers);
var min = Math.min.apply(null, numbers);
console.log(max, min); // 45 3
```

### 3-24

ES6 환경에서는 배열이나 유사배열을 개별 요소로 펼쳐서 전달하는 스프레드 연산자(...) 또한 활용 가능함

```js
const numbers = [10, 20, 3, 16, 45];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log(max, min); // 45 3
```

# HW2

## Chatper4 <a name = "chapter4"></a>

### 4-1

setInverval은 정해진 시간 간격마다 특정 동작을 반복적으로 실행할 때 사용되는 함수. 이에 따라, 콜백함수가 반복 실행되며, 반복 중지 조건을 설정할 때 조건문을 활용할 수 있음.

```js
var count = 0;
var timer = setInterval(function() {
    console.log(count);
    if (++count > 4) clearInterval(timer);
}, 300);
```

### 4-2

콜백함수는 별도의 변수로 정의해두고 명시적으로 사용할 수 있음.

```js
var count = 0;
var cbFunc = function() {
    console.log(count);
    if (++count > 4) clearInterval(timer);
};
var timer = setInterval(cbFunc, 300);

// -- 실행 결과 --
// 0  (0.3초)
// 1  (0.6초)
// 2  (0.9초)
// 3  (1.2초)
// 4  (1.5초)
```

### 4-3

map() 메서드는 콜백에서 반환된 값을 모아 새로운 배열을 만듦.

```js
var newArr = [10, 20, 30].map(function(currentValue, index) {
    console.log(currentValue, index);
    return currentValue + 5;
});
console.log(newArr);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [15, 25, 35]
```

### 4-4

map() 메서드에 명시적으로 변수를 설정해도 변화하지 않으며, 순서가 중요함.

```js
var newArr2 = [10, 20, 30].map(function(index, currentValue) {
    console.log(index, currentValue);
    return currentValue + 5;
});
console.log(newArr2);

// -- 실행 결과 --
// 10 0
// 20 1
// 30 2
// [5, 6, 7]
```

### 4-5

map() 메서드를 사용할 때, 콜백 함수와 this를 활용하여 바인딩 및 반복작업 처리가 가능함.

```js
Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || window, this[i], i, this);
        mappedArr[i] = mappedValue;
    }
    return mappedArr;
};
```

### 4-6

map() 메서드를 사용할 때, 콜백 함수와 this를 활용하여 바인딩 및 반복작업 처리가 가능함.

```js
Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || window, this[i], i, this);
        mappedArr[i] = mappedValue;
    }
    return mappedArr;
};
```

### 4-7

map() 메서드를 사용할 때, 콜백 함수와 this를 활용하여 바인딩 및 반복작업 처리가 가능함.

```js
Array.prototype.map = function(callback, thisArg) {
    var mappedArr = [];
    for (var i = 0; i < this.length; i++) {
        var mappedValue = callback.call(thisArg || window, this[i], i, this);
        mappedArr[i] = mappedValue;
    }
    return mappedArr;
};
```

### 4-8

콜백 함수를 나중에 실행할 경우, this가 변경될 수 있으며, 따라서 클로저를 사용해서 this를 콜백 함수 등에서 참조하여 해결할 수 있음.

```js
var obj1 = {
    name: 'obj1',
    func: function() {
        var self = this;
        return function() {
            console.log(self.name);
        };
    },
};
var callback = obj1.func();
setTimeout(callback, 1000);
```

### 4-9

콜백 시 this가 바뀌는 문제를 해결하기 위해서는 객체 식별자를 따로 지정하는 것이 효과적임.

```js
var obj1 = {
    name: 'obj1',
    func: function() {
        console.log(obj1.name);
    },
};
setTimeout(obj1.func, 1000);
```

### 4-10

메서드가 어느 객체를 통해 호출되었는지에 따라 this가 달라지며, 클로저를 사용해 this를 캡처하면 이후 함수가 실행되어도 원래 값을 유지할 수 있음.

```js
var obj1 = {
    name: 'obj1',
    func: function() {
        var self = this;
        return function() {
            console.log(self.name);
        };
    }
};
var callback = obj1.func();
setTimeout(callback, 1000);

var obj2 = {
    name: 'obj2',
    func: obj1.func,
};
var callback2 = obj2.func();
setTimeout(callback2, 1500);

var obj3 = { name: 'obj3' };
var callback3 = obj1.func.call(obj3);
setTimeout(callback3, 2000);
```

### 4-11

콜백 함수로 메서드를 전달할 때 bind() 메서드를 사용하면 함수 내부 this를 영구적으로 특정 객체(obj1, obj2)로 고정시킬 수 있음.

```js
var obj1 = {
    name: 'obj1',
    func: function() {
        console.log(this.name);
    },
};
setTimeout(obj1.func.bind(obj1), 1000);

var obj2 = { name: 'obj2' };
setTimeout(obj1.func.bind(obj2), 1500);
```

### 4-12

setTimeout은 timer를 사용하는 대표적 WebAPI로, 이벤트 루프를 통해 콜 스택(call stack)이 비워지면 콜백을 실행함. 해당 예제의 경우, 실행되자 마자 Hi와 Bye가 출력 되고, 5초 후 cb1이 출력됨.

```js
console.log('Hi');
setTimeout(function cb1() {
    console.log('cb1');
}, 5000);
console.log('Bye');
```

### 4-13

이 경우, 대기 시간은 0으로 설정되었으나, 콜 스택이 비워진 후 setTimeout 함수가 작동되어 순서대로 Hi, Bye, Callback이 출력됨.

```js
console.log('Hi');
setTimeout(function() {
    console.log('Callback');
}, 0);
console.log('Bye');
```

### 4-14

Promise의 내부에서, state는 {fulfilled, rejected, pending} 중 하나의 값을 가짐. 이 때, Promise가 한번 resolve 또는 reject 상태로 결정되면 이후에는 상태가 변경되지 않음.

```js
const p = new Promise((resolve, reject) => {
    resolve("foo");
    // The below 'reject()' is a no-op. A fulfilled promise stays
    // fulfilled with the same value forever.
    reject(new Error("bar"));
});
```

### 4-15

한번 reject된 Promise에서 성공 콜백(onFulfilled)은 실행되지 않으며, 에러는 그대로 전파됨.

```js
const originalError = new Error("Oops!");
const p = new Promise((_, reject) => reject(originalError))
    .then(() => console.log("This will not print"))
    .then(() => console.log("Nor will this"))
    // onFulfilled()들은 계속 지나치고,
    // 위 then() promise 각각은 originalError로 reject 합니다.
    .catch((err) => asserts.ok(err === originalError));
```

### 4-16

finally() 메서드는 Promise가 이행(fulfilled) 되었건 거부(rejected) 되었건, 최종적으로 공통된 로직(console.log("All done!"))를 수행할 수 있음.

```js
getImage(file) {
    .then(image => console.log(image))
    .catch(error => console.log(error))
    .finally(() => console.log("All done!"))}
```

### 4-17

console을 통해 Promise의 then 콜백은 setTimeout 콜백보다 먼저 실행됨을 볼 수 있음.<br/> 즉, Promise를 사용한 콜백은 Microtask, setTimeout 콜백은 Macrotask로 분류되어, 실제 실행 순서는 이벤트 루프 내 Task Queue에 의해 '동기 코드 -> Microtask(Promise then 콜백) -> Macrotask(setTimeout 콜백)' 순으로 실행됨.

```js
console.log('Start!')

setTimeout(() => {
    console.log('Timeout!')
}, 0)

Promise.resolve("Promise!")
    .then(res => console.log(res))

console.log('End!')
```

### 4-18

console을 통해 Promise의 then 콜백은 setTimeout 콜백보다 먼저 실행됨을 볼 수 있음.<br/> 즉, Promise를 사용한 콜백은 Microtask, setTimeout 콜백은 Macrotask로 분류되어, 실제 실행 순서는 이벤트 루프 내 Task Queue에 의해 '동기 코드 -> Microtask(Promise then 콜백) -> Macrotask(setTimeout 콜백)' 순으로 실행됨.

```js
function findUserAndCallBack(id, cb) {
    const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
    }
    cb(user)
}

findUserAndCallBack(1, function (user) {
    console.log("user:", user)
})
```

### 4-19

setTimeout 등 비동기 처리가 들어가는 경우, 함수 호출(findUser) 즉시 데이터 반환이 불가능함.</br> 즉, 함수 반환 시점과 비동기 완료 시점(Macrotask Q)이 어긋날 경우 원하는 결과를 얻지 못할 수 있음.

```js
function findUser(id) {
    let user
    setTimeout(function () {
        console.log("waited 0.1 sec.")
        user = {
            id: id,
            name: "User" + id,
            email: id + "@test.com",
        }
    }, 100)
    return user
}

const user = findUser(1)
console.log("user:", user) // undefined
```

### 4-20

API 사용자가 콜백 함수 방식의 비동기 함수를 통해 데이터를 입력하는 방법의 전형적인 예시.

```js
findUserAndCallBack(1, function (user) {
    console.log("user:", user)
}) // API 사용자

function findUserAndCallBack(id, cb) {
    setTimeout(function () {
        console.log("waited 0.1 sec.")
        const user = {
            id: id,
            name: "User" + id,
            email: id + "@test.com",
        }
        cb(user)
    }, 100)
} // API 개발자
```

### 4-21

위의 예제를 Promise를 이용해서 재작성한 코드. 비동기 작업이 끝난 후 resolve를 통해 원하는 데이터를 전달하고, 외부에서는 .then()을 통해 그 결과를 받아올 수 있음.</br> 결과적으로, 콜백 대신 Promise를 이용해 비동기 함수를 구현할 수 있으며, 이러한 패턴은 사물인터넷을 위한 JS 비동기 코드의 구현에 있어 일반적으로 활용됨.

```js
findUser(1).then(function (user) {
    console.log("user:", user)
}) // API 사용자

function findUser(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("waited 0.1 sec.")
            const user = {
                id: id,
                name: "User" + id,
                email: id + "@test.com",
            }
            resolve(user)
        }, 100)
    })
} // API 개발자
```

### 4-22

Promise를 이용하면 함수 실행에 있어 성공(resolve)과 실패(reject)의 경우를 분리하여 처리할 수 있음. 이때, 함수 호출부에서는 .then과 .catch로 처리할 수 있음.

```js
// 기존 함수
function devide(numA, numB) {
    return new Promise((resolve, reject) => {
        if (numB === 0) reject(new Error("Unable to devide by 0."))
        else resolve(numA / numB)
    })
}

// 함수 호출
devide(8, 2)
    .then((result) => console.log("성공:", result))
    .catch((error) => console.log("실패:", error))

// 결과 == 성공: 4
```

### 4-23

fetch(url) 함수는 브라우저 표준 함수로서 url에 네트워크 요청을 보내는 Promise 기반 API. 이 때, 요청이 성공되면 Response 객체가 반환되고, 실패하면 reject를 통해 에러가 발생함.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("responses:", response))
    .catch((error) => console.log("error:", error))

//성공 결과: response: Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/posts/1', re...
//실패 결과: error: TypeError: Failed to excute 'fetch' on 'Window': 1 argument required, but only...
```

### 4-24

fetch 형태로 받아온 응답은 response.json()을 통해 JSON 형태로 변환할 수 있음.

```js
fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => console.log("post:", post))
    .catch((error) => console.log("error:", error))

//결과 == post: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi o...
```

### 4-25

첫번째 호출 결과(post.userId)를 기반으로 두번째 호출(users/:userId)를 수행.</br> 결과적으로, API 응답을 통해 얻은 정보로 이어지는 API를 호출하고, 최종 값을 Promise로 변환할 수 있음.</br> 이러한 예시를 통해 다중 비동기 요청 패턴의 구현이 가능함.

```js
function fetchAuthorName(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then((post) => post.userId)
        .then((userId) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then((user) => user.name)
        })
}

fetchAuthorName(1).then((name) => console.log("name:", name))

// 출력: name: Leanne Graham
```

### 4-26

async/await 키워드를 사용하면 여러 번의 비동기 코드(fetch)를 동기 코드처럼 순차적으로 짤 수 있음.</br> 이를 통해 Promise 체인 내 then()을 나열하는 대신 가독성을 높일 수 있음.

```js
async function fetchAuthorName(postId) {
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const post = await postResponse.json()
    const userId = post.userId
    const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    const user = await userResponse.json()
    return user.name
}

fetchAuthorName(1).then((name) => console.log("name:", name))
```

### 4-27

await 함수를 사용하면 다른 비동기 함수를 호출해서 결과값을 받아와 별도의 추가 로직(console 등)을 수행할 수 있음.

```js
async function printAuthorName(postId) {
    const name = await fetchAuthorName(postId)
    console.log("name:", name)
}

printAuthorName(1)
```

### 4-28

try/catch를 사용하면, await로 발생한 에러를 동기 코드처럼 쉽게 잡아낼 수 있음. 특히, 원하는 부분에서만 try/catch를 적용하고, 에러 시 대체 행동을 명시적으로 정의할 수 있으며, 이를 통해 비동기 로직을 동기 코드처럼 직관적으로 작성할 수 있음.

```js
async function fetchAuthorName(postId) {
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const post = await postResponse.json()
    const userId = post.userId

    try {
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        const user = await userResponse.json()
        return user.name
    } catch (err) {
        console.log("Fail to fetch user:", err)
        return "Unknown"
    }
}

fetchAuthorName(1).then((name) => console.log("name:", name))
```

### 4-29

async 함수 내부의 await는 해당 함수 내에서만 잠시 블로킹하며, 전역 실행 흐름은 계속 진행함.</br> 즉, 호출부에서 myFunc()가 완료될 때까지 기다리는 것이 아닌, 함수를 호출하자마자 곧바로 다음 코드("After Function!")이 실행됨.</br> 그 다음, Promise가 완료된 시점에서 await one()의 다음 줄(console.log(res))가 실행됨.

```js
const one = () => Promise.resolve('one!')

async function myFunc() {
    console.log("In function!");
    const res = await one();
    console.log(res);
}

console.log("Before function!");
myFunc();
console.log("After function!");
```

### 4-30

제너레이터 함수(function*)는 실행을 중간에 멈췄다가 나중에 다시 진행하는 함수로, return이 아닌 yield로 여러 번 값을 내보낼 수 있음.

```js
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// '제너레이터 함수'는 제너레이터 객체'를 생성합니다.
let generator = generateSequence();
alert(generator); // [object Generator]
```

### 4-31

next() 메서드는 제너레이터의 값을 꺼낼 수 있으며, 그 과정에서 JSON 형태로 추출 가능함.</br> 이를 연속적으로 호출하면 value가 순차적으로 나오며, 세번째에서 {done: true}가 나옴.

```js
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}
```

### 4-32

제너레이터는 이터러블(iterable)이며, 따라서 for..of 반복문을 사용해 값을 얻을 수 있음.

```js
function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let iterator = generateSequence();

for (let value of generator) {
    alert(value); // 1, 2가 출력됨.
}
```

### 4-33

제너레이터는 이터러블 이므로, 역시 전개 문법(...)이 사용 가능함.

```js
function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let seqeunce = [0, ...generateSequence()];

alert(seqeunce); // 0, 1, 2, 3
```

### 4-34

제너레이터에서 여러 개의 값을 순차적으로 얻을 때, yield*를 통해 하나의 제너레이터가 다른 제너레이터의 실행을 위임할 수 있음.

```js
function* generateSequence(start, end) {
    for (let i = start; i <= end; i++) yield i
}

function* generatePasswordCodes() {

    // 0..9
    yield* generateSequence(48, 57);

    // A..Z
    yield* generateSequence(65, 90);

    // a..z
    yield* generateSequence(97, 122);

}

let str = '';

for(let code of generatePasswordCodes()) {
    str += String.fromCharCode(code);
}

alert(str); // 0..9A..Za..z
```

### 4-35

제너레이터를 사용하여 제너레이터 함수와 제너레이터 객체가 서로 양방향으로 데이터를 주고받을 수 있음. 이때 yield를 통해 값을 내보내며, 다시 호출될 때 값을 받을 수도 있음.

```js
function* gen() {
    // 질문을 제너레이터 밖 코드에 던지고 답을 기다립니다.
    let result = yield "2 + 2 = ?"; // (*)

    alert(result);
}

let generator = gen();

let question = generator.next().value; // <<-- yield는 value를 반환합니다.

generator.next(4); // --> 결과를 제너레이터 안으로 전달합니다.
```

### 4-36

마찬가지로, 제너레이터 함수는 여러 번 멈추고 재개되면서 데이터를 서로 주고받을 수 있음.

```js
function* gen() {
    let ask1 = yield "2 + 2 = ?";

    alert(ask1); // 4

    let ask2 = yield "3 * 3 = ?";

    alert(ask2); // 9
}

let generator = gen();

alert( generator.next().value ); // "2 + 2 = ?"

alert( generator.next(4).value ); // "3 * 3 = ?"

alert( generator.next(9).done ); // true
```

### 4-37

제너레이터 내부에서도 try/catch 사용이 가능함.</br> 제너레이터 객체에서 .throw(error)를 호출하면 제너레이터 내부로 강제로 예외를 던져 내부에서 처리하게 할 수 있음.</br> 또한, 에러는 멈춰있는 yield 위치에서 바로 catch 블록으로 전달됨. 이때 catch로 처리하지 않으면, 제너레이터 밖으로 에러가 다시 나가게 됨.

```js
fucntion* gen() {
    try {
        let result = yield "2 + 2 = ?"; // (1)

        alert("위에서 에러가 던져졌기 때문에 실행 흐름은 여기까지 다다르지 못합니다.");
    }   catch(e) {
        alert(e); // 에러 출력
    }
}

let generator = gen();

let question = generator.next().value;

generator.throw(new Error("데이터베이스에서 답을 찾지 못했습니다.")); // (2)
```

### 4-38

마찬가지로, 제너레이터 내부에서 에러를 처리하지 않으면 .throw()로 전달된 에러는 제너레이터 밖으로 전달됨. 이 경우 외부의 try/catch에서 처리될 수 있음. 

```js
function* generate() {
    let result = yield "2 + 2 = ?"; // Error in this line
}

let generator = generate();

let question = generator.next().value;

try {
    generator.throw(new Error("데이터베이스에서 답을 찾지 못했습니다."));
}   catch(e) {
    alert(e); // 에러 출력
}
```

## Chatper5 <a name = "chapter5"></a>

### 5-1

inner function은 closure variable a를 참조함. 이 때, outer fucntion이 call stack에서 사라져도, (outer) a를 참조하는 함수가 있으면 a는 사라 지지 않음. 이러한 현상을 closure라 함. 이를 통해, inner 함수 안에 선언된 또 다른 함수가 outer 함수의 지역 변수에 접근할 수 있음.

```js
var outer = function() {
    var a = 1;
    var inner = function () {
        console.log(++a);
    };
    inner();
};
outer();
```

### 5-2

a는 outer 함수 안의 지역 변수로서, 원래라면 outer 함수가 끝나고 a를 기억할 수 있는 closure가 형성되어야 하나, inner()를 즉시 실행하였기 때 문에 closure를 밖으로 노출하지 않고 값 2만 반환함. 즉, 내부 함수를 즉시 실행하는 경우, closure는 밖으로 전달되지 못함.

```js
var outer = function () {
    var a = 1;
    var inner = function () {
        return ++a;
    };
    return inner();
};
var outer2 = outer();
console.log(outer2);        // 2
```

### 5-3

함수를 반환하게 되면 지역 변수와 함께 closure function을 만들 수 있음. 이 과정에서 a는 외부 코드에 의해 직접적으로 접근하거나 수정되지 않으며, 오직 outer2()를 통해서면 a를 읽고 바꿀 수 있어 의도하지 않은 변경을 방지할 수 있음. 즉, closure 함수는 상태의 안전한 보존 및 변경에 활용하기 용이함.

```js
var outer = function() {
    var a = 1;
    var inner = function() {
        return ++a;
    };
    return inner;
};
var outer2 = outer ();
console.log(outer2());       // 2
console.log(outer2());       // 3
```

### 5-4

(function(){  })(); 형태로 함수를 감싸면 내부 변수가 전역에 노출되지 않으며, closure는 비동기 콜백(setInterval) 내부에서 외부 함수의 지역  변수를 참조해, 함수가 종료된 뒤에도 계속 사용할 수 있음. 이를 캡슐화(Encapsulation)라 함.

```js
var outer = function() {
    var a = 1;
    var inner = function() {
        return ++a;
    };
    return inner;
};
var outer2 = outer ();
console.log(outer2());       // 2
console.log(outer2());       // 3
```

### 5-5

클로저가 사용된 상황에서 메모리를 헤제(garbage collect)하는 방법은 다양함. </br>1) 클로저가 선언 당시 환경을 가리키고 있는 참조가 끊기는(null)  경우, </br>2) inner 함수 내에 변수 참조가 끊기는 경우(null), </br>3) 이벤트 리스너가 콜백 함수로서 참조되지 않도록 이벤트 리스너를 헤제하고 참조를 null 처리하는 경우.

```js
// (1) return에 의한 클로저의 메모리 해제
var outer = (function() {
    var a = 1;
    var inner = function() {
        return ++a;
    };
    return inner;
})();
console.log(outer());   // 2
console.log(outer());   // 3
outer = null;           // outer 식별자의 inner 함수 참조를 끊음

// (2) setInterval에 의한 클로저의 메모리 해제
(function () {
    var a = 0;
    var intervalId = null;
    var inner = function () {
        if (++a >= 10) {
            clearInterval(intervalId);
            intervalId = null;          // inner 식별자의 함수 참조를 끊음
        }
        console.log(a);
    };
    intervalId = setInterval(inner, 1000);
})();

// (3) eventListener에 의한 클로저의 메모리 해제
(function () {
    var count = 0;
    var button = document.createElement('button');
    button.innerText = 'click';

        var clickHandler = function () {
            console.log(++count, 'times clicked');
            if (count >= 10) {
                button.removeEventListener('click', clickHandler);
                clickHandler = null;    // clickHandler 식별자의 함수 참조를 끊음
            }
        };
        button.addEventListener('click', clickHandler);
        document.body.appendChild(button);
    })();
```

### 5-6

forEach 반복문은 배열 요소(fruit) 하나마다 콜백 함수를 별도의 실행 컨텍스트로 호출하며, (B) 위치에서 addEventListner로 등록한 콜백은 외부 function을 참조하게 되는 클로저가 됨. 이 때, 여러 번 리스너가 실행되었으며, 세 번의 alert가 뜨게 됨.

```js
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');         // (공통 코드)

fruits.forEach(function (fruit) {               // (A)
    var $li = document.createElement('li'); 
    $li.innerText = fruit;                  
    $ul.addEventListener('click', function () { // (B)
        alert('your choice is ' + fruit);
    });
    $ul.appendChild($li);
});
document.body.appendChild($ul);
```

### 5-7

함수를 변수화 한 후, 이를 사용해 addEventListener('click', alertFruit)에 넘겨주면 함수는 호출되어 사용됨. 다만, argument로 event 대신 fruit를 호출하게 되어, 실제 클릭할 때는 Fruit의 값이 아닌 이벤트 argument(clickEvent 등)를 전달해버리는 오류가 발생함.

```js
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');         // (공통 코드)

var alertFruit = function (fruit) {
    alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
    var $li = document.createElement('li'); 
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruit);
    $ul.appendChild($li);
});
document.body.appendChild($ul);
alertFruit(fruits[1]);
```

### 5-8

이벤트 핸들러에 fruit 값을 bind()로 바인드 하면, 클로저 없이도 변수를 넘길 수 있음."

```js
var fruits = ['apple', 'banana', 'peach'];
var $ul = document.createElement('ul');         // (공통 코드)

var alertFruit = function (fruit) {
    alert('your choice is ' + fruit);
};
fruits.forEach(function (fruit) {
    var $li = document.createElement('li'); 
    $li.innerText = fruit;
    $li.addEventListener('click', alertFruit.bind(null, fruit)); // (변경된 부분)
    $ul.appendChild($li); 
});
document.body.appendChild($ul);
alertFruit(fruits[1]);
```

### 5-9

비슷하게, 콜백 함수 안에서 클로저를 이용해 특정 값을 미리 지정하는 함수를 사용하면, 반환된 함수는 fruit에 접근할 수 있음.

```js
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
```

### 5-10

객체 내부에 상태와 동작을 정의하는 방식으로 자동화 할 수 있으나, 변수를 직접 수정할 수 있어 보호되지 않은 상태임.

```js
var car = {
    fuel: Math.ceil(Math.random() * 10 + 10),   // 연료(L)
    power: Math.ceil(Math.random() * 3 + 2),    // 연비(km/L)
    moved: 0,                                   // 총 이동거리(km)
    run: function() {
        var km = Math.ceil(Math.random() * 6);
        var wasteFuel = km / this.power;
        if (this.fuel < wasteFuel) {
            console.log('이동 불가.');
            return;
        }
        this.fuel -= wasteFuel;
        this.moved += km;
        console.log(km + 'km 이동 (총 ' + this.moved + 'km)');
    }      
};
```

### 5-11

createCar 함수를 실행함으로써 객체가 생성되고, 반환된 객체에는 변수를 직접적으로 수정할 수 없음. 즉, 클로저를 통해서 함수 내부의 로컬 변수를 보호할 수 있음.

```js
var createCar = function () {
    var fuel = Math.ceil(Math.random() * 10 + 10);  // 연료(L)
    var power = Math.ceil(Math.random() * 3 + 2);   // 연비(km / L)
    var moved = 0;                                  // 총 이동거리(km)
    return {
        get moved() {
            return moved;
        },
        run: function () {
            var km =Math.ceil(Math.random() * 6);
            var wasteFuel = km / power;
            if (fuel < wasteFuel) {
                console.log('이동 불가.');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
        }
    };
};
var car = createCar();
```

### 5-12

클로저를 통한 은닉 위에 Object.freeze를 추가, 외부에 공개된 프로퍼티(publicMembers)를 더 이상 수정할 수 없도록 불변(immutable)하게 만들 수 있음. 이를 통해, 외부에는 읽기 전용용 getter만 공개할 수 있음.

```js
var createCar = function () {
    var fuel = Math.ceil(Math.random() * 10 + 10);  // 연료(L)
    var power = Math.ceil(Math.random() * 3 + 2);   // 연비(km / L)
    var moved = 0;                                  // 총 이동거리(km)
    var publicMembers = {
        get moved() {
            return moved;
        },
        run: function () {
            var km =Math.ceil(Math.random() * 6);
            var wasteFuel = km / power;
            if (fuel < wasteFuel) {
                console.log('이동 불가.');
                return;
            }
            fuel -= wasteFuel;
            moved += km;
            console.log(km + 'km 이동 (총 ' + moved + 'km). 남은 연료: ' + fuel);
        }
    };
    Object.freeze(publicMembers);
    return publicMembers;
};
```

### 5-13

bind()를 이용하면 함수의 초기 인자를 미리 고정한 뒤 나중에 나머지 인자를 받아 실행할 수 있으며, 이를 부분 적용 함수(Partial Application)이라 함.

```js
var add = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
var addPartial = add.bind(null, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));        // 55
```

### 5-14

사용자 정의 함수를 사용하면 함수의 일부 인자를 미리 고정/부분 적용(Partial Application) 할 수 있으며, 나중에 나머지 인자를 받아 최종 호출할 수 있음. 이를 사용해서 this 바인딩을 해치지 않고 원본 함수에 그대로 전달할 수 있음.

```js
var partial = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new TypeError('첫 번째 인자가 함수가 아닙니다.');
    }
    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        var restArgs = Array.prototype.slice.call(arguments);
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function () {
    var result = 0;
    for (var i = 0; i < arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
var addPartial = partial(add, 1, 2, 3, 4, 5);
console.log(addPartial(6, 7, 8, 9, 10));        // 55

var dog = {
    name: '강아지',
    greet: partial(function(prefix, suffix) {
        return prefix + this.name + suffix;
    }, '왈왈, ')
};
console.log(dog.greet('입니다!')); // 왈왈, 강아지입니다!
```

### 5-15

부분 적용(Partial Application) 수행 시, 플레이스홀더(_)를 사용해서 이후에 채워하 할 인자 자리를 미리 표시할 수 있음. 이를 활용하면 유연한 부분 적용 동작이 가능함.

```js
Object.defineProperty(window, '_', {
    value: 'EMPTY_SPACE',
    writable: false,
    configurable: false,
    enumerable: false
});

var partial2 = function () {
    var originalPartialArgs = arguments;
    var func = originalPartialArgs[0];
    if (typeof func !== 'function') {
        throw new TypeError('첫 번째 인자가 함수가 아닙니다.');
    }
    return function () {
        var partialArgs = Array.prototype.slice.call(originalPartialArgs, 1);
        var restArgs = Array.prototype.slice.call(arguments);
        for (var i = 0; i < restArgs.length; i++) {
            if (restArgs[i] === _) {
                restArgs[i] = partialArgs.shift();
            }
        }
        return func.apply(this, partialArgs.concat(restArgs));
    };
};

var add = function () {
    var result = 0;
    for (var i = 0; i <arguments.length; i++) {
        result += arguments[i];
    }
    return result;
};
var addPartial = partial2(add, 1, 2, _, 4, 5, _, _, 8, 9);
console.log(addPartial(3, 6, 7, 10));                       // 55

var dog = {
    name: '강아지',
    greet: partial2(function(prefix, suffix) {
        return prefix + this.name + suffix;
    }, '왈왈, ')
};
```

### 5-16

디바운스(Debounce) 기법을 사용하면 특정 이벤트가 연속해서 발생할 때, 마지막 이벤트 발생 후 일정 시간(wait)이 지나야 실제 함수를 한 번만 호 출하도록 지연시킬 수 있으며, 이를 사용하면 불필요한 반복 호출을 막을 수 있음.

```js
var debounce = function (eventName, func, wait) {
    var timeoutId = null;
    return function (event) {
    console.log(eventName, 'event 발생');
        var self = this;
        clearTimeout(timeoutId)
        timeoutId = setTimeout(func.bind(self, event), wait);
    }
};
```

### 5-17

커링(Currying) 기법을 사용하면 첫 번째 인자를 고정시킨 새로운 함수를 만들 수 있으며, 이를 부분 적용(Partial Application) 시키면 그 값이 내부에 고정된 채로 최종 함수가 생성됨. 이를 통해  코드 재사용성을 향상시킬 수 있음.

```js
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
```

### 5-18

커링 함수를 표현하기 위해 계속해서 return, function()을 나열하면 가독성이 떨어지며, JS ES6 부터는 다음과 같이 작성 가능함: <br/>var curry5 = func => a=> b=> c=> d=> e=> func(a, b, c, d, e);

```js
var curry5 = function (func) {
    return function (a) {
        return function (b) {
            return function (c) {
                return function (d) {
                    return function (e) {
                        return func(a, b, c, d, e);
                    };
                };
            };
        };
    };
};
var getMax = curry5(Math,max);
console.log(getMax(1)(2)(3)(4)(5))

var curry5 = func => a=> b=> c=> d=> e=> func(a, b, c, d, e);
```


# HW3

## Chatper6 <a name = "chapter6"></a>

### 6-1

Person 생성자 함수는 인자로 받은 name을 객체의 속성 _name에 저장하며, Prototype 메서드는 객체를 여러 개 생성해도 메모리에 한번만 저장함. 이 때, Suzi.__proto__는 Person.prototype을 직접 참조하며, getName() 메서드가 호출되었을 때 this는 Suzi가 아니라 Suzi.__proto__(Person.prototype)을 가리키며, 이 때 _name 속성은 Prototype이 아닌 객체 Suzi에만 존재하므로 undefined를 반환함. <br/>이를 위해서는 Prototype 객체에 _name 속성을 직접 추가하면 정상적인  결과가 나타나나, 이는 비정상적인 방법임. <br/>객체지향 스타일을 사용할 경우, getName()의 this가 Suzi, iu 인스턴스를 가리키는 경우 정상적으로 _name에 접근이 가능함.

```js
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
```

### 6-2

Constructor는 함수이자 객체로, 기본적으로 .prototype 속성을 가지며, this.name = name;을 통해 new Constructor로 생성된 객체의 property인 name을 설정함. <br/>이 때, new Constructor('instance') 호출 시 빈 객체가 생성된 후 내부 prototype이 Constructor.prototype으로 설정되며, this가 해당 새 객체를 가리키도록 한 뒤 함수 본문이 실행되어 name 속성이 설정됨. <br/>또한, instance.method1() 호출 시, JS 엔진은 instance 객체에 method1이 없는 것을 확인한 뒤, 내부 프로토타입(instance.__proto__)에서 method1을 찾아 호출함. <br/>Constructor.prototype.property1에 문자열 값을 할당하여, 공유되는 데이터 속성을 하나 더 정의하며, 이를 통해 instance.property1으로 접근 시 프로토타입 체인을 통해 'Constructor Prototype Property'를 반환함.

```js
var Constructor = function (name) {
    this.name = name;
};
Constructor.prototype.method1 = function() {};
Constructor.prototype.property1 = 'Constructor Prototype Property';

var instance = new Constructor('Instance');
console.dir(Constructor);
console.dir(instance);
```

### 6-5

생성자 함수 Person은 new Person() 호출 시 내부에 this.name = name이 실행되어 새로 생성된 객체의 property 'name'이 설정되며, 이 과정에서 새 객체의 내부 Prototype은 Person.prototype으로 연결됨. p1~p5 모두 결국 new Person()과 동일하게 동작하여 Person 인스턴스를 생성함. 이는 프로토타입 객체의 constructor 속성이 생성자 자신을 참조하도록 기본 설정되어 있기 때문임.

```js
var Person = function (name) {
    this.name = name;
};
var p1 = new Person('사람1');                       // (name: '사람1') true
var p1Proto = Object.getPrototypeOf(p1);
var p2 = new Person.prototype.constructor('사람2'); // (name: '사람2') true
var p3 = new p1Proto.constructor('사람3');          // (name: '사람3') true
var p4 = new p1.__proto__.constructor('사람4');     // (name: '사람4') true
var p5 = new p1.constructor('사람5');               // (name: '사람5') true

[p1, p2, p3, p4, p5].forEach(function (p) {
    console.log(p, p instanceof Person);
});
```

### 6-6

프로토타입에 정의된 메서드는 iu 인스턴스를 생성한 뒤 getName 속성을 직접 추가함으로서, 인스턴스에 새로 정의된 함수가 실행되게 됨.

```js
var Person = function (name) { 
    this.name = name;
};
Person.prototype.getName = function () {
    return this.name;
};

var iu = new Person('지금');
iu.getName = function () {
    return '바로 ' + this.name;
};
console.log(iu.getName()); // 바로 지금
```

### 6-7

arr.__proto__ 는 내부적으로 Array.prototype 을 가리키며 (Object.getPrototypeOf(arr)와 동일), 이로 인해 호출된 push는 Array.prototype.push이며, 호출 시의 this는 arr.__proto__ 즉 Array.prototype 자신이 됨. 따라서, 배열 인스턴스 arr가 아닌 프로토타입 객체인 Array.prototype에 요소 3이 추가됨.

```js
var arr = [1, 2];
arr.__proto__.push(3);
arr.__proto__.__proto__.hasOwnProperty(2); // true
```

### 6-8

Array.prototype.toString 메서드는 배열 인스턴스를 문자열로 변환하며, Object.prototype.toString은 객체의 내부 Class 또는 기본 타입을 나타내는 태그 형태 문자열을 반환함. 또한, arr.toString()은 프로토타입 체인 상에서 인스턴스 arr에 toString이 own property로 정의되어 있지 않을 때, 내부적으로 Array.prototype.toString을 호출함. 이 때, 인스턴스 레벨에서 toString을 재정의하면 특정 배열 인스턴스에 대해서만 문자열 변환 방식을 변경할 수 있음.

```js
var arr = [1, 2];
Array.prototype.toString.call(arr);   // 1,2
Object.prototype.toString.call(arr);  // [object Array]
arr.toString();                       // 1,2

arr.toString = function () {
    return this.join('_');
};
arr.toString();                       // 1_2
```

### 6-9

Object.prototype에 메서드를 추가해 모든 객체에 공통적으로 사용할 수 있도록 함. <br/>이 떄, 1) 객체 리터럴은 own enumerable 속성과 값이 수집 및 반환되고, <br/>2) 숫가 원시값은 Box된 Number 객체에 own enumerable 속성이 없어 빈 배열을 반환하며, <br/>3) 문자열 원시값은  Box된 String 객체의 인덱스가 열거 가능하므로 반환, <br/>4) Boolean 원시값은 열거 가능한 own 속성이 없어 빈 배열 반환, <br/>5) 함수 또한 enumerable이 아니므로 빈 배열 반환, <br/>6) 배열은 own enumerable 속성을 반환함.

```js
Object.prototype.getEntities = function () {
    var res = [];
    for (var prop in this) {
        if (this.hasOwnProperty(prop)) {
            res.push(prop, this[prop]);
        }
    }
    return res;
};
var data = [
    ['object', { a: 1, b: 2, c: 3 }],   // []["a", 1], ["b", 2], ["c", 3]]
    ['number', 345],                    // []
    ['string', 'abc'],                  // [["0", "a"], ["1", "b"], ["2", "c"]]
    ['boolean', false],                 // []
    ['func', function () {}],           // []
    ['array', [1, 2, 3, 4, 5]],         // [["0", 1], ["1", 2], ["2", 3], ["3", 4], ["4", 5]]
];
data.forEach(function (datum) {
    console.log(datum[1].getEntities());
});
```

### 6-10

Array.prototype.slice.call(arguments)를 통해, 함수 내부의 arguments, 즉 배열처럼 보이나 실제 Arrray 인스턴스가 아닌 객체를 실제 배열(Array)로 복사함. for 루프에서는 this[i] = args[i];를 실행하여, 생성자 함수로 만든 객체에 프로퍼티를 직접 추가하며, this.length = args.length;로 length 프로퍼티를 설정함으로써, 마치 배열처럼 인덱스와 length 속성을 갖게 만듦. 결과적으로 g 객체는 { '0': 100, '1': 80, length: 2, ... } 형태가 되어, 배열과 유사한 구조를 가지는 array-like object가 됨. <br/>이 때, 실제 Array 인스턴스와는 달리 내부 프로토타입이 Array.prototype이 아니며, 배열 메서드를 바로 호출할 수 없음. 배열 메서드를 사용하기 위해서는 Array.prototype.push. 형태를 사용해서 생성자 함수의 인스턴스를 바라보게 해야함.  

```js
var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
};
var g = new Grade(100, 80);
```




## Chatper7 <a name = "chapter7"></a>

### 7-1

Rectangle.isRectangle = function (instance) { ... }; 부분은 정적 메서드(Static Method)로, 이는 클래스나 생성자 함수 자체 객체에 속성으로 붙으며, 인스턴스가 아니라 Rectangle.isRectangle(...) 형태로 호출해야 함. 이 중 console.log(rect.isRectangle(rect1)); 부분에서 rect라는 식별자는 정의된 적이 없으므로 ReferenceError 또는 Unexpected identifier 형태의 오류가 발생하며, 올바른 호출은 Rectangle.isRectangle(rect1)이어야 함. 즉, 정적 메서드를 호출할 때에는 생성자 함수 이름 또는 클래스 이름을 사용해야 함.

```js
var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
Rectangle.isRectangle = function (instance) {
    return instance instanceof Rectangle &&
        instance.width > 0 && instance.height > 0;
};

var rect1 = new Rectangle(3, 4);
console.log(rect1.getArea());               // 12
console.log(rect.isRectangle(rect1));       // Error: Unexpected identifier
console.log(Rectangle.isRectangle(rect1));  // true
```

### 7-2

arguments 객체는 배열처럼 인덱스와 length 프로퍼티를 갖지만 실제 Array 인스턴스가 아니므로, Array.prototype.slice.call(arguments)로 복사해 실제 배열(args)로 만듦. 이 때, Grade.prototype을 빈 배열 인스턴스([])로 재할당하면, 이후 생성되는 모든 Grade 인스턴스(g)의 내부 프로토타입은 이 배열 인스턴스가 되며, 이를 통해 Array.prototype 메서드를 활용할 수 있음. 따라서, 자바스크립트에서 클래스 상속을 구현했다는 것은 프로토타 입 체이닝을 잘 연결한 것으로 이해하면 됨.

```js
var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
};
Garde.prototype = [];
var g = new Grade(100, 80);
```

### 7-3

Grade 생성자 인스턴스가 배열 메서드(push 등)를 상속받은 뒤, length 프로퍼티를 삭제한 상태에서 push를 호출하면 own 프로퍼티가 없으므로 프로토타입 체인 상에서 동일 이름의 length 프로퍼티를 찾게 되며, Grade.prototype은 빈 배열 인스턴스로 초기 상태에서 length가 0이었으므로, length가 1이 되어버리고, 배연 관점에서 유효 영역은 0번 인덱스 하나 만으로 간주됨.

```js
var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
};
Grade.prototype = [];
var g = new Grade(100, 80);
g.push(90);
console.log(g); // Grade { '0': 100, '1': 80, '2': 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { '0': 70, '1': 80, '2': 90, '3': length: 1 } 
```

### 7-4

Grade.prototype을 배열 인스턴스로 덮어씌울 경우, 새로 생성된 g 객체는 g.__proto__ === Grade.prototype 이며, 배열 메서드를 상속받게됨. 결과적으로, g.push(70) 호출 시, 프로토타입의 length(4)를 읽고 g[4] = 70을 own 프로퍼티로 설정하며, g.length = 5를  own 프로퍼티로 다시 설정하게 됨

```js
var Grade = function () {
    var args = Array.prototype.slice.call(arguments);
    for (var i = 0; i < args.length; i++) {
        this[i] = args[i];
    }
    this.length = args.length;
};
Grade.prototype = ['a', 'b', 'c', 'd'];
var g = new Grade(100, 80);
g.push(90);
console.log(g); // Grade { '0': 100, '1': 80, '2': 90, length: 3 }

delete g.length;
g.push(70);
console.log(g); // Grade { '0': 100, '1': 80, '2': 90, __ 4: 70, length: 5 } 
```

### 7-5

생성자 함수 인스턴스(Rectangle)는 Rectangle.prototype.getArea = function() 를 통해 면적 계산 메서드를 정의하며, Square는 Square.prototype.getArea = function() 를 통해 면적 계산 메서드를 정의, sq.getArea() 호출을 통해 면적을 반환할 수 있음. 이 때, Square와 Rectangle는 독립적으로 정의되었으며, 따라서 Square.prototype이 Rectangle.prototype을 참조하지 않으며, 두 클래스 간에 프로토타입 체인 상 연결이 없음.

```js
var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea());                // 12

var Square = function(width) {
    this.width = width;
};
Square.prototype.getArea = function () {
    return this.width * this.width;
};
var sq = new Square(5);
console.log(sq.getArea());                  // 25
```

### 7-7

var Square = function(width) { Rectangle.call(this, width, width); }; 부분은 기능 재사용을 위해 Rectangle 생성자를 Square 생성자 내부에서 호출하는 패턴으로, new Square(5)가 실행되면 Rectangle.call(this, 5, 5)가 호출되어 this.width = 5; this.height = 5;가 수행됨. 즉, Square.prototype = new Rectangle(); 상속 패턴에서, Square.prototype을 Rectangle 인스턴스로 설정하여 프로토타입 체인을 구성하며, 이를 통해 Square.prototype.__ proto __ === Rectangle.prototype이 간접적으 로 연결되어, Square 인스턴스가 프로토타입 체인을 통해 Rectangle.prototype.getArea 메서드에 접근할 수 있음.

```js
var Rectangle = function(width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function() {
    return this.width * this.height;
};
var rect = new Rectangle(3, 4);
console.log(rect.getArea());                // 12

var Square = function(width) {
    Rectangle.call(this, width, width);
};
Square.prototype = new Rectangle();

var sq = new Square(5);
console.log(sq.getArea());                  // 25
```

### 7-8

SubClass.prototype = new SuperClass(); 패턴은 SubClass.prototype.__proto__ === SuperClass.prototype이 되도록 내부 프로토타입을 연결하여 서브클래스 인스턴스가 슈퍼클래스 프로토타입의 메서드에 접근할 수 있게함. new SuperClass() 호출 시 슈퍼 생성자 내부에서 설정한 own 프로퍼티(예: width, height)가 SubClass.prototype 객체에 남을 수 있으므로, for (var prop in SubClass.prototype) 루프를 통해 프로퍼티들을 제거하며, 이를 통해 프로토타입에는 순수하게 메서드 참조용으로만  사용되는 빈 객체 상태가 보장되며, 인스턴스별 상태가 프로토타입에 남아 의도치 않은 공유 부작용이 발생하지 않도록 함. <br/>더불어, Object.freeze()는 객체를 동결하여 이후 프로퍼티 추가/삭제/수정이 불가능하도록 만듦. 이후, Square 생성자 내부에서 Rectangle.call(this, width, width)를 호출하여, 슈퍼 생성자 로직(this.width = width; this.height = height;)을 서브클래스 인스턴스에 적용함.

```js
var extendClass1 = function (SuperClass, SubClass, subMethods) {
    console.log(SuperClass, SubClass, subMethods)
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype) {
        if (SubClass.prototype.hasOwnProperty(prop)) {
            delete SubClass.prototype[prop];
        }
    }
    if (subMethods) {
        for (var method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
};

var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
var Square = extendClass1(Rectangle, function (width) {
    Rectangle.call(this, width, width);
});
var sq = new Square(5);
console.log(sq.getArea()); // 25
```

### 7-9

extendClass2 내부에서 즉시 실행되는 함수 (function(){ ... })()로 감싸진 이유는, Bridge 생성자 함수를 은닉(private)하고 재사용하기 위함이며, Bridge.prototype = SuperClass.prototype;를 통해 Bridge 생성자의 프로토타입이 SuperClass.prototype을 가리키게 한 뒤, new Bridge()를 SubClass.prototype으로 할당하면, 내부적으로 SubClass.prototype.__proto__ === Bridge.prototype === SuperClass.prototype 이 성립하게 됨. <br/>이를 통해, SubClass 인스턴스는 SuperClass.prototype에 정의된 메서드(getArea 등)에 접근할 수 있으며, 이는 SubClass.prototype = new SuperClass();처럼 SuperClass 생성자를 호출하여 프로토타입을 설정할 때 발생할 수 있는 초기화 부작용(예: SuperClass 생성자가 인자를 요구하거나 내부 상태를 설정하는 로직 실행)을 피할 수 있음.

```js
var extendClass2 = (function () {
    var Bridge = function () {};
    return function (SuperClass, SubClass, subMethods) {
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        if (subMethods) {
            for (var method in subMethods) {
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    };
})();

var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
var Square = extendClass2(Rectangle, function (width) {
    Rectangle.call(this, width, width);
});
var sq = new Square(5);
console.log(sq.getArea()); // 25
```

### 7-10

extendClass2 내부에서 즉시 실행되는 함수 (function(){ ... })()로 감싸진 이유는, Bridge 생성자 함수를 은닉(private)하고 재사용하기 위함이며, Bridge.prototype = SuperClass.prototype;를 통해 Bridge 생성자의 프로토타입이 SuperClass.prototype을 가리키게 한 뒤, new Bridge()를 SubClass.prototype으로 할당하면, 내부적으로 SubClass.prototype.__proto__ === Bridge.prototype === SuperClass.prototype 이 성립하게 됨. <br/>이를 통해, SubClass 인스턴스는 SuperClass.prototype에 정의된 메서드(getArea 등)에 접근할 수 있으며, 이는 SubClass.prototype = new SuperClass();처럼 SuperClass 생성자를 호출하여 프로토타입을 설정할 때 발생할 수 있는 초기화 부작용(예: SuperClass 생성자가 인자를 요구하거나 내부 상태를 설정하는 로직 실행)을 피할 수 있음.

```js
var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
var Square = function (width) {
    Rectangle.call(this, width, width);
};
Square.prototype = Object.create(Rectangle.prototype);
Object.freeze(Square.prototype);

var sq = new Square(5);
console.log(sq.getArea()); // 25
```

### 7-11

SubClass.prototype = new SuperClass();은 SubClass.prototype.__proto__ === SuperClass.prototype이 되게 하여 서브클래스 인스턴스가 슈퍼클래스의 메서드를 상속받도록 하며, 다만 new SuperClass() 호출 시 슈퍼클래스 생성자 내부 로직 이 실행되어 width, height 등 상태가 남을 수 있으므로, 이후 단계에서 해당 own 프로퍼티를 삭제함. 더불어, new SuperClass() 호출로 프로토타입에 남은 own 프로퍼티(예: 슈퍼클래스 생성자에서 설정된 값)를 제거하여, 프로토타입이 순수하게 메서드 참조 전용으로 비어 있게 하여, 인스턴스별 상태가 프로토타입에 남아 의도치 않은 공유 부작용이 발생하는 것을 방지함. <br/>SubClass.prototype.constructor = SubClass; 는 SubClass.prototype을 덮어쓴 뒤에는 기본적으로 constructor 속성이 슈퍼클래스를 가리키 게 되므로, 이를 서브클래스 자신을 가리키도록 복원, instance.constructor === SubClass 관계를 유지시킴. 추가로, if (subMethods) { for (var method in subMethods) { SubClass.prototype[method] = subMethods[method]; } }를 통해 subMethods 객체에 정의된 메서드를 서브클래스의 프로토타입에 추가, 서브클래스 인스턴스가 슈퍼클래스 메서드 외에 자신만의 메서드를 사용할 수 있도록 함.

```js
var extendClass1 = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = new SuperClass();
    for (var prop in SubClass.prototype) {
        if (SubClass.prototype.hasOwnProperty(prop)) {
            delete SubClass.prototype[prop];
        }
    }
    SubClass.prototype.constructor = SubClass;
    if (subMethods) {
        for(var method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
};
```

### 7-12

Bridge 패턴을 사용하면 SuperClass 생성자를 직접 호출하지 않고도 SubClass.prototype.__proto__ === SuperClass.prototype이 되도록 할 수 있으며, SubClass.prototype.constructor = SubClass;를 사용해 덮어쓴 뒤에 생성자 참조가 서브클 래스로 올바르게 가리키도록 복원함. 이 때, Bridge.prototype.constructor = SuperClass;는 Bridge.prototype이 SuperClass.prototype과 동일 객체이므로, SuperClass.prototype.constructor가 SuperClass로 유지되도록 명시적으로 재할당하게됨. <br/>더불어, subMethods 객체가 주어지면, 그 own 프로퍼티를 순회하며 SubClass.prototype[method] = subMethods[method];로 추가하며, 이를 통해 서브클래스 인스턴스가 슈퍼클래스 메서드 외에 자신만의 메서드를 사용할 수 있게 함.

```js
var extendClass2 = (function () {
    var Bridge = function () {};
    return function (SuperClass, SubClass, subMethods) {
        Bridge.prototype = SuperClass.prototype;
        SubClass.prototype = new Bridge();
        SubClass.prototype.constructor = SubClass;
        Bridge.prototype.constructor = SuperClass;
        if (subMethods) {
            for (var method in subMethods) {
                SubClass.prototype[method] = subMethods[method];
            }
        }
        Object.freeze(SubClass.prototype);
        return SubClass;
    };
})();
```

### 7-13

SubClass.prototype = Object.create(SuperClass.prototype); SubClass.prototype.constructor = SubClass;는 SubClass 인스턴스가 SuperClass.prototype에 정의된 메서드를 상속받게하며, 슈 퍼클래스 생성자를 호출하지 않고도 프로토타입 체인만 연결하므로, 초기화 부작용을 피할 수 있음. 더불어, subMethods 객체가 주어지면, for (var method in subMethods) 루프를 통해 서브클래스 전용 메서드를 SubClass.prototype에 추가하여, 인스턴스는  슈퍼클래스 메서드와 함께 자신만의 메서드도 사용할 수 있게됨.

```js
var extendClass3 = function (SubClass, SuperClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    if (subMethods) {
        for (var method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
};
```

### 7-14

super는 인스턴스 레벨에서 부모 생성자 호출 또는 부모 메서드 호출을 수행할 수 있게 함. 먼저, this.super()(args) 형태로 사용하면 내부에서 SuperClass.apply(this, arguments)를 실행해, 서브 생성자 내부에서 슈퍼 생성자 로직을 재사용하며, this.super('getArea')() 형태로 사용하면, SuperClass.prototype에 정의된 getArea 함수가 this 바인딩으로 호출됨. 이러한 super 헬퍼는 부모 메서드나 생성자를 호출할 수 있게 하는 헬퍼 함수로서 사용될 수 있음.

```js
var extendClass = function (SuperClass, SubClass, subMethods) {
    SubClass.prototype = Object.create(SuperClass.prototype);
    SubClass.prototype.constructor = SubClass;
    SubClass.prototype.super = function (propName) {
        var self = this;
        if (!propName) return function () {
            SuperClass.apply(self, arguments);
        }
        var prop = SuperClass.prototype[propName];
        if (typeof prop !== 'function') return prop;
        return function () {
            return prop.apply(self, arguments);
        }
    };
    if (subMethods) {
        for (var method in subMethods) {
            SubClass.prototype[method] = subMethods[method];
        }
    }
    Object.freeze(SubClass.prototype);
    return SubClass;
};

var Rectangle = function (width, height) {
    this.width = width;
    this.height = height;
};
Rectangle.prototype.getArea = function () {
    return this.width * this.height;
};
var Square = extendClass(
    Rectangle,
    function (width) {
        this.super()(width, width);
    }, {
        getArea: function () {
            console.log('size is :', this.super('getArea')());
        }
    }
);

var sq = new Square(10);
sq.getArea();                       // size is : 100
console.log(sq.super('getArea')()); // 100
```

### 7-15

ES5 방식은 생성자 함수를 정의하고 프로토타입/함수 객체에 메서드를 할당하는 방식임. 이 때, 정적 메서드는 ES5.staticMethod()로 호출해야 하며, 인스턴스 메서드는 es5Instance.method()로 호출해야 함. ES6의 class 문법은 여전히 프로토타입 기반이나, class 키워드와 static 및 인스턴스 메서드를 활용, 1) static staticMethod() 블록은 클래스 객체 자체에 붙는 정적 메서드를 정의, 2) method() 블록은 프로토타입 메서드로, 인스턴스에서 호출 시 this.name은 인스턴스에 설정된 이름(예: 'es6')을 가리켜 es6 method를 반환함. 이는 정적 메서드 정의 위치, 인스턴스 메서드 정의 위치, 호출 방식, this 바인딩 방식에서 차이를 보이며, 결과적으로 ES6 class 문법은 선언적 형태를 띄어 코드가 더 직관적임.

```js
// ES5 클래스 문법
var ES5 = function (name) {
    this.name = name;
};
ES5.staticMethod = function () {
    return this.name + ' staticMethod';
};
ES5.prototype.method = function () {
    return this.name + ' method';
};
var es5Instance = new ES5('es5');
console.log(ES5.staticMethod());    // es5 staticMethod
console.log(es5Instance.method());  // es5 method

// ES6 클래스 문법
var ES6 = class {
    constructor(name) {
        this.name = name;
    }
    static staticMethod() {
        return this.name + ' staticMethod';
    }
    method() {
        return this.name + ' method';
    }
};
var es6Instance = new ES6('es6');
console.log(ES6.staticMethod());    // es6 staticMethod
console.log(es6Instance.method());  // es6 method
```

### 7-16

ES6 클래스 문법을 사용하면 class Square extends Rectangle { ... } 구문으로 Square가 Rectangle을 상속받아 Square.prototype.__proto__ === Rectangle.prototype이 설정되어, 부모 클래스의 인스턴스 메서드(getArea)를 상속하게 되며, super를 통해 부모 생성자를 호출할 수 있음.

```js
var Rectangle = class {
    constructor (width, height) {
        this.width = width;
        this.height = height;
    }
    getArea () {
        return this.width * this.height;
    }
};
var Square = class extends Rectangle {
    constructor (width) {
        super(width, width);
    }
    getArea () {
        console.log('size is :', super.getArea());
    }
};
```


## Acknowledgements <a name = "acknowledgement"></a>

- 코어 자바스크립트 (https://product.kyobobook.co.kr/detail/S000001766397)
