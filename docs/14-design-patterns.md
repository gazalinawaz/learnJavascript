# Lesson 14: Design Patterns - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Singleton Pattern](#singleton-pattern)
3. [Factory Pattern](#factory-pattern)
4. [Observer Pattern](#observer-pattern)
5. [Module Pattern](#module-pattern)
6. [Decorator Pattern](#decorator-pattern)
7. [Strategy Pattern](#strategy-pattern)
8. [Best Practices](#best-practices)
9. [When to Use Patterns](#when-to-use-patterns)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Design Patterns?

**Design patterns** are proven solutions to common programming problems. They're like recipes - tested approaches that experienced developers use to solve recurring challenges.

### Real-World Analogy

**Building a House:**
- **Blueprint** = Design Pattern
- **Actual House** = Your Implementation

Just like architects use proven blueprints, developers use design patterns.

### Why Learn Patterns?

**Benefits:**
- Solve problems faster
- Write better code
- Communicate with other developers
- Avoid common mistakes
- Build scalable applications

---

## Singleton Pattern

### What is Singleton?

**Singleton** ensures only **one instance** of a class exists throughout your application.

### Real-World Example

**Database Connection:**
- You only want ONE connection to the database
- All parts of your app use the same connection
- Creating multiple connections wastes resources

### Implementation

```javascript
class Database {
    static #instance = null;
    
    constructor() {
        if (Database.#instance) {
            return Database.#instance;
        }
        
        this.connection = "Connected to database";
        Database.#instance = this;
    }
    
    query(sql) {
        console.log(`Executing: ${sql}`);
        return `Results for: ${sql}`;
    }
}

// Test it
const db1 = new Database();
const db2 = new Database();

console.log(db1 === db2); // true - same instance!

db1.query("SELECT * FROM users");
db2.query("SELECT * FROM products");
```

### Practical Examples

**Example 1: Configuration Manager**
```javascript
class Config {
    static #instance = null;
    
    constructor() {
        if (Config.#instance) {
            return Config.#instance;
        }
        
        this.settings = {
            apiUrl: "https://api.example.com",
            timeout: 5000,
            debug: false
        };
        
        Config.#instance = this;
    }
    
    get(key) {
        return this.settings[key];
    }
    
    set(key, value) {
        this.settings[key] = value;
    }
}

const config1 = new Config();
const config2 = new Config();

config1.set("debug", true);
console.log(config2.get("debug")); // true - same instance!
```

**Example 2: Logger**
```javascript
class Logger {
    static #instance = null;
    
    constructor() {
        if (Logger.#instance) {
            return Logger.#instance;
        }
        
        this.logs = [];
        Logger.#instance = this;
    }
    
    log(message) {
        const entry = {
            message,
            timestamp: new Date(),
            level: 'info'
        };
        this.logs.push(entry);
        console.log(`[INFO] ${message}`);
    }
    
    error(message) {
        const entry = {
            message,
            timestamp: new Date(),
            level: 'error'
        };
        this.logs.push(entry);
        console.error(`[ERROR] ${message}`);
    }
    
    getLogs() {
        return this.logs;
    }
}

const logger1 = new Logger();
const logger2 = new Logger();

logger1.log("App started");
logger2.error("Something went wrong");

console.log(logger1.getLogs().length); // 2 - shared logs!
```

---

## Factory Pattern

### What is Factory?

**Factory** creates objects without specifying their exact class. It's like ordering from a menu - you say what you want, the kitchen decides how to make it.

### Real-World Example

**Vehicle Factory:**
- You say "I want a car"
- Factory creates the right type of car
- You don't need to know how it's built

### Implementation

```javascript
class Car {
    constructor(model) {
        this.type = "Car";
        this.model = model;
        this.wheels = 4;
    }
    
    drive() {
        return `Driving ${this.model} car`;
    }
}

class Motorcycle {
    constructor(model) {
        this.type = "Motorcycle";
        this.model = model;
        this.wheels = 2;
    }
    
    drive() {
        return `Riding ${this.model} motorcycle`;
    }
}

class Truck {
    constructor(model) {
        this.type = "Truck";
        this.model = model;
        this.wheels = 6;
    }
    
    drive() {
        return `Driving ${this.model} truck`;
    }
}

// Factory
class VehicleFactory {
    static createVehicle(type, model) {
        switch(type) {
            case 'car':
                return new Car(model);
            case 'motorcycle':
                return new Motorcycle(model);
            case 'truck':
                return new Truck(model);
            default:
                throw new Error(`Unknown vehicle type: ${type}`);
        }
    }
}

// Usage
const car = VehicleFactory.createVehicle('car', 'Toyota');
const bike = VehicleFactory.createVehicle('motorcycle', 'Harley');
const truck = VehicleFactory.createVehicle('truck', 'Ford');

console.log(car.drive());   // Driving Toyota car
console.log(bike.drive());  // Riding Harley motorcycle
console.log(truck.drive()); // Driving Ford truck
```

### Practical Examples

**Example 1: User Factory**
```javascript
class AdminUser {
    constructor(name) {
        this.name = name;
        this.role = 'admin';
        this.permissions = ['read', 'write', 'delete'];
    }
}

class RegularUser {
    constructor(name) {
        this.name = name;
        this.role = 'user';
        this.permissions = ['read'];
    }
}

class GuestUser {
    constructor(name) {
        this.name = name;
        this.role = 'guest';
        this.permissions = [];
    }
}

class UserFactory {
    static createUser(type, name) {
        switch(type) {
            case 'admin':
                return new AdminUser(name);
            case 'user':
                return new RegularUser(name);
            case 'guest':
                return new GuestUser(name);
            default:
                return new GuestUser(name);
        }
    }
}

const admin = UserFactory.createUser('admin', 'Alice');
const user = UserFactory.createUser('user', 'Bob');

console.log(admin.permissions); // ['read', 'write', 'delete']
console.log(user.permissions);  // ['read']
```

**Example 2: Notification Factory**
```javascript
class EmailNotification {
    send(message) {
        console.log(`📧 Email: ${message}`);
    }
}

class SMSNotification {
    send(message) {
        console.log(`📱 SMS: ${message}`);
    }
}

class PushNotification {
    send(message) {
        console.log(`🔔 Push: ${message}`);
    }
}

class NotificationFactory {
    static create(type) {
        switch(type) {
            case 'email':
                return new EmailNotification();
            case 'sms':
                return new SMSNotification();
            case 'push':
                return new PushNotification();
            default:
                return new EmailNotification();
        }
    }
}

const email = NotificationFactory.create('email');
const sms = NotificationFactory.create('sms');

email.send("Welcome!");
sms.send("Your code is 1234");
```

---

## Observer Pattern

### What is Observer?

**Observer** lets objects subscribe to events and get notified when something happens. Like subscribing to a YouTube channel - you get notified of new videos.

### Real-World Example

**Newsletter:**
- People subscribe to your newsletter
- When you publish, all subscribers get notified
- People can unsubscribe anytime

### Implementation

```javascript
class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
        console.log(`Observer subscribed. Total: ${this.observers.length}`);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
        console.log(`Observer unsubscribed. Total: ${this.observers.length}`);
    }
    
    notify(data) {
        console.log(`Notifying ${this.observers.length} observers...`);
        this.observers.forEach(observer => observer.update(data));
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(data) {
        console.log(`${this.name} received: ${data}`);
    }
}

// Usage
const subject = new Subject();

const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");
const observer3 = new Observer("Observer 3");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.subscribe(observer3);

subject.notify("Hello everyone!");
// Observer 1 received: Hello everyone!
// Observer 2 received: Hello everyone!
// Observer 3 received: Hello everyone!

subject.unsubscribe(observer2);
subject.notify("Update!");
// Observer 1 received: Update!
// Observer 3 received: Update!
```

### Practical Examples

**Example 1: Stock Price Tracker**
```javascript
class Stock {
    constructor(symbol, price) {
        this.symbol = symbol;
        this.price = price;
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    setPrice(newPrice) {
        console.log(`${this.symbol}: $${this.price} → $${newPrice}`);
        this.price = newPrice;
        this.notify();
    }
    
    notify() {
        this.observers.forEach(observer => {
            observer.update(this.symbol, this.price);
        });
    }
}

class Investor {
    constructor(name) {
        this.name = name;
    }
    
    update(symbol, price) {
        console.log(`${this.name} notified: ${symbol} is now $${price}`);
    }
}

const apple = new Stock("AAPL", 150);

const investor1 = new Investor("Alice");
const investor2 = new Investor("Bob");

apple.subscribe(investor1);
apple.subscribe(investor2);

apple.setPrice(155);
// Alice notified: AAPL is now $155
// Bob notified: AAPL is now $155
```

**Example 2: Event System**
```javascript
class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(event, callback) {
        if (!this.events[event]) {
            this.events[event] = [];
        }
        this.events[event].push(callback);
    }
    
    off(event, callback) {
        if (this.events[event]) {
            this.events[event] = this.events[event].filter(cb => cb !== callback);
        }
    }
    
    emit(event, data) {
        if (this.events[event]) {
            this.events[event].forEach(callback => callback(data));
        }
    }
}

const emitter = new EventEmitter();

function onUserLogin(user) {
    console.log(`Welcome ${user}!`);
}

function logActivity(user) {
    console.log(`Activity logged for ${user}`);
}

emitter.on('login', onUserLogin);
emitter.on('login', logActivity);

emitter.emit('login', 'Alice');
// Welcome Alice!
// Activity logged for Alice
```

---

## Module Pattern

### What is Module?

**Module** pattern creates private and public members, encapsulating functionality.

### Implementation

```javascript
const Calculator = (function() {
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
        
        divide(n) {
            if (n === 0) {
                console.log("Cannot divide by zero");
                return this;
            }
            result /= n;
            log("Divided by", n);
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

// Usage
Calculator
    .add(10)
    .multiply(2)
    .subtract(5)
    .divide(3);

console.log(Calculator.getResult()); // 5
```

### Practical Example

```javascript
const ShoppingCart = (function() {
    // Private
    let items = [];
    let total = 0;
    
    function calculateTotal() {
        total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
    }
    
    // Public
    return {
        addItem(name, price, quantity = 1) {
            items.push({ name, price, quantity });
            calculateTotal();
            console.log(`Added ${name} x${quantity}`);
        },
        
        removeItem(name) {
            items = items.filter(item => item.name !== name);
            calculateTotal();
            console.log(`Removed ${name}`);
        },
        
        getItems() {
            return [...items]; // Return copy
        },
        
        getTotal() {
            return total;
        },
        
        clear() {
            items = [];
            total = 0;
            console.log("Cart cleared");
        }
    };
})();

ShoppingCart.addItem("Laptop", 999, 1);
ShoppingCart.addItem("Mouse", 25, 2);
console.log(`Total: $${ShoppingCart.getTotal()}`); // $1049
```

---

## Decorator Pattern

### What is Decorator?

**Decorator** adds new functionality to objects without modifying their structure.

### Implementation

```javascript
class Coffee {
    cost() {
        return 5;
    }
    
    description() {
        return "Simple coffee";
    }
}

class MilkDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 2;
    }
    
    description() {
        return this.coffee.description() + ", milk";
    }
}

class SugarDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 1;
    }
    
    description() {
        return this.coffee.description() + ", sugar";
    }
}

class WhipDecorator {
    constructor(coffee) {
        this.coffee = coffee;
    }
    
    cost() {
        return this.coffee.cost() + 3;
    }
    
    description() {
        return this.coffee.description() + ", whipped cream";
    }
}

// Usage
let myCoffee = new Coffee();
console.log(myCoffee.description()); // Simple coffee
console.log(`$${myCoffee.cost()}`);  // $5

myCoffee = new MilkDecorator(myCoffee);
console.log(myCoffee.description()); // Simple coffee, milk
console.log(`$${myCoffee.cost()}`);  // $7

myCoffee = new SugarDecorator(myCoffee);
myCoffee = new WhipDecorator(myCoffee);
console.log(myCoffee.description()); // Simple coffee, milk, sugar, whipped cream
console.log(`$${myCoffee.cost()}`);  // $11
```

---

## Strategy Pattern

### What is Strategy?

**Strategy** defines a family of algorithms and makes them interchangeable.

### Implementation

```javascript
// Strategies
class CreditCardPayment {
    pay(amount) {
        console.log(`Paid $${amount} with Credit Card`);
    }
}

class PayPalPayment {
    pay(amount) {
        console.log(`Paid $${amount} with PayPal`);
    }
}

class BitcoinPayment {
    pay(amount) {
        console.log(`Paid $${amount} with Bitcoin`);
    }
}

// Context
class ShoppingCart {
    constructor() {
        this.amount = 0;
        this.paymentStrategy = null;
    }
    
    setAmount(amount) {
        this.amount = amount;
    }
    
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }
    
    checkout() {
        if (!this.paymentStrategy) {
            console.log("Please select a payment method");
            return;
        }
        this.paymentStrategy.pay(this.amount);
    }
}

// Usage
const cart = new ShoppingCart();
cart.setAmount(100);

cart.setPaymentStrategy(new CreditCardPayment());
cart.checkout(); // Paid $100 with Credit Card

cart.setPaymentStrategy(new PayPalPayment());
cart.checkout(); // Paid $100 with PayPal

cart.setPaymentStrategy(new BitcoinPayment());
cart.checkout(); // Paid $100 with Bitcoin
```

### Practical Example

```javascript
// Sorting strategies
class BubbleSort {
    sort(arr) {
        console.log("Using Bubble Sort");
        // Simplified implementation
        return [...arr].sort((a, b) => a - b);
    }
}

class QuickSort {
    sort(arr) {
        console.log("Using Quick Sort");
        // Simplified implementation
        return [...arr].sort((a, b) => a - b);
    }
}

class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }
    
    setStrategy(strategy) {
        this.strategy = strategy;
    }
    
    sort(arr) {
        return this.strategy.sort(arr);
    }
}

const numbers = [5, 2, 8, 1, 9];

const sorter = new Sorter(new BubbleSort());
console.log(sorter.sort(numbers));

sorter.setStrategy(new QuickSort());
console.log(sorter.sort(numbers));
```

---

## Best Practices

### 1. Don't Overuse Patterns

```javascript
// ❌ Bad - unnecessary pattern
class SimpleAdder {
    static #instance = null;
    
    constructor() {
        if (SimpleAdder.#instance) {
            return SimpleAdder.#instance;
        }
        SimpleAdder.#instance = this;
    }
    
    add(a, b) {
        return a + b;
    }
}

// ✅ Good - simple function
function add(a, b) {
    return a + b;
}
```

### 2. Use Patterns to Solve Problems

```javascript
// ✅ Good - pattern solves real problem
class ConfigManager {
    static #instance = null;
    
    constructor() {
        if (ConfigManager.#instance) {
            return ConfigManager.#instance;
        }
        // Load config once
        this.config = this.loadConfig();
        ConfigManager.#instance = this;
    }
    
    loadConfig() {
        // Expensive operation
        return { /* config */ };
    }
}
```

### 3. Keep It Simple

```javascript
// ✅ Good - clear and simple
class UserFactory {
    static create(type, name) {
        if (type === 'admin') {
            return new AdminUser(name);
        }
        return new RegularUser(name);
    }
}
```

---

## When to Use Patterns

### Singleton
- Database connections
- Configuration managers
- Loggers
- Cache managers

### Factory
- Creating different types of objects
- Complex object creation
- Hiding implementation details

### Observer
- Event systems
- Data binding
- Pub/sub systems
- Real-time updates

### Module
- Encapsulation
- Private data
- Organizing code

### Decorator
- Adding features dynamically
- Extending functionality
- Avoiding subclass explosion

### Strategy
- Multiple algorithms
- Runtime algorithm selection
- Replacing conditionals

---

## Practice Exercises

### Exercise 1: Implement Singleton
```javascript
// Create a Singleton class for managing app state

// Your code here:
```

### Exercise 2: Create Factory
```javascript
// Create a factory for creating different shapes

// Your code here:
```

### Exercise 3: Build Observer
```javascript
// Create an observer pattern for a chat system

// Your code here:
```

### Exercise 4: Use Strategy
```javascript
// Create strategies for different shipping methods

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Design patterns** solve common problems
2. **Singleton** - one instance only
3. **Factory** - create objects without specifying class
4. **Observer** - subscribe to events
5. **Module** - private and public members
6. **Decorator** - add functionality dynamically
7. **Strategy** - interchangeable algorithms
8. Use patterns **when they solve real problems**

### What's Next?

Now that you understand design patterns, you're ready to learn about **Functional Programming** - a different way of thinking about code!

---

## Quick Reference

```javascript
// Singleton
class Singleton {
    static #instance = null;
    constructor() {
        if (Singleton.#instance) {
            return Singleton.#instance;
        }
        Singleton.#instance = this;
    }
}

// Factory
class Factory {
    static create(type) {
        switch(type) {
            case 'a': return new A();
            case 'b': return new B();
        }
    }
}

// Observer
class Subject {
    constructor() {
        this.observers = [];
    }
    subscribe(obs) {
        this.observers.push(obs);
    }
    notify(data) {
        this.observers.forEach(obs => obs.update(data));
    }
}

// Strategy
class Context {
    constructor(strategy) {
        this.strategy = strategy;
    }
    execute() {
        this.strategy.doSomething();
    }
}
```

**Congratulations!** You've completed Lesson 14. Practice these patterns!
