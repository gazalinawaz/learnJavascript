# Lesson 12: Object-Oriented Programming (OOP) - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Classes](#classes)
3. [Constructors](#constructors)
4. [Methods](#methods)
5. [Getters and Setters](#getters-and-setters)
6. [Static Members](#static-members)
7. [Inheritance](#inheritance)
8. [Encapsulation](#encapsulation)
9. [Polymorphism](#polymorphism)
10. [Best Practices](#best-practices)
11. [Common Mistakes](#common-mistakes)
12. [Practice Exercises](#practice-exercises)

---

## Introduction

### What is OOP?

**Object-Oriented Programming** is a way to organize code using **objects** that contain both data (properties) and behavior (methods).

### Real-World Analogy

Think of a **Car**:
- **Properties**: color, brand, model, speed
- **Methods**: start(), stop(), accelerate(), brake()

Each car is an **object** created from a **Car class** (blueprint).

### Why Use OOP?

**Benefits:**
- **Organization** - Group related code together
- **Reusability** - Create multiple objects from one class
- **Maintainability** - Easier to update and fix
- **Scalability** - Build larger applications

---

## Classes

### What is a Class?

A **class** is a blueprint for creating objects.

### Basic Syntax

```javascript
class ClassName {
    // Properties and methods
}
```

### Simple Example

```javascript
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        console.log(`Hello, I'm ${this.name}`);
    }
}

// Create objects
const person1 = new Person("Alice", 25);
const person2 = new Person("Bob", 30);

person1.greet(); // Hello, I'm Alice
person2.greet(); // Hello, I'm Bob
```

### Real-World Examples

**Example 1: Book Class**
```javascript
class Book {
    constructor(title, author, pages) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.currentPage = 0;
    }
    
    read(pages) {
        this.currentPage += pages;
        if (this.currentPage > this.pages) {
            this.currentPage = this.pages;
        }
        console.log(`Reading... Page ${this.currentPage} of ${this.pages}`);
    }
    
    getProgress() {
        const percent = (this.currentPage / this.pages * 100).toFixed(1);
        return `${percent}% complete`;
    }
}

const book = new Book("JavaScript Guide", "John Doe", 300);
book.read(50);  // Reading... Page 50 of 300
console.log(book.getProgress()); // 16.7% complete
```

**Example 2: BankAccount Class**
```javascript
class BankAccount {
    constructor(accountNumber, balance = 0) {
        this.accountNumber = accountNumber;
        this.balance = balance;
        this.transactions = [];
    }
    
    deposit(amount) {
        this.balance += amount;
        this.transactions.push({ type: 'deposit', amount, date: new Date() });
        console.log(`Deposited $${amount}. New balance: $${this.balance}`);
    }
    
    withdraw(amount) {
        if (amount > this.balance) {
            console.log("Insufficient funds!");
            return;
        }
        this.balance -= amount;
        this.transactions.push({ type: 'withdraw', amount, date: new Date() });
        console.log(`Withdrew $${amount}. New balance: $${this.balance}`);
    }
    
    getStatement() {
        console.log(`Account: ${this.accountNumber}`);
        console.log(`Balance: $${this.balance}`);
        console.log(`Transactions: ${this.transactions.length}`);
    }
}

const account = new BankAccount("123456", 1000);
account.deposit(500);
account.withdraw(200);
account.getStatement();
```

---

## Constructors

### What is a Constructor?

The **constructor** is a special method that runs when creating a new object. It initializes the object's properties.

### Basic Syntax

```javascript
class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }
}
```

### Real-World Examples

**Example 1: User Class**
```javascript
class User {
    constructor(username, email) {
        this.username = username;
        this.email = email;
        this.createdAt = new Date();
        this.isActive = true;
    }
    
    deactivate() {
        this.isActive = false;
        console.log(`User ${this.username} deactivated`);
    }
}

const user = new User("alice", "alice@example.com");
console.log(user.createdAt);
```

**Example 2: Product Class with Validation**
```javascript
class Product {
    constructor(name, price, quantity) {
        if (price < 0) {
            throw new Error("Price cannot be negative");
        }
        
        this.name = name;
        this.price = price;
        this.quantity = quantity;
        this.id = Math.random().toString(36).substr(2, 9);
    }
    
    getTotalValue() {
        return this.price * this.quantity;
    }
}

const product = new Product("Laptop", 999, 5);
console.log(`Total value: $${product.getTotalValue()}`);
```

---

## Methods

### Instance Methods

Methods that belong to each object instance.

```javascript
class Calculator {
    constructor() {
        this.result = 0;
    }
    
    add(num) {
        this.result += num;
        return this;
    }
    
    subtract(num) {
        this.result -= num;
        return this;
    }
    
    multiply(num) {
        this.result *= num;
        return this;
    }
    
    getResult() {
        return this.result;
    }
    
    reset() {
        this.result = 0;
        return this;
    }
}

const calc = new Calculator();
calc.add(10).multiply(2).subtract(5);
console.log(calc.getResult()); // 15
```

### Real-World Examples

**Example 1: TodoList Class**
```javascript
class TodoList {
    constructor() {
        this.tasks = [];
    }
    
    addTask(task) {
        this.tasks.push({
            id: Date.now(),
            text: task,
            completed: false
        });
        console.log(`Added: ${task}`);
    }
    
    completeTask(id) {
        const task = this.tasks.find(t => t.id === id);
        if (task) {
            task.completed = true;
            console.log(`Completed: ${task.text}`);
        }
    }
    
    removeTask(id) {
        this.tasks = this.tasks.filter(t => t.id !== id);
        console.log("Task removed");
    }
    
    showTasks() {
        console.log("=== Todo List ===");
        this.tasks.forEach(task => {
            const status = task.completed ? "✓" : "○";
            console.log(`${status} ${task.text}`);
        });
    }
}

const todos = new TodoList();
todos.addTask("Learn JavaScript");
todos.addTask("Build a project");
todos.showTasks();
```

---

## Getters and Setters

### What are Getters and Setters?

**Getters** and **setters** are special methods that get or set property values with validation or computation.

### Basic Syntax

```javascript
class MyClass {
    get propertyName() {
        return this._property;
    }
    
    set propertyName(value) {
        this._property = value;
    }
}
```

### Real-World Examples

**Example 1: Temperature Class**
```javascript
class Temperature {
    constructor(celsius) {
        this._celsius = celsius;
    }
    
    get celsius() {
        return this._celsius;
    }
    
    set celsius(value) {
        if (value < -273.15) {
            throw new Error("Temperature below absolute zero!");
        }
        this._celsius = value;
    }
    
    get fahrenheit() {
        return (this._celsius * 9/5) + 32;
    }
    
    set fahrenheit(value) {
        this._celsius = (value - 32) * 5/9;
    }
}

const temp = new Temperature(25);
console.log(temp.celsius);     // 25
console.log(temp.fahrenheit);  // 77

temp.fahrenheit = 86;
console.log(temp.celsius);     // 30
```

**Example 2: User with Validation**
```javascript
class User {
    constructor(username, email) {
        this._username = username;
        this._email = email;
    }
    
    get username() {
        return this._username;
    }
    
    set username(value) {
        if (value.length < 3) {
            throw new Error("Username must be at least 3 characters");
        }
        this._username = value;
    }
    
    get email() {
        return this._email;
    }
    
    set email(value) {
        if (!value.includes("@")) {
            throw new Error("Invalid email");
        }
        this._email = value;
    }
}

const user = new User("alice", "alice@example.com");
user.username = "alice123"; // OK
// user.username = "ab"; // Error!
```

---

## Static Members

### What are Static Members?

**Static** methods and properties belong to the class itself, not to instances.

### Basic Syntax

```javascript
class MyClass {
    static staticMethod() {
        // Called on class, not instance
    }
    
    static staticProperty = "value";
}

MyClass.staticMethod(); // Call on class
```

### Real-World Examples

**Example 1: Math Utilities**
```javascript
class MathUtils {
    static PI = 3.14159;
    
    static square(num) {
        return num * num;
    }
    
    static cube(num) {
        return num * num * num;
    }
    
    static max(...numbers) {
        return Math.max(...numbers);
    }
}

console.log(MathUtils.PI);           // 3.14159
console.log(MathUtils.square(5));    // 25
console.log(MathUtils.max(1, 5, 3)); // 5
```

**Example 2: User Factory**
```javascript
class User {
    static userCount = 0;
    
    constructor(name) {
        this.name = name;
        this.id = ++User.userCount;
    }
    
    static createAdmin(name) {
        const user = new User(name);
        user.role = "admin";
        return user;
    }
    
    static createGuest() {
        const user = new User("Guest");
        user.role = "guest";
        return user;
    }
}

const admin = User.createAdmin("Alice");
const guest = User.createGuest();
console.log(`Total users: ${User.userCount}`); // 2
```

---

## Inheritance

### What is Inheritance?

**Inheritance** allows a class to inherit properties and methods from another class.

### Basic Syntax

```javascript
class Parent {
    // Parent class
}

class Child extends Parent {
    // Child inherits from Parent
}
```

### Simple Example

```javascript
class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        console.log(`${this.name} makes a sound`);
    }
}

class Dog extends Animal {
    speak() {
        console.log(`${this.name} barks`);
    }
}

class Cat extends Animal {
    speak() {
        console.log(`${this.name} meows`);
    }
}

const dog = new Dog("Buddy");
const cat = new Cat("Whiskers");

dog.speak(); // Buddy barks
cat.speak(); // Whiskers meows
```

### Using super

**super** calls the parent class constructor or methods.

```javascript
class Vehicle {
    constructor(brand, model) {
        this.brand = brand;
        this.model = model;
    }
    
    getInfo() {
        return `${this.brand} ${this.model}`;
    }
}

class Car extends Vehicle {
    constructor(brand, model, doors) {
        super(brand, model); // Call parent constructor
        this.doors = doors;
    }
    
    getInfo() {
        return `${super.getInfo()} (${this.doors} doors)`;
    }
}

const car = new Car("Toyota", "Camry", 4);
console.log(car.getInfo()); // Toyota Camry (4 doors)
```

### Real-World Examples

**Example 1: Employee Hierarchy**
```javascript
class Employee {
    constructor(name, salary) {
        this.name = name;
        this.salary = salary;
    }
    
    getDetails() {
        return `${this.name} - $${this.salary}`;
    }
    
    work() {
        console.log(`${this.name} is working`);
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary);
        this.department = department;
        this.team = [];
    }
    
    addTeamMember(employee) {
        this.team.push(employee);
        console.log(`${employee.name} added to ${this.name}'s team`);
    }
    
    getDetails() {
        return `${super.getDetails()} - Manager of ${this.department}`;
    }
}

const emp = new Employee("Alice", 50000);
const mgr = new Manager("Bob", 80000, "Engineering");

mgr.addTeamMember(emp);
console.log(mgr.getDetails());
```

**Example 2: Shape Hierarchy**
```javascript
class Shape {
    constructor(color) {
        this.color = color;
    }
    
    describe() {
        return `A ${this.color} shape`;
    }
}

class Circle extends Shape {
    constructor(color, radius) {
        super(color);
        this.radius = radius;
    }
    
    getArea() {
        return Math.PI * this.radius ** 2;
    }
    
    describe() {
        return `${super.describe()} - Circle with radius ${this.radius}`;
    }
}

class Rectangle extends Shape {
    constructor(color, width, height) {
        super(color);
        this.width = width;
        this.height = height;
    }
    
    getArea() {
        return this.width * this.height;
    }
    
    describe() {
        return `${super.describe()} - Rectangle ${this.width}x${this.height}`;
    }
}

const circle = new Circle("red", 5);
const rect = new Rectangle("blue", 10, 5);

console.log(circle.describe());
console.log(`Area: ${circle.getArea().toFixed(2)}`);
```

---

## Encapsulation

### What is Encapsulation?

**Encapsulation** means hiding internal details and only exposing what's necessary.

### Private Fields (ES2022)

Use `#` for truly private fields.

```javascript
class BankAccount {
    #balance = 0;
    #pin;
    
    constructor(initialBalance, pin) {
        this.#balance = initialBalance;
        this.#pin = pin;
    }
    
    deposit(amount) {
        this.#balance += amount;
        console.log(`Deposited $${amount}`);
    }
    
    withdraw(amount, pin) {
        if (pin !== this.#pin) {
            console.log("Invalid PIN!");
            return;
        }
        
        if (amount > this.#balance) {
            console.log("Insufficient funds!");
            return;
        }
        
        this.#balance -= amount;
        console.log(`Withdrew $${amount}`);
    }
    
    getBalance(pin) {
        if (pin !== this.#pin) {
            console.log("Invalid PIN!");
            return;
        }
        return this.#balance;
    }
}

const account = new BankAccount(1000, "1234");
account.deposit(500);
account.withdraw(200, "1234");
console.log(account.getBalance("1234")); // 1300
// console.log(account.#balance); // Error! Private field
```

### Real-World Example

```javascript
class User {
    #password;
    
    constructor(username, password) {
        this.username = username;
        this.#password = this.#hashPassword(password);
    }
    
    #hashPassword(password) {
        // Simplified hashing
        return `hashed_${password}`;
    }
    
    login(password) {
        const hashed = this.#hashPassword(password);
        if (hashed === this.#password) {
            console.log("Login successful!");
            return true;
        }
        console.log("Invalid password!");
        return false;
    }
    
    changePassword(oldPassword, newPassword) {
        if (!this.login(oldPassword)) {
            return;
        }
        this.#password = this.#hashPassword(newPassword);
        console.log("Password changed!");
    }
}

const user = new User("alice", "secret123");
user.login("secret123");  // Login successful!
user.login("wrong");      // Invalid password!
```

---

## Polymorphism

### What is Polymorphism?

**Polymorphism** means "many forms" - same method name, different implementations.

### Example

```javascript
class Animal {
    makeSound() {
        console.log("Some generic sound");
    }
}

class Dog extends Animal {
    makeSound() {
        console.log("Woof!");
    }
}

class Cat extends Animal {
    makeSound() {
        console.log("Meow!");
    }
}

class Cow extends Animal {
    makeSound() {
        console.log("Moo!");
    }
}

const animals = [
    new Dog(),
    new Cat(),
    new Cow()
];

// Same method, different behavior
animals.forEach(animal => animal.makeSound());
// Woof!
// Meow!
// Moo!
```

### Real-World Example

```javascript
class PaymentMethod {
    processPayment(amount) {
        throw new Error("Must implement processPayment");
    }
}

class CreditCard extends PaymentMethod {
    constructor(cardNumber) {
        super();
        this.cardNumber = cardNumber;
    }
    
    processPayment(amount) {
        console.log(`Processing $${amount} via Credit Card`);
        console.log(`Card: ****${this.cardNumber.slice(-4)}`);
    }
}

class PayPal extends PaymentMethod {
    constructor(email) {
        super();
        this.email = email;
    }
    
    processPayment(amount) {
        console.log(`Processing $${amount} via PayPal`);
        console.log(`Account: ${this.email}`);
    }
}

class Bitcoin extends PaymentMethod {
    constructor(walletAddress) {
        super();
        this.walletAddress = walletAddress;
    }
    
    processPayment(amount) {
        console.log(`Processing $${amount} via Bitcoin`);
        console.log(`Wallet: ${this.walletAddress}`);
    }
}

const payments = [
    new CreditCard("1234567890123456"),
    new PayPal("user@example.com"),
    new Bitcoin("1A2B3C4D5E6F")
];

payments.forEach(payment => payment.processPayment(100));
```

---

## Best Practices

### 1. Use Classes for Related Functionality

```javascript
// ✅ Good - organized
class ShoppingCart {
    constructor() {
        this.items = [];
    }
    
    addItem(item) { }
    removeItem(id) { }
    getTotal() { }
}
```

### 2. Keep Classes Focused

```javascript
// ❌ Bad - does too much
class User {
    login() { }
    sendEmail() { }
    processPayment() { }
    generateReport() { }
}

// ✅ Good - single responsibility
class User {
    login() { }
    logout() { }
}

class EmailService {
    send() { }
}

class PaymentService {
    process() { }
}
```

### 3. Use Inheritance Wisely

```javascript
// ✅ Good - "is-a" relationship
class Animal { }
class Dog extends Animal { } // Dog IS-A Animal

// ❌ Bad - forced inheritance
class Button { }
class RedButton extends Button { } // Color isn't inheritance!
```

### 4. Prefer Composition Over Inheritance

```javascript
// ✅ Good - composition
class Engine {
    start() { }
}

class Car {
    constructor() {
        this.engine = new Engine();
    }
    
    start() {
        this.engine.start();
    }
}
```

---

## Common Mistakes

### Mistake 1: Forgetting `new` Keyword

```javascript
// ❌ Wrong
const user = User("Alice"); // undefined

// ✅ Correct
const user = new User("Alice");
```

### Mistake 2: Not Calling super()

```javascript
// ❌ Wrong
class Child extends Parent {
    constructor(name) {
        this.name = name; // Error! Must call super first
    }
}

// ✅ Correct
class Child extends Parent {
    constructor(name) {
        super();
        this.name = name;
    }
}
```

### Mistake 3: Accessing Private Fields Outside Class

```javascript
class MyClass {
    #private = "secret";
}

const obj = new MyClass();
console.log(obj.#private); // ❌ Error!
```

### Mistake 4: Confusing Static and Instance Methods

```javascript
class MyClass {
    static staticMethod() { }
    instanceMethod() { }
}

MyClass.staticMethod();        // ✅ Correct
MyClass.instanceMethod();      // ❌ Error!

const obj = new MyClass();
obj.instanceMethod();          // ✅ Correct
obj.staticMethod();            // ❌ Error!
```

---

## Practice Exercises

### Exercise 1: Create a Rectangle Class
```javascript
// Create Rectangle class with width, height
// Methods: getArea(), getPerimeter()

// Your code here:
```

### Exercise 2: Create Student Class
```javascript
// Create Student class with name, grades array
// Methods: addGrade(), getAverage()

// Your code here:
```

### Exercise 3: Inheritance
```javascript
// Create Vehicle class and Car class (extends Vehicle)
// Add appropriate properties and methods

// Your code here:
```

### Exercise 4: Shopping Cart
```javascript
// Create ShoppingCart class
// Methods: addItem(), removeItem(), getTotal()

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Classes** are blueprints for objects
2. **Constructor** initializes object properties
3. **Methods** define object behavior
4. **Getters/Setters** control property access
5. **Static** members belong to class, not instances
6. **Inheritance** creates class hierarchies
7. **Encapsulation** hides internal details
8. **Polymorphism** allows different implementations

### What's Next?

Now that you understand OOP, you're ready to learn about **Modules** - how to organize and share code across files!

---

## Quick Reference

```javascript
// Class
class MyClass {
    constructor(param) {
        this.property = param;
    }
    
    method() {
        return this.property;
    }
    
    static staticMethod() {
        return "static";
    }
}

// Inheritance
class Child extends Parent {
    constructor(param) {
        super(param);
    }
}

// Private field
class MyClass {
    #private = "secret";
    
    getPrivate() {
        return this.#private;
    }
}

// Getter/Setter
class MyClass {
    get value() {
        return this._value;
    }
    
    set value(val) {
        this._value = val;
    }
}
```

**Congratulations!** You've completed Lesson 12. Practice OOP concepts!
