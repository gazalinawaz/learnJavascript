// ============================================
// LESSON 14: DESIGN PATTERNS
// ============================================

// CREATIONAL PATTERNS
// ============================================

// 1. SINGLETON PATTERN
// Ensures only one instance of a class exists

class Singleton {
    static #instance = null;
    
    constructor() {
        if (Singleton.#instance) {
            return Singleton.#instance;
        }
        
        this.data = [];
        Singleton.#instance = this;
    }
    
    addData(item) {
        this.data.push(item);
    }
    
    getData() {
        return this.data;
    }
}

const instance1 = new Singleton();
const instance2 = new Singleton();
console.log(instance1 === instance2); // true

// 2. FACTORY PATTERN
// Creates objects without specifying exact class

class Car {
    constructor(type) {
        this.type = type;
    }
    
    drive() {
        return `Driving a ${this.type}`;
    }
}

class CarFactory {
    static createCar(type) {
        switch(type) {
            case 'sedan':
                return new Car('Sedan');
            case 'suv':
                return new Car('SUV');
            case 'truck':
                return new Car('Truck');
            default:
                throw new Error('Unknown car type');
        }
    }
}

const sedan = CarFactory.createCar('sedan');
console.log(sedan.drive());

// 3. BUILDER PATTERN
// Constructs complex objects step by step

class Pizza {
    constructor() {
        this.size = '';
        this.cheese = false;
        this.pepperoni = false;
        this.mushrooms = false;
    }
}

class PizzaBuilder {
    constructor() {
        this.pizza = new Pizza();
    }
    
    setSize(size) {
        this.pizza.size = size;
        return this;
    }
    
    addCheese() {
        this.pizza.cheese = true;
        return this;
    }
    
    addPepperoni() {
        this.pizza.pepperoni = true;
        return this;
    }
    
    addMushrooms() {
        this.pizza.mushrooms = true;
        return this;
    }
    
    build() {
        return this.pizza;
    }
}

const myPizza = new PizzaBuilder()
    .setSize('large')
    .addCheese()
    .addPepperoni()
    .build();

console.log(myPizza);

// 4. PROTOTYPE PATTERN
// Creates objects by cloning existing ones

const carPrototype = {
    wheels: 4,
    engine: 'V6',
    clone() {
        return Object.create(this);
    }
};

const car1 = carPrototype.clone();
car1.color = 'red';

const car2 = carPrototype.clone();
car2.color = 'blue';

console.log(car1.wheels); // 4 (inherited)
console.log(car1.color);  // red (own property)

// STRUCTURAL PATTERNS
// ============================================

// 5. ADAPTER PATTERN
// Makes incompatible interfaces work together

class OldAPI {
    getData() {
        return "Old format data";
    }
}

class NewAPI {
    fetchData() {
        return {data: "New format data"};
    }
}

class APIAdapter {
    constructor(api) {
        this.api = api;
    }
    
    getData() {
        if (this.api instanceof OldAPI) {
            return this.api.getData();
        } else {
            return this.api.fetchData().data;
        }
    }
}

const oldAPI = new OldAPI();
const newAPI = new NewAPI();

const adapter1 = new APIAdapter(oldAPI);
const adapter2 = new APIAdapter(newAPI);

console.log(adapter1.getData());
console.log(adapter2.getData());

// 6. DECORATOR PATTERN
// Adds new functionality to objects dynamically

class Coffee {
    cost() {
        return 5;
    }
    
    description() {
        return "Coffee";
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
        return this.coffee.description() + ", Milk";
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
        return this.coffee.description() + ", Sugar";
    }
}

let myCoffee = new Coffee();
myCoffee = new MilkDecorator(myCoffee);
myCoffee = new SugarDecorator(myCoffee);

console.log(myCoffee.description()); // Coffee, Milk, Sugar
console.log(myCoffee.cost());        // 8

// 7. FACADE PATTERN
// Provides simplified interface to complex system

class CPU {
    freeze() { console.log("CPU frozen"); }
    jump(position) { console.log(`CPU jumped to ${position}`); }
    execute() { console.log("CPU executing"); }
}

class Memory {
    load(position, data) {
        console.log(`Memory loaded ${data} at ${position}`);
    }
}

class HardDrive {
    read(sector, size) {
        return `Data from sector ${sector}`;
    }
}

class ComputerFacade {
    constructor() {
        this.cpu = new CPU();
        this.memory = new Memory();
        this.hardDrive = new HardDrive();
    }
    
    start() {
        this.cpu.freeze();
        const data = this.hardDrive.read(0, 1024);
        this.memory.load(0, data);
        this.cpu.jump(0);
        this.cpu.execute();
    }
}

const computer = new ComputerFacade();
computer.start(); // Simple interface to complex operations

// 8. PROXY PATTERN
// Controls access to another object

class RealImage {
    constructor(filename) {
        this.filename = filename;
        this.loadFromDisk();
    }
    
    loadFromDisk() {
        console.log(`Loading ${this.filename}`);
    }
    
    display() {
        console.log(`Displaying ${this.filename}`);
    }
}

class ProxyImage {
    constructor(filename) {
        this.filename = filename;
        this.realImage = null;
    }
    
    display() {
        if (!this.realImage) {
            this.realImage = new RealImage(this.filename);
        }
        this.realImage.display();
    }
}

const image = new ProxyImage("photo.jpg");
image.display(); // Loads and displays
image.display(); // Only displays (already loaded)

// BEHAVIORAL PATTERNS
// ============================================

// 9. OBSERVER PATTERN
// Notifies multiple objects about state changes

class Subject {
    constructor() {
        this.observers = [];
        this.state = null;
    }
    
    attach(observer) {
        this.observers.push(observer);
    }
    
    detach(observer) {
        const index = this.observers.indexOf(observer);
        if (index > -1) {
            this.observers.splice(index, 1);
        }
    }
    
    notify() {
        this.observers.forEach(observer => observer.update(this.state));
    }
    
    setState(state) {
        this.state = state;
        this.notify();
    }
}

class Observer {
    constructor(name) {
        this.name = name;
    }
    
    update(state) {
        console.log(`${this.name} received update: ${state}`);
    }
}

const subject = new Subject();
const observer1 = new Observer("Observer 1");
const observer2 = new Observer("Observer 2");

subject.attach(observer1);
subject.attach(observer2);
subject.setState("New State");

// 10. STRATEGY PATTERN
// Defines family of algorithms, makes them interchangeable

class PaymentStrategy {
    pay(amount) {
        throw new Error("Must implement pay method");
    }
}

class CreditCardStrategy extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Credit Card`);
    }
}

class PayPalStrategy extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using PayPal`);
    }
}

class CryptoStrategy extends PaymentStrategy {
    pay(amount) {
        console.log(`Paid $${amount} using Cryptocurrency`);
    }
}

class ShoppingCart {
    constructor(paymentStrategy) {
        this.paymentStrategy = paymentStrategy;
    }
    
    setPaymentStrategy(strategy) {
        this.paymentStrategy = strategy;
    }
    
    checkout(amount) {
        this.paymentStrategy.pay(amount);
    }
}

const cart = new ShoppingCart(new CreditCardStrategy());
cart.checkout(100);

cart.setPaymentStrategy(new PayPalStrategy());
cart.checkout(50);

// 11. COMMAND PATTERN
// Encapsulates requests as objects

class Light {
    on() {
        console.log("Light is ON");
    }
    
    off() {
        console.log("Light is OFF");
    }
}

class LightOnCommand {
    constructor(light) {
        this.light = light;
    }
    
    execute() {
        this.light.on();
    }
    
    undo() {
        this.light.off();
    }
}

class LightOffCommand {
    constructor(light) {
        this.light = light;
    }
    
    execute() {
        this.light.off();
    }
    
    undo() {
        this.light.on();
    }
}

class RemoteControl {
    constructor() {
        this.history = [];
    }
    
    execute(command) {
        command.execute();
        this.history.push(command);
    }
    
    undo() {
        const command = this.history.pop();
        if (command) {
            command.undo();
        }
    }
}

const light = new Light();
const remote = new RemoteControl();

remote.execute(new LightOnCommand(light));
remote.execute(new LightOffCommand(light));
remote.undo();

// 12. CHAIN OF RESPONSIBILITY
// Passes request along chain of handlers

class Handler {
    setNext(handler) {
        this.nextHandler = handler;
        return handler;
    }
    
    handle(request) {
        if (this.nextHandler) {
            return this.nextHandler.handle(request);
        }
        return null;
    }
}

class AuthenticationHandler extends Handler {
    handle(request) {
        if (!request.authenticated) {
            console.log("Authentication failed");
            return false;
        }
        console.log("Authentication passed");
        return super.handle(request);
    }
}

class AuthorizationHandler extends Handler {
    handle(request) {
        if (!request.authorized) {
            console.log("Authorization failed");
            return false;
        }
        console.log("Authorization passed");
        return super.handle(request);
    }
}

class ValidationHandler extends Handler {
    handle(request) {
        if (!request.valid) {
            console.log("Validation failed");
            return false;
        }
        console.log("Validation passed");
        return super.handle(request);
    }
}

const auth = new AuthenticationHandler();
const authz = new AuthorizationHandler();
const valid = new ValidationHandler();

auth.setNext(authz).setNext(valid);

const request = {
    authenticated: true,
    authorized: true,
    valid: true
};

auth.handle(request);

// MODULE PATTERN (Advanced)
// ============================================

const AdvancedModule = (function() {
    // Private variables
    const privateData = new WeakMap();
    let instanceCounter = 0;
    
    // Private functions
    function privateMethod() {
        return "Private method";
    }
    
    // Public API
    return {
        create(data) {
            const instance = {
                id: ++instanceCounter
            };
            privateData.set(instance, data);
            return instance;
        },
        
        getData(instance) {
            return privateData.get(instance);
        },
        
        setData(instance, data) {
            privateData.set(instance, data);
        }
    };
})();

const obj1 = AdvancedModule.create({name: "Object 1"});
console.log(AdvancedModule.getData(obj1));

// ============================================
// EXERCISES
// ============================================

// 1. Implement a Logger using Singleton pattern
// YOUR CODE HERE:

// 2. Create a Vehicle factory that produces different vehicle types
// YOUR CODE HERE:

// 3. Implement a Query Builder using Builder pattern
// YOUR CODE HERE:

// 4. Create a caching proxy for expensive API calls
// YOUR CODE HERE:

// 5. Implement an event emitter using Observer pattern
// YOUR CODE HERE:

// 6. Create a sorting strategy pattern (bubble, quick, merge sort)
// YOUR CODE HERE:

// 7. Implement undo/redo functionality using Command pattern
// YOUR CODE HERE:

// 8. Create a middleware chain using Chain of Responsibility
// YOUR CODE HERE:
