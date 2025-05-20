fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => console.log("responses:", response))
    .catch((error) => console.log("error:", error))

//결과: response: Response {type: 'basic', url: 'https://jsonplaceholder.typicode.com/posts/1', re...