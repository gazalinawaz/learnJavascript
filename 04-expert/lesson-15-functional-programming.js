// ============================================
// LESSON 15: FUNCTIONAL PROGRAMMING
// ============================================

// PURE FUNCTIONS
// ============================================

// Pure: Same input always gives same output, no side effects
function add(a, b) {
    return a + b;
}

console.log(add(2, 3)); // Always 5

// Impure: Depends on external state
let total = 0;
function addToTotal(num) {
    total += num; // Side effect!
    return total;
}

// Pure version
function addToValue(value, num) {
    return value + num;
}

// IMMUTABILITY
// ============================================

// Avoid mutating data
const numbers = [1, 2, 3, 4, 5];

// Bad: Mutates original array
// numbers.push(6);

// Good: Creates new array
const newNumbers = [...numbers, 6];
console.log(numbers);    // [1, 2, 3, 4, 5]
console.log(newNumbers); // [1, 2, 3, 4, 5, 6]

// Object immutability
const person = {name: "John", age: 30};

// Bad: Mutates original
// person.age = 31;

// Good: Creates new object
const updatedPerson = {...person, age: 31};
console.log(person);        // {name: "John", age: 30}
console.log(updatedPerson); // {name: "John", age: 31}

// HIGHER-ORDER FUNCTIONS
// ============================================

// Functions that take or return functions

// Takes function as argument
function repeat(n, action) {
    for (let i = 0; i < n; i++) {
        action(i);
    }
}

repeat(3, i => console.log(`Iteration ${i}`));

// Returns function
function multiplier(factor) {
    return function(number) {
        return number * factor;
    };
}

const double = multiplier(2);
const triple = multiplier(3);

console.log(double(5)); // 10
console.log(triple(5)); // 15

// FUNCTION COMPOSITION
// ============================================

// Combining simple functions to build complex ones

const add5 = x => x + 5;
const multiply2 = x => x * 2;
const subtract3 = x => x - 3;

// Manual composition
const result1 = subtract3(multiply2(add5(10)));
console.log(result1); // (10 + 5) * 2 - 3 = 27

// Compose function
const compose = (...fns) => x => fns.reduceRight((acc, fn) => fn(acc), x);

const calculate = compose(subtract3, multiply2, add5);
console.log(calculate(10)); // 27

// Pipe function (left to right)
const pipe = (...fns) => x => fns.reduce((acc, fn) => fn(acc), x);

const calculate2 = pipe(add5, multiply2, subtract3);
console.log(calculate2(10)); // 27

// CURRYING
// ============================================

// Transform function with multiple args into sequence of functions

// Regular function
function addThreeNumbers(a, b, c) {
    return a + b + c;
}

// Curried version
function addCurried(a) {
    return function(b) {
        return function(c) {
            return a + b + c;
        };
    };
}

console.log(addCurried(1)(2)(3)); // 6

// Arrow function currying
const addCurriedArrow = a => b => c => a + b + c;
console.log(addCurriedArrow(1)(2)(3)); // 6

// Practical currying
const multiply = a => b => a * b;
const multiplyBy2 = multiply(2);
const multiplyBy10 = multiply(10);

console.log(multiplyBy2(5));  // 10
console.log(multiplyBy10(5)); // 50

// Generic curry function
function curry(fn) {
    return function curried(...args) {
        if (args.length >= fn.length) {
            return fn.apply(this, args);
        } else {
            return function(...args2) {
                return curried.apply(this, args.concat(args2));
            };
        }
    };
}

const sum = (a, b, c) => a + b + c;
const curriedSum = curry(sum);

console.log(curriedSum(1)(2)(3));     // 6
console.log(curriedSum(1, 2)(3));     // 6
console.log(curriedSum(1)(2, 3));     // 6

// PARTIAL APPLICATION
// ============================================

// Fix some arguments of a function

function greet(greeting, name) {
    return `${greeting}, ${name}!`;
}

const sayHello = greet.bind(null, "Hello");
console.log(sayHello("Alice")); // Hello, Alice!

// Partial function
const partial = (fn, ...fixedArgs) => {
    return (...remainingArgs) => {
        return fn(...fixedArgs, ...remainingArgs);
    };
};

const greetHello = partial(greet, "Hello");
console.log(greetHello("Bob")); // Hello, Bob!

// RECURSION
// ============================================

// Factorial
function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

console.log(factorial(5)); // 120

// Fibonacci
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.log(fibonacci(7)); // 13

// Tail recursion (optimizable)
function factorialTail(n, accumulator = 1) {
    if (n <= 1) return accumulator;
    return factorialTail(n - 1, n * accumulator);
}

console.log(factorialTail(5)); // 120

// MEMOIZATION
// ============================================

// Cache function results for performance

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            console.log("From cache");
            return cache.get(key);
        }
        
        console.log("Computing");
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

const slowFibonacci = n => {
    if (n <= 1) return n;
    return slowFibonacci(n - 1) + slowFibonacci(n - 2);
};

const fastFibonacci = memoize(slowFibonacci);

console.log(fastFibonacci(10)); // Computing
console.log(fastFibonacci(10)); // From cache

// FUNCTORS
// ============================================

// Objects that implement map

class Box {
    constructor(value) {
        this.value = value;
    }
    
    map(fn) {
        return new Box(fn(this.value));
    }
    
    fold(fn) {
        return fn(this.value);
    }
}

const box = new Box(5);
const result2 = box
    .map(x => x + 1)
    .map(x => x * 2)
    .fold(x => x);

console.log(result2); // 12

// MONADS
// ============================================

// Functors with flatMap

class Maybe {
    constructor(value) {
        this.value = value;
    }
    
    static of(value) {
        return new Maybe(value);
    }
    
    isNothing() {
        return this.value === null || this.value === undefined;
    }
    
    map(fn) {
        return this.isNothing() ? this : Maybe.of(fn(this.value));
    }
    
    flatMap(fn) {
        return this.isNothing() ? this : fn(this.value);
    }
    
    getOrElse(defaultValue) {
        return this.isNothing() ? defaultValue : this.value;
    }
}

const user = {
    name: "John",
    address: {
        street: "123 Main St"
    }
};

const getStreet = user => Maybe.of(user)
    .map(u => u.address)
    .map(a => a.street)
    .getOrElse("No address");

console.log(getStreet(user)); // 123 Main St
console.log(getStreet({}));   // No address

// POINT-FREE STYLE
// ============================================

// Functions without explicitly mentioning arguments

// Not point-free
const addOne = x => x + 1;
const doubleNumbers = numbers => numbers.map(x => addOne(x));

// Point-free
const doubleNumbersPointFree = numbers => numbers.map(addOne);

// TRANSDUCERS
// ============================================

// Composable algorithmic transformations

const map = fn => reducer => (acc, val) => reducer(acc, fn(val));
const filter = predicate => reducer => (acc, val) =>
    predicate(val) ? reducer(acc, val) : acc;

const transduce = (xform, reducer, initial, collection) => {
    const transformedReducer = xform(reducer);
    return collection.reduce(transformedReducer, initial);
};

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const xform = compose(
    filter(x => x % 2 === 0),
    map(x => x * 2)
);

const result3 = transduce(
    xform,
    (acc, val) => [...acc, val],
    [],
    nums
);

console.log(result3); // [4, 8, 12, 16, 20]

// LAZY EVALUATION
// ============================================

// Delay computation until needed

function* lazyMap(array, fn) {
    for (const item of array) {
        yield fn(item);
    }
}

function* lazyFilter(array, predicate) {
    for (const item of array) {
        if (predicate(item)) {
            yield item;
        }
    }
}

const largeArray = Array.from({length: 1000000}, (_, i) => i);

const lazyResult = lazyFilter(
    lazyMap(largeArray, x => x * 2),
    x => x % 4 === 0
);

// Only computes when needed
const first5 = [];
const iterator = lazyResult[Symbol.iterator]();
for (let i = 0; i < 5; i++) {
    first5.push(iterator.next().value);
}
console.log(first5);

// LENS PATTERN
// ============================================

// Functional way to get/set nested properties

const lens = (getter, setter) => ({
    get: getter,
    set: setter
});

const view = (lens, obj) => lens.get(obj);
const set = (lens, value, obj) => lens.set(value, obj);
const over = (lens, fn, obj) => set(lens, fn(view(lens, obj)), obj);

const nameLens = lens(
    obj => obj.name,
    (val, obj) => ({...obj, name: val})
);

const person2 = {name: "John", age: 30};
console.log(view(nameLens, person2));           // John
console.log(set(nameLens, "Jane", person2));    // {name: "Jane", age: 30}
console.log(over(nameLens, s => s.toUpperCase(), person2)); // {name: "JOHN", age: 30}

// PRACTICAL FP UTILITIES
// ============================================

// Identity
const identity = x => x;

// Constant
const constant = x => () => x;

// Flip arguments
const flip = fn => (a, b) => fn(b, a);

// Tap (for debugging)
const tap = fn => x => {
    fn(x);
    return x;
};

// Trace
const trace = label => tap(x => console.log(label, x));

// Usage
const result4 = pipe(
    add5,
    trace("after add5"),
    multiply2,
    trace("after multiply2"),
    subtract3
)(10);

// ============================================
// EXERCISES
// ============================================

// 1. Write a pure function that filters and maps an array
// YOUR CODE HERE:

// 2. Create a curried function for calculating volume (length * width * height)
// YOUR CODE HERE:

// 3. Implement compose and pipe functions
// YOUR CODE HERE:

// 4. Create a memoized recursive function for calculating factorials
// YOUR CODE HERE:

// 5. Implement a Maybe monad with map and flatMap
// YOUR CODE HERE:

// 6. Write a function that uses partial application for logging
// YOUR CODE HERE:

// 7. Create a lazy sequence generator for infinite numbers
// YOUR CODE HERE:

// 8. Implement a simple lens for nested object access
// YOUR CODE HERE:
