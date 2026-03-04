// ============================================
// LESSON 12: OBJECT-ORIENTED PROGRAMMING
// ============================================

// CLASSES - ES6 Syntax
// ============================================

class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }
    
    greet() {
        return `Hello, I'm ${this.name}`;
    }
    
    haveBirthday() {
        this.age++;
        return `Happy birthday! Now ${this.age} years old`;
    }
}

const person1 = new Person("Alice", 25);
console.log(person1.greet());
console.log(person1.haveBirthday());

// CLASS PROPERTIES
// ============================================

class Rectangle {
    constructor(width, height) {
        this.width = width;
        this.height = height;
    }
    
    get area() {
        return this.width * this.height;
    }
    
    get perimeter() {
        return 2 * (this.width + this.height);
    }
    
    set dimensions({width, height}) {
        this.width = width;
        this.height = height;
    }
}

const rect = new Rectangle(10, 5);
console.log(rect.area);      // 50 (getter)
console.log(rect.perimeter); // 30 (getter)

rect.dimensions = {width: 20, height: 10}; // setter
console.log(rect.area); // 200

// STATIC METHODS
// ============================================

class MathUtils {
    static add(a, b) {
        return a + b;
    }
    
    static multiply(a, b) {
        return a * b;
    }
    
    static PI = 3.14159;
}

// Call without creating instance
console.log(MathUtils.add(5, 3));      // 8
console.log(MathUtils.multiply(4, 2)); // 8
console.log(MathUtils.PI);             // 3.14159

// INHERITANCE
// ============================================

class Animal {
    constructor(name) {
        this.name = name;
    }
    
    speak() {
        return `${this.name} makes a sound`;
    }
    
    move() {
        return `${this.name} is moving`;
    }
}

class Dog extends Animal {
    constructor(name, breed) {
        super(name); // Call parent constructor
        this.breed = breed;
    }
    
    speak() {
        return `${this.name} barks`;
    }
    
    fetch() {
        return `${this.name} is fetching`;
    }
}

const dog = new Dog("Buddy", "Golden Retriever");
console.log(dog.speak());  // "Buddy barks" (overridden)
console.log(dog.move());   // "Buddy is moving" (inherited)
console.log(dog.fetch());  // "Buddy is fetching" (new method)

// SUPER KEYWORD
// ============================================

class Cat extends Animal {
    constructor(name, color) {
        super(name);
        this.color = color;
    }
    
    speak() {
        const parentSpeak = super.speak();
        return `${parentSpeak}, specifically meows`;
    }
}

const cat = new Cat("Whiskers", "orange");
console.log(cat.speak()); // "Whiskers makes a sound, specifically meows"

// PRIVATE FIELDS (ES2022)
// ============================================

class BankAccount {
    #balance = 0; // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    deposit(amount) {
        if (amount > 0) {
            this.#balance += amount;
            return this.#balance;
        }
    }
    
    withdraw(amount) {
        if (amount > 0 && amount <= this.#balance) {
            this.#balance -= amount;
            return this.#balance;
        }
        return "Insufficient funds";
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
console.log(account.deposit(500));  // 1500
console.log(account.withdraw(200)); // 1300
console.log(account.getBalance());  // 1300
// console.log(account.#balance); // ERROR! Private field

// ENCAPSULATION
// ============================================

class User {
    #password;
    
    constructor(username, password) {
        this.username = username;
        this.#password = password;
    }
    
    validatePassword(inputPassword) {
        return this.#password === inputPassword;
    }
    
    changePassword(oldPassword, newPassword) {
        if (this.validatePassword(oldPassword)) {
            this.#password = newPassword;
            return "Password changed successfully";
        }
        return "Incorrect password";
    }
}

const user = new User("alice", "secret123");
console.log(user.validatePassword("secret123")); // true
console.log(user.changePassword("secret123", "newpass456"));

// POLYMORPHISM
// ============================================

class Shape {
    area() {
        return 0;
    }
}

class Circle extends Shape {
    constructor(radius) {
        super();
        this.radius = radius;
    }
    
    area() {
        return Math.PI * this.radius ** 2;
    }
}

class Square extends Shape {
    constructor(side) {
        super();
        this.side = side;
    }
    
    area() {
        return this.side ** 2;
    }
}

const shapes = [
    new Circle(5),
    new Square(4),
    new Circle(3)
];

shapes.forEach(shape => {
    console.log(`Area: ${shape.area()}`);
});

// COMPOSITION OVER INHERITANCE
// ============================================

// Mixins
const canEat = {
    eat(food) {
        return `Eating ${food}`;
    }
};

const canWalk = {
    walk() {
        return "Walking";
    }
};

const canSwim = {
    swim() {
        return "Swimming";
    }
};

class Duck {
    constructor(name) {
        this.name = name;
        Object.assign(this, canEat, canWalk, canSwim);
    }
}

const duck = new Duck("Donald");
console.log(duck.eat("bread"));
console.log(duck.walk());
console.log(duck.swim());

// FACTORY PATTERN
// ============================================

class Car {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    
    getInfo() {
        return `${this.year} ${this.make} ${this.model}`;
    }
}

class CarFactory {
    static createCar(type) {
        switch(type) {
            case "sedan":
                return new Car("Toyota", "Camry", 2023);
            case "suv":
                return new Car("Honda", "CR-V", 2023);
            case "truck":
                return new Car("Ford", "F-150", 2023);
            default:
                return null;
        }
    }
}

const sedan = CarFactory.createCar("sedan");
console.log(sedan.getInfo());

// SINGLETON PATTERN
// ============================================

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
        return `Executing: ${sql}`;
    }
}

const db1 = new Database();
const db2 = new Database();
console.log(db1 === db2); // true (same instance)

// OBSERVER PATTERN
// ============================================

class Subject {
    constructor() {
        this.observers = [];
    }
    
    subscribe(observer) {
        this.observers.push(observer);
    }
    
    unsubscribe(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }
    
    notify(data) {
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

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.subscribe(observer1);
subject.subscribe(observer2);
subject.notify("Hello observers!");

// INSTANCEOF OPERATOR
// ============================================

console.log(dog instanceof Dog);    // true
console.log(dog instanceof Animal); // true
console.log(dog instanceof Object); // true
console.log(dog instanceof Cat);    // false

// PROTOTYPES (Under the hood)
// ============================================

function PersonOld(name, age) {
    this.name = name;
    this.age = age;
}

PersonOld.prototype.greet = function() {
    return `Hello, I'm ${this.name}`;
};

const person2 = new PersonOld("Bob", 30);
console.log(person2.greet());

// PRACTICAL EXAMPLE: Todo List
// ============================================

class TodoList {
    #todos = [];
    #nextId = 1;
    
    add(text) {
        const todo = {
            id: this.#nextId++,
            text,
            completed: false,
            createdAt: new Date()
        };
        this.#todos.push(todo);
        return todo;
    }
    
    remove(id) {
        this.#todos = this.#todos.filter(todo => todo.id !== id);
    }
    
    toggle(id) {
        const todo = this.#todos.find(t => t.id === id);
        if (todo) {
            todo.completed = !todo.completed;
        }
    }
    
    getAll() {
        return [...this.#todos];
    }
    
    getCompleted() {
        return this.#todos.filter(t => t.completed);
    }
    
    getPending() {
        return this.#todos.filter(t => !t.completed);
    }
}

const todoList = new TodoList();
todoList.add("Learn JavaScript");
todoList.add("Build a project");
todoList.toggle(1);
console.log(todoList.getAll());

// ============================================
// EXERCISES
// ============================================

// 1. Create a Book class with title, author, pages, and a read() method
// YOUR CODE HERE:

// 2. Create a Library class that manages multiple books
// YOUR CODE HERE:

// 3. Create a Vehicle class and extend it with Car and Motorcycle classes
// YOUR CODE HERE:

// 4. Implement a Counter class with private count and increment/decrement methods
// YOUR CODE HERE:

// 5. Create a Student class with grades array and method to calculate average
// YOUR CODE HERE:

// 6. Implement a simple shopping cart with add, remove, and total methods
// YOUR CODE HERE:

// 7. Create an Employee class with salary calculation based on hours worked
// YOUR CODE HERE:
