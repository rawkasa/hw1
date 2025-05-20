fetch("https://jsonplaceholder.typicode.com/posts/1")
    .then((response) => response.json())
    .then((post) => console.log("post:", post))
    .catch((error) => console.log("error:", error))

//결과 == post: {userId: 1, id: 1, title: "sunt aut facere repellat provident occaecati excepturi o...