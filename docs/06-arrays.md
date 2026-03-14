# Lesson 6: Arrays - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Creating Arrays](#creating-arrays)
3. [Accessing Elements](#accessing-elements)
4. [Array Properties](#array-properties)
5. [Adding and Removing Elements](#adding-and-removing-elements)
6. [Array Methods](#array-methods)
7. [Iterating Arrays](#iterating-arrays)
8. [Multi-Dimensional Arrays](#multi-dimensional-arrays)
9. [Array Destructuring](#array-destructuring)
10. [Common Patterns](#common-patterns)
11. [Best Practices](#best-practices)
12. [Common Mistakes](#common-mistakes)
13. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Arrays?

Imagine a shopping list, a playlist of songs, or a list of students in a class. Arrays are like **lists** in programming - they store multiple values in a single variable.

### Real-World Analogies

**Shopping List:**
```
1. Milk
2. Bread
3. Eggs
4. Cheese
```

**Playlist:**
```
1. Song A
2. Song B
3. Song C
```

**Student Roster:**
```
1. Alice
2. Bob
3. Charlie
```

### Why Use Arrays?

**Without Arrays:**
```javascript
const fruit1 = "apple";
const fruit2 = "banana";
const fruit3 = "orange";
const fruit4 = "grape";
// Hard to manage!
```

**With Arrays:**
```javascript
const fruits = ["apple", "banana", "orange", "grape"];
// Much better!
```

---

## Creating Arrays

### Array Literal (Most Common)

```javascript
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null];
```

### Array Constructor

```javascript
const arr = new Array(3); // Creates array with 3 empty slots
const arr2 = new Array(1, 2, 3); // Creates [1, 2, 3]
```

### Empty Array

```javascript
const empty = [];
```

### Real-World Examples

**Example 1: Shopping Cart**
```javascript
const cart = ["Laptop", "Mouse", "Keyboard"];
```

**Example 2: Test Scores**
```javascript
const scores = [85, 92, 78, 95, 88];
```

**Example 3: User Names**
```javascript
const users = ["alice", "bob", "charlie"];
```

**Example 4: Mixed Data**
```javascript
const person = ["John", 25, "New York", true];
```

---

## Accessing Elements

### Index-Based Access

Arrays use **zero-based indexing** - first element is at index 0.

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits[0]); // "apple"
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
```

**Visual Representation:**
```
Index:  0        1         2
Value: "apple" "banana" "orange"
```

### Accessing from End

```javascript
const fruits = ["apple", "banana", "orange", "grape"];

// Last element
console.log(fruits[fruits.length - 1]); // "grape"

// Second to last
console.log(fruits[fruits.length - 2]); // "orange"
```

### Real-World Examples

**Example 1: Get First and Last**
```javascript
const students = ["Alice", "Bob", "Charlie", "David"];

const firstStudent = students[0];
const lastStudent = students[students.length - 1];

console.log("First:", firstStudent); // First: Alice
console.log("Last:", lastStudent);   // Last: David
```

**Example 2: Access Specific Score**
```javascript
const scores = [85, 92, 78, 95, 88];

console.log("First test:", scores[0]);  // 85
console.log("Third test:", scores[2]);  // 78
console.log("Last test:", scores[scores.length - 1]); // 88
```

---

## Array Properties

### Length Property

```javascript
const fruits = ["apple", "banana", "orange"];
console.log(fruits.length); // 3
```

**Real-World Examples:**

**Example 1: Check if Empty**
```javascript
const cart = [];

if (cart.length === 0) {
    console.log("Your cart is empty");
} else {
    console.log(`You have ${cart.length} items`);
}
```

**Example 2: Loop Through Array**
```javascript
const numbers = [10, 20, 30, 40];

for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}
```

---

## Adding and Removing Elements

### Push - Add to End

```javascript
const fruits = ["apple", "banana"];
fruits.push("orange");

console.log(fruits); // ["apple", "banana", "orange"]
```

**Real-World Example:**
```javascript
const cart = [];
cart.push("Laptop");
cart.push("Mouse");
cart.push("Keyboard");

console.log(cart); // ["Laptop", "Mouse", "Keyboard"]
console.log(`Items in cart: ${cart.length}`); // 3
```

### Pop - Remove from End

```javascript
const fruits = ["apple", "banana", "orange"];
const removed = fruits.pop();

console.log(removed); // "orange"
console.log(fruits);  // ["apple", "banana"]
```

**Real-World Example:**
```javascript
const tasks = ["Task 1", "Task 2", "Task 3"];
const completed = tasks.pop();

console.log(`Completed: ${completed}`); // Completed: Task 3
console.log(`Remaining:`, tasks);       // ["Task 1", "Task 2"]
```

### Unshift - Add to Beginning

```javascript
const fruits = ["banana", "orange"];
fruits.unshift("apple");

console.log(fruits); // ["apple", "banana", "orange"]
```

**Real-World Example:**
```javascript
const queue = ["Person 2", "Person 3"];
queue.unshift("Person 1"); // VIP gets to front

console.log(queue); // ["Person 1", "Person 2", "Person 3"]
```

### Shift - Remove from Beginning

```javascript
const fruits = ["apple", "banana", "orange"];
const removed = fruits.shift();

console.log(removed); // "apple"
console.log(fruits);  // ["banana", "orange"]
```

**Real-World Example:**
```javascript
const queue = ["Alice", "Bob", "Charlie"];
const served = queue.shift();

console.log(`Now serving: ${served}`); // Now serving: Alice
console.log(`Waiting:`, queue);        // ["Bob", "Charlie"]
```

### Summary of Add/Remove

```javascript
const arr = ["b", "c"];

arr.push("d");    // ["b", "c", "d"] - add to end
arr.pop();        // ["b", "c"]      - remove from end
arr.unshift("a"); // ["a", "b", "c"] - add to beginning
arr.shift();      // ["b", "c"]      - remove from beginning
```

---

## Array Methods

### Slice - Extract Portion

```javascript
const fruits = ["apple", "banana", "orange", "grape", "mango"];

const some = fruits.slice(1, 3);
console.log(some);   // ["banana", "orange"]
console.log(fruits); // Original unchanged
```

**Real-World Example:**
```javascript
const students = ["Alice", "Bob", "Charlie", "David", "Eve"];

// Get first 3 students
const topThree = students.slice(0, 3);
console.log(topThree); // ["Alice", "Bob", "Charlie"]

// Get last 2 students
const lastTwo = students.slice(-2);
console.log(lastTwo); // ["David", "Eve"]
```

### Splice - Add/Remove at Position

```javascript
const fruits = ["apple", "banana", "orange"];

// Remove 1 element at index 1
fruits.splice(1, 1);
console.log(fruits); // ["apple", "orange"]

// Add elements at index 1
fruits.splice(1, 0, "grape", "mango");
console.log(fruits); // ["apple", "grape", "mango", "orange"]
```

**Real-World Example:**
```javascript
const playlist = ["Song 1", "Song 2", "Song 3", "Song 4"];

// Remove "Song 2"
playlist.splice(1, 1);
console.log(playlist); // ["Song 1", "Song 3", "Song 4"]

// Insert new song at position 1
playlist.splice(1, 0, "New Song");
console.log(playlist); // ["Song 1", "New Song", "Song 3", "Song 4"]
```

### IndexOf - Find Position

```javascript
const fruits = ["apple", "banana", "orange", "banana"];

console.log(fruits.indexOf("banana"));  // 1 (first occurrence)
console.log(fruits.indexOf("grape"));   // -1 (not found)
```

**Real-World Example:**
```javascript
const users = ["alice", "bob", "charlie"];

if (users.indexOf("bob") !== -1) {
    console.log("Bob is registered");
} else {
    console.log("Bob not found");
}
```

### Includes - Check if Exists

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits.includes("banana")); // true
console.log(fruits.includes("grape"));  // false
```

**Real-World Example:**
```javascript
const allowedUsers = ["admin", "moderator", "user"];
const currentUser = "admin";

if (allowedUsers.includes(currentUser)) {
    console.log("Access granted");
} else {
    console.log("Access denied");
}
```

### Join - Convert to String

```javascript
const fruits = ["apple", "banana", "orange"];

console.log(fruits.join());      // "apple,banana,orange"
console.log(fruits.join(" - ")); // "apple - banana - orange"
console.log(fruits.join(""));    // "applebananaorange"
```

**Real-World Example:**
```javascript
const path = ["home", "user", "documents", "file.txt"];
const fullPath = path.join("/");

console.log(fullPath); // "home/user/documents/file.txt"
```

### Concat - Combine Arrays

```javascript
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);

console.log(combined); // [1, 2, 3, 4, 5, 6]
```

**Real-World Example:**
```javascript
const morning = ["Coffee", "Breakfast"];
const afternoon = ["Lunch", "Snack"];
const evening = ["Dinner"];

const fullDay = morning.concat(afternoon, evening);
console.log(fullDay); // ["Coffee", "Breakfast", "Lunch", "Snack", "Dinner"]
```

### Reverse - Reverse Order

```javascript
const numbers = [1, 2, 3, 4, 5];
numbers.reverse();

console.log(numbers); // [5, 4, 3, 2, 1]
```

**Real-World Example:**
```javascript
const tasks = ["First", "Second", "Third"];
tasks.reverse();

console.log("Reverse order:", tasks); // ["Third", "Second", "First"]
```

### Sort - Sort Elements

```javascript
const fruits = ["orange", "apple", "banana"];
fruits.sort();

console.log(fruits); // ["apple", "banana", "orange"]
```

**Sorting Numbers:**
```javascript
const numbers = [10, 5, 40, 25, 1000, 1];

// ❌ Wrong - sorts as strings!
numbers.sort();
console.log(numbers); // [1, 10, 1000, 25, 40, 5]

// ✅ Correct - numeric sort
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10, 25, 40, 1000]
```

**Real-World Example:**
```javascript
const scores = [85, 92, 78, 95, 88];

// Sort ascending
scores.sort((a, b) => a - b);
console.log("Lowest to highest:", scores);

// Sort descending
scores.sort((a, b) => b - a);
console.log("Highest to lowest:", scores);
```

---

## Iterating Arrays

### For Loop

```javascript
const fruits = ["apple", "banana", "orange"];

for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
}
```

### For...Of Loop

```javascript
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
    console.log(fruit);
}
```

### ForEach Method

```javascript
const fruits = ["apple", "banana", "orange"];

fruits.forEach(function(fruit, index) {
    console.log(`${index}: ${fruit}`);
});

// With arrow function
fruits.forEach((fruit, index) => {
    console.log(`${index}: ${fruit}`);
});
```

### Map - Transform Elements

```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
```

**Real-World Example:**
```javascript
const prices = [10, 20, 30, 40];
const withTax = prices.map(price => price * 1.08);

console.log(withTax); // [10.8, 21.6, 32.4, 43.2]
```

### Filter - Select Elements

```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]
```

**Real-World Example:**
```javascript
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 }
];

const affordable = products.filter(p => p.price < 100);
console.log(affordable);
// [{ name: "Mouse", price: 25 }, { name: "Keyboard", price: 75 }]
```

### Reduce - Combine to Single Value

```javascript
const numbers = [1, 2, 3, 4, 5];
const sum = numbers.reduce((total, num) => total + num, 0);

console.log(sum); // 15
```

**Real-World Example:**
```javascript
const cart = [
    { item: "Laptop", price: 1000 },
    { item: "Mouse", price: 25 },
    { item: "Keyboard", price: 75 }
];

const total = cart.reduce((sum, item) => sum + item.price, 0);
console.log(`Total: $${total}`); // Total: $1100
```

### Find - Get First Match

```javascript
const numbers = [5, 12, 8, 130, 44];
const found = numbers.find(num => num > 10);

console.log(found); // 12
```

**Real-World Example:**
```javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }
```

### Some - Check if Any Match

```javascript
const numbers = [1, 2, 3, 4, 5];
const hasEven = numbers.some(num => num % 2 === 0);

console.log(hasEven); // true
```

### Every - Check if All Match

```javascript
const numbers = [2, 4, 6, 8];
const allEven = numbers.every(num => num % 2 === 0);

console.log(allEven); // true
```

---

## Multi-Dimensional Arrays

### What are Multi-Dimensional Arrays?

Arrays inside arrays - like a grid or table.

```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8
```

**Visual Representation:**
```
[1, 2, 3]
[4, 5, 6]
[7, 8, 9]
```

### Real-World Examples

**Example 1: Tic-Tac-Toe Board**
```javascript
const board = [
    ["X", "O", "X"],
    ["O", "X", "O"],
    ["O", "X", "X"]
];

console.log(board[0][0]); // "X" (top-left)
console.log(board[1][1]); // "X" (center)
console.log(board[2][2]); // "X" (bottom-right)
```

**Example 2: Student Grades**
```javascript
const grades = [
    ["Alice", 85, 90, 88],
    ["Bob", 78, 82, 80],
    ["Charlie", 92, 95, 93]
];

console.log(grades[0][0]); // "Alice"
console.log(grades[0][1]); // 85 (Alice's first grade)
console.log(grades[1][2]); // 82 (Bob's second grade)
```

**Example 3: Iterate 2D Array**
```javascript
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(`[${i}][${j}] = ${matrix[i][j]}`);
    }
}
```

---

## Array Destructuring

### Basic Destructuring

```javascript
const fruits = ["apple", "banana", "orange"];

const [first, second, third] = fruits;

console.log(first);  // "apple"
console.log(second); // "banana"
console.log(third);  // "orange"
```

### Skip Elements

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, , third] = numbers;

console.log(first); // 1
console.log(third); // 3
```

### Rest Operator

```javascript
const numbers = [1, 2, 3, 4, 5];

const [first, second, ...rest] = numbers;

console.log(first);  // 1
console.log(second); // 2
console.log(rest);   // [3, 4, 5]
```

### Real-World Example

```javascript
const user = ["John", "Doe", 25, "New York"];

const [firstName, lastName, age, city] = user;

console.log(`${firstName} ${lastName} is ${age} years old and lives in ${city}`);
// John Doe is 25 years old and lives in New York
```

---

## Common Patterns

### Remove Duplicates

```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(numbers)];

console.log(unique); // [1, 2, 3, 4, 5]
```

### Flatten Array

```javascript
const nested = [[1, 2], [3, 4], [5, 6]];
const flat = nested.flat();

console.log(flat); // [1, 2, 3, 4, 5, 6]
```

### Chunk Array

```javascript
function chunkArray(arr, size) {
    const chunks = [];
    for (let i = 0; i < arr.length; i += size) {
        chunks.push(arr.slice(i, i + size));
    }
    return chunks;
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(chunkArray(numbers, 3));
// [[1, 2, 3], [4, 5, 6], [7, 8]]
```

### Shuffle Array

```javascript
function shuffle(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
}

const cards = [1, 2, 3, 4, 5];
console.log(shuffle(cards)); // Random order
```

---

## Best Practices

### 1. Use Const for Arrays

```javascript
// ✅ Good
const fruits = ["apple", "banana"];
fruits.push("orange"); // OK - modifying content

// ❌ Bad
let fruits = ["apple", "banana"];
fruits = ["grape"]; // Reassigning entire array
```

### 2. Use Array Methods Over Loops

```javascript
// ❌ Less readable
const doubled = [];
for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
}

// ✅ More readable
const doubled = numbers.map(n => n * 2);
```

### 3. Check Array Before Accessing

```javascript
// ❌ Risky
console.log(arr[0]);

// ✅ Safe
if (arr && arr.length > 0) {
    console.log(arr[0]);
}
```

### 4. Use Spread for Copying

```javascript
// ❌ Reference copy
const copy = original;

// ✅ Actual copy
const copy = [...original];
```

---

## Common Mistakes

### Mistake 1: Modifying While Iterating

```javascript
// ❌ Wrong
const arr = [1, 2, 3, 4, 5];
for (let i = 0; i < arr.length; i++) {
    arr.splice(i, 1); // Unpredictable!
}

// ✅ Correct
const arr = [1, 2, 3, 4, 5];
const filtered = arr.filter(n => n > 2);
```

### Mistake 2: Forgetting Array is Zero-Indexed

```javascript
const arr = ["a", "b", "c"];

// ❌ Wrong
console.log(arr[3]); // undefined (no 4th element)

// ✅ Correct
console.log(arr[2]); // "c" (3rd element)
```

### Mistake 3: Comparing Arrays Directly

```javascript
// ❌ Wrong
const arr1 = [1, 2, 3];
const arr2 = [1, 2, 3];
console.log(arr1 === arr2); // false!

// ✅ Correct
console.log(JSON.stringify(arr1) === JSON.stringify(arr2)); // true
```

---

## Practice Exercises

### Exercise 1: Sum Array
```javascript
// Calculate sum of all numbers in array
const numbers = [10, 20, 30, 40, 50];

// Your code here:
```

### Exercise 2: Find Maximum
```javascript
// Find the largest number
const numbers = [45, 23, 67, 12, 89, 34];

// Your code here:
```

### Exercise 3: Remove Item
```javascript
// Remove "banana" from array
const fruits = ["apple", "banana", "orange", "grape"];

// Your code here:
```

### Exercise 4: Reverse Without reverse()
```javascript
// Reverse array without using reverse() method
const arr = [1, 2, 3, 4, 5];

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Arrays** store multiple values in order
2. **Zero-indexed** - first element is at index 0
3. **push/pop** - add/remove from end
4. **unshift/shift** - add/remove from beginning
5. **map/filter/reduce** - transform arrays
6. **for...of** - best way to iterate
7. Arrays are **reference types**

### What's Next?

Now that you understand arrays, you're ready to learn about **objects** - how to organize related data with key-value pairs!

---

## Quick Reference

```javascript
// Create
const arr = [1, 2, 3];

// Access
arr[0]  // First element
arr[arr.length - 1]  // Last element

// Add/Remove
arr.push(4)     // Add to end
arr.pop()       // Remove from end
arr.unshift(0)  // Add to start
arr.shift()     // Remove from start

// Methods
arr.slice(1, 3)      // Extract
arr.splice(1, 1)     // Remove/Add
arr.indexOf(2)       // Find index
arr.includes(2)      // Check exists
arr.join(", ")       // To string
arr.concat(arr2)     // Combine
arr.reverse()        // Reverse
arr.sort()           // Sort

// Iteration
arr.forEach(fn)      // Loop
arr.map(fn)          // Transform
arr.filter(fn)       // Select
arr.reduce(fn, 0)    // Combine
arr.find(fn)         // First match
arr.some(fn)         // Any match
arr.every(fn)        // All match
```

**Congratulations!** You've completed Lesson 6. Practice working with arrays!
