async function fetchAuthorName(postId) {
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const post = await postResponse.json()
    const userId = post.userId
    const userResponse = await fetch(
        `https://jsonplaceholder.typicode.com/users/${userId}`
    )
    const user = await userResponse.json()
    return user.name
}

fetchAuthorName(1).then((name) => console.log("name:", name))
