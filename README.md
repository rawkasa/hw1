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

## Acknowledgements <a name = "acknowledgement"></a>

- 코어 자바스크립트 (https://product.kyobobook.co.kr/detail/S000001766397)
