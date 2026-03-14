# Lesson 13: Modules - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Why Use Modules?](#why-use-modules)
3. [ES6 Module Syntax](#es6-module-syntax)
4. [Named Exports](#named-exports)
5. [Default Exports](#default-exports)
6. [Importing Modules](#importing-modules)
7. [Module Patterns](#module-patterns)
8. [Best Practices](#best-practices)
9. [Common Mistakes](#common-mistakes)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Modules?

**Modules** are separate files that contain related code. They help you organize and reuse code across your application.

### Real-World Analogy

Think of modules like **LEGO sets**:
- Each set (module) has specific pieces (functions, classes)
- You can combine sets to build something bigger
- Each set is independent but can work together
- Easy to add, remove, or replace sets

---

## Why Use Modules?

### Without Modules

```javascript
// Everything in one file - messy!
const PI = 3.14159;

function calculateArea(radius) {
    return PI * radius * radius;
}

function calculateCircumference(radius) {
    return 2 * PI * radius;
}

function validateEmail(email) {
    return email.includes("@");
}

function formatDate(date) {
    return date.toLocaleDateString();
}

// 1000+ more lines...
```

**Problems:**
- Hard to find code
- Name conflicts
- Hard to test
- Can't reuse easily

### With Modules

```javascript
// math.js
export const PI = 3.14159;
export function calculateArea(radius) {
    return PI * radius * radius;
}

// validation.js
export function validateEmail(email) {
    return email.includes("@");
}

// utils.js
export function formatDate(date) {
    return date.toLocaleDateString();
}

// main.js
import { calculateArea } from './math.js';
import { validateEmail } from './validation.js';
```

**Benefits:**
- Organized code
- Easy to find
- Reusable
- No name conflicts
- Easy to test

---

## ES6 Module Syntax

### Basic Export

```javascript
// math.js
export const PI = 3.14159;

export function add(a, b) {
    return a + b;
}

export function multiply(a, b) {
    return a * b;
}
```

### Basic Import

```javascript
// main.js
import { PI, add, multiply } from './math.js';

console.log(PI);           // 3.14159
console.log(add(5, 3));    // 8
console.log(multiply(4, 7)); // 28
```

---

## Named Exports

### Multiple Named Exports

```javascript
// utils.js
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function reverse(str) {
    return str.split('').reverse().join('');
}

export function truncate(str, length) {
    return str.length > length ? str.slice(0, length) + '...' : str;
}

export const MAX_LENGTH = 100;
```

### Importing Named Exports

```javascript
// main.js
import { capitalize, reverse, truncate, MAX_LENGTH } from './utils.js';

console.log(capitalize("hello"));        // "Hello"
console.log(reverse("hello"));           // "olleh"
console.log(truncate("Long text...", 5)); // "Long ..."
```

### Import with Alias

```javascript
import { 
    capitalize as cap, 
    reverse as rev 
} from './utils.js';

console.log(cap("hello"));  // "Hello"
console.log(rev("hello"));  // "olleh"
```

### Import All

```javascript
import * as utils from './utils.js';

console.log(utils.capitalize("hello"));
console.log(utils.reverse("hello"));
console.log(utils.MAX_LENGTH);
```

### Real-World Examples

**Example 1: Validation Module**
```javascript
// validation.js
export function isEmail(str) {
    return str.includes("@") && str.includes(".");
}

export function isPhone(str) {
    return /^\d{10}$/.test(str);
}

export function isURL(str) {
    return str.startsWith("http://") || str.startsWith("https://");
}

export function isEmpty(str) {
    return str.trim().length === 0;
}

// main.js
import { isEmail, isPhone, isEmpty } from './validation.js';

console.log(isEmail("user@example.com")); // true
console.log(isPhone("1234567890"));       // true
console.log(isEmpty("   "));              // true
```

**Example 2: Math Utilities**
```javascript
// math.js
export function square(n) {
    return n * n;
}

export function cube(n) {
    return n * n * n;
}

export function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

export const PI = 3.14159;
export const E = 2.71828;

// main.js
import { square, cube, factorial, PI } from './math.js';

console.log(square(5));     // 25
console.log(cube(3));       // 27
console.log(factorial(5));  // 120
```

---

## Default Exports

### What is Default Export?

Each module can have **one** default export - the main thing the module exports.

### Basic Syntax

```javascript
// calculator.js
export default class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
}

// main.js
import Calculator from './calculator.js';

const calc = new Calculator();
console.log(calc.add(5, 3)); // 8
```

### Default Function Export

```javascript
// logger.js
export default function log(message) {
    console.log(`[LOG] ${message}`);
}

// main.js
import log from './logger.js';

log("Application started"); // [LOG] Application started
```

### Mixing Named and Default Exports

```javascript
// api.js
export default function fetchData(url) {
    return fetch(url);
}

export function formatResponse(data) {
    return JSON.stringify(data);
}

export const API_URL = "https://api.example.com";

// main.js
import fetchData, { formatResponse, API_URL } from './api.js';

fetchData(API_URL).then(data => {
    console.log(formatResponse(data));
});
```

### Real-World Examples

**Example 1: User Class**
```javascript
// User.js
export default class User {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
}

export function validateUser(user) {
    return user.name && user.email;
}

// main.js
import User, { validateUser } from './User.js';

const user = new User("Alice", "alice@example.com");
console.log(user.greet());
console.log(validateUser(user));
```

**Example 2: Configuration**
```javascript
// config.js
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000,
    retries: 3
};

export default config;

export function getApiUrl() {
    return config.apiUrl;
}

// main.js
import config, { getApiUrl } from './config.js';

console.log(config.timeout);
console.log(getApiUrl());
```

---

## Importing Modules

### Import Everything

```javascript
import * as math from './math.js';

math.add(5, 3);
math.multiply(4, 7);
```

### Import with Renaming

```javascript
import { 
    add as sum, 
    multiply as product 
} from './math.js';

console.log(sum(5, 3));      // 8
console.log(product(4, 7));  // 28
```

### Dynamic Imports

```javascript
// Load module when needed
async function loadModule() {
    const math = await import('./math.js');
    console.log(math.add(5, 3));
}

// Or with .then()
import('./math.js').then(math => {
    console.log(math.add(5, 3));
});
```

### Real-World Example: Lazy Loading

```javascript
// main.js
document.getElementById('loadButton').addEventListener('click', async () => {
    console.log("Loading module...");
    
    const { heavyFunction } = await import('./heavy-module.js');
    
    heavyFunction();
    console.log("Module loaded!");
});
```

---

## Module Patterns

### Pattern 1: Utility Module

```javascript
// string-utils.js
export function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

export function camelCase(str) {
    return str
        .split(' ')
        .map((word, index) => 
            index === 0 ? word.toLowerCase() : capitalize(word)
        )
        .join('');
}

export function kebabCase(str) {
    return str.toLowerCase().replace(/\s+/g, '-');
}
```

### Pattern 2: Service Module

```javascript
// api-service.js
const BASE_URL = "https://api.example.com";

export async function getUser(id) {
    const response = await fetch(`${BASE_URL}/users/${id}`);
    return response.json();
}

export async function createUser(userData) {
    const response = await fetch(`${BASE_URL}/users`, {
        method: 'POST',
        body: JSON.stringify(userData)
    });
    return response.json();
}

export async function updateUser(id, userData) {
    const response = await fetch(`${BASE_URL}/users/${id}`, {
        method: 'PUT',
        body: JSON.stringify(userData)
    });
    return response.json();
}
```

### Pattern 3: Constants Module

```javascript
// constants.js
export const API_URL = "https://api.example.com";
export const TIMEOUT = 5000;
export const MAX_RETRIES = 3;

export const STATUS = {
    PENDING: 'pending',
    SUCCESS: 'success',
    ERROR: 'error'
};

export const COLORS = {
    PRIMARY: '#007bff',
    SUCCESS: '#28a745',
    DANGER: '#dc3545'
};
```

### Pattern 4: Class Module

```javascript
// TodoList.js
export default class TodoList {
    constructor() {
        this.tasks = [];
    }
    
    add(task) {
        this.tasks.push({
            id: Date.now(),
            text: task,
            completed: false
        });
    }
    
    remove(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
    }
    
    toggle(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) task.completed = !task.completed;
    }
    
    getAll() {
        return this.tasks;
    }
}
```

### Pattern 5: Singleton Module

```javascript
// logger.js
class Logger {
    constructor() {
        this.logs = [];
    }
    
    log(message) {
        const entry = {
            message,
            timestamp: new Date(),
            level: 'info'
        };
        this.logs.push(entry);
        console.log(`[${entry.level.toUpperCase()}] ${message}`);
    }
    
    error(message) {
        const entry = {
            message,
            timestamp: new Date(),
            level: 'error'
        };
        this.logs.push(entry);
        console.error(`[${entry.level.toUpperCase()}] ${message}`);
    }
    
    getLogs() {
        return this.logs;
    }
}

// Export single instance
export default new Logger();
```

---

## Best Practices

### 1. One Module Per File

```javascript
// ✅ Good - focused modules
// math.js - only math functions
// validation.js - only validation
// api.js - only API calls

// ❌ Bad - everything in one file
// utils.js - math, validation, API, formatting, etc.
```

### 2. Use Named Exports for Multiple Items

```javascript
// ✅ Good
export function add(a, b) { }
export function subtract(a, b) { }

// ❌ Less clear
export default {
    add: (a, b) => {},
    subtract: (a, b) => {}
};
```

### 3. Use Default Export for Main Item

```javascript
// ✅ Good - class is main export
export default class User { }
export function validateUser() { }

// ❌ Confusing - which is main?
export class User { }
export function validateUser() { }
```

### 4. Keep Module Dependencies Clear

```javascript
// ✅ Good - clear dependencies
import { add, multiply } from './math.js';
import { validateEmail } from './validation.js';

// ❌ Bad - circular dependencies
// a.js imports b.js
// b.js imports a.js
```

### 5. Use Descriptive File Names

```javascript
// ✅ Good
import { formatDate } from './date-utils.js';
import { fetchUser } from './user-service.js';

// ❌ Bad
import { formatDate } from './utils.js';
import { fetchUser } from './stuff.js';
```

---

## Common Mistakes

### Mistake 1: Forgetting File Extension

```javascript
// ❌ Wrong (in browser)
import { add } from './math';

// ✅ Correct
import { add } from './math.js';
```

### Mistake 2: Wrong Import Syntax

```javascript
// ❌ Wrong - mixing default and named
import Calculator, add from './math.js';

// ✅ Correct
import Calculator, { add } from './math.js';
```

### Mistake 3: Circular Dependencies

```javascript
// ❌ Bad
// a.js
import { funcB } from './b.js';
export function funcA() { funcB(); }

// b.js
import { funcA } from './a.js';
export function funcB() { funcA(); }

// ✅ Better - extract shared code
// shared.js
export function sharedFunc() { }

// a.js
import { sharedFunc } from './shared.js';

// b.js
import { sharedFunc } from './shared.js';
```

### Mistake 4: Exporting Before Declaration

```javascript
// ❌ Wrong
export add;
function add(a, b) {
    return a + b;
}

// ✅ Correct
function add(a, b) {
    return a + b;
}
export { add };

// ✅ Or inline
export function add(a, b) {
    return a + b;
}
```

---

## Practice Exercises

### Exercise 1: Create Math Module
```javascript
// Create math.js with functions:
// - add, subtract, multiply, divide
// - square, cube
// Export all as named exports

// Your code here:
```

### Exercise 2: Create User Module
```javascript
// Create User.js with:
// - User class (default export)
// - validateUser function (named export)

// Your code here:
```

### Exercise 3: Create API Module
```javascript
// Create api.js with:
// - fetchData function
// - API_URL constant
// - formatResponse function

// Your code here:
```

### Exercise 4: Import and Use
```javascript
// Import from your modules and use them

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Modules** organize code into separate files
2. **Named exports** for multiple items
3. **Default export** for main item (one per module)
4. **Import** brings code from other modules
5. Use **descriptive names** for modules
6. Avoid **circular dependencies**
7. **Dynamic imports** for lazy loading
8. Keep modules **focused** and **small**

### What's Next?

Congratulations on completing the Advanced section! You're now ready for **Expert** topics like design patterns, functional programming, and performance optimization!

---

## Quick Reference

```javascript
// Named Exports
export const PI = 3.14;
export function add(a, b) { }

// Default Export
export default class MyClass { }

// Import Named
import { PI, add } from './math.js';

// Import Default
import MyClass from './MyClass.js';

// Import Both
import MyClass, { helper } from './module.js';

// Import All
import * as math from './math.js';

// Import with Alias
import { add as sum } from './math.js';

// Dynamic Import
const module = await import('./module.js');
```

**Congratulations!** You've completed Lesson 13 and the Advanced section!
