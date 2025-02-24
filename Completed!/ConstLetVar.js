// const: It's Hoisted but it's not Initialized.
// let: It is Hoisted but it is not Initialized. We can not use the variables defined with 'let' before it's declaration.
// var: It is Hoisted as well as Initialized. We can use the variables defined with 'var' before it's declaration.
const a = 11;
let b = 12;
var c = 13;

// Differences.
// 1. const: Blocked Scoped.
// 2. let: Blocked Scoped.
// 3. var: Function Scoped.
{
    const d = 11;
    let e = 12;
    var f = 13;
console.log(d); // Accessible.
console.log(e); // Accessible.
console.log(f); // Accessible.

}

console.log(d); // Not Accessible.
console.log(e); // Not Accessible.
console.log(f); // Accessible.

// Function + Lexical Scope = Closure.
// Lexical Scope: Firstly checks inside the scope then secondly checks outside the scope.
