// Define an async function.
async function fetchData() {
    try {
      // Use await to pause execution until the promise resolves.
      let response = await fetch('https://api.example.com/data');
      // Parse the JSON data from the response.
      let data = await response.json();
      // Log the data to the console.
      console.log(data);
    } catch (error) {
      // Handle any errors that occur during the fetch.
      console.error('Error fetching data:', error);
    }
  }
  
  // Call the async function.
  fetchData();
  