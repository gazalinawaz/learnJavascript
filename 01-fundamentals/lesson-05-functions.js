// ============================================
// LESSON 5: FUNCTIONS
// ============================================

// FUNCTION DECLARATION
// ============================================

function greet() {
    console.log("Hello, World!");
}

greet(); // Call the function

// Function with parameters
function greetPerson(name) {
    console.log(`Hello, ${name}!`);
}

greetPerson("Alice");
greetPerson("Bob");

// Function with multiple parameters
function add(a, b) {
    return a + b;
}

let result = add(5, 3);
console.log(result); // 8

// RETURN STATEMENT
// ============================================

function multiply(x, y) {
    return x * y;
    console.log("This never runs"); // Code after return is unreachable
}

let product = multiply(4, 5);
console.log(product); // 20

// Function with conditional return
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(getGrade(85)); // B

// DEFAULT PARAMETERS
// ============================================

function greetWithDefault(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greetWithDefault("Alice"); // Hello, Alice!
greetWithDefault();        // Hello, Guest!

function calculatePrice(price, tax = 0.1) {
    return price + (price * tax);
}

console.log(calculatePrice(100));     // 110 (10% tax)
console.log(calculatePrice(100, 0.2)); // 120 (20% tax)

// FUNCTION EXPRESSIONS
// ============================================

const subtract = function(a, b) {
    return a - b;
};

console.log(subtract(10, 3)); // 7

// ARROW FUNCTIONS (ES6+)
// ============================================

// Basic syntax
const square = (num) => {
    return num * num;
};

console.log(square(5)); // 25

// Shorter syntax (implicit return)
const cube = num => num * num * num;
console.log(cube(3)); // 27

// Multiple parameters
const divide = (a, b) => a / b;
console.log(divide(10, 2)); // 5

// No parameters
const sayHi = () => console.log("Hi!");
sayHi();

// ARROW FUNCTIONS VS REGULAR FUNCTIONS
// ============================================

// Regular function
function regularFunction() {
    console.log("Regular function");
}

// Arrow function
const arrowFunction = () => {
    console.log("Arrow function");
};

// Key difference: 'this' binding (covered in advanced lessons)

// REST PARAMETERS
// ============================================

function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));           // 6
console.log(sum(1, 2, 3, 4, 5));     // 15
console.log(sum(10, 20, 30, 40, 50)); // 150

// SCOPE
// ============================================

// Global scope
let globalVar = "I'm global";

function testScope() {
    // Function scope
    let localVar = "I'm local";
    console.log(globalVar); // Can access global
    console.log(localVar);  // Can access local
}

testScope();
console.log(globalVar); // Can access global
// console.log(localVar); // ERROR! Cannot access local outside function

// Block scope
if (true) {
    let blockVar = "I'm in a block";
    const blockConst = "Me too";
    console.log(blockVar); // Works
}
// console.log(blockVar); // ERROR! Block-scoped

// NESTED FUNCTIONS
// ============================================

function outer() {
    const outerVar = "Outer";
    
    function inner() {
        const innerVar = "Inner";
        console.log(outerVar); // Can access outer variable
        console.log(innerVar);
    }
    
    inner();
    // console.log(innerVar); // ERROR! Cannot access inner variable
}

outer();

// CALLBACK FUNCTIONS
// ============================================

function processUserInput(callback) {
    const name = "Alice";
    callback(name);
}

processUserInput(function(name) {
    console.log(`Processing: ${name}`);
});

// With arrow function
processUserInput(name => console.log(`Hello, ${name}`));

// HIGHER-ORDER FUNCTIONS
// ============================================

function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, console.log);

repeat(5, i => {
    console.log(`Iteration ${i}`);
});

// IMMEDIATELY INVOKED FUNCTION EXPRESSION (IIFE)
// ============================================

(function() {
    console.log("This runs immediately!");
})();

// With arrow function
(() => {
    console.log("IIFE with arrow function");
})();

// FUNCTION HOISTING
// ============================================

// Function declarations are hoisted
sayHello(); // Works!

function sayHello() {
    console.log("Hello from hoisted function");
}

// Function expressions are NOT hoisted
// sayGoodbye(); // ERROR!

const sayGoodbye = function() {
    console.log("Goodbye");
};

// PURE FUNCTIONS
// ============================================

// Pure: Same input always gives same output, no side effects
function addPure(a, b) {
    return a + b;
}

// Impure: Depends on external state
let total = 0;
function addImpure(num) {
    total += num; // Side effect: modifies external variable
    return total;
}

// RECURSION
// ============================================

function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    console.log(n);
    countdown(n - 1);
}

countdown(5);

// Factorial using recursion
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// ============================================
// EXERCISES
// ============================================

// 1. Create a function that checks if a number is even
// YOUR CODE HERE:

// 2. Create a function that converts Celsius to Fahrenheit
// Formula: F = (C * 9/5) + 32
// YOUR CODE HERE:

// 3. Create a function that finds the maximum of two numbers
// YOUR CODE HERE:

// 4. Create a function that calculates the area of a circle
// Formula: area = π * r²
// YOUR CODE HERE:

// 5. Create a function that reverses a string
// YOUR CODE HERE:

// 6. Create a function that counts vowels in a string
// YOUR CODE HERE:

// 7. Create an arrow function that checks if a number is positive
// YOUR CODE HERE:

// 8. Create a function that takes an array and returns the sum using rest parameters
// YOUR CODE HERE:

// 9. Create a function that generates a random number between min and max
// YOUR CODE HERE:

// 10. Create a recursive function to calculate the sum of numbers from 1 to n
// YOUR CODE HERE:
