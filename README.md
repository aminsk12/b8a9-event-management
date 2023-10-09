# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh




1. Write the correct answer from the following options and give an explanation (2 lines).
let greeting;
greetign = {};
console.log(greetign);


The correct answer is B: ReferenceError: greetign is not defined.

Explanation: The code contains a typo in the variable name. It's declared as "greeting," but when trying to assign an empty object to it, "greetign" is used instead. JavaScript is case-sensitive, so "greetign" is treated as an undefined variable, resulting in a ReferenceError.


2. Write the correct answer from the following options and give an explanation (2 lines).
function sum(a, b) {
  return a + b;
}

sum(1, "2");
The correct answer is D: 3.

Explanation: JavaScript performs type coercion when using the + operator, so it attempts to convert the string "2" to a number and then adds it to 1, resulting in the numeric addition of 1 and 2, which equals 3.


3. Write the correct answer from the following options and give an explanation (2-5 lines).
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
The correct answer is A: ['🍕', '🍫', '🥑', '🍔'].

Explanation: In the code, we initially assign the first element of the food array ("🍕") to the favoriteFood property of the info object. Later, we change the value of info.favoriteFood to "🍝," but this doesn't affect the original food array. Therefore, when we log food, it remains unchanged and contains the elements "🍕", "🍫", "🥑", and "🍔".



4. Write the correct answer from the following options and give an explanation (2-5 lines).
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
The correct answer is B: Hi there, undefined.

Explanation: In the function sayHi, there's a parameter name which is not given a value when calling the function. As a result, name is undefined inside the function, and the template literal ${name} evaluates to undefined, leading to the output "Hi there, undefined."




5. Write the correct answer from the following options and give an explanation (2-5 lines).
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
The correct answer is C: 3.

Explanation: The forEach method iterates over each element in the nums array. The callback function checks if the current element num is truthy (i.e., not equal to 0). For elements 1, 2, and 3, this condition is true, so count is incremented by 1 for each of them. Therefore, count ends up with a value of 3 (1 + 1 + 1), and that's what gets logged to the console.




