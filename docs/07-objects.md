# Lesson 7: Objects - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Creating Objects](#creating-objects)
3. [Accessing Properties](#accessing-properties)
4. [Modifying Properties](#modifying-properties)
5. [Object Methods](#object-methods)
6. [The `this` Keyword](#the-this-keyword)
7. [Nested Objects](#nested-objects)
8. [Object Iteration](#object-iteration)
9. [Object Destructuring](#object-destructuring)
10. [Common Patterns](#common-patterns)
11. [Best Practices](#best-practices)
12. [Common Mistakes](#common-mistakes)
13. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Objects?

Think of a person: they have a name, age, address, and can perform actions like walk or talk. Objects in JavaScript are like real-world objects - they have **properties** (characteristics) and **methods** (actions).

### Real-World Analogies

**Car:**
```
Properties:
- brand: "Toyota"
- model: "Camry"
- year: 2020
- color: "blue"

Methods:
- start()
- stop()
- accelerate()
```

**Book:**
```
Properties:
- title: "JavaScript Guide"
- author: "John Doe"
- pages: 300
- published: 2024

Methods:
- read()
- bookmark()
```

### Why Use Objects?

**Without Objects:**
```javascript
const userName = "Alice";
const userAge = 25;
const userCity = "New York";
const userEmail = "alice@example.com";
// Hard to keep related data together!
```

**With Objects:**
```javascript
const user = {
    name: "Alice",
    age: 25,
    city: "New York",
    email: "alice@example.com"
};
// All related data in one place!
```

---

## Creating Objects

### Object Literal (Most Common)

```javascript
const person = {
    name: "John",
    age: 30,
    city: "New York"
};
```

### Empty Object

```javascript
const empty = {};
```

### Object Constructor

```javascript
const person = new Object();
person.name = "John";
person.age = 30;
```

### Real-World Examples

**Example 1: User Profile**
```javascript
const user = {
    username: "john_doe",
    email: "john@example.com",
    age: 28,
    isActive: true,
    role: "admin"
};
```

**Example 2: Product**
```javascript
const product = {
    id: 101,
    name: "Laptop",
    brand: "Dell",
    price: 999.99,
    inStock: true,
    category: "Electronics"
};
```

**Example 3: Book**
```javascript
const book = {
    title: "JavaScript Basics",
    author: "Jane Smith",
    pages: 350,
    published: 2024,
    isbn: "978-1234567890",
    available: true
};
```

---

## Accessing Properties

### Dot Notation

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

console.log(person.name);  // "Alice"
console.log(person.age);   // 25
console.log(person.city);  // "Boston"
```

### Bracket Notation

```javascript
const person = {
    name: "Alice",
    age: 25
};

console.log(person["name"]); // "Alice"
console.log(person["age"]);  // 25
```

### When to Use Bracket Notation

**1. Property name has spaces or special characters:**
```javascript
const person = {
    "first name": "Alice",
    "last-name": "Smith"
};

console.log(person["first name"]); // "Alice"
console.log(person["last-name"]);  // "Smith"
```

**2. Property name is in a variable:**
```javascript
const person = {
    name: "Alice",
    age: 25
};

const prop = "name";
console.log(person[prop]); // "Alice"
```

**3. Dynamic property access:**
```javascript
const user = {
    name: "Bob",
    email: "bob@example.com",
    phone: "123-456-7890"
};

const fields = ["name", "email", "phone"];

fields.forEach(field => {
    console.log(`${field}: ${user[field]}`);
});
// name: Bob
// email: bob@example.com
// phone: 123-456-7890
```

### Real-World Examples

**Example 1: Display User Info**
```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    email: "john@example.com",
    age: 30
};

console.log(`Name: ${user.firstName} ${user.lastName}`);
console.log(`Email: ${user.email}`);
console.log(`Age: ${user.age}`);
```

**Example 2: Product Details**
```javascript
const product = {
    name: "Wireless Mouse",
    price: 29.99,
    brand: "Logitech",
    rating: 4.5
};

console.log(`${product.name} by ${product.brand}`);
console.log(`Price: $${product.price}`);
console.log(`Rating: ${product.rating}/5`);
```

---

## Modifying Properties

### Add New Property

```javascript
const person = {
    name: "Alice"
};

person.age = 25;
person.city = "Boston";

console.log(person);
// { name: "Alice", age: 25, city: "Boston" }
```

### Update Existing Property

```javascript
const product = {
    name: "Laptop",
    price: 999
};

product.price = 899; // Update price

console.log(product.price); // 899
```

### Delete Property

```javascript
const person = {
    name: "Alice",
    age: 25,
    temp: "delete me"
};

delete person.temp;

console.log(person);
// { name: "Alice", age: 25 }
```

### Real-World Examples

**Example 1: Update User Profile**
```javascript
const user = {
    username: "alice",
    email: "alice@old.com",
    verified: false
};

// User updates email
user.email = "alice@new.com";

// User verifies account
user.verified = true;

// Add new property
user.lastLogin = "2024-03-14";

console.log(user);
```

**Example 2: Shopping Cart**
```javascript
const cart = {
    items: [],
    total: 0
};

// Add item
cart.items.push({ name: "Laptop", price: 999 });
cart.total += 999;

// Add another item
cart.items.push({ name: "Mouse", price: 25 });
cart.total += 25;

console.log(`Total: $${cart.total}`);
console.log(`Items: ${cart.items.length}`);
```

---

## Object Methods

### What are Methods?

Methods are **functions inside objects** - they define what the object can do.

### Creating Methods

```javascript
const person = {
    name: "Alice",
    age: 25,
    
    greet: function() {
        console.log("Hello!");
    },
    
    // Shorthand (ES6)
    introduce() {
        console.log(`My name is ${this.name}`);
    }
};

person.greet();      // Hello!
person.introduce();  // My name is Alice
```

### Real-World Examples

**Example 1: Calculator**
```javascript
const calculator = {
    add: function(a, b) {
        return a + b;
    },
    
    subtract: function(a, b) {
        return a - b;
    },
    
    multiply: function(a, b) {
        return a * b;
    },
    
    divide: function(a, b) {
        if (b === 0) return "Cannot divide by zero";
        return a / b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 7)); // 28
console.log(calculator.divide(10, 2));  // 5
```

**Example 2: Bank Account**
```javascript
const account = {
    balance: 1000,
    
    deposit(amount) {
        this.balance += amount;
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    },
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds");
            return;
        }
        this.balance -= amount;
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    },
    
    checkBalance() {
        console.log(`Current balance: $${this.balance}`);
    }
};

account.deposit(500);      // Deposited $500. New balance: $1500
account.withdraw(200);     // Withdrew $200. New balance: $1300
account.checkBalance();    // Current balance: $1300
```

**Example 3: Todo List**
```javascript
const todoList = {
    tasks: [],
    
    addTask(task) {
        this.tasks.push({ text: task, completed: false });
        console.log(`Added: ${task}`);
    },
    
    completeTask(index) {
        if (this.tasks[index]) {
            this.tasks[index].completed = true;
            console.log(`Completed: ${this.tasks[index].text}`);
        }
    },
    
    showTasks() {
        console.log("=== Todo List ===");
        this.tasks.forEach((task, i) => {
            const status = task.completed ? "✓" : "○";
            console.log(`${i + 1}. ${status} ${task.text}`);
        });
    }
};

todoList.addTask("Learn JavaScript");
todoList.addTask("Build a project");
todoList.completeTask(0);
todoList.showTasks();
```

---

## The `this` Keyword

### What is `this`?

Inside an object method, `this` refers to the object itself.

```javascript
const person = {
    name: "Alice",
    age: 25,
    
    introduce() {
        console.log(`I am ${this.name} and I'm ${this.age} years old`);
    }
};

person.introduce(); // I am Alice and I'm 25 years old
```

### Real-World Examples

**Example 1: User Profile**
```javascript
const user = {
    firstName: "John",
    lastName: "Doe",
    
    getFullName() {
        return `${this.firstName} ${this.lastName}`;
    },
    
    updateName(first, last) {
        this.firstName = first;
        this.lastName = last;
        console.log(`Name updated to: ${this.getFullName()}`);
    }
};

console.log(user.getFullName()); // John Doe
user.updateName("Jane", "Smith"); // Name updated to: Jane Smith
```

**Example 2: Product with Discount**
```javascript
const product = {
    name: "Laptop",
    price: 1000,
    discountPercent: 0,
    
    applyDiscount(percent) {
        this.discountPercent = percent;
        console.log(`${percent}% discount applied`);
    },
    
    getFinalPrice() {
        const discount = this.price * (this.discountPercent / 100);
        return this.price - discount;
    },
    
    displayPrice() {
        console.log(`${this.name}: $${this.getFinalPrice()}`);
    }
};

product.applyDiscount(20);
product.displayPrice(); // Laptop: $800
```

---

## Nested Objects

### Objects Inside Objects

```javascript
const person = {
    name: "Alice",
    age: 25,
    address: {
        street: "123 Main St",
        city: "Boston",
        state: "MA",
        zip: "02101"
    }
};

console.log(person.address.city);   // "Boston"
console.log(person.address.street); // "123 Main St"
```

### Real-World Examples

**Example 1: User with Contact Info**
```javascript
const user = {
    id: 1,
    name: "John Doe",
    contact: {
        email: "john@example.com",
        phone: "555-1234",
        social: {
            twitter: "@johndoe",
            linkedin: "johndoe"
        }
    },
    preferences: {
        theme: "dark",
        notifications: true,
        language: "en"
    }
};

console.log(user.contact.email);              // john@example.com
console.log(user.contact.social.twitter);     // @johndoe
console.log(user.preferences.theme);          // dark
```

**Example 2: Product with Details**
```javascript
const product = {
    id: 101,
    name: "Laptop",
    specs: {
        processor: "Intel i7",
        ram: "16GB",
        storage: "512GB SSD",
        display: {
            size: "15.6 inch",
            resolution: "1920x1080",
            type: "IPS"
        }
    },
    pricing: {
        cost: 800,
        retail: 1200,
        discount: 10
    }
};

console.log(product.specs.processor);         // Intel i7
console.log(product.specs.display.size);      // 15.6 inch
console.log(product.pricing.retail);          // 1200
```

### Optional Chaining

**Safely access nested properties:**

```javascript
const user = {
    name: "Alice"
    // No address property
};

// ❌ Without optional chaining - ERROR!
// console.log(user.address.city);

// ✅ With optional chaining - safe
console.log(user.address?.city); // undefined (no error)
```

---

## Object Iteration

### For...In Loop

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

for (const key in person) {
    console.log(`${key}: ${person[key]}`);
}
// name: Alice
// age: 25
// city: Boston
```

### Object.keys()

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

const keys = Object.keys(person);
console.log(keys); // ["name", "age", "city"]

keys.forEach(key => {
    console.log(`${key}: ${person[key]}`);
});
```

### Object.values()

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

const values = Object.values(person);
console.log(values); // ["Alice", 25, "Boston"]
```

### Object.entries()

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

const entries = Object.entries(person);
console.log(entries);
// [["name", "Alice"], ["age", 25], ["city", "Boston"]]

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});
```

### Real-World Example

```javascript
const scores = {
    math: 90,
    english: 85,
    science: 92,
    history: 88
};

// Calculate average
const values = Object.values(scores);
const average = values.reduce((sum, score) => sum + score, 0) / values.length;

console.log(`Average score: ${average}`); // 88.75

// Display all scores
Object.entries(scores).forEach(([subject, score]) => {
    console.log(`${subject}: ${score}`);
});
```

---

## Object Destructuring

### Basic Destructuring

```javascript
const person = {
    name: "Alice",
    age: 25,
    city: "Boston"
};

const { name, age, city } = person;

console.log(name); // "Alice"
console.log(age);  // 25
console.log(city); // "Boston"
```

### Rename Variables

```javascript
const person = {
    name: "Alice",
    age: 25
};

const { name: userName, age: userAge } = person;

console.log(userName); // "Alice"
console.log(userAge);  // 25
```

### Default Values

```javascript
const person = {
    name: "Alice"
    // No age property
};

const { name, age = 18 } = person;

console.log(name); // "Alice"
console.log(age);  // 18 (default)
```

### Nested Destructuring

```javascript
const user = {
    name: "Alice",
    address: {
        city: "Boston",
        state: "MA"
    }
};

const { name, address: { city, state } } = user;

console.log(name);  // "Alice"
console.log(city);  // "Boston"
console.log(state); // "MA"
```

### Real-World Examples

**Example 1: Function Parameters**
```javascript
function displayUser({ name, email, age }) {
    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Age: ${age}`);
}

const user = {
    name: "Alice",
    email: "alice@example.com",
    age: 25
};

displayUser(user);
```

**Example 2: API Response**
```javascript
const response = {
    status: 200,
    data: {
        user: {
            id: 1,
            name: "Alice",
            email: "alice@example.com"
        }
    }
};

const { status, data: { user: { name, email } } } = response;

console.log(status); // 200
console.log(name);   // "Alice"
console.log(email);  // "alice@example.com"
```

---

## Common Patterns

### Check if Property Exists

```javascript
const person = {
    name: "Alice",
    age: 25
};

// Method 1: in operator
console.log("name" in person);  // true
console.log("email" in person); // false

// Method 2: hasOwnProperty
console.log(person.hasOwnProperty("name"));  // true
console.log(person.hasOwnProperty("email")); // false

// Method 3: Check undefined
console.log(person.name !== undefined);  // true
console.log(person.email !== undefined); // false
```

### Merge Objects

```javascript
const defaults = {
    theme: "light",
    notifications: true,
    language: "en"
};

const userPrefs = {
    theme: "dark",
    fontSize: 14
};

const settings = { ...defaults, ...userPrefs };

console.log(settings);
// {
//   theme: "dark",
//   notifications: true,
//   language: "en",
//   fontSize: 14
// }
```

### Clone Object

```javascript
const original = {
    name: "Alice",
    age: 25
};

// Shallow copy
const copy = { ...original };

// Deep copy (for nested objects)
const deepCopy = JSON.parse(JSON.stringify(original));
```

### Convert Array to Object

```javascript
const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
    { id: 3, name: "Charlie" }
];

const usersById = users.reduce((obj, user) => {
    obj[user.id] = user;
    return obj;
}, {});

console.log(usersById);
// {
//   1: { id: 1, name: "Alice" },
//   2: { id: 2, name: "Bob" },
//   3: { id: 3, name: "Charlie" }
// }
```

---

## Best Practices

### 1. Use Const for Objects

```javascript
// ✅ Good
const person = { name: "Alice" };
person.age = 25; // OK - modifying properties

// ❌ Bad
let person = { name: "Alice" };
person = { name: "Bob" }; // Reassigning
```

### 2. Use Dot Notation When Possible

```javascript
// ✅ Good
person.name

// ❌ Less readable
person["name"]
```

### 3. Group Related Data

```javascript
// ❌ Bad
const userFirstName = "Alice";
const userLastName = "Smith";
const userAge = 25;
const userEmail = "alice@example.com";

// ✅ Good
const user = {
    firstName: "Alice",
    lastName: "Smith",
    age: 25,
    email: "alice@example.com"
};
```

### 4. Use Methods for Actions

```javascript
// ✅ Good
const user = {
    name: "Alice",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};

user.greet();
```

---

## Common Mistakes

### Mistake 1: Forgetting `this`

```javascript
// ❌ Wrong
const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, I'm ${name}`); // ReferenceError!
    }
};

// ✅ Correct
const person = {
    name: "Alice",
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
};
```

### Mistake 2: Comparing Objects Directly

```javascript
// ❌ Wrong
const obj1 = { name: "Alice" };
const obj2 = { name: "Alice" };
console.log(obj1 === obj2); // false!

// ✅ Correct - compare properties
console.log(obj1.name === obj2.name); // true
```

### Mistake 3: Modifying Object in Function

```javascript
// ❌ Unexpected mutation
function updateAge(person) {
    person.age = 30; // Modifies original!
}

const user = { name: "Alice", age: 25 };
updateAge(user);
console.log(user.age); // 30 (changed!)

// ✅ Return new object
function updateAge(person, newAge) {
    return { ...person, age: newAge };
}

const user = { name: "Alice", age: 25 };
const updated = updateAge(user, 30);
console.log(user.age);    // 25 (unchanged)
console.log(updated.age); // 30 (new object)
```

---

## Practice Exercises

### Exercise 1: Create User Object
```javascript
// Create an object representing a user with:
// - username, email, age, isActive

// Your code here:
```

### Exercise 2: Add Method
```javascript
// Add a method to calculate area
const rectangle = {
    width: 10,
    height: 5
    // Add calculateArea method
};

// Your code here:
```

### Exercise 3: Nested Object
```javascript
// Create a student object with nested grades object
// Calculate average grade

// Your code here:
```

### Exercise 4: Object from Arrays
```javascript
// Convert two arrays into an object
const keys = ["name", "age", "city"];
const values = ["Alice", 25, "Boston"];

// Result should be: { name: "Alice", age: 25, city: "Boston" }

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Objects** store related data as key-value pairs
2. **Dot notation** for simple property access
3. **Bracket notation** for dynamic access
4. **Methods** are functions inside objects
5. **`this`** refers to the object itself
6. **Nested objects** for complex data
7. **Destructuring** for cleaner code
8. Objects are **reference types**

### What's Next?

Now that you understand objects, you're ready to learn about **strings** - how to work with and manipulate text!

---

## Quick Reference

```javascript
// Create
const obj = { key: value };

// Access
obj.key
obj["key"]

// Modify
obj.key = newValue
obj.newKey = value
delete obj.key

// Methods
obj.method() { }

// this keyword
this.property

// Check property
"key" in obj
obj.hasOwnProperty("key")

// Iteration
for (const key in obj) { }
Object.keys(obj)
Object.values(obj)
Object.entries(obj)

// Destructuring
const { key1, key2 } = obj;

// Merge
const merged = { ...obj1, ...obj2 };

// Clone
const copy = { ...obj };
```

**Congratulations!** You've completed Lesson 7. Practice working with objects!
