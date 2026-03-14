# Lesson 9: Scope & Closures - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [What is Scope?](#what-is-scope)
3. [Global Scope](#global-scope)
4. [Function Scope](#function-scope)
5. [Block Scope](#block-scope)
6. [Lexical Scope](#lexical-scope)
7. [What are Closures?](#what-are-closures)
8. [Practical Closure Examples](#practical-closure-examples)
9. [Common Patterns](#common-patterns)
10. [Best Practices](#best-practices)
11. [Common Mistakes](#common-mistakes)
12. [Practice Exercises](#practice-exercises)

---

## Introduction

### What Will You Learn?

Understanding **scope** and **closures** is crucial for writing clean, bug-free JavaScript. These concepts determine:
- Where variables can be accessed
- How functions remember their environment
- How to create private variables
- How to write more powerful functions

### Real-World Analogy

**Scope is like access levels in a building:**
- **Global Scope** = Public lobby (everyone can access)
- **Function Scope** = Private office (only people inside can access)
- **Block Scope** = Meeting room (only people in the meeting can access)

**Closures are like a backpack:**
When a function leaves its birthplace, it carries its environment with it - like carrying a backpack with everything it needs.

---

## What is Scope?

### Simple Definition

**Scope** determines where variables can be accessed in your code.

```javascript
const globalVar = "I'm global";

function myFunction() {
    const localVar = "I'm local";
    
    console.log(globalVar); // ✅ Can access
    console.log(localVar);  // ✅ Can access
}

myFunction();
console.log(globalVar); // ✅ Can access
console.log(localVar);  // ❌ ERROR! Can't access
```

### Why Does Scope Matter?

**Without proper scope:**
- Variables can conflict
- Code becomes unpredictable
- Bugs are hard to find
- Memory isn't managed well

**With proper scope:**
- Variables are organized
- Code is predictable
- Fewer bugs
- Better performance

---

## Global Scope

### What is Global Scope?

Variables declared **outside any function** are global - accessible everywhere.

```javascript
const userName = "Alice"; // Global variable

function greet() {
    console.log(`Hello, ${userName}!`); // Can access
}

function sayGoodbye() {
    console.log(`Goodbye, ${userName}!`); // Can access
}

greet();      // Hello, Alice!
sayGoodbye(); // Goodbye, Alice!
console.log(userName); // Alice
```

### Real-World Examples

**Example 1: Configuration**
```javascript
const API_URL = "https://api.example.com";
const MAX_RETRIES = 3;
const TIMEOUT = 5000;

function fetchData() {
    console.log(`Fetching from ${API_URL}`);
    console.log(`Max retries: ${MAX_RETRIES}`);
}

function uploadData() {
    console.log(`Uploading to ${API_URL}`);
    console.log(`Timeout: ${TIMEOUT}ms`);
}
```

**Example 2: Shared State**
```javascript
let score = 0;

function addPoints(points) {
    score += points;
    console.log(`Score: ${score}`);
}

function resetScore() {
    score = 0;
    console.log("Score reset!");
}

addPoints(10);  // Score: 10
addPoints(5);   // Score: 15
resetScore();   // Score reset!
```

### ⚠️ Global Scope Warnings

**Problem: Variable Pollution**
```javascript
// ❌ Bad - too many globals
let user = "Alice";
let age = 25;
let city = "Boston";
let email = "alice@example.com";

// ✅ Better - group related data
const user = {
    name: "Alice",
    age: 25,
    city: "Boston",
    email: "alice@example.com"
};
```

**Problem: Name Conflicts**
```javascript
// ❌ Bad - conflicts possible
let count = 0;

function incrementCounter() {
    let count = 10; // Different count!
    count++;
    console.log(count); // 11 (local count)
}

incrementCounter();
console.log(count); // 0 (global count unchanged)
```

---

## Function Scope

### What is Function Scope?

Variables declared **inside a function** are only accessible within that function.

```javascript
function myFunction() {
    const localVar = "I'm local";
    console.log(localVar); // ✅ Works
}

myFunction();
console.log(localVar); // ❌ ERROR! Not accessible
```

### Real-World Examples

**Example 1: Private Calculations**
```javascript
function calculateTotal(price, quantity) {
    const subtotal = price * quantity;
    const tax = subtotal * 0.08;
    const total = subtotal + tax;
    
    return total;
}

const result = calculateTotal(100, 2);
console.log(result); // 216

// These don't exist outside the function:
console.log(subtotal); // ❌ ERROR!
console.log(tax);      // ❌ ERROR!
```

**Example 2: Temporary Variables**
```javascript
function processOrder(items) {
    let total = 0;
    let itemCount = 0;
    
    for (const item of items) {
        total += item.price;
        itemCount++;
    }
    
    return {
        total: total,
        count: itemCount
    };
}

const order = processOrder([
    { name: "Laptop", price: 999 },
    { name: "Mouse", price: 25 }
]);

console.log(order); // { total: 1024, count: 2 }
// total and itemCount don't exist here
```

### Nested Functions

**Inner functions can access outer function variables:**

```javascript
function outer() {
    const outerVar = "I'm from outer";
    
    function inner() {
        console.log(outerVar); // ✅ Can access
    }
    
    inner();
}

outer(); // "I'm from outer"
```

**Real-World Example:**
```javascript
function createGreeting(greeting) {
    const message = greeting;
    
    function greetPerson(name) {
        return `${message}, ${name}!`;
    }
    
    return greetPerson;
}

const sayHello = createGreeting("Hello");
const sayHi = createGreeting("Hi");

console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHi("Bob"));      // Hi, Bob!
```

---

## Block Scope

### What is Block Scope?

Variables declared with `let` or `const` inside `{}` are only accessible within that block.

```javascript
{
    const blockVar = "I'm in a block";
    console.log(blockVar); // ✅ Works
}

console.log(blockVar); // ❌ ERROR!
```

### If Statement Scope

```javascript
const age = 20;

if (age >= 18) {
    const message = "You're an adult";
    console.log(message); // ✅ Works
}

console.log(message); // ❌ ERROR! Block-scoped
```

### Loop Scope

```javascript
for (let i = 0; i < 3; i++) {
    console.log(i); // 0, 1, 2
}

console.log(i); // ❌ ERROR! i is block-scoped
```

### Let vs Var

**`let` is block-scoped:**
```javascript
if (true) {
    let x = 10;
}
console.log(x); // ❌ ERROR!
```

**`var` is function-scoped (avoid using):**
```javascript
if (true) {
    var x = 10;
}
console.log(x); // ✅ 10 (leaks out of block!)
```

### Real-World Examples

**Example 1: Temporary Loop Variables**
```javascript
const numbers = [1, 2, 3, 4, 5];

for (let i = 0; i < numbers.length; i++) {
    const doubled = numbers[i] * 2;
    console.log(doubled);
}

// i and doubled don't exist here
```

**Example 2: Conditional Variables**
```javascript
function processUser(user) {
    if (user.age >= 18) {
        const status = "adult";
        const canVote = true;
        console.log(`${user.name} is an ${status}`);
    } else {
        const status = "minor";
        const canVote = false;
        console.log(`${user.name} is a ${status}`);
    }
    
    // status and canVote don't exist here
}
```

---

## Lexical Scope

### What is Lexical Scope?

Functions can access variables from their **parent scope** - determined by where the function is **written**, not where it's called.

```javascript
const globalVar = "global";

function outer() {
    const outerVar = "outer";
    
    function inner() {
        const innerVar = "inner";
        
        console.log(innerVar);  // ✅ Own scope
        console.log(outerVar);  // ✅ Parent scope
        console.log(globalVar); // ✅ Global scope
    }
    
    inner();
}

outer();
```

### Scope Chain

**JavaScript looks for variables in this order:**
1. Current scope
2. Parent scope
3. Grandparent scope
4. ... up to global scope

```javascript
const level1 = "global";

function outer() {
    const level2 = "outer";
    
    function middle() {
        const level3 = "middle";
        
        function inner() {
            const level4 = "inner";
            
            // Can access all levels
            console.log(level4); // inner
            console.log(level3); // middle
            console.log(level2); // outer
            console.log(level1); // global
        }
        
        inner();
    }
    
    middle();
}

outer();
```

### Real-World Example

```javascript
const appName = "My App";

function createUser(username) {
    const userId = Math.random();
    
    function getUserInfo() {
        const timestamp = Date.now();
        
        return {
            app: appName,      // Global scope
            user: username,    // Parent scope
            id: userId,        // Parent scope
            created: timestamp // Own scope
        };
    }
    
    return getUserInfo();
}

console.log(createUser("alice"));
```

---

## What are Closures?

### Simple Definition

A **closure** is a function that remembers variables from its birthplace, even after that place is gone.

```javascript
function outer() {
    const message = "Hello";
    
    function inner() {
        console.log(message); // Remembers message!
    }
    
    return inner;
}

const myFunction = outer();
myFunction(); // "Hello" - still remembers!
```

### How Closures Work

**Step by step:**

```javascript
function makeCounter() {
    let count = 0; // This variable is "closed over"
    
    return function() {
        count++;
        return count;
    };
}

const counter = makeCounter();

console.log(counter()); // 1
console.log(counter()); // 2
console.log(counter()); // 3

// count is private - can't access directly!
console.log(count); // ❌ ERROR!
```

**What happened:**
1. `makeCounter()` creates `count = 0`
2. Returns a function that remembers `count`
3. Even after `makeCounter()` finishes, the returned function still has access to `count`
4. Each call increments the same `count`

---

## Practical Closure Examples

### Example 1: Private Variables

```javascript
function createBankAccount(initialBalance) {
    let balance = initialBalance; // Private!
    
    return {
        deposit(amount) {
            balance += amount;
            console.log(`Deposited $${amount}. Balance: $${balance}`);
        },
        
        withdraw(amount) {
            if (amount > balance) {
                console.log("Insufficient funds!");
                return;
            }
            balance -= amount;
            console.log(`Withdrew $${amount}. Balance: $${balance}`);
        },
        
        getBalance() {
            return balance;
        }
    };
}

const account = createBankAccount(1000);

account.deposit(500);   // Deposited $500. Balance: $1500
account.withdraw(200);  // Withdrew $200. Balance: $1300
console.log(account.getBalance()); // 1300

// Can't access balance directly!
console.log(account.balance); // undefined
```

### Example 2: Function Factory

```javascript
function createMultiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = createMultiplier(2);
const triple = createMultiplier(3);
const quadruple = createMultiplier(4);

console.log(double(5));     // 10
console.log(triple(5));     // 15
console.log(quadruple(5));  // 20
```

### Example 3: Event Handlers

```javascript
function setupButtons() {
    const buttons = ["Home", "About", "Contact"];
    
    buttons.forEach((buttonName, index) => {
        // Each function remembers its own buttonName and index
        function handleClick() {
            console.log(`Clicked ${buttonName} (button ${index})`);
        }
        
        // In real code, you'd attach this to a button
        console.log(`Button ${index}: ${buttonName}`);
    });
}

setupButtons();
```

### Example 4: Memoization (Caching)

```javascript
function createMemoizedFunction() {
    const cache = {}; // Private cache
    
    return function(n) {
        if (cache[n]) {
            console.log("From cache!");
            return cache[n];
        }
        
        console.log("Calculating...");
        const result = n * n;
        cache[n] = result;
        return result;
    };
}

const square = createMemoizedFunction();

console.log(square(5)); // Calculating... 25
console.log(square(5)); // From cache! 25
console.log(square(10)); // Calculating... 100
console.log(square(10)); // From cache! 100
```

### Example 5: Module Pattern

```javascript
const calculator = (function() {
    // Private variables
    let result = 0;
    
    // Private function
    function log(operation, value) {
        console.log(`${operation} ${value}, result: ${result}`);
    }
    
    // Public API
    return {
        add(n) {
            result += n;
            log("Added", n);
            return this;
        },
        
        subtract(n) {
            result -= n;
            log("Subtracted", n);
            return this;
        },
        
        multiply(n) {
            result *= n;
            log("Multiplied by", n);
            return this;
        },
        
        getResult() {
            return result;
        },
        
        reset() {
            result = 0;
            console.log("Reset!");
            return this;
        }
    };
})();

calculator
    .add(10)        // Added 10, result: 10
    .multiply(2)    // Multiplied by 2, result: 20
    .subtract(5);   // Subtracted 5, result: 15

console.log(calculator.getResult()); // 15
```

---

## Common Patterns

### Pattern 1: Counter

```javascript
function createCounter(start = 0) {
    let count = start;
    
    return {
        increment() {
            return ++count;
        },
        decrement() {
            return --count;
        },
        reset() {
            count = start;
            return count;
        },
        getValue() {
            return count;
        }
    };
}

const counter = createCounter(10);
console.log(counter.increment()); // 11
console.log(counter.increment()); // 12
console.log(counter.decrement()); // 11
console.log(counter.reset());     // 10
```

### Pattern 2: Once Function

```javascript
function once(fn) {
    let called = false;
    let result;
    
    return function(...args) {
        if (!called) {
            called = true;
            result = fn(...args);
        }
        return result;
    };
}

const initialize = once(() => {
    console.log("Initializing...");
    return "Initialized!";
});

console.log(initialize()); // Initializing... Initialized!
console.log(initialize()); // Initialized! (doesn't run again)
console.log(initialize()); // Initialized! (doesn't run again)
```

### Pattern 3: Private Methods

```javascript
function createUser(name, email) {
    // Private variables
    let password = "";
    let loginAttempts = 0;
    
    // Private method
    function hashPassword(pwd) {
        return `hashed_${pwd}`;
    }
    
    // Public API
    return {
        getName() {
            return name;
        },
        
        getEmail() {
            return email;
        },
        
        setPassword(pwd) {
            password = hashPassword(pwd);
            console.log("Password set!");
        },
        
        login(pwd) {
            const hashedInput = hashPassword(pwd);
            
            if (hashedInput === password) {
                loginAttempts = 0;
                return "Login successful!";
            } else {
                loginAttempts++;
                return `Login failed. Attempts: ${loginAttempts}`;
            }
        }
    };
}

const user = createUser("Alice", "alice@example.com");
user.setPassword("secret123");
console.log(user.login("wrong"));      // Login failed. Attempts: 1
console.log(user.login("secret123"));  // Login successful!
```

---

## Best Practices

### 1. Minimize Global Variables

```javascript
// ❌ Bad
let count = 0;
let total = 0;
let average = 0;

// ✅ Good
const stats = {
    count: 0,
    total: 0,
    average: 0
};
```

### 2. Use Block Scope

```javascript
// ❌ Bad - var leaks
for (var i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Prints: 3, 3, 3

// ✅ Good - let is block-scoped
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log(i), 100);
}
// Prints: 0, 1, 2
```

### 3. Use Closures for Privacy

```javascript
// ✅ Good - private data
function createSecret(secret) {
    return {
        guess(attempt) {
            return attempt === secret;
        }
    };
}

const game = createSecret("password");
console.log(game.guess("wrong"));    // false
console.log(game.guess("password")); // true
console.log(game.secret);            // undefined (private!)
```

### 4. Avoid Memory Leaks

```javascript
// ❌ Bad - holds reference forever
function createHeavyObject() {
    const huge = new Array(1000000);
    
    return function() {
        console.log(huge.length); // Keeps huge in memory!
    };
}

// ✅ Better - only keep what you need
function createHeavyObject() {
    const huge = new Array(1000000);
    const length = huge.length;
    
    return function() {
        console.log(length); // Only keeps the number
    };
}
```

---

## Common Mistakes

### Mistake 1: Loop Closure Problem

```javascript
// ❌ Wrong - all functions share same i
for (var i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
// Prints: 3, 3, 3

// ✅ Solution 1: Use let
for (let i = 0; i < 3; i++) {
    setTimeout(function() {
        console.log(i);
    }, 100);
}
// Prints: 0, 1, 2

// ✅ Solution 2: IIFE
for (var i = 0; i < 3; i++) {
    (function(j) {
        setTimeout(function() {
            console.log(j);
        }, 100);
    })(i);
}
// Prints: 0, 1, 2
```

### Mistake 2: Forgetting Return

```javascript
// ❌ Wrong - doesn't return the inner function
function createCounter() {
    let count = 0;
    
    function increment() {
        return ++count;
    }
    // Forgot to return!
}

const counter = createCounter();
counter(); // ❌ ERROR! counter is undefined

// ✅ Correct
function createCounter() {
    let count = 0;
    
    return function increment() {
        return ++count;
    };
}
```

### Mistake 3: Accidental Global

```javascript
function myFunction() {
    // ❌ Wrong - creates global variable!
    count = 0; // No let/const/var
}

// ✅ Correct
function myFunction() {
    let count = 0;
}
```

---

## Practice Exercises

### Exercise 1: Create a Secret Keeper
```javascript
// Create a function that stores a secret
// Only allow checking if guess is correct
// Don't allow direct access to the secret

// Your code here:
```

### Exercise 2: Create Multiple Counters
```javascript
// Create a function that makes independent counters
// Each counter should have its own count

// Your code here:
```

### Exercise 3: Create a Timer
```javascript
// Create a function that tracks elapsed time
// Methods: start(), stop(), getTime()

// Your code here:
```

### Exercise 4: Create a Shopping Cart
```javascript
// Create a shopping cart with private items array
// Methods: add(), remove(), getTotal(), getItems()

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Scope** determines where variables can be accessed
2. **Global scope** - accessible everywhere (use sparingly)
3. **Function scope** - accessible only in function
4. **Block scope** - accessible only in block (`let`/`const`)
5. **Lexical scope** - functions access parent variables
6. **Closures** - functions remember their environment
7. **Use closures** for private data and function factories
8. **Avoid** global variables and memory leaks

### What's Next?

Now that you understand scope and closures, you're ready to learn about **advanced array methods** like map, filter, and reduce!

---

## Quick Reference

```javascript
// Global Scope
const global = "accessible everywhere";

// Function Scope
function fn() {
    const local = "only in function";
}

// Block Scope
{
    const block = "only in block";
}

// Closure
function outer() {
    const data = "remembered";
    
    return function inner() {
        console.log(data); // Closure!
    };
}

// Private Variables
function create() {
    let private = 0;
    
    return {
        get() { return private; },
        set(val) { private = val; }
    };
}
```

**Congratulations!** You've completed Lesson 9. Practice closures before moving forward!
