# Lesson 5: Functions - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Function Declarations](#function-declarations)
3. [Function Expressions](#function-expressions)
4. [Arrow Functions](#arrow-functions)
5. [Parameters and Arguments](#parameters-and-arguments)
6. [Return Values](#return-values)
7. [Scope in Functions](#scope-in-functions)
8. [Callback Functions](#callback-functions)
9. [Higher-Order Functions](#higher-order-functions)
10. [IIFE](#iife)
11. [Best Practices](#best-practices)
12. [Common Mistakes](#common-mistakes)
13. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Functions?

Imagine you have a recipe for making a sandwich. Instead of writing out all the steps every time you want a sandwich, you just say "make sandwich" and follow the recipe.

**Functions** are like recipes in code - reusable blocks of code that perform specific tasks.

### Real-World Analogies

**Coffee Machine:**
```
Function: makeCoffee(type, sugar)
Input: type of coffee, amount of sugar
Process: grind beans, heat water, brew, add sugar
Output: cup of coffee
```

**Calculator:**
```
Function: add(a, b)
Input: two numbers
Process: a + b
Output: sum
```

**Washing Machine:**
```
Function: washClothes(temperature, cycle)
Input: temperature, wash cycle
Process: fill, wash, rinse, spin
Output: clean clothes
```

### Why Use Functions?

**Without Functions:**
```javascript
// Calculate area of rectangle 1
const length1 = 10;
const width1 = 5;
const area1 = length1 * width1;
console.log("Area 1:", area1);

// Calculate area of rectangle 2
const length2 = 8;
const width2 = 3;
const area2 = length2 * width2;
console.log("Area 2:", area2);

// Repetitive and hard to maintain!
```

**With Functions:**
```javascript
function calculateArea(length, width) {
    return length * width;
}

console.log("Area 1:", calculateArea(10, 5)); // 50
console.log("Area 2:", calculateArea(8, 3));  // 24

// Clean, reusable, easy to maintain!
```

**Benefits:**
1. **Reusability** - Write once, use many times
2. **Organization** - Break complex problems into smaller pieces
3. **Maintainability** - Fix bugs in one place
4. **Readability** - Code is easier to understand

---

## Function Declarations

### Basic Syntax

```javascript
function functionName(parameters) {
    // Code to execute
    return result;
}
```

### Simple Example

```javascript
function greet() {
    console.log("Hello, World!");
}

greet(); // Call the function
// Output: Hello, World!
```

**How it works:**
1. `function` - keyword to declare a function
2. `greet` - name of the function
3. `()` - parentheses for parameters (empty here)
4. `{}` - curly braces contain the code
5. `greet()` - calling/executing the function

### Real-World Examples

**Example 1: Simple Greeting**
```javascript
function sayHello() {
    console.log("Hello!");
    console.log("Welcome to JavaScript!");
}

sayHello();
// Output:
// Hello!
// Welcome to JavaScript!
```

**Example 2: Display Menu**
```javascript
function showMenu() {
    console.log("=== Main Menu ===");
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");
}

showMenu();
```

**Example 3: Calculate Sum**
```javascript
function addNumbers() {
    const num1 = 10;
    const num2 = 20;
    const sum = num1 + num2;
    console.log("Sum:", sum);
}

addNumbers(); // Sum: 30
```

### Functions with Parameters

**Parameters** are variables that receive values when the function is called.

```javascript
function greet(name) {
    console.log("Hello, " + name + "!");
}

greet("Alice");  // Hello, Alice!
greet("Bob");    // Hello, Bob!
```

**Multiple Parameters:**
```javascript
function introduce(name, age, city) {
    console.log(`My name is ${name}`);
    console.log(`I am ${age} years old`);
    console.log(`I live in ${city}`);
}

introduce("Alice", 25, "New York");
// Output:
// My name is Alice
// I am 25 years old
// I live in New York
```

**Real-World Examples:**

**Example 1: Calculate Rectangle Area**
```javascript
function calculateRectangleArea(length, width) {
    const area = length * width;
    console.log(`Area: ${area} square units`);
}

calculateRectangleArea(10, 5);  // Area: 50 square units
calculateRectangleArea(7, 3);   // Area: 21 square units
```

**Example 2: Check Voting Eligibility**
```javascript
function checkVotingAge(name, age) {
    if (age >= 18) {
        console.log(`${name} can vote!`);
    } else {
        console.log(`${name} is too young to vote.`);
    }
}

checkVotingAge("Alice", 20); // Alice can vote!
checkVotingAge("Bob", 16);   // Bob is too young to vote.
```

**Example 3: Calculate Discount**
```javascript
function applyDiscount(price, discountPercent) {
    const discount = price * (discountPercent / 100);
    const finalPrice = price - discount;
    console.log(`Original: $${price}`);
    console.log(`Discount: $${discount}`);
    console.log(`Final: $${finalPrice}`);
}

applyDiscount(100, 20);
// Original: $100
// Discount: $20
// Final: $80
```

---

## Function Expressions

### What are Function Expressions?

Assigning a function to a variable.

### Basic Syntax

```javascript
const functionName = function(parameters) {
    // Code to execute
};
```

### Simple Example

```javascript
const greet = function() {
    console.log("Hello from function expression!");
};

greet(); // Hello from function expression!
```

### Difference from Function Declaration

**Function Declaration (Hoisted):**
```javascript
// You can call before declaration
sayHi(); // Works!

function sayHi() {
    console.log("Hi!");
}
```

**Function Expression (Not Hoisted):**
```javascript
// Can't call before definition
sayHello(); // ERROR!

const sayHello = function() {
    console.log("Hello!");
};
```

### Real-World Examples

**Example 1: Calculator Operations**
```javascript
const add = function(a, b) {
    return a + b;
};

const subtract = function(a, b) {
    return a - b;
};

const multiply = function(a, b) {
    return a * b;
};

console.log(add(5, 3));      // 8
console.log(subtract(10, 4)); // 6
console.log(multiply(6, 7));  // 42
```

**Example 2: Validation Functions**
```javascript
const isValidEmail = function(email) {
    return email.includes("@") && email.includes(".");
};

const isValidPassword = function(password) {
    return password.length >= 8;
};

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid"));          // false
console.log(isValidPassword("secret123"));     // true
console.log(isValidPassword("short"));         // false
```

---

## Arrow Functions

### What are Arrow Functions?

A shorter, modern way to write functions (ES6+).

### Basic Syntax

```javascript
// Traditional function
const add = function(a, b) {
    return a + b;
};

// Arrow function
const add = (a, b) => {
    return a + b;
};

// Even shorter (implicit return)
const add = (a, b) => a + b;
```

### Simple Examples

**No parameters:**
```javascript
const greet = () => console.log("Hello!");
greet(); // Hello!
```

**One parameter (parentheses optional):**
```javascript
const square = num => num * num;
console.log(square(5)); // 25
```

**Multiple parameters:**
```javascript
const add = (a, b) => a + b;
console.log(add(3, 7)); // 10
```

**Multiple lines:**
```javascript
const calculateArea = (length, width) => {
    const area = length * width;
    return area;
};

console.log(calculateArea(10, 5)); // 50
```

### Real-World Examples

**Example 1: Array Operations**
```javascript
const numbers = [1, 2, 3, 4, 5];

// Double each number
const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// Filter even numbers
const evens = numbers.filter(num => num % 2 === 0);
console.log(evens); // [2, 4]

// Sum all numbers
const sum = numbers.reduce((total, num) => total + num, 0);
console.log(sum); // 15
```

**Example 2: Temperature Converter**
```javascript
const celsiusToFahrenheit = celsius => (celsius * 9/5) + 32;
const fahrenheitToCelsius = fahrenheit => (fahrenheit - 32) * 5/9;

console.log(celsiusToFahrenheit(25));  // 77
console.log(fahrenheitToCelsius(77));  // 25
```

**Example 3: String Utilities**
```javascript
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
const reverse = str => str.split("").reverse().join("");
const isPalindrome = str => str === reverse(str);

console.log(capitalize("hello"));     // Hello
console.log(reverse("hello"));        // olleh
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
```

---

## Parameters and Arguments

### Default Parameters

**What if a parameter is not provided?**

```javascript
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}

greet("Alice"); // Hello, Alice!
greet();        // Hello, Guest!
```

**Real-World Examples:**

**Example 1: Calculate Price with Tax**
```javascript
function calculateTotal(price, taxRate = 0.08) {
    const tax = price * taxRate;
    const total = price + tax;
    return total;
}

console.log(calculateTotal(100));      // 108 (uses default 8%)
console.log(calculateTotal(100, 0.10)); // 110 (uses 10%)
```

**Example 2: Create User Profile**
```javascript
function createProfile(name, age, country = "USA") {
    return {
        name: name,
        age: age,
        country: country
    };
}

console.log(createProfile("Alice", 25));
// { name: 'Alice', age: 25, country: 'USA' }

console.log(createProfile("Bob", 30, "Canada"));
// { name: 'Bob', age: 30, country: 'Canada' }
```

### Rest Parameters

**Collect multiple arguments into an array:**

```javascript
function sum(...numbers) {
    let total = 0;
    for (const num of numbers) {
        total += num;
    }
    return total;
}

console.log(sum(1, 2, 3));        // 6
console.log(sum(1, 2, 3, 4, 5));  // 15
console.log(sum(10, 20));         // 30
```

**Real-World Examples:**

**Example 1: Find Maximum**
```javascript
function findMax(...numbers) {
    return Math.max(...numbers);
}

console.log(findMax(5, 2, 9, 1, 7)); // 9
```

**Example 2: Create Shopping List**
```javascript
function createShoppingList(store, ...items) {
    console.log(`Shopping at: ${store}`);
    console.log("Items to buy:");
    items.forEach(item => console.log(`  - ${item}`));
}

createShoppingList("Walmart", "Milk", "Bread", "Eggs", "Cheese");
// Shopping at: Walmart
// Items to buy:
//   - Milk
//   - Bread
//   - Eggs
//   - Cheese
```

---

## Return Values

### What is Return?

**Return** sends a value back from the function.

```javascript
function add(a, b) {
    return a + b; // Send result back
}

const result = add(5, 3);
console.log(result); // 8
```

**Without return:**
```javascript
function add(a, b) {
    console.log(a + b); // Just prints
}

const result = add(5, 3); // Prints 8
console.log(result);      // undefined (no return value)
```

### Real-World Examples

**Example 1: Calculate Discount**
```javascript
function calculateDiscount(price, percent) {
    const discount = price * (percent / 100);
    return discount;
}

const discount = calculateDiscount(100, 20);
console.log(`You save: $${discount}`); // You save: $20
```

**Example 2: Check Password Strength**
```javascript
function isStrongPassword(password) {
    if (password.length < 8) {
        return false;
    }
    if (!/[A-Z]/.test(password)) {
        return false;
    }
    if (!/[0-9]/.test(password)) {
        return false;
    }
    return true;
}

console.log(isStrongPassword("weak"));        // false
console.log(isStrongPassword("Strong123"));   // true
```

**Example 3: Get Grade**
```javascript
function getGrade(score) {
    if (score >= 90) return "A";
    if (score >= 80) return "B";
    if (score >= 70) return "C";
    if (score >= 60) return "D";
    return "F";
}

console.log(getGrade(95)); // A
console.log(getGrade(75)); // C
console.log(getGrade(55)); // F
```

**Example 4: Format Name**
```javascript
function formatName(firstName, lastName) {
    const formatted = `${lastName}, ${firstName}`;
    return formatted;
}

const fullName = formatName("John", "Doe");
console.log(fullName); // Doe, John
```

### Early Return

**Exit function early:**

```javascript
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}

console.log(divide(10, 2));  // 5
console.log(divide(10, 0));  // Cannot divide by zero
```

---

## Scope in Functions

### What is Scope?

**Scope** determines where variables can be accessed.

### Function Scope

**Variables inside functions are LOCAL:**

```javascript
function myFunction() {
    const localVar = "I'm local";
    console.log(localVar); // Works!
}

myFunction();
console.log(localVar); // ERROR! localVar doesn't exist here
```

### Global vs Local

```javascript
const globalVar = "I'm global";

function test() {
    const localVar = "I'm local";
    
    console.log(globalVar); // Works! Can access global
    console.log(localVar);  // Works! Can access local
}

test();
console.log(globalVar); // Works! Global accessible everywhere
console.log(localVar);  // ERROR! Local not accessible here
```

### Real-World Example

```javascript
const tax = 0.08; // Global - used everywhere

function calculateTotal(price) {
    const discount = 10; // Local - only in this function
    const subtotal = price - discount;
    const total = subtotal + (subtotal * tax);
    return total;
}

console.log(calculateTotal(100)); // 97.2
console.log(tax);                 // 0.08 (accessible)
console.log(discount);            // ERROR! (not accessible)
```

---

## Callback Functions

### What is a Callback?

A function passed as an argument to another function.

### Simple Example

```javascript
function greet(name, callback) {
    console.log(`Hello, ${name}!`);
    callback();
}

function sayGoodbye() {
    console.log("Goodbye!");
}

greet("Alice", sayGoodbye);
// Output:
// Hello, Alice!
// Goodbye!
```

### Real-World Examples

**Example 1: Process Data**
```javascript
function processData(data, callback) {
    console.log("Processing:", data);
    callback(data);
}

processData("user123", function(id) {
    console.log("Finished processing:", id);
});
// Output:
// Processing: user123
// Finished processing: user123
```

**Example 2: Array forEach**
```javascript
const numbers = [1, 2, 3, 4, 5];

numbers.forEach(function(num) {
    console.log(num * 2);
});
// Output: 2, 4, 6, 8, 10
```

**Example 3: Custom Filter**
```javascript
function filterArray(arr, callback) {
    const result = [];
    for (const item of arr) {
        if (callback(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = filterArray(numbers, num => num % 2 === 0);
console.log(evens); // [2, 4, 6]
```

---

## Higher-Order Functions

### What are Higher-Order Functions?

Functions that:
1. Take functions as arguments, OR
2. Return functions

### Example 1: Function as Argument

```javascript
function operate(a, b, operation) {
    return operation(a, b);
}

const add = (x, y) => x + y;
const multiply = (x, y) => x * y;

console.log(operate(5, 3, add));      // 8
console.log(operate(5, 3, multiply)); // 15
```

### Example 2: Function Returning Function

```javascript
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

### Real-World Examples

**Example 1: Create Greeting Functions**
```javascript
function createGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHi("Bob"));      // Hi, Bob!
```

**Example 2: Create Validators**
```javascript
function createValidator(min, max) {
    return function(value) {
        return value >= min && value <= max;
    };
}

const isValidAge = createValidator(18, 100);
const isValidScore = createValidator(0, 100);

console.log(isValidAge(25));    // true
console.log(isValidAge(15));    // false
console.log(isValidScore(85));  // true
console.log(isValidScore(150)); // false
```

---

## IIFE

### What is IIFE?

**Immediately Invoked Function Expression** - a function that runs as soon as it's defined.

### Basic Syntax

```javascript
(function() {
    console.log("I run immediately!");
})();
```

### Why Use IIFE?

**Create private scope:**

```javascript
(function() {
    const secret = "This is private";
    console.log(secret);
})();

console.log(secret); // ERROR! Not accessible
```

### Real-World Example

```javascript
const app = (function() {
    // Private variables
    let count = 0;
    
    // Public methods
    return {
        increment: function() {
            count++;
            console.log(count);
        },
        decrement: function() {
            count--;
            console.log(count);
        },
        getCount: function() {
            return count;
        }
    };
})();

app.increment(); // 1
app.increment(); // 2
app.decrement(); // 1
console.log(app.getCount()); // 1
console.log(app.count); // undefined (private!)
```

---

## Best Practices

### 1. Use Descriptive Names

```javascript
// ❌ Bad
function calc(a, b) {
    return a + b;
}

// ✅ Good
function calculateTotal(price, tax) {
    return price + tax;
}
```

### 2. Keep Functions Small

```javascript
// ❌ Bad - does too much
function processUser(user) {
    // validate
    // save to database
    // send email
    // log activity
    // update cache
}

// ✅ Good - single responsibility
function validateUser(user) { }
function saveUser(user) { }
function sendWelcomeEmail(user) { }
```

### 3. Use Default Parameters

```javascript
// ❌ Bad
function greet(name) {
    name = name || "Guest";
    console.log(`Hello, ${name}!`);
}

// ✅ Good
function greet(name = "Guest") {
    console.log(`Hello, ${name}!`);
}
```

### 4. Return Early

```javascript
// ❌ Bad
function processOrder(order) {
    if (order) {
        if (order.items.length > 0) {
            // process
        }
    }
}

// ✅ Good
function processOrder(order) {
    if (!order) return;
    if (order.items.length === 0) return;
    // process
}
```

---

## Common Mistakes

### Mistake 1: Forgetting to Return

```javascript
// ❌ Wrong
function add(a, b) {
    a + b; // No return!
}

const result = add(5, 3);
console.log(result); // undefined

// ✅ Correct
function add(a, b) {
    return a + b;
}
```

### Mistake 2: Modifying Global Variables

```javascript
// ❌ Bad
let total = 0;

function add(num) {
    total += num; // Modifying global
}

// ✅ Good
function add(total, num) {
    return total + num; // Return new value
}
```

### Mistake 3: Not Handling Edge Cases

```javascript
// ❌ Bad
function divide(a, b) {
    return a / b;
}

console.log(divide(10, 0)); // Infinity!

// ✅ Good
function divide(a, b) {
    if (b === 0) {
        return "Cannot divide by zero";
    }
    return a / b;
}
```

---

## Practice Exercises

### Exercise 1: Temperature Converter
```javascript
// Create a function that converts Celsius to Fahrenheit
// Formula: F = (C * 9/5) + 32

// Your code here:
```

### Exercise 2: Is Even
```javascript
// Create a function that returns true if number is even

// Your code here:
```

### Exercise 3: Find Largest
```javascript
// Create a function that finds the largest of three numbers

// Your code here:
```

### Exercise 4: Count Vowels
```javascript
// Create a function that counts vowels in a string

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Functions** are reusable blocks of code
2. **Three ways** to create: declaration, expression, arrow
3. **Parameters** receive values, **return** sends values back
4. **Scope** determines variable accessibility
5. **Callbacks** are functions passed to other functions
6. **Higher-order functions** work with other functions
7. Keep functions **small** and **focused**

### What's Next?

Now that you understand functions, you're ready to learn about **arrays** - how to work with lists of data!

---

## Quick Reference

```javascript
// Function Declaration
function name(params) {
    return result;
}

// Function Expression
const name = function(params) {
    return result;
};

// Arrow Function
const name = (params) => result;

// Default Parameters
function greet(name = "Guest") { }

// Rest Parameters
function sum(...numbers) { }

// Callback
function process(data, callback) {
    callback(data);
}

// Higher-Order
function create(x) {
    return function(y) {
        return x + y;
    };
}

// IIFE
(function() {
    // runs immediately
})();
```

**Congratulations!** You've completed Lesson 5. Practice writing functions!
