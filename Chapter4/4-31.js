function* generateSequence() {
    yield 1;
    yield 2;
    return 3;
}

let generator = generateSequence();

let one = generator.next();

alert(JSON.stringify(one)); // {value: 1, done: false}

let two = generator.next();

alert(JSON.stringify(two)); // {value: 2, done: false}

let three = generator.next();

alert(JSON.stringify(three)); // {value: 3, done: true}