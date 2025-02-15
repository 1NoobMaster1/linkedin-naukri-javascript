// Execution Context -
// 1. Code Phase: Thread of Execution.
// 2. Memory Phase: Variable Environment.
// Temporal Dead Zone.
createCourse('DSA'); // Functions & Var they both are Hoisted & Initialized.
console.log(a); // Undefined.

function createCourse(coursename) {
    console.log('Creating: ' + coursename);
}

var a = 11;
console.log(a); // 11.
createCourse('JavaScript'); // Functions & Var they both are Hoisted & Initialized.

// Hoisting: Execution of JavaScript.
// var is Global & Hoisted. 
console.log(b); // Undefined.
console.log(this.b); // Undefined.
console.log(window.b); // Undefined.

var b = 11;

console.log(b); // 11.
console.log(this.b); // 11.
console.log(window.b); // 11.
