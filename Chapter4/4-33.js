function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
}

let seqeunce = [0, ...generateSequence()];

alert(seqeunce); // 0, 1, 2, 3