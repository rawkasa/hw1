async function fetchAuthorName(postId) {
    const postResponse = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${postId}`
    )
    const post = await postResponse.json()
    const userId = post.userId

    try {
        const userResponse = await fetch(
            `https://jsonplaceholder.typicode.com/users/${userId}`
        )
        const user = await userResponse.json()
        return user.name
    } catch (err) {
        console.log("Fail to fetch user:", err)
        return "Unknown"
    }
}

fetchAuthorName(1).then((name) => console.log("name:", name))