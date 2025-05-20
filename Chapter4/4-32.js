function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let iterator = generateSequence();

for (let value of generator) {
    alert(value); // 1, 2가 출력됨.
}