getImage(file) {
    .then(image => console.log(image))
    .catch(error => console.log(error))
    .finally(() => console.log("All done!"))}