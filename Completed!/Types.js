// This is why it is called a value type because it copies the value.
let x = "Ayan Khan";
let y = x;
x = "Khan Ayan";
console.log(x);
console.log(y);

// This is why it is called a reference type because it copies the reference.
let p = {
    name: "Ayan Khan"
};
let q = p;
p.name = "Khan Ayan";
console.log(p);
console.log(q);
