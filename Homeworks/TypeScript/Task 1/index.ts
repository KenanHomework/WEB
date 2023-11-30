// string
const greeting: string = "Hello";
const username: string = "Kanan";

const message: string = `${greeting} ${username}!`;
console.log(message); // "Hello Kanan!"

// number
const num1: number = 5;
const num2: number = 3;

const sum: number = num1 + num2;
console.log("Sum: ", sum); // 8

// boolean
const isStudent: boolean = true;
const isWorking: boolean = false;

const canApplyDiscount: boolean = isStudent && !isWorking;
console.log("Can Apply Discount: ", canApplyDiscount); // true

// array
const fruits: string[] = ["Apple", "Banana", "Orange"];

const fruitCount: number = fruits.length;
const hasBanana: boolean = fruits.includes("Banana");

console.log("Fruit Count:", fruitCount); // 3
console.log("Has Banana:", hasBanana); // true
