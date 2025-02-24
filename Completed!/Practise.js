// 1. Arrays.
// 2. Classes.
// 3. Execution Environment. 
// 4. Functions.
// 5. Higher Order Functions.
// 6. Hoisting.
// 7. Lexical Environment & Lexical Scope.
// 8. Objects.
// 9. Values.

// 1. CallbackFunctions.js.
// 2. Closures.
// 3. Promise.js
// 4. async-await.js.

// 1. Arrays:
let courses = ["C++", "Core Java", "JavaScript"];
console.log(courses); // Array(3) ['C++', 'Core Java', 'JavaScript'].
console.log(typeof(courses)); // Object.
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);

// 2. Classes:
// const obj = new MyClass(); // Reference Error, It is Hoisted but it is not Initialized.
class MyClass {
    constructor() {
        console.log("Class Initialized!");
    }
}

const obj = new MyClass();

// 3. Execution Environment: It is where the Code/JavaScript's Code executes. It has two phases: 1. Code Phase & 2. Memory Phase.

// 4. Functions:
createCourse("DSA"); // DSA, It is Hoisted as well as Initialized.
createCourse("Python"); // Python, It is Hoisted as well as Initialized.

function createCourse(coursename) {
    console.log("Creating: " + coursename);
}

createCourse("JavaScript"); // JavaScript, It is Hoisted as well as Initialized.

// 5. Higher Order Functions: Callback Functions.

// 6. Hoisting: 
// console.log(a); // Reference Error, Temporal Dead Zone, It is Hoisted but it is not Initialized.
const a = 11;
console.log(a); // 11.
// Classes, Const & Let they all three are Hoisted but they are not Initialized.
// Functions & Var they both are Hoisted as well as Initialized.

// 7. Lexical Environment & Lexical Scope: Lexical Environment manages the Scopes of Functions & Variable & Lexical Scope is accessing Parent Function's Variables in Child's Function.

// 8. Objects:
let course = {
    title: "JavaScript",
    description: "A JavaScript Overview",
    rating: 5
};

console.log("Course: " + course);
console.log(typeof(course));
console.log(course.title);
console.log(course.description);
console.log(course.rating);
console.log(course['title']);

// 9. Values: 
{
    const p = 11;
    let q = 12;
    var r = 13;

    console.log(p); // Accessible & Blocked Scoped.
    console.log(q); // Accessible & Blocked Scoped.
    console.log(r); // Not Accessible & Function Scoped.

}

// console.log(p); // Not Accessible & Blocked Scoped.
// console.log(q); // Not Accessible & Blocked Scoped.
console.log(r); // Accessible & Function Scoped.

// 1. Callback Functions:
const calculate = (a, b, operations) => {
    return operations(a, b);
}

const subtraction = (a, b) => {
    return a-b;
}

const subtractionResult = calculate(11, 9, subtraction);
console.log("subtractionResult: " + subtractionResult);

// 3. Promises:
const fetchData = new Promise((resolve, reject) => {
    const success = true;
    setTimeout(() => {
        if(true) {
            resolve("Data fetched successfully!");
        } else {
            reject("Error fetching data!");
        }
    }, 3000)
});

fetchData.then((message) => {
    console.log("Success!", message);
}).catch((error) => {
    console.error("Error!", error);
}).finally(() => {
    console.log("Operation Completed!");
})

// 4. asyn-await:
async function fetchData() {
    try {
        let response = await fetch("URL!");
        let data = response.json();
        console.log(data);
    } catch(error) {
        console.error("Error fetching data!", error);
    }
} 

fetchData();
