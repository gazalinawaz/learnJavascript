// ============================================
// LESSON 9: SCOPE & CLOSURES
// ============================================

// GLOBAL SCOPE
// ============================================

let globalVar = "I'm global";

function accessGlobal() {
    console.log(globalVar); // Can access global variable
}

accessGlobal();
console.log(globalVar); // Accessible everywhere

// FUNCTION SCOPE
// ============================================

function myFunction() {
    let functionVar = "I'm in function scope";
    console.log(functionVar); // Works
}

myFunction();
// console.log(functionVar); // ERROR! Not accessible outside

// BLOCK SCOPE (let & const)
// ============================================

if (true) {
    let blockVar = "I'm block-scoped";
    const blockConst = "Me too";
    console.log(blockVar); // Works inside block
}

// console.log(blockVar); // ERROR! Not accessible outside block

// var is NOT block-scoped (old behavior)
if (true) {
    var varVariable = "I'm NOT block-scoped";
}
console.log(varVariable); // Works! (This is why we avoid var)

// LEXICAL SCOPE
// ============================================

function outer() {
    const outerVar = "Outer";
    
    function inner() {
        const innerVar = "Inner";
        console.log(outerVar); // Can access outer scope
        console.log(innerVar);
    }
    
    inner();
    // console.log(innerVar); // ERROR! Cannot access inner scope
}

outer();

// CLOSURES - BASIC CONCEPT
// ============================================

function makeGreeting(greeting) {
    return function(name) {
        return `${greeting}, ${name}!`;
    };
}

const sayHello = makeGreeting("Hello");
const sayHi = makeGreeting("Hi");

console.log(sayHello("Alice")); // "Hello, Alice!"
console.log(sayHi("Bob"));      // "Hi, Bob!"

// The inner function "remembers" the greeting variable!

// CLOSURES - PRACTICAL EXAMPLE
// ============================================

function createCounter() {
    let count = 0; // Private variable
    
    return {
        increment: function() {
            count++;
            return count;
        },
        decrement: function() {
            count--;
            return count;
        },
        getCount: function() {
            return count;
        }
    };
}

const counter = createCounter();
console.log(counter.increment()); // 1
console.log(counter.increment()); // 2
console.log(counter.decrement()); // 1
console.log(counter.getCount());  // 1
// console.log(counter.count); // undefined - count is private!

// CLOSURES - MULTIPLE INSTANCES
// ============================================

function createBankAccount(initialBalance) {
    let balance = initialBalance;
    
    return {
        deposit(amount) {
            balance += amount;
            return balance;
        },
        withdraw(amount) {
            if (amount <= balance) {
                balance -= amount;
                return balance;
            } else {
                return "Insufficient funds";
            }
        },
        getBalance() {
            return balance;
        }
    };
}

const account1 = createBankAccount(100);
const account2 = createBankAccount(500);

console.log(account1.deposit(50));  // 150
console.log(account2.deposit(100)); // 600
console.log(account1.getBalance()); // 150 (independent!)
console.log(account2.getBalance()); // 600

// CLOSURES IN LOOPS - COMMON PITFALL
// ============================================

// Problem with var
console.log("=== Problem with var ===");
for (var i = 1; i <= 3; i++) {
    setTimeout(function() {
        console.log(i); // Prints 4, 4, 4 (not 1, 2, 3!)
    }, 100);
}

// Solution 1: Use let (block-scoped)
console.log("=== Solution with let ===");
for (let j = 1; j <= 3; j++) {
    setTimeout(function() {
        console.log(j); // Prints 1, 2, 3 correctly
    }, 200);
}

// Solution 2: Use closure with IIFE
console.log("=== Solution with IIFE ===");
for (var k = 1; k <= 3; k++) {
    (function(num) {
        setTimeout(function() {
            console.log(num); // Prints 1, 2, 3 correctly
        }, 300);
    })(k);
}

// CLOSURE WITH ARROW FUNCTIONS
// ============================================

const multiplier = factor => {
    return number => number * factor;
};

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5));  // 10
console.log(triple(5));  // 15

// PRIVATE VARIABLES PATTERN
// ============================================

const person = (function() {
    let name = "John"; // Private
    let age = 30;      // Private
    
    return {
        getName() {
            return name;
        },
        setName(newName) {
            name = newName;
        },
        getAge() {
            return age;
        },
        setAge(newAge) {
            if (newAge > 0) {
                age = newAge;
            }
        }
    };
})();

console.log(person.getName()); // "John"
person.setName("Jane");
console.log(person.getName()); // "Jane"
// console.log(person.name); // undefined - private!

// FUNCTION FACTORY
// ============================================

function createCalculator(operation) {
    return function(a, b) {
        switch(operation) {
            case "add":
                return a + b;
            case "subtract":
                return a - b;
            case "multiply":
                return a * b;
            case "divide":
                return a / b;
            default:
                return "Invalid operation";
        }
    };
}

const add = createCalculator("add");
const subtract = createCalculator("subtract");

console.log(add(10, 5));      // 15
console.log(subtract(10, 5)); // 5

// MEMOIZATION WITH CLOSURES
// ============================================

function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (key in cache) {
            console.log("Returning from cache");
            return cache[key];
        }
        
        console.log("Calculating result");
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

const expensiveOperation = (n) => {
    let sum = 0;
    for (let i = 0; i < n; i++) {
        sum += i;
    }
    return sum;
};

const memoizedOperation = memoize(expensiveOperation);

console.log(memoizedOperation(1000000)); // Calculating result
console.log(memoizedOperation(1000000)); // Returning from cache (faster!)

// CLOSURE SCOPE CHAIN
// ============================================

const globalScope = "global";

function level1() {
    const level1Scope = "level1";
    
    function level2() {
        const level2Scope = "level2";
        
        function level3() {
            const level3Scope = "level3";
            
            // Can access all outer scopes
            console.log(globalScope);
            console.log(level1Scope);
            console.log(level2Scope);
            console.log(level3Scope);
        }
        
        level3();
    }
    
    level2();
}

level1();

// PRACTICAL USE CASES
// ============================================

// 1. Event handlers with private state
function createButton() {
    let clickCount = 0;
    
    return {
        click() {
            clickCount++;
            console.log(`Button clicked ${clickCount} times`);
        }
    };
}

const button = createButton();
button.click(); // Button clicked 1 times
button.click(); // Button clicked 2 times

// 2. Configuration with defaults
function createConfig(defaults) {
    let config = {...defaults};
    
    return {
        get(key) {
            return config[key];
        },
        set(key, value) {
            config[key] = value;
        },
        reset() {
            config = {...defaults};
        }
    };
}

const appConfig = createConfig({theme: "light", fontSize: 14});
console.log(appConfig.get("theme")); // "light"
appConfig.set("theme", "dark");
console.log(appConfig.get("theme")); // "dark"
appConfig.reset();
console.log(appConfig.get("theme")); // "light"

// 3. Rate limiter
function createRateLimiter(maxCalls, timeWindow) {
    let calls = [];
    
    return function(fn) {
        const now = Date.now();
        calls = calls.filter(time => now - time < timeWindow);
        
        if (calls.length < maxCalls) {
            calls.push(now);
            return fn();
        } else {
            console.log("Rate limit exceeded");
        }
    };
}

const rateLimiter = createRateLimiter(3, 1000); // 3 calls per second

// ============================================
// EXERCISES
// ============================================

// 1. Create a function that returns a function to calculate power
// Example: const square = power(2); square(5) should return 25
// YOUR CODE HERE:

// 2. Create a counter that can only be incremented, not decremented
// YOUR CODE HERE:

// 3. Create a function that generates unique IDs
// Each call should return a new incremented ID
// YOUR CODE HERE:

// 4. Create a private variable that can only be set once
// YOUR CODE HERE:

// 5. Create a function that remembers the last 3 values passed to it
// YOUR CODE HERE:

// 6. Create a stopwatch with start, stop, and getTime methods
// YOUR CODE HERE:

// 7. Create a function that limits how many times another function can be called
// YOUR CODE HERE:
