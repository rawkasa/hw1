function findUserAndCallBack(id, cb) {
    const user = {
        id: id,
        name: "User" + id,
        email: id + "@test.com",
    }
    cb(user)
}

findUserAndCallBack(1, function (user) {
    console.log("user:", user)
})