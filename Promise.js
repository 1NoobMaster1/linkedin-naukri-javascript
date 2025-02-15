// Declare a Promise.
const fetchData = new Promise((resolve, reject) => {
    const success = true; // Simulating Success or Failure.

    setTimeout(() => {
        if(success) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 3000); // Simulating an asynchronous operation with setTimeout().

});

// Consuming the Promise.
fetchData.then((message) => {
    console.log("Success: ", message); // Logs when the Promise resolves.
}).catch((error) => {
    console.error("Error: ", error); // Logs when the Promise rejected.
}).finally(() => {
    console.log("Operation Completed!"); // Always executes.
});
