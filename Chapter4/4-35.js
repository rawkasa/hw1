function* gen() {
    // 질문을 제너레이터 밖 코드에 던지고 답을 기다립니다.
    let result = yield "2 + 2 = ?"; // (*)

    alert(result);
}

let generator = gen();

let question = generator.next().value; // <<-- yield는 value를 반환합니다.

generator.next(4); // --> 결과를 제너레이터 안으로 전달합니다.