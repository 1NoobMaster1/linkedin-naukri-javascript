// 1. Callback Functions.
// 2. Closures.
// 3. Promises.
// 4. async-await.

// 1. Callback Functions:
const calculate = (a, b, operations) => {
    return operations(a, b);
}

const subtraction = (a, b) => {
    return a - b;
}

const subtractionResult = calculate(11, 9, subtraction);
console.log("subtractionResult: " + subtractionResult);

// 2. Closures:
function outer() {
    var a = 11;
    return function inner() {
        console.log(a);
    }
}

const func = outer();
func();
outer();

// 3. Promises:
// const fetchData = new Promise((resolve, reject) => {
//     const success = true;
//     setTimeout(() => {
//         if(true) {
//             resolve("Data fetched successfully!");
//         } else {
//             reject("Error fetching data!");
//         }
//     }, 3000)
// });

// fetchData.then((message) => {
//     console.log("Success!", message);
// }).catch((error) => {
//     console.error("Error!", error);
// }).finally(() => {
//     console.log("Operation Completed!");
// })

// 4. async-await:
async function fetchData() {
    try {
        let response = await fetch("URL");
        let data = await response.json();
        console.log(data);
    } catch(error) {
        console.log("Error fetching data!", error);
    }
} 

fetchData();
