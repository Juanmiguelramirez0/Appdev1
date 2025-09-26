let favoriteFoods = ["Pizza", "Burger", "Sushi"];

favoriteFoods.push("Pasta");
favoriteFoods.shift();

for (let food of favoriteFoods) {
    console.log(food);
}

let likes = favoriteFoods.map(food => `I like ${food}`);
console.log(likes);
