<h3 align="center">사물인터넷 김도형 예제풀이</h3>

<div align="center">

</div>

---

<p align="center"> 사물인터넷 HW를 올리기 위한 김도형의 레포지토리입니다.
    <br> 
</p>

## 📝 Table of Contents

- [Chatper1](#chapter1)

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

## Acknowledgements <a name = "acknowledgement"></a>

- 코어 자바스크립트 (https://product.kyobobook.co.kr/detail/S000001766397)
