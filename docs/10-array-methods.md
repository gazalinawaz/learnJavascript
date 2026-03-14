# Lesson 10: Advanced Array Methods - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Map Method](#map-method)
3. [Filter Method](#filter-method)
4. [Reduce Method](#reduce-method)
5. [Find and FindIndex](#find-and-findindex)
6. [Some and Every](#some-and-every)
7. [Sort Method](#sort-method)
8. [Chaining Methods](#chaining-methods)
9. [Practical Examples](#practical-examples)
10. [Best Practices](#best-practices)
11. [Common Mistakes](#common-mistakes)
12. [Practice Exercises](#practice-exercises)

---

## Introduction

### What Are Advanced Array Methods?

These are powerful built-in methods that let you **transform**, **filter**, and **analyze** arrays without writing loops. They make your code cleaner, more readable, and easier to maintain.

### Why Learn These Methods?

**Without advanced methods:**
```javascript
// Find all even numbers
const numbers = [1, 2, 3, 4, 5, 6];
const evens = [];

for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
        evens.push(numbers[i]);
    }
}
```

**With advanced methods:**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);
```

**Benefits:**
- Less code
- Easier to read
- Fewer bugs
- More functional style

---

## Map Method

### What Does Map Do?

**Map** transforms each element in an array and returns a **new array** with the transformed values.

**Think of it like:** A factory assembly line - each item goes in, gets transformed, comes out different.

### Basic Syntax

```javascript
const newArray = array.map(element => {
    // Transform element
    return transformedElement;
});
```

### Simple Examples

**Example 1: Double Numbers**
```javascript
const numbers = [1, 2, 3, 4, 5];
const doubled = numbers.map(num => num * 2);

console.log(doubled); // [2, 4, 6, 8, 10]
console.log(numbers); // [1, 2, 3, 4, 5] (original unchanged)
```

**Example 2: Convert to Uppercase**
```javascript
const names = ["alice", "bob", "charlie"];
const uppercase = names.map(name => name.toUpperCase());

console.log(uppercase); // ["ALICE", "BOB", "CHARLIE"]
```

**Example 3: Extract Property**
```javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]
```

### Real-World Examples

**Example 1: Add Tax to Prices**
```javascript
const prices = [10, 20, 30, 40];
const taxRate = 0.08;

const pricesWithTax = prices.map(price => {
    const tax = price * taxRate;
    return price + tax;
});

console.log(pricesWithTax); // [10.8, 21.6, 32.4, 43.2]
```

**Example 2: Format User Data**
```javascript
const users = [
    { firstName: "John", lastName: "Doe", age: 30 },
    { firstName: "Jane", lastName: "Smith", age: 25 }
];

const formatted = users.map(user => ({
    fullName: `${user.firstName} ${user.lastName}`,
    age: user.age,
    isAdult: user.age >= 18
}));

console.log(formatted);
// [
//   { fullName: "John Doe", age: 30, isAdult: true },
//   { fullName: "Jane Smith", age: 25, isAdult: true }
// ]
```

**Example 3: Convert Celsius to Fahrenheit**
```javascript
const celsius = [0, 10, 20, 30, 40];
const fahrenheit = celsius.map(c => (c * 9/5) + 32);

console.log(fahrenheit); // [32, 50, 68, 86, 104]
```

**Example 4: Create HTML Elements**
```javascript
const items = ["Apple", "Banana", "Orange"];

const listItems = items.map(item => `<li>${item}</li>`);

console.log(listItems);
// ["<li>Apple</li>", "<li>Banana</li>", "<li>Orange</li>"]
```

---

## Filter Method

### What Does Filter Do?

**Filter** creates a **new array** with only the elements that pass a test (return true).

**Think of it like:** A bouncer at a club - only lets in items that meet the criteria.

### Basic Syntax

```javascript
const newArray = array.filter(element => {
    // Return true to keep, false to remove
    return condition;
});
```

### Simple Examples

**Example 1: Get Even Numbers**
```javascript
const numbers = [1, 2, 3, 4, 5, 6];
const evens = numbers.filter(num => num % 2 === 0);

console.log(evens); // [2, 4, 6]
```

**Example 2: Get Long Words**
```javascript
const words = ["hi", "hello", "hey", "goodbye"];
const longWords = words.filter(word => word.length > 3);

console.log(longWords); // ["hello", "goodbye"]
```

**Example 3: Get Adults**
```javascript
const people = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 17 },
    { name: "Charlie", age: 30 }
];

const adults = people.filter(person => person.age >= 18);

console.log(adults);
// [{ name: "Alice", age: 25 }, { name: "Charlie", age: 30 }]
```

### Real-World Examples

**Example 1: Filter Products by Price**
```javascript
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 },
    { name: "Monitor", price: 300 }
];

const affordable = products.filter(product => product.price < 100);

console.log(affordable);
// [{ name: "Mouse", price: 25 }, { name: "Keyboard", price: 75 }]
```

**Example 2: Filter Active Users**
```javascript
const users = [
    { username: "alice", active: true },
    { username: "bob", active: false },
    { username: "charlie", active: true }
];

const activeUsers = users.filter(user => user.active);

console.log(activeUsers.map(u => u.username)); // ["alice", "charlie"]
```

**Example 3: Search Functionality**
```javascript
const items = ["Apple", "Banana", "Orange", "Grape", "Pineapple"];
const searchTerm = "app";

const results = items.filter(item => 
    item.toLowerCase().includes(searchTerm.toLowerCase())
);

console.log(results); // ["Apple", "Pineapple"]
```

**Example 4: Remove Duplicates**
```javascript
const numbers = [1, 2, 2, 3, 4, 4, 5];

const unique = numbers.filter((num, index, arr) => 
    arr.indexOf(num) === index
);

console.log(unique); // [1, 2, 3, 4, 5]
```

---

## Reduce Method

### What Does Reduce Do?

**Reduce** combines all array elements into a **single value** (number, string, object, etc.).

**Think of it like:** A blender - takes many ingredients, blends them into one result.

### Basic Syntax

```javascript
const result = array.reduce((accumulator, currentValue) => {
    // Combine accumulator with currentValue
    return newAccumulator;
}, initialValue);
```

### Simple Examples

**Example 1: Sum Numbers**
```javascript
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((total, num) => {
    return total + num;
}, 0);

console.log(sum); // 15
```

**How it works:**
```
Step 1: total = 0, num = 1 → return 0 + 1 = 1
Step 2: total = 1, num = 2 → return 1 + 2 = 3
Step 3: total = 3, num = 3 → return 3 + 3 = 6
Step 4: total = 6, num = 4 → return 6 + 4 = 10
Step 5: total = 10, num = 5 → return 10 + 5 = 15
```

**Example 2: Find Maximum**
```javascript
const numbers = [45, 23, 67, 12, 89, 34];

const max = numbers.reduce((highest, num) => {
    return num > highest ? num : highest;
}, numbers[0]);

console.log(max); // 89
```

**Example 3: Concatenate Strings**
```javascript
const words = ["Hello", "World", "from", "JavaScript"];

const sentence = words.reduce((result, word) => {
    return result + " " + word;
});

console.log(sentence); // "Hello World from JavaScript"
```

### Real-World Examples

**Example 1: Calculate Shopping Cart Total**
```javascript
const cart = [
    { item: "Laptop", price: 1000, quantity: 1 },
    { item: "Mouse", price: 25, quantity: 2 },
    { item: "Keyboard", price: 75, quantity: 1 }
];

const total = cart.reduce((sum, item) => {
    return sum + (item.price * item.quantity);
}, 0);

console.log(`Total: $${total}`); // Total: $1125
```

**Example 2: Count Occurrences**
```javascript
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

const count = fruits.reduce((acc, fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});

console.log(count);
// { apple: 3, banana: 2, orange: 1 }
```

**Example 3: Group by Category**
```javascript
const products = [
    { name: "Laptop", category: "Electronics" },
    { name: "Shirt", category: "Clothing" },
    { name: "Phone", category: "Electronics" },
    { name: "Pants", category: "Clothing" }
];

const grouped = products.reduce((acc, product) => {
    const category = product.category;
    
    if (!acc[category]) {
        acc[category] = [];
    }
    
    acc[category].push(product.name);
    return acc;
}, {});

console.log(grouped);
// {
//   Electronics: ["Laptop", "Phone"],
//   Clothing: ["Shirt", "Pants"]
// }
```

**Example 4: Flatten Array**
```javascript
const nested = [[1, 2], [3, 4], [5, 6]];

const flat = nested.reduce((acc, arr) => {
    return acc.concat(arr);
}, []);

console.log(flat); // [1, 2, 3, 4, 5, 6]
```

**Example 5: Build Object from Arrays**
```javascript
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Boston"];

const person = keys.reduce((obj, key, index) => {
    obj[key] = values[index];
    return obj;
}, {});

console.log(person);
// { name: "Alice", age: 25, city: "Boston" }
```

---

## Find and FindIndex

### Find Method

**Find** returns the **first element** that passes a test.

```javascript
const numbers = [5, 12, 8, 130, 44];

const found = numbers.find(num => num > 10);
console.log(found); // 12 (first number > 10)

const notFound = numbers.find(num => num > 200);
console.log(notFound); // undefined
```

**Real-World Examples:**

**Example 1: Find User by ID**
```javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const user = users.find(u => u.id === 2);
console.log(user); // { id: 2, name: "Bob" }
```

**Example 2: Find First Available Item**
```javascript
const products = [
    { name: "Laptop", inStock: false },
    { name: "Mouse", inStock: true },
    { name: "Keyboard", inStock: true }
];

const available = products.find(p => p.inStock);
console.log(available); // { name: "Mouse", inStock: true }
```

### FindIndex Method

**FindIndex** returns the **index** of the first element that passes a test.

```javascript
const numbers = [5, 12, 8, 130, 44];

const index = numbers.findIndex(num => num > 10);
console.log(index); // 1 (index of 12)

const notFound = numbers.findIndex(num => num > 200);
console.log(notFound); // -1
```

**Real-World Example:**
```javascript
const tasks = [
    { id: 1, title: "Task 1", completed: true },
    { id: 2, title: "Task 2", completed: false },
    { id: 3, title: "Task 3", completed: false }
];

const index = tasks.findIndex(task => !task.completed);
console.log(`First incomplete task at index: ${index}`); // 1
```

---

## Some and Every

### Some Method

**Some** returns `true` if **at least one** element passes the test.

```javascript
const numbers = [1, 2, 3, 4, 5];

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true (2 and 4 are even)

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false
```

**Real-World Examples:**

**Example 1: Check if Any Item is Out of Stock**
```javascript
const products = [
    { name: "Laptop", inStock: true },
    { name: "Mouse", inStock: false },
    { name: "Keyboard", inStock: true }
];

const hasOutOfStock = products.some(p => !p.inStock);
console.log(hasOutOfStock); // true
```

**Example 2: Validate Form**
```javascript
const fields = [
    { name: "username", value: "alice" },
    { name: "email", value: "" },
    { name: "password", value: "secret123" }
];

const hasEmptyField = fields.some(field => field.value === "");
console.log(hasEmptyField); // true
```

### Every Method

**Every** returns `true` if **all** elements pass the test.

```javascript
const numbers = [2, 4, 6, 8];

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // true

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allLarge = numbers.every(num => num > 5);
console.log(allLarge); // false (2 and 4 are not > 5)
```

**Real-World Examples:**

**Example 1: Check if All Users are Adults**
```javascript
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 22 }
];

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true
```

**Example 2: Validate All Fields**
```javascript
const fields = [
    { name: "username", value: "alice", valid: true },
    { name: "email", value: "alice@example.com", valid: true },
    { name: "password", value: "secret123", valid: true }
];

const formValid = fields.every(field => field.valid);
console.log(formValid); // true
```

---

## Sort Method

### Basic Sorting

**⚠️ Warning:** `sort()` modifies the original array!

```javascript
const fruits = ["orange", "apple", "banana"];
fruits.sort();

console.log(fruits); // ["apple", "banana", "orange"]
```

### Sorting Numbers

**❌ Wrong way (sorts as strings):**
```javascript
const numbers = [10, 5, 40, 25, 1000, 1];
numbers.sort();

console.log(numbers); // [1, 10, 1000, 25, 40, 5] ❌
```

**✅ Correct way (numeric sort):**
```javascript
const numbers = [10, 5, 40, 25, 1000, 1];

// Ascending
numbers.sort((a, b) => a - b);
console.log(numbers); // [1, 5, 10, 25, 40, 1000] ✅

// Descending
numbers.sort((a, b) => b - a);
console.log(numbers); // [1000, 40, 25, 10, 5, 1] ✅
```

### Real-World Examples

**Example 1: Sort by Price**
```javascript
const products = [
    { name: "Laptop", price: 1000 },
    { name: "Mouse", price: 25 },
    { name: "Keyboard", price: 75 }
];

// Sort by price (low to high)
products.sort((a, b) => a.price - b.price);

console.log(products);
// [
//   { name: "Mouse", price: 25 },
//   { name: "Keyboard", price: 75 },
//   { name: "Laptop", price: 1000 }
// ]
```

**Example 2: Sort by Name**
```javascript
const users = [
    { name: "Charlie" },
    { name: "Alice" },
    { name: "Bob" }
];

users.sort((a, b) => a.name.localeCompare(b.name));

console.log(users);
// [{ name: "Alice" }, { name: "Bob" }, { name: "Charlie" }]
```

**Example 3: Sort by Multiple Criteria**
```javascript
const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 92 },
    { name: "Charlie", grade: 85 }
];

// Sort by grade (descending), then by name (ascending)
students.sort((a, b) => {
    if (b.grade !== a.grade) {
        return b.grade - a.grade;
    }
    return a.name.localeCompare(b.name);
});

console.log(students);
// [
//   { name: "Bob", grade: 92 },
//   { name: "Alice", grade: 85 },
//   { name: "Charlie", grade: 85 }
// ]
```

---

## Chaining Methods

### What is Method Chaining?

Combining multiple array methods in sequence.

```javascript
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = numbers
    .filter(num => num % 2 === 0)  // Get evens: [2, 4, 6, 8, 10]
    .map(num => num * 2)            // Double: [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0); // Sum: 60

console.log(result); // 60
```

### Real-World Examples

**Example 1: Process User Data**
```javascript
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: false },
    { name: "Charlie", age: 30, active: true },
    { name: "David", age: 22, active: true }
];

const activeAdultNames = users
    .filter(user => user.active)
    .filter(user => user.age >= 18)
    .map(user => user.name)
    .sort();

console.log(activeAdultNames); // ["Alice", "Charlie", "David"]
```

**Example 2: Calculate Total Sales**
```javascript
const orders = [
    { id: 1, items: [{ price: 10, qty: 2 }, { price: 5, qty: 3 }] },
    { id: 2, items: [{ price: 20, qty: 1 }] },
    { id: 3, items: [{ price: 15, qty: 2 }] }
];

const totalSales = orders
    .flatMap(order => order.items)
    .map(item => item.price * item.qty)
    .reduce((sum, total) => sum + total, 0);

console.log(`Total Sales: $${totalSales}`); // Total Sales: $85
```

**Example 3: Get Top 3 Scores**
```javascript
const scores = [85, 92, 78, 95, 88, 90, 82];

const top3 = scores
    .sort((a, b) => b - a)
    .slice(0, 3);

console.log(top3); // [95, 92, 90]
```

---

## Practical Examples

### Example 1: Shopping Cart System
```javascript
const cart = [
    { name: "Laptop", price: 1000, quantity: 1, category: "Electronics" },
    { name: "Mouse", price: 25, quantity: 2, category: "Electronics" },
    { name: "Shirt", price: 30, quantity: 3, category: "Clothing" },
    { name: "Keyboard", price: 75, quantity: 1, category: "Electronics" }
];

// Total price
const total = cart.reduce((sum, item) => 
    sum + (item.price * item.quantity), 0
);
console.log(`Total: $${total}`); // Total: $1165

// Electronics only
const electronics = cart.filter(item => 
    item.category === "Electronics"
);

// Item names
const itemNames = cart.map(item => item.name);
console.log(itemNames);

// Most expensive item
const mostExpensive = cart.reduce((max, item) => 
    item.price > max.price ? item : max
);
console.log(`Most expensive: ${mostExpensive.name}`);
```

### Example 2: Student Grade Analysis
```javascript
const students = [
    { name: "Alice", scores: [85, 90, 88] },
    { name: "Bob", scores: [78, 82, 80] },
    { name: "Charlie", scores: [92, 95, 93] }
];

// Calculate averages
const withAverages = students.map(student => ({
    name: student.name,
    average: student.scores.reduce((sum, score) => sum + score, 0) / student.scores.length
}));

console.log(withAverages);

// Find top student
const topStudent = withAverages.reduce((top, student) => 
    student.average > top.average ? student : top
);

console.log(`Top student: ${topStudent.name} (${topStudent.average.toFixed(2)})`);
```

### Example 3: Data Transformation Pipeline
```javascript
const rawData = [
    "  alice@example.com  ",
    "BOB@EXAMPLE.COM",
    "  charlie@example.com"
];

const cleanedEmails = rawData
    .map(email => email.trim())
    .map(email => email.toLowerCase())
    .filter(email => email.includes("@"))
    .sort();

console.log(cleanedEmails);
// ["alice@example.com", "bob@example.com", "charlie@example.com"]
```

---

## Best Practices

### 1. Choose the Right Method

```javascript
// ✅ Use map to transform
const doubled = numbers.map(n => n * 2);

// ✅ Use filter to select
const evens = numbers.filter(n => n % 2 === 0);

// ✅ Use reduce to combine
const sum = numbers.reduce((total, n) => total + n, 0);

// ✅ Use find for first match
const user = users.find(u => u.id === 5);
```

### 2. Keep Callbacks Simple

```javascript
// ❌ Too complex
const result = numbers.map(n => {
    const doubled = n * 2;
    const squared = doubled * doubled;
    const formatted = `Result: ${squared}`;
    return formatted;
});

// ✅ Break into steps
const result = numbers
    .map(n => n * 2)
    .map(n => n * n)
    .map(n => `Result: ${n}`);
```

### 3. Use Descriptive Names

```javascript
// ❌ Unclear
const r = arr.filter(x => x > 5);

// ✅ Clear
const largeNumbers = numbers.filter(num => num > 5);
```

### 4. Consider Performance

```javascript
// ❌ Multiple iterations
const result1 = arr.filter(x => x > 0);
const result2 = result1.map(x => x * 2);
const result3 = result2.filter(x => x < 100);

// ✅ Single iteration with reduce
const result = arr.reduce((acc, x) => {
    if (x > 0) {
        const doubled = x * 2;
        if (doubled < 100) {
            acc.push(doubled);
        }
    }
    return acc;
}, []);
```

---

## Common Mistakes

### Mistake 1: Forgetting to Return

```javascript
// ❌ Wrong - no return
const doubled = numbers.map(num => {
    num * 2; // Missing return!
});

// ✅ Correct
const doubled = numbers.map(num => {
    return num * 2;
});

// ✅ Or use implicit return
const doubled = numbers.map(num => num * 2);
```

### Mistake 2: Mutating Original Array

```javascript
// ❌ Wrong - modifies original
const numbers = [3, 1, 2];
const sorted = numbers.sort();
console.log(numbers); // [1, 2, 3] - changed!

// ✅ Correct - copy first
const numbers = [3, 1, 2];
const sorted = [...numbers].sort();
console.log(numbers); // [3, 1, 2] - unchanged
```

### Mistake 3: Wrong Reduce Initial Value

```javascript
const numbers = [1, 2, 3];

// ❌ Wrong - no initial value
const sum = numbers.reduce((total, num) => total + num);
// Works, but risky

// ✅ Correct - always provide initial value
const sum = numbers.reduce((total, num) => total + num, 0);
```

### Mistake 4: Using forEach When You Need a Return Value

```javascript
// ❌ Wrong - forEach doesn't return
const doubled = numbers.forEach(num => num * 2);
console.log(doubled); // undefined

// ✅ Correct - use map
const doubled = numbers.map(num => num * 2);
```

---

## Practice Exercises

### Exercise 1: Transform and Filter
```javascript
// Get squares of even numbers
const numbers = [1, 2, 3, 4, 5, 6];

// Your code here:
```

### Exercise 2: Group and Count
```javascript
// Count how many of each fruit
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];

// Your code here:
// Result should be: { apple: 3, banana: 2, orange: 1 }
```

### Exercise 3: Calculate Average
```javascript
// Calculate average age
const users = [
    { name: "Alice", age: 25 },
    { name: "Bob", age: 30 },
    { name: "Charlie", age: 35 }
];

// Your code here:
```

### Exercise 4: Complex Transformation
```javascript
// Get names of active users over 18, sorted alphabetically
const users = [
    { name: "Alice", age: 25, active: true },
    { name: "Bob", age: 17, active: true },
    { name: "Charlie", age: 30, active: false },
    { name: "David", age: 22, active: true }
];

// Your code here:
```

---

## Summary

### Key Takeaways

1. **map** - Transform each element
2. **filter** - Select elements that pass a test
3. **reduce** - Combine elements into single value
4. **find** - Get first matching element
5. **some** - Check if any element passes test
6. **every** - Check if all elements pass test
7. **sort** - Order elements (modifies original!)
8. **Chain methods** for complex operations
9. Always **return** from callbacks
10. Don't **mutate** original arrays

### What's Next?

Now that you master array methods, you're ready for **Advanced** topics like asynchronous programming, OOP, and modules!

---

## Quick Reference

```javascript
// Map - Transform
arr.map(x => x * 2)

// Filter - Select
arr.filter(x => x > 5)

// Reduce - Combine
arr.reduce((acc, x) => acc + x, 0)

// Find - First match
arr.find(x => x > 5)

// FindIndex - Index of first match
arr.findIndex(x => x > 5)

// Some - Any match?
arr.some(x => x > 5)

// Every - All match?
arr.every(x => x > 0)

// Sort - Order
arr.sort((a, b) => a - b)

// Chain
arr
  .filter(x => x > 0)
  .map(x => x * 2)
  .reduce((sum, x) => sum + x, 0)
```

**Congratulations!** You've completed Lesson 10 and the Intermediate section!
