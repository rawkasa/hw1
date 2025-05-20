async function printAuthorName(postId) {
    const name = await fetchAuthorName(postId)
    console.log("name:", name)
}

printAuthorName(1)