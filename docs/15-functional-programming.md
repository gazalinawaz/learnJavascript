# Lesson 15: Functional Programming - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Pure Functions](#pure-functions)
3. [Immutability](#immutability)
4. [Higher-Order Functions](#higher-order-functions)
5. [Function Composition](#function-composition)
6. [Currying](#currying)
7. [Recursion](#recursion)
8. [Practical Examples](#practical-examples)
9. [Best Practices](#best-practices)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What is Functional Programming?

**Functional Programming (FP)** is a programming style that treats computation as the evaluation of mathematical functions and avoids changing state and mutable data.

### Real-World Analogy

**Assembly Line:**
- Each station (function) does ONE thing
- Input goes in, output comes out
- No station changes what previous stations did
- Predictable and reliable

### Key Principles

1. **Pure Functions** - Same input = Same output
2. **Immutability** - Don't change data, create new data
3. **Function Composition** - Combine small functions
4. **No Side Effects** - Functions don't affect outside world

---

## Pure Functions

### What is a Pure Function?

A **pure function**:
1. Always returns the same output for the same input
2. Has no side effects (doesn't change anything outside)

### Examples

**✅ Pure Function:**
```javascript
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Always 5
console.log(add(2, 3)); // Always 5
```

**❌ Impure Function:**
```javascript
let total = 0;

function addToTotal(num) {
    total += num; // Side effect - changes external variable
    return total;
}

console.log(addToTotal(5)); // 5
console.log(addToTotal(5)); // 10 - different result!
```

### More Examples

**✅ Pure:**
```javascript
function multiply(a, b) {
    return a * b;
}

function getFullName(firstName, lastName) {
    return `${firstName} ${lastName}`;
}

function calculateArea(length, width) {
    return length * width;
}
```

**❌ Impure:**
```javascript
function getCurrentTime() {
    return new Date(); // Different every time
}

function getRandomNumber() {
    return Math.random(); // Different every time
}

let count = 0;
function increment() {
    count++; // Modifies external state
    return count;
}
```

### Benefits of Pure Functions

```javascript
// ✅ Easy to test
function double(n) {
    return n * 2;
}

// Test
console.log(double(5) === 10); // Always true

// ✅ Easy to understand
function greet(name) {
    return `Hello, ${name}!`;
}

// ✅ Can be cached (memoization)
const cache = {};
function expensiveCalculation(n) {
    if (cache[n]) {
        return cache[n];
    }
    const result = n * n; // Expensive operation
    cache[n] = result;
    return result;
}
```

---

## Immutability

### What is Immutability?

**Immutability** means not changing existing data. Instead, create new data.

### Why Immutability?

**Benefits:**
- Predictable code
- Easier debugging
- No unexpected changes
- Safer concurrent operations

### Arrays - Immutable Operations

**❌ Mutable (changes original):**
```javascript
const numbers = [1, 2, 3];
numbers.push(4); // Modifies original
console.log(numbers); // [1, 2, 3, 4]
```

**✅ Immutable (creates new):**
```javascript
const numbers = [1, 2, 3];
const newNumbers = [...numbers, 4]; // Creates new array
console.log(numbers);    // [1, 2, 3] - unchanged
console.log(newNumbers); // [1, 2, 3, 4]
```

### More Immutable Array Operations

```javascript
const numbers = [1, 2, 3, 4, 5];

// ✅ Add to end
const withSix = [...numbers, 6];

// ✅ Add to beginning
const withZero = [0, ...numbers];

// ✅ Remove item
const without3 = numbers.filter(n => n !== 3);

// ✅ Update item
const doubled = numbers.map(n => n * 2);

// ✅ Combine arrays
const moreNumbers = [6, 7, 8];
const combined = [...numbers, ...moreNumbers];
```

### Objects - Immutable Operations

**❌ Mutable:**
```javascript
const user = { name: "Alice", age: 25 };
user.age = 26; // Modifies original
```

**✅ Immutable:**
```javascript
const user = { name: "Alice", age: 25 };
const updatedUser = { ...user, age: 26 }; // Creates new object

console.log(user);        // { name: "Alice", age: 25 }
console.log(updatedUser); // { name: "Alice", age: 26 }
```

### More Immutable Object Operations

```javascript
const user = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

// ✅ Add property
const withEmail = {
    ...user,
    email: "alice@example.com"
};

// ✅ Update property
const olderUser = {
    ...user,
    age: 26
};

// ✅ Remove property
const { city, ...withoutCity } = user;

// ✅ Merge objects
const address = { street: "123 Main St", zip: "02101" };
const userWithAddress = { ...user, ...address };
```

### Practical Example

```javascript
// ❌ Mutable approach
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) {
        this.items.push(item); // Mutates array
    }
}

// ✅ Immutable approach
class ShoppingCart {
    constructor(items = []) {
        this.items = items;
    }
    
    addItem(item) {
        return new ShoppingCart([...this.items, item]); // Returns new cart
    }
}

const cart1 = new ShoppingCart();
const cart2 = cart1.addItem({ name: "Laptop", price: 999 });
const cart3 = cart2.addItem({ name: "Mouse", price: 25 });

console.log(cart1.items.length); // 0 - unchanged
console.log(cart2.items.length); // 1
console.log(cart3.items.length); // 2
```

---

## Higher-Order Functions

### What are Higher-Order Functions?

Functions that:
1. Take functions as arguments, OR
2. Return functions

### Functions as Arguments

```javascript
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, (i) => {
    console.log(`Iteration ${i}`);
});
// Iteration 0
// Iteration 1
// Iteration 2
```

### Functions Returning Functions

```javascript
function multiplyBy(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplyBy(2);
const triple = multiplyBy(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

### Built-in Higher-Order Functions

```javascript
const numbers = [1, 2, 3, 4, 5];

// map - transforms each element
const doubled = numbers.map(n => n * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

// filter - selects elements
const evens = numbers.filter(n => n % 2 === 0);
console.log(evens); // [2, 4]

// reduce - combines elements
const sum = numbers.reduce((total, n) => total + n, 0);
console.log(sum); // 15
```

### Practical Examples

**Example 1: Custom Filter**
```javascript
function customFilter(array, predicate) {
    const result = [];
    for (const item of array) {
        if (predicate(item)) {
            result.push(item);
        }
    }
    return result;
}

const numbers = [1, 2, 3, 4, 5, 6];
const evens = customFilter(numbers, n => n % 2 === 0);
console.log(evens); // [2, 4, 6]
```

**Example 2: Logger Wrapper**
```javascript
function withLogging(fn) {
    return function(...args) {
        console.log(`Calling with: ${args}`);
        const result = fn(...args);
        console.log(`Result: ${result}`);
        return result;
    };
}

function add(a, b) {
    return a + b;
}

const loggedAdd = withLogging(add);
loggedAdd(5, 3);
// Calling with: 5,3
// Result: 8
```

---

## Function Composition

### What is Function Composition?

**Composition** combines multiple functions to create a new function.

### Basic Example

```javascript
const add5 = n => n + 5;
const multiply2 = n => n * 2;

// Manual composition
const result = multiply2(add5(10));
console.log(result); // 30

// Compose function
function compose(f, g) {
    return function(x) {
        return f(g(x));
    };
}

const add5ThenMultiply2 = compose(multiply2, add5);
console.log(add5ThenMultiply2(10)); // 30
```

### Pipe Function

**Pipe** is like compose but reads left-to-right:

```javascript
function pipe(...fns) {
    return function(x) {
        return fns.reduce((result, fn) => fn(result), x);
    };
}

const add5 = n => n + 5;
const multiply2 = n => n * 2;
const subtract3 = n => n - 3;

const calculate = pipe(
    add5,        // 10 + 5 = 15
    multiply2,   // 15 * 2 = 30
    subtract3    // 30 - 3 = 27
);

console.log(calculate(10)); // 27
```

### Practical Example

```javascript
// String processing pipeline
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const removeSpaces = str => str.replace(/\s+/g, '-');

const createSlug = pipe(
    trim,
    toLowerCase,
    removeSpaces
);

console.log(createSlug("  Hello World  ")); // "hello-world"
```

### Data Processing Pipeline

```javascript
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true },
    { name: "David", age: 22, active: true }
];

const getActiveUsers = users => users.filter(u => u.active);
const getAdults = users => users.filter(u => u.age >= 18);
const getNames = users => users.map(u => u.name);
const sortNames = names => names.sort();

const getActiveAdultNames = pipe(
    getActiveUsers,
    getAdults,
    getNames,
    sortNames
);

console.log(getActiveAdultNames(users));
// ["Alice", "Charlie", "David"]
```

---

## Currying

### What is Currying?

**Currying** transforms a function with multiple arguments into a sequence of functions with single arguments.

### Basic Example

```javascript
// Normal function
function add(a, b, c) {
    return a + b + c;
}

console.log(add(1, 2, 3)); // 6

// Curried function
function curriedAdd(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(curriedAdd(1)(2)(3)); // 6

// Or with arrow functions
const curriedAdd = a => b => c => a + b + c;
console.log(curriedAdd(1)(2)(3)); // 6
```

### Why Curry?

**Partial Application:**

```javascript
const multiply = a => b => a * b;

const double = multiply(2);
const triple = multiply(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15
```

### Practical Examples

**Example 1: Greeting Generator**
```javascript
const greet = greeting => name => `${greeting}, ${name}!`;

const sayHello = greet("Hello");
const sayHi = greet("Hi");

console.log(sayHello("Alice")); // Hello, Alice!
console.log(sayHi("Bob"));      // Hi, Bob!
```

**Example 2: Discount Calculator**
```javascript
const applyDiscount = discount => price => {
    return price - (price * discount);
};

const apply10Percent = applyDiscount(0.10);
const apply20Percent = applyDiscount(0.20);

console.log(apply10Percent(100)); // 90
console.log(apply20Percent(100)); // 80
```

**Example 3: Filter Builder**
```javascript
const filterBy = property => value => obj => obj[property] === value;

const users = [
    { name: "Alice", role: "admin" },
    { name: "Bob", role: "user" },
    { name: "Charlie", role: "admin" }
];

const isAdmin = filterBy("role")("admin");
const admins = users.filter(isAdmin);

console.log(admins);
// [{ name: "Alice", role: "admin" }, { name: "Charlie", role: "admin" }]
```

---

## Recursion

### What is Recursion?

**Recursion** is when a function calls itself.

### Basic Example

```javascript
function countdown(n) {
    if (n <= 0) {
        console.log("Done!");
        return;
    }
    
    console.log(n);
    countdown(n - 1); // Calls itself
}

countdown(5);
// 5
// 4
// 3
// 2
// 1
// Done!
```

### Factorial

```javascript
function factorial(n) {
    // Base case
    if (n <= 1) {
        return 1;
    }
    
    // Recursive case
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120
// 5 * factorial(4)
// 5 * 4 * factorial(3)
// 5 * 4 * 3 * factorial(2)
// 5 * 4 * 3 * 2 * factorial(1)
// 5 * 4 * 3 * 2 * 1 = 120
```

### Sum Array

```javascript
function sum(arr) {
    // Base case
    if (arr.length === 0) {
        return 0;
    }
    
    // Recursive case
    return arr[0] + sum(arr.slice(1));
}

console.log(sum([1, 2, 3, 4, 5])); // 15
```

### Flatten Array

```javascript
function flatten(arr) {
    let result = [];
    
    for (const item of arr) {
        if (Array.isArray(item)) {
            result = result.concat(flatten(item)); // Recursive
        } else {
            result.push(item);
        }
    }
    
    return result;
}

const nested = [1, [2, 3], [4, [5, 6]]];
console.log(flatten(nested)); // [1, 2, 3, 4, 5, 6]
```

### Practical Example: Tree Traversal

```javascript
const tree = {
    value: 1,
    children: [
        {
            value: 2,
            children: [
                { value: 4, children: [] },
                { value: 5, children: [] }
            ]
        },
        {
            value: 3,
            children: [
                { value: 6, children: [] }
            ]
        }
    ]
};

function traverse(node) {
    console.log(node.value);
    
    for (const child of node.children) {
        traverse(child); // Recursive
    }
}

traverse(tree);
// 1, 2, 4, 5, 3, 6
```

---

## Practical Examples

### Example 1: Data Transformation Pipeline

```javascript
const products = [
    { name: "Laptop", price: 1000, category: "Electronics", inStock: true },
    { name: "Phone", price: 500, category: "Electronics", inStock: false },
    { name: "Shirt", price: 30, category: "Clothing", inStock: true },
    { name: "Shoes", price: 80, category: "Clothing", inStock: true }
];

const getInStock = products => products.filter(p => p.inStock);
const getElectronics = products => products.filter(p => p.category === "Electronics");
const addTax = products => products.map(p => ({
    ...p,
    priceWithTax: p.price * 1.08
}));
const sortByPrice = products => [...products].sort((a, b) => a.price - b.price);

const processProducts = pipe(
    getInStock,
    getElectronics,
    addTax,
    sortByPrice
);

console.log(processProducts(products));
```

### Example 2: Form Validation

```javascript
const isRequired = value => value.trim().length > 0;
const isEmail = value => value.includes("@");
const minLength = min => value => value.length >= min;

const validate = (value, ...validators) => {
    return validators.every(validator => validator(value));
};

const email = "user@example.com";
const password = "secret123";

console.log(validate(email, isRequired, isEmail)); // true
console.log(validate(password, isRequired, minLength(8))); // true
```

### Example 3: Memoization

```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log("From cache");
            return cache[key];
        }
        
        console.log("Calculating...");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const fibonacci = memoize(function(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
});

console.log(fibonacci(10)); // Calculating...
console.log(fibonacci(10)); // From cache
```

---

## Best Practices

### 1. Prefer Pure Functions

```javascript
// ✅ Good - pure
function calculateTotal(items) {
    return items.reduce((sum, item) => sum + item.price, 0);
}

// ❌ Bad - impure
let total = 0;
function addToTotal(price) {
    total += price;
}
```

### 2. Use Immutability

```javascript
// ✅ Good - immutable
const addItem = (cart, item) => [...cart, item];

// ❌ Bad - mutable
const addItem = (cart, item) => {
    cart.push(item);
    return cart;
};
```

### 3. Compose Small Functions

```javascript
// ✅ Good - small, composable
const trim = str => str.trim();
const toLowerCase = str => str.toLowerCase();
const processInput = pipe(trim, toLowerCase);

// ❌ Bad - one big function
const processInput = str => {
    str = str.trim();
    str = str.toLowerCase();
    return str;
};
```

### 4. Avoid Side Effects

```javascript
// ✅ Good - no side effects
function formatUser(user) {
    return {
        ...user,
        name: user.name.toUpperCase()
    };
}

// ❌ Bad - side effect
function formatUser(user) {
    user.name = user.name.toUpperCase();
    console.log("User formatted"); // Side effect
    return user;
}
```

---

## Practice Exercises

### Exercise 1: Pure Functions
```javascript
// Convert these impure functions to pure functions

let count = 0;
function increment() {
    count++;
    return count;
}

// Your pure version:
```

### Exercise 2: Immutability
```javascript
// Rewrite using immutable operations

const numbers = [1, 2, 3];
numbers.push(4);
numbers[0] = 10;

// Your immutable version:
```

### Exercise 3: Composition
```javascript
// Create a pipeline to process user data
// 1. Filter active users
// 2. Get users over 18
// 3. Extract names
// 4. Sort alphabetically

const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: true },
    { name: "Charlie", age: 30, active: false }
];

// Your code here:
```

### Exercise 4: Currying
```javascript
// Create a curried function for calculating discounted prices

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Pure functions** - same input = same output
2. **Immutability** - don't change data, create new
3. **Higher-order functions** - functions as values
4. **Composition** - combine small functions
5. **Currying** - transform multi-arg to single-arg
6. **Recursion** - function calls itself
7. **No side effects** - predictable code
8. **Declarative** over imperative

### What's Next?

Now that you understand functional programming, you're ready to learn about **Performance Optimization** - making your code faster and more efficient!

---

## Quick Reference

```javascript
// Pure Function
const add = (a, b) => a + b;

// Immutability
const newArr = [...oldArr, item];
const newObj = { ...oldObj, key: value };

// Higher-Order
const map = (arr, fn) => arr.map(fn);

// Composition
const pipe = (...fns) => x => 
    fns.reduce((v, f) => f(v), x);

// Currying
const multiply = a => b => a * b;

// Recursion
const factorial = n => 
    n <= 1 ? 1 : n * factorial(n - 1);
```

**Congratulations!** You've completed Lesson 15. Practice FP concepts!
