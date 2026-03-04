// ============================================
// LESSON 17: ADVANCED JAVASCRIPT CONCEPTS
// ============================================

// GENERATORS
// ============================================

// Function that can pause and resume execution

function* numberGenerator() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = numberGenerator();
console.log(gen.next()); // {value: 1, done: false}
console.log(gen.next()); // {value: 2, done: false}
console.log(gen.next()); // {value: 3, done: false}
console.log(gen.next()); // {value: undefined, done: true}

// Infinite generator
function* infiniteNumbers() {
    let i = 0;
    while (true) {
        yield i++;
    }
}

const infinite = infiniteNumbers();
console.log(infinite.next().value); // 0
console.log(infinite.next().value); // 1

// Generator with parameters
function* range(start, end, step = 1) {
    for (let i = start; i < end; i += step) {
        yield i;
    }
}

for (const num of range(0, 10, 2)) {
    console.log(num); // 0, 2, 4, 6, 8
}

// ITERATORS
// ============================================

// Custom iterator
const customIterable = {
    data: [1, 2, 3, 4, 5],
    
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;
        
        return {
            next() {
                if (index < data.length) {
                    return {value: data[index++], done: false};
                } else {
                    return {done: true};
                }
            }
        };
    }
};

for (const value of customIterable) {
    console.log(value);
}

// PROXIES
// ============================================

// Intercept and customize object operations

const handler = {
    get(target, property) {
        console.log(`Getting ${property}`);
        return target[property];
    },
    
    set(target, property, value) {
        console.log(`Setting ${property} to ${value}`);
        target[property] = value;
        return true;
    }
};

const obj = {name: "John", age: 30};
const proxy = new Proxy(obj, handler);

console.log(proxy.name); // Logs: Getting name, then: John
proxy.age = 31;          // Logs: Setting age to 31

// Validation with Proxy
const validatedUser = new Proxy({}, {
    set(target, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number' || value < 0) {
                throw new Error('Age must be a positive number');
            }
        }
        target[property] = value;
        return true;
    }
});

validatedUser.age = 25; // OK
// validatedUser.age = -5; // Error!

// REFLECT API
// ============================================

// Provides methods for interceptable operations

const person = {
    name: "Alice",
    age: 25
};

// Instead of: person.name
console.log(Reflect.get(person, 'name')); // Alice

// Instead of: person.age = 26
Reflect.set(person, 'age', 26);

// Check if property exists
console.log(Reflect.has(person, 'name')); // true

// Delete property
Reflect.deleteProperty(person, 'age');

// SYMBOLS
// ============================================

// Unique identifiers

const sym1 = Symbol('description');
const sym2 = Symbol('description');

console.log(sym1 === sym2); // false (each symbol is unique)

// Use as object keys
const SECRET_KEY = Symbol('secret');
const user = {
    name: "John",
    [SECRET_KEY]: "hidden value"
};

console.log(user.name);        // John
console.log(user[SECRET_KEY]); // hidden value

// Symbols don't show in normal iteration
console.log(Object.keys(user));           // ["name"]
console.log(Object.getOwnPropertySymbols(user)); // [Symbol(secret)]

// Well-known symbols
const myIterable = {
    data: [1, 2, 3],
    
    [Symbol.iterator]() {
        let index = 0;
        return {
            next: () => ({
                value: this.data[index++],
                done: index > this.data.length
            })
        };
    }
};

// WEAKMAP AND WEAKSET
// ============================================

// WeakMap: Keys must be objects, allows garbage collection

const weakMap = new WeakMap();
let obj1 = {id: 1};
let obj2 = {id: 2};

weakMap.set(obj1, "data for obj1");
weakMap.set(obj2, "data for obj2");

console.log(weakMap.get(obj1)); // data for obj1

obj1 = null; // obj1 can now be garbage collected

// WeakSet: Similar to WeakMap but for sets
const weakSet = new WeakSet();
let element = {name: "element"};

weakSet.add(element);
console.log(weakSet.has(element)); // true

element = null; // Can be garbage collected

// PRIVATE FIELDS AND METHODS
// ============================================

class BankAccount {
    #balance = 0;        // Private field
    #transactionLog = []; // Private field
    
    constructor(initialBalance) {
        this.#balance = initialBalance;
    }
    
    // Private method
    #log(message) {
        this.#transactionLog.push({
            message,
            timestamp: new Date()
        });
    }
    
    deposit(amount) {
        this.#balance += amount;
        this.#log(`Deposited ${amount}`);
        return this.#balance;
    }
    
    getBalance() {
        return this.#balance;
    }
}

const account = new BankAccount(1000);
console.log(account.deposit(500));
// console.log(account.#balance); // Error! Private field

// METAPROGRAMMING
// ============================================

// Code that manipulates code

// Dynamic property access
function getProperty(obj, path) {
    return path.split('.').reduce((current, prop) => current?.[prop], obj);
}

const data = {
    user: {
        profile: {
            name: "John"
        }
    }
};

console.log(getProperty(data, 'user.profile.name')); // John

// Dynamic function creation
function createFunction(operation) {
    return new Function('a', 'b', `return a ${operation} b`);
}

const add = createFunction('+');
const multiply = createFunction('*');

console.log(add(5, 3));      // 8
console.log(multiply(5, 3)); // 15

// DECORATORS (Proposal)
// ============================================

// Function that modifies class or method behavior

function log(target, name, descriptor) {
    const original = descriptor.value;
    
    descriptor.value = function(...args) {
        console.log(`Calling ${name} with`, args);
        const result = original.apply(this, args);
        console.log(`Result:`, result);
        return result;
    };
    
    return descriptor;
}

// Usage (when decorators are supported):
// class Calculator {
//     @log
//     add(a, b) {
//         return a + b;
//     }
// }

// Manual decorator application
function applyDecorator(decorator) {
    return function(target, name, descriptor) {
        return decorator(target, name, descriptor);
    };
}

// ASYNC ITERATORS
// ============================================

// Iterate over async data

async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (const value of asyncGenerator()) {
        console.log(value);
    }
})();

// Async iterable
const asyncIterable = {
    async *[Symbol.asyncIterator]() {
        yield await fetch('/api/data1');
        yield await fetch('/api/data2');
        yield await fetch('/api/data3');
    }
};

// TAGGED TEMPLATE LITERALS
// ============================================

// Custom string processing

function highlight(strings, ...values) {
    return strings.reduce((result, str, i) => {
        return result + str + (values[i] ? `<mark>${values[i]}</mark>` : '');
    }, '');
}

const name = "Alice";
const age = 25;
const html = highlight`Hello, my name is ${name} and I'm ${age} years old`;
console.log(html);

// SQL query builder
function sql(strings, ...values) {
    return {
        text: strings.reduce((result, str, i) => {
            return result + str + (i < values.length ? `$${i + 1}` : '');
        }, ''),
        values
    };
}

const userId = 123;
const query = sql`SELECT * FROM users WHERE id = ${userId}`;
console.log(query);

// BIGINT
// ============================================

// Handle large integers beyond Number.MAX_SAFE_INTEGER

const bigNumber = 9007199254740991n; // Note the 'n'
const anotherBig = BigInt("9007199254740991");

console.log(bigNumber + 1n); // 9007199254740992n
console.log(bigNumber * 2n); // 18014398509481982n

// Cannot mix BigInt with Number
// console.log(bigNumber + 1); // Error!
console.log(bigNumber + BigInt(1)); // OK

// OPTIONAL CHAINING AND NULLISH COALESCING
// ============================================

const user2 = {
    name: "John",
    address: {
        city: "NYC"
    }
};

// Optional chaining
console.log(user2?.address?.city);        // NYC
console.log(user2?.contact?.phone);       // undefined
console.log(user2?.getInfo?.());          // undefined

// Nullish coalescing
const value1 = null ?? "default";         // "default"
const value2 = undefined ?? "default";    // "default"
const value3 = 0 ?? "default";            // 0 (not null/undefined)
const value4 = "" ?? "default";           // "" (not null/undefined)

// DYNAMIC IMPORTS
// ============================================

// Load modules on demand

async function loadModule(moduleName) {
    try {
        const module = await import(`./${moduleName}.js`);
        return module;
    } catch (error) {
        console.error(`Failed to load module: ${moduleName}`);
    }
}

// Conditional loading
if (condition) {
    const module = await import('./heavy-module.js');
    module.doSomething();
}

// TEMPORAL API (Future)
// ============================================

// Better date/time handling (proposal)

// Current: Date API issues
// const now = new Date();

// Future: Temporal API
// const now = Temporal.Now.instant();
// const today = Temporal.Now.plainDateISO();

// PATTERN MATCHING (Proposal)
// ============================================

// Structural pattern matching

// Future syntax:
// const result = match (value) {
//     when {type: 'circle', radius: r} -> Math.PI * r * r,
//     when {type: 'rectangle', width: w, height: h} -> w * h,
//     when _ -> 0
// };

// PIPELINE OPERATOR (Proposal)
// ============================================

// Chain operations more readably

// Current
const result1 = Math.sqrt(Math.abs(-16));

// Future with pipeline operator
// const result = -16 |> Math.abs |> Math.sqrt;

// RECORD AND TUPLE (Proposal)
// ============================================

// Immutable data structures

// Future syntax:
// const record = #{name: "John", age: 30};
// const tuple = #[1, 2, 3];

// ADVANCED ERROR HANDLING
// ============================================

// Custom error types
class ValidationError extends Error {
    constructor(message, field) {
        super(message);
        this.name = "ValidationError";
        this.field = field;
    }
}

function validateUser(user) {
    if (!user.email) {
        throw new ValidationError("Email is required", "email");
    }
}

try {
    validateUser({});
} catch (error) {
    if (error instanceof ValidationError) {
        console.log(`Validation failed for ${error.field}: ${error.message}`);
    }
}

// ============================================
// EXERCISES
// ============================================

// 1. Create a generator that yields Fibonacci numbers
// YOUR CODE HERE:

// 2. Implement a Proxy that logs all property access
// YOUR CODE HERE:

// 3. Create a custom iterator for a linked list
// YOUR CODE HERE:

// 4. Use Symbols to create truly private object properties
// YOUR CODE HERE:

// 5. Implement an async generator that fetches paginated data
// YOUR CODE HERE:

// 6. Create a tagged template literal for HTML escaping
// YOUR CODE HERE:

// 7. Build a validation system using Proxies
// YOUR CODE HERE:

// 8. Implement a memoization decorator
// YOUR CODE HERE:
