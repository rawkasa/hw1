const originalError = new Error("Oops!");
const p = new Promise((_, reject) => reject(originalError))
    .then(() => console.log("This will not print"))
    .then(() => console.log("Nor will this"))
    // onFulfilled()들은 계속 지나치고,
    // 위 then() promise 각각은 originalError로 reject 합니다.
    .catch((err) => asserts.ok(err === originalError));