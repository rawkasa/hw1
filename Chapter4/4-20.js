findUserAndCallBack(1, function (user) {
    console.log("user:", user)
})

function findUserAndCallBack(id, cb) {
    setTimeout(function () {
        console.log("waited 0.1 sec.")
        const user = {
            id: id,
            name: "User" + id,
            email: id + "@test.com",
        }
        cb(user)
    }, 100)
}