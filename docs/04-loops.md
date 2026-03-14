# Lesson 4: Loops - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [For Loop](#for-loop)
3. [While Loop](#while-loop)
4. [Do-While Loop](#do-while-loop)
5. [For...Of Loop](#forof-loop)
6. [For...In Loop](#forin-loop)
7. [Break and Continue](#break-and-continue)
8. [Nested Loops](#nested-loops)
9. [Common Patterns](#common-patterns)
10. [Best Practices](#best-practices)
11. [Common Mistakes](#common-mistakes)
12. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Loops?

Imagine you need to write "I will study JavaScript" 100 times. Would you write it manually 100 times? Of course not! You'd use a loop.

**A loop** is a way to repeat code multiple times without writing it over and over.

### Real-World Analogies

**Washing Dishes:**
```
WHILE there are dirty dishes:
    - Pick up a dish
    - Wash it
    - Dry it
    - Put it away
```

**Reading a Book:**
```
FOR each page in the book:
    - Read the page
    - Turn to next page
```

**Checking Email:**
```
FOR each email in inbox:
    - Read email
    - Decide: reply, delete, or archive
```

### Why Do We Need Loops?

Without loops:
```javascript
console.log("Hello 1");
console.log("Hello 2");
console.log("Hello 3");
console.log("Hello 4");
console.log("Hello 5");
// Imagine doing this 100 times!
```

With loops:
```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Hello " + i);
}
// Much better!
```

---

## For Loop

### What is a For Loop?

The most common loop - use it when you know **how many times** you want to repeat something.

### Basic Syntax

```javascript
for (initialization; condition; increment) {
    // Code to repeat
}
```

**Breaking it down:**
1. **Initialization**: Start point (runs once)
2. **Condition**: Keep going while this is true
3. **Increment**: What to do after each loop
4. **Body**: Code to repeat

### Simple Example

```javascript
for (let i = 1; i <= 5; i++) {
    console.log("Count: " + i);
}
```

**How it works:**
```
Step 1: let i = 1        (initialization)
Step 2: Is i <= 5? YES   (condition check)
Step 3: Print "Count: 1" (run body)
Step 4: i++              (increment, i becomes 2)
Step 5: Is i <= 5? YES   (condition check)
Step 6: Print "Count: 2" (run body)
Step 7: i++              (increment, i becomes 3)
... continues until i = 6
Step N: Is i <= 5? NO    (stop loop)
```

**Output:**
```
Count: 1
Count: 2
Count: 3
Count: 4
Count: 5
```

### Real-World Examples

**Example 1: Print Multiplication Table**
```javascript
const number = 5;

for (let i = 1; i <= 10; i++) {
    console.log(`${number} × ${i} = ${number * i}`);
}

// Output:
// 5 × 1 = 5
// 5 × 2 = 10
// 5 × 3 = 15
// ... up to 50
```

**Example 2: Sum Numbers**
```javascript
let sum = 0;

for (let i = 1; i <= 10; i++) {
    sum += i;
}

console.log("Sum of 1 to 10: " + sum); // 55
```

**Example 3: Countdown Timer**
```javascript
for (let i = 10; i >= 1; i--) {
    console.log(i);
}
console.log("Blast off! 🚀");

// Output: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, Blast off! 🚀
```

**Example 4: Loop Through Array**
```javascript
const fruits = ["apple", "banana", "orange", "grape"];

for (let i = 0; i < fruits.length; i++) {
    console.log(`Fruit ${i + 1}: ${fruits[i]}`);
}

// Output:
// Fruit 1: apple
// Fruit 2: banana
// Fruit 3: orange
// Fruit 4: grape
```

**Example 5: Find Even Numbers**
```javascript
console.log("Even numbers from 1 to 20:");

for (let i = 1; i <= 20; i++) {
    if (i % 2 === 0) {
        console.log(i);
    }
}

// Output: 2, 4, 6, 8, 10, 12, 14, 16, 18, 20
```

**Example 6: Calculate Factorial**
```javascript
const number = 5;
let factorial = 1;

for (let i = 1; i <= number; i++) {
    factorial *= i;
}

console.log(`${number}! = ${factorial}`); // 5! = 120
```

### Loop Variations

**Count by 2s:**
```javascript
for (let i = 0; i <= 10; i += 2) {
    console.log(i);
}
// Output: 0, 2, 4, 6, 8, 10
```

**Count backwards:**
```javascript
for (let i = 5; i >= 1; i--) {
    console.log(i);
}
// Output: 5, 4, 3, 2, 1
```

**Multiple variables:**
```javascript
for (let i = 0, j = 10; i < 5; i++, j--) {
    console.log(`i: ${i}, j: ${j}`);
}
// Output:
// i: 0, j: 10
// i: 1, j: 9
// i: 2, j: 8
// i: 3, j: 7
// i: 4, j: 6
```

---

## While Loop

### What is a While Loop?

Use when you **don't know** how many times to loop - keep going while a condition is true.

### Basic Syntax

```javascript
while (condition) {
    // Code to repeat
    // Don't forget to update the condition!
}
```

### Simple Example

```javascript
let count = 1;

while (count <= 5) {
    console.log("Count: " + count);
    count++;
}
```

**How it works:**
```
Step 1: Is count <= 5? YES (count is 1)
Step 2: Print "Count: 1"
Step 3: count++ (count becomes 2)
Step 4: Is count <= 5? YES (count is 2)
Step 5: Print "Count: 2"
... continues until count = 6
Step N: Is count <= 5? NO (stop)
```

### Real-World Examples

**Example 1: User Input Validation**
```javascript
let password = "";

while (password.length < 8) {
    console.log("Password too short!");
    // In real app, would prompt user for input
    password = "newPassword123"; // Simulating user input
}

console.log("Password accepted!");
```

**Example 2: Game Loop**
```javascript
let lives = 3;
let gameOver = false;

while (lives > 0 && !gameOver) {
    console.log(`Lives remaining: ${lives}`);
    
    // Simulate game logic
    const playerWins = Math.random() > 0.5;
    
    if (playerWins) {
        console.log("You won this round!");
        gameOver = true;
    } else {
        console.log("You lost a life!");
        lives--;
    }
}

if (lives === 0) {
    console.log("Game Over!");
} else {
    console.log("You won the game!");
}
```

**Example 3: Find First Match**
```javascript
const numbers = [3, 7, 12, 18, 25, 30];
let index = 0;
let found = false;

while (index < numbers.length && !found) {
    if (numbers[index] > 15) {
        console.log(`Found number greater than 15: ${numbers[index]}`);
        found = true;
    }
    index++;
}
```

**Example 4: Halving Until Small**
```javascript
let number = 1000;

while (number > 1) {
    console.log(number);
    number = number / 2;
}

console.log("Final: " + number);
// Output: 1000, 500, 250, 125, 62.5, 31.25, 15.625, 7.8125, 3.90625, 1.953125, Final: 0.9765625
```

**Example 5: Sum Until Limit**
```javascript
let sum = 0;
let num = 1;

while (sum < 100) {
    sum += num;
    console.log(`Added ${num}, sum is now ${sum}`);
    num++;
}

console.log(`Stopped at ${num - 1}, total sum: ${sum}`);
```

### ⚠️ Warning: Infinite Loops

**NEVER forget to update the condition!**

```javascript
// ❌ INFINITE LOOP - Don't do this!
let count = 1;
while (count <= 5) {
    console.log(count);
    // Forgot count++! Loop never ends!
}

// ✅ Correct
let count = 1;
while (count <= 5) {
    console.log(count);
    count++; // This is essential!
}
```

---

## Do-While Loop

### What is a Do-While Loop?

Similar to while, but **always runs at least once** - checks condition AFTER running.

### Basic Syntax

```javascript
do {
    // Code to repeat
    // Runs at least once!
} while (condition);
```

### Simple Example

```javascript
let count = 1;

do {
    console.log("Count: " + count);
    count++;
} while (count <= 5);
```

### Key Difference: While vs Do-While

**While Loop (might not run):**
```javascript
let x = 10;

while (x < 5) {
    console.log(x); // Never runs! (x is already 10)
}
```

**Do-While Loop (always runs once):**
```javascript
let x = 10;

do {
    console.log(x); // Runs once! (prints 10)
} while (x < 5);
```

### Real-World Examples

**Example 1: Menu System**
```javascript
let choice;

do {
    console.log("\n=== Menu ===");
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");
    
    // Simulate user choice
    choice = 3; // User chooses exit
    
    if (choice === 1) {
        console.log("Starting game...");
    } else if (choice === 2) {
        console.log("Opening settings...");
    }
    
} while (choice !== 3);

console.log("Goodbye!");
```

**Example 2: Dice Roll Until Six**
```javascript
let roll;
let attempts = 0;

do {
    roll = Math.floor(Math.random() * 6) + 1;
    attempts++;
    console.log(`Roll ${attempts}: ${roll}`);
} while (roll !== 6);

console.log(`Got a 6 after ${attempts} attempts!`);
```

**Example 3: Password Retry**
```javascript
let attempts = 0;
const maxAttempts = 3;
let correctPassword = "secret123";
let userPassword;

do {
    attempts++;
    console.log(`Attempt ${attempts} of ${maxAttempts}`);
    
    // Simulate user input
    userPassword = attempts === 2 ? "secret123" : "wrong";
    
    if (userPassword === correctPassword) {
        console.log("✓ Login successful!");
        break;
    } else {
        console.log("✗ Incorrect password");
    }
    
} while (attempts < maxAttempts);

if (userPassword !== correctPassword) {
    console.log("Account locked!");
}
```

---

## For...Of Loop

### What is For...Of?

A modern, clean way to loop through **arrays** and other iterables.

### Basic Syntax

```javascript
for (const item of array) {
    // Use item directly
}
```

### Simple Example

```javascript
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}

// Output:
// apple
// banana
// orange
```

**Much cleaner than:**
```javascript
for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### Real-World Examples

**Example 1: Calculate Total Price**
```javascript
const prices = [10.99, 5.50, 3.25, 8.00];
let total = 0;

for (const price of prices) {
    total += price;
}

console.log(`Total: $${total.toFixed(2)}`); // Total: $27.74
```

**Example 2: Find Maximum**
```javascript
const scores = [85, 92, 78, 95, 88];
let highest = scores[0];

for (const score of scores) {
    if (score > highest) {
        highest = score;
    }
}

console.log(`Highest score: ${highest}`); // 95
```

**Example 3: Filter Items**
```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const evenNumbers = [];

for (const num of numbers) {
    if (num % 2 === 0) {
        evenNumbers.push(num);
    }
}

console.log("Even numbers:", evenNumbers); // [2, 4, 6, 8, 10]
```

**Example 4: String Iteration**
```javascript
const word = "JavaScript";

for (const letter of word) {
    console.log(letter);
}

// Output: J, a, v, a, S, c, r, i, p, t (each on new line)
```

**Example 5: Process Shopping Cart**
```javascript
const cart = [
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

let total = 0;

for (const item of cart) {
    console.log(`${item.name}: $${item.price}`);
    total += item.price;
}

console.log(`\nTotal: $${total}`);
```

---

## For...In Loop

### What is For...In?

Loops through **object properties** (keys).

### Basic Syntax

```javascript
for (const key in object) {
    // Use key to access object[key]
}
```

### Simple Example

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "New York"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}

// Output:
// name: Alice
// age: 25
// city: New York
```

### Real-World Examples

**Example 1: Display User Profile**
```javascript
const user = {
    username: "john_doe",
    email: "john@example.com",
    role: "admin",
    active: true
};

console.log("User Profile:");
for (const key in user) {
    console.log(`  ${key}: ${user[key]}`);
}
```

**Example 2: Count Properties**
```javascript
const inventory = {
    apples: 50,
    bananas: 30,
    oranges: 25,
    grapes: 40
};

let totalItems = 0;

for (const item in inventory) {
    totalItems += inventory[item];
}

console.log(`Total items in inventory: ${totalItems}`); // 145
```

**Example 3: Convert Object to Array**
```javascript
const scores = {
    math: 90,
    english: 85,
    science: 92,
    history: 88
};

const subjects = [];
const grades = [];

for (const subject in scores) {
    subjects.push(subject);
    grades.push(scores[subject]);
}

console.log("Subjects:", subjects);
console.log("Grades:", grades);
```

### ⚠️ For...In vs For...Of

```javascript
const arr = ["a", "b", "c"];

// For...in gives INDEX (not recommended for arrays)
for (const index in arr) {
    console.log(index); // 0, 1, 2
}

// For...of gives VALUE (recommended for arrays)
for (const value of arr) {
    console.log(value); // a, b, c
}
```

**Best Practice:**
- Use `for...of` for **arrays**
- Use `for...in` for **objects**

---

## Break and Continue

### Break - Stop the Loop

**What it does:** Immediately exits the loop.

```javascript
for (let i = 1; i <= 10; i++) {
    if (i === 5) {
        break; // Stop when i is 5
    }
    console.log(i);
}

// Output: 1, 2, 3, 4 (stops at 5)
```

**Real-World Examples:**

**Example 1: Find First Match**
```javascript
const numbers = [3, 7, 12, 18, 25];

for (const num of numbers) {
    if (num > 15) {
        console.log(`Found: ${num}`);
        break; // Stop searching
    }
}
// Output: Found: 18
```

**Example 2: Search for User**
```javascript
const users = ["Alice", "Bob", "Charlie", "David"];
const searchName = "Charlie";
let found = false;

for (const user of users) {
    if (user === searchName) {
        console.log(`${searchName} found!`);
        found = true;
        break;
    }
}

if (!found) {
    console.log(`${searchName} not found`);
}
```

### Continue - Skip to Next Iteration

**What it does:** Skips the rest of the current iteration and moves to the next one.

```javascript
for (let i = 1; i <= 5; i++) {
    if (i === 3) {
        continue; // Skip 3
    }
    console.log(i);
}

// Output: 1, 2, 4, 5 (skips 3)
```

**Real-World Examples:**

**Example 1: Skip Negative Numbers**
```javascript
const numbers = [5, -2, 8, -1, 10, -5, 3];

for (const num of numbers) {
    if (num < 0) {
        continue; // Skip negative numbers
    }
    console.log(num);
}
// Output: 5, 8, 10, 3
```

**Example 2: Process Only Even Numbers**
```javascript
for (let i = 1; i <= 10; i++) {
    if (i % 2 !== 0) {
        continue; // Skip odd numbers
    }
    console.log(`${i} is even`);
}
// Output: 2 is even, 4 is even, 6 is even, 8 is even, 10 is even
```

**Example 3: Skip Empty Strings**
```javascript
const inputs = ["Alice", "", "Bob", "", "Charlie"];

for (const input of inputs) {
    if (input === "") {
        continue; // Skip empty strings
    }
    console.log(`Processing: ${input}`);
}
// Output: Processing: Alice, Processing: Bob, Processing: Charlie
```

---

## Nested Loops

### What are Nested Loops?

A loop inside another loop - like boxes inside boxes.

### Simple Example

```javascript
for (let i = 1; i <= 3; i++) {
    for (let j = 1; j <= 3; j++) {
        console.log(`i: ${i}, j: ${j}`);
    }
}

// Output:
// i: 1, j: 1
// i: 1, j: 2
// i: 1, j: 3
// i: 2, j: 1
// i: 2, j: 2
// i: 2, j: 3
// i: 3, j: 1
// i: 3, j: 2
// i: 3, j: 3
```

### Real-World Examples

**Example 1: Multiplication Table**
```javascript
console.log("Multiplication Table:");

for (let i = 1; i <= 5; i++) {
    let row = "";
    for (let j = 1; j <= 5; j++) {
        row += (i * j) + "\t";
    }
    console.log(row);
}

// Output:
// 1  2  3  4  5
// 2  4  6  8  10
// 3  6  9  12 15
// 4  8  12 16 20
// 5  10 15 20 25
```

**Example 2: Pattern Printing**
```javascript
for (let i = 1; i <= 5; i++) {
    let stars = "";
    for (let j = 1; j <= i; j++) {
        stars += "* ";
    }
    console.log(stars);
}

// Output:
// *
// * *
// * * *
// * * * *
// * * * * *
```

**Example 3: Compare Two Arrays**
```javascript
const arr1 = [1, 2, 3];
const arr2 = [2, 3, 4];
const common = [];

for (const num1 of arr1) {
    for (const num2 of arr2) {
        if (num1 === num2) {
            common.push(num1);
        }
    }
}

console.log("Common elements:", common); // [2, 3]
```

---

## Common Patterns

### Pattern 1: Sum of Array
```javascript
const numbers = [10, 20, 30, 40, 50];
let sum = 0;

for (const num of numbers) {
    sum += num;
}

console.log("Sum:", sum); // 150
```

### Pattern 2: Find Maximum
```javascript
const numbers = [45, 23, 67, 12, 89, 34];
let max = numbers[0];

for (const num of numbers) {
    if (num > max) {
        max = num;
    }
}

console.log("Maximum:", max); // 89
```

### Pattern 3: Reverse Array
```javascript
const arr = [1, 2, 3, 4, 5];
const reversed = [];

for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
}

console.log("Reversed:", reversed); // [5, 4, 3, 2, 1]
```

### Pattern 4: Count Occurrences
```javascript
const letters = ["a", "b", "a", "c", "a", "b"];
const count = {};

for (const letter of letters) {
    if (count[letter]) {
        count[letter]++;
    } else {
        count[letter] = 1;
    }
}

console.log(count); // { a: 3, b: 2, c: 1 }
```

---

## Best Practices

### 1. Choose the Right Loop

```javascript
// ✅ For loop - when you know the count
for (let i = 0; i < 10; i++) { }

// ✅ While loop - when condition-based
while (userInput !== "quit") { }

// ✅ For...of - for arrays
for (const item of array) { }

// ✅ For...in - for objects
for (const key in object) { }
```

### 2. Use Descriptive Variable Names

```javascript
// ❌ Bad
for (let i = 0; i < users.length; i++) {
    console.log(users[i]);
}

// ✅ Good
for (const user of users) {
    console.log(user);
}
```

### 3. Avoid Modifying Loop Variable

```javascript
// ❌ Bad - confusing
for (let i = 0; i < 10; i++) {
    i += 2; // Don't do this!
}

// ✅ Good - clear intent
for (let i = 0; i < 10; i += 3) {
    // Clear that we're counting by 3s
}
```

### 4. Cache Array Length

```javascript
// ❌ Less efficient
for (let i = 0; i < array.length; i++) {
    // length is checked every iteration
}

// ✅ More efficient
const len = array.length;
for (let i = 0; i < len; i++) {
    // length checked once
}

// ✅ Best - use for...of
for (const item of array) {
    // Cleanest and efficient
}
```

---

## Common Mistakes

### Mistake 1: Off-by-One Errors

```javascript
// ❌ Wrong - misses last element
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length - 1; i++) {
    console.log(arr[i]); // Only prints 1, 2, 3, 4
}

// ✅ Correct
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]); // Prints all: 1, 2, 3, 4, 5
}
```

### Mistake 2: Infinite Loops

```javascript
// ❌ Wrong - infinite loop!
let i = 0;
while (i < 10) {
    console.log(i);
    // Forgot i++!
}

// ✅ Correct
let i = 0;
while (i < 10) {
    console.log(i);
    i++;
}
```

### Mistake 3: Modifying Array While Looping

```javascript
// ❌ Wrong - unpredictable behavior
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1); // Modifying array while looping!
}

// ✅ Correct - loop backwards or use filter
const arr = [1, 2, 3, 4, 5];
for (let i = arr.length - 1; i >= 0; i--) {
    arr.splice(i, 1);
}
```

---

## Practice Exercises

### Exercise 1: FizzBuzz
```javascript
// Print numbers 1-100
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of both, print "FizzBuzz"

// Your code here:
```

### Exercise 2: Sum of Even Numbers
```javascript
// Calculate sum of all even numbers from 1 to 50

// Your code here:
```

### Exercise 3: Reverse String
```javascript
const str = "JavaScript";
// Reverse the string using a loop

// Your code here:
```

### Exercise 4: Find Duplicates
```javascript
const numbers = [1, 2, 3, 2, 4, 5, 3, 6];
// Find and print duplicate numbers

// Your code here:
```

---

## Summary

### Key Takeaways

1. **For loop** - Use when you know how many iterations
2. **While loop** - Use when condition-based
3. **Do-while** - Like while, but runs at least once
4. **For...of** - Best for arrays (gets values)
5. **For...in** - Best for objects (gets keys)
6. **Break** - Exit loop early
7. **Continue** - Skip to next iteration
8. **Avoid infinite loops** - Always update condition

### What's Next?

Now that you can repeat actions, you're ready to learn about **functions** - how to create reusable blocks of code!

---

## Quick Reference

```javascript
// For Loop
for (let i = 0; i < 5; i++) {
    console.log(i);
}

// While Loop
let i = 0;
while (i < 5) {
    console.log(i);
    i++;
}

// Do-While Loop
let j = 0;
do {
    console.log(j);
    j++;
} while (j < 5);

// For...Of (Arrays)
for (const item of array) {
    console.log(item);
}

// For...In (Objects)
for (const key in object) {
    console.log(key, object[key]);
}

// Break
if (condition) break;

// Continue
if (condition) continue;
```

**Congratulations!** You've completed Lesson 4. Practice loops before moving forward!
