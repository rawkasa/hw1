function fetchAuthorName(postId) {
    return fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        .then(response => response.json())
        .then((post) => post.userId)
        .then((userId) => {
            return fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
                .then(response => response.json())
                .then((user) => user.name)
        })
}

fetchAuthorName(1).then((name) => console.log("name:", name))

// 출력: name: Leanne Graham