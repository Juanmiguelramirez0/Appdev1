const numbers = [1, 2, 3];
const moreNumbers = [...numbers, 4, 5];
console.log(moreNumbers);

const user = { name: "Miguel", age: 25 };
const updatedUser = { ...user, province: "Pampanga" };
console.log(updatedUser);

function sum(...nums) {
  return nums.reduce((acc, curr) => acc + curr, 0);
}

console.log(sum(1, 2, 3, 4, 5));
