const fetchData = new Promise((resolve, reject) => {
    let success = true;
    setTimeout(() => {
        if(success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 3000);
});

fetchData.then((message) => {
    console.log("Success!", message);
}).then((error) => {
    console.log("Error!", error);
}).finally(() => {
    console.log("Operation Completed!");
});
