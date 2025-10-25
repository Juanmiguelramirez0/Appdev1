const person = { name: "Miguel", age: 25 };
const hobbies = ["reading", "Watching"];

const { name, age } = person;
console.log(name, age);

const [hobby1, hobby2] = hobbies;
console.log(hobby1, hobby2);

function printName({ name }) {
  console.log("Hello, my name is", name);
}

printName(person);
