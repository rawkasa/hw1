findUser(1).then(function (user) {
    console.log("user:", user)
}) // API 사용자

function findUser(id) {
    return new Promise(function (resolve) {
        setTimeout(function () {
            console.log("waited 0.1 sec.")
            const user = {
                id: id,
                name: "User" + id,
                email: id + "@test.com",
            }
            resolve(user)
        }, 100)
    })
} // API 개발자