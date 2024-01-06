// Template string `` dynamic string
const name = "naim";

const fullName = `Abu ${name}`;
// console.log(fullName);

// spread operator ...
const num = [1, 2, 3, 4, 5, 6, 7, 8, 10, 11, 22];
// console.log(...num); //using spread operator to get arrays elements.

const arraySpread = ["rahim", "karim", "naim", ...num];
// console.log(arraySpread);

console.log(Math.max(...num))
