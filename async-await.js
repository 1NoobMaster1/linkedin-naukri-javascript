// Declaration of an asynchronous function.
async function fetchData() {
    try {
        // Simulating a delay using a Promise.
        const response = await new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve("Data fetched successfully!"); // Logs the resolved value of the Promise.
            }, 3000);
        });
        console.log(response);
    } catch(error) {
        console.log("Error: ", error); // Handle the errors if any.
    }
}

// Calling the asynchronous function.
fetchData();
