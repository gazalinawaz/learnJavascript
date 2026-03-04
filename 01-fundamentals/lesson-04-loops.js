// ============================================
// LESSON 4: LOOPS
// ============================================

// FOR LOOP
// ============================================
// Syntax: for (initialization; condition; increment)

console.log("=== FOR LOOP ===");

for (let i = 0; i < 5; i++) {
    console.log(`Iteration ${i}`);
}

// Counting backwards
for (let i = 5; i > 0; i--) {
    console.log(i);
}
console.log("Blast off!");

// Increment by different amounts
for (let i = 0; i <= 20; i += 5) {
    console.log(i); // 0, 5, 10, 15, 20
}

// WHILE LOOP
// ============================================
// Runs while condition is true

console.log("\n=== WHILE LOOP ===");

let count = 0;
while (count < 5) {
    console.log(`Count: ${count}`);
    count++;
}

// Practical example: User input simulation
let password = "";
let attempts = 0;
const correctPassword = "secret123";

while (password !== correctPassword && attempts < 3) {
    console.log(`Attempt ${attempts + 1}: Enter password`);
    // In real code, you'd get user input here
    password = attempts === 2 ? "secret123" : "wrong";
    attempts++;
}

if (password === correctPassword) {
    console.log("Access granted!");
} else {
    console.log("Too many failed attempts");
}

// DO-WHILE LOOP
// ============================================
// Runs at least once, then checks condition

console.log("\n=== DO-WHILE LOOP ===");

let num = 0;
do {
    console.log(`Number: ${num}`);
    num++;
} while (num < 5);

// Runs at least once even if condition is false
let x = 10;
do {
    console.log("This runs once even though x >= 10");
} while (x < 5);

// BREAK STATEMENT
// ============================================
// Exits the loop immediately

console.log("\n=== BREAK ===");

for (let i = 0; i < 10; i++) {
    if (i === 5) {
        console.log("Breaking at 5");
        break;
    }
    console.log(i);
}

// Finding first even number
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
        console.log(`First even number: ${i}`);
        break;
    }
}

// CONTINUE STATEMENT
// ============================================
// Skips current iteration and continues with next

console.log("\n=== CONTINUE ===");

for (let i = 0; i < 10; i++) {
    if (i % 2 === 0) {
        continue; // Skip even numbers
    }
    console.log(i); // Only prints odd numbers
}

// Skip multiples of 3
for (let i = 1; i <= 10; i++) {
    if (i % 3 === 0) {
        continue;
    }
    console.log(i);
}

// NESTED LOOPS
// ============================================

console.log("\n=== NESTED LOOPS ===");

// Multiplication table
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`${i} x ${j} = ${i * j}`);
    }
    console.log("---");
}

// Pattern printing
for (let i = 1; i <= 5; i++) {
    let pattern = "";
    for (let j = 1; j <= i; j++) {
        pattern += "* ";
    }
    console.log(pattern);
}

// FOR...OF LOOP (Arrays)
// ============================================

console.log("\n=== FOR...OF LOOP ===");

const fruits = ["apple", "banana", "orange", "grape"];

for (const fruit of fruits) {
    console.log(fruit);
}

const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (const num of numbers) {
    sum += num;
}
console.log(`Sum: ${sum}`);

// FOR...IN LOOP (Objects)
// ============================================

console.log("\n=== FOR...IN LOOP ===");

const person = {
    name: "John",
    age: 30,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// LOOP PATTERNS
// ============================================

console.log("\n=== COMMON PATTERNS ===");

// 1. Sum of numbers
let total = 0;
for (let i = 1; i <= 10; i++) {
    total += i;
}
console.log(`Sum of 1-10: ${total}`);

// 2. Factorial
let factorial = 1;
let n = 5;
for (let i = 1; i <= n; i++) {
    factorial *= i;
}
console.log(`${n}! = ${factorial}`);

// 3. Reverse a string
let str = "hello";
let reversed = "";
for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
}
console.log(`Reversed: ${reversed}`);

// 4. Count occurrences
let text = "hello world";
let letter = "o";
let occurrences = 0;

for (let i = 0; i < text.length; i++) {
    if (text[i] === letter) {
        occurrences++;
    }
}
console.log(`'${letter}' appears ${occurrences} times`);

// INFINITE LOOPS (BE CAREFUL!)
// ============================================

// DON'T RUN THIS - It will freeze your program!
// while (true) {
//     console.log("This runs forever!");
// }

// Always ensure your loop has a way to exit
let safeCount = 0;
while (true) {
    safeCount++;
    if (safeCount >= 5) {
        break; // Exit condition
    }
}

// ============================================
// EXERCISES
// ============================================

// 1. Print numbers from 1 to 20
// YOUR CODE HERE:

// 2. Print even numbers from 0 to 30
// YOUR CODE HERE:

// 3. Calculate the sum of numbers from 1 to 100
// YOUR CODE HERE:

// 4. Print the multiplication table for 7 (7x1 to 7x10)
// YOUR CODE HERE:

// 5. Count down from 10 to 1, then print "Happy New Year!"
// YOUR CODE HERE:

// 6. Find the first number divisible by both 3 and 5 between 1 and 100
// YOUR CODE HERE:

// 7. Create a pattern:
// *
// **
// ***
// ****
// *****
// YOUR CODE HERE:

// 8. Reverse the array [1, 2, 3, 4, 5] using a loop
// YOUR CODE HERE:

// 9. Find the largest number in the array [23, 45, 12, 67, 34, 89, 15]
// YOUR CODE HERE:

// 10. Check if a number is prime (divisible only by 1 and itself)
let numberToCheck = 17;
// YOUR CODE HERE:
