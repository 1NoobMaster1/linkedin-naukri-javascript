let profile = {
  name: "John Doe",
  age: 65,
  kids: [
    {
      name: "Kate",
      age: 30,
      kids: [
        {
          name: "Peter",
          age: 5,
        },
        {
          name: "Sarah",
          age: 2,
        },
      ],
    },
  ],
};

let output1 = profile.kids[0].age;
console.log(output1);

let output2 = profile.kids[0].kids[0].age;
console.log(output2);

let output3 = profile.kids[0].kids[1].age;
console.log(output3);

let output4 = profile.age;
console.log(output4);
console.log(output1 + output2 + output3 + output4);
