async function fetchData() {
    try {
    let response = await fetch("https://jsonplaceholder.org/users");
    let data = await response.json();
    console.log(data);
    let firstName = data.map(user => user.firstname);
    console.log(firstName);
    let lastName = data.map(user => user.lastname);
    console.log(lastName);
    } catch(error) {
        console.error("Error fetching data!");
    }
}

fetchData();
