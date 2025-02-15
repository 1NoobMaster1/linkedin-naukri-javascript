// Primitive/Value Type: Boolean: true/false, Number: 11, String: Ayan Khan & Undefine: .
// Null, Not Defined & Undefined.
// let a = null; // Null.
// let b; // Undefined.
let x = "Ayan Khan";
console.log(x);
console.log(typeof(x));

// Reference Types: Arrays, Functions & Objects.
// Array.
let courses = ['C++', 'Core Java', 'JavaScript'];
console.log(courses[0]);
console.log(courses[1]);
console.log(courses[2]);
console.log(typeof(courses));

// Functions.
function createCourse(coursename) {
    console.log('Creating: ' + coursename);
}

createCourse("Python");

// Object.
let course = {
    title: "JavaScript",
    description: "A JavaScript Overview.",
    rating: 5
};

console.log(course);
console.log(typeof(course));
console.log(course.title);
console.log(course['title']);
console.log(course.description);
console.log(course.rating);
