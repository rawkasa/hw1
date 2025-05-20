function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

// '제너레이터 함수'는 제너레이터 객체'를 생성합니다.
let generator = generateSequence();
alert(generator); // [object Generator]