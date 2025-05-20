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