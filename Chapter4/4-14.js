const p = new Promise((resolve, reject) => {
    resolve("foo");
    // The below 'reject()' is a no-op. A fulfilled promise stays
    // fulfilled with the same value forever.
    reject(new Error("bar"));
});