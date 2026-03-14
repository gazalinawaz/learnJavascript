# Lesson 17: Advanced JavaScript Concepts - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Generators](#generators)
3. [Iterators](#iterators)
4. [Proxies](#proxies)
5. [Reflect API](#reflect-api)
6. [Symbols](#symbols)
7. [WeakMap and WeakSet](#weakmap-and-weakset)
8. [Advanced Async Patterns](#advanced-async-patterns)
9. [Best Practices](#best-practices)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What Are Advanced Concepts?

These are powerful JavaScript features that give you more control and enable advanced programming patterns. While not needed for every project, they're valuable tools for specific scenarios.

### When to Use These?

- **Generators** - Custom iteration, lazy evaluation
- **Proxies** - Intercept object operations
- **Symbols** - Unique identifiers
- **WeakMap/WeakSet** - Memory-efficient caching
- **Reflect** - Meta-programming

---

## Generators

### What are Generators?

**Generators** are functions that can pause and resume execution, yielding multiple values over time.

### Basic Syntax

```javascript
function* generatorFunction() {
    yield 1;
    yield 2;
    yield 3;
}

const gen = generatorFunction();

console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: undefined, done: true }
```

### Simple Example

```javascript
function* countTo(max) {
    let count = 1;
    while (count <= max) {
        yield count;
        count++;
    }
}

const counter = countTo(5);

for (const num of counter) {
    console.log(num);
}
// 1, 2, 3, 4, 5
```

### Practical Examples

**Example 1: ID Generator**
```javascript
function* idGenerator() {
    let id = 1;
    while (true) {
        yield id++;
    }
}

const ids = idGenerator();

console.log(ids.next().value); // 1
console.log(ids.next().value); // 2
console.log(ids.next().value); // 3
```

**Example 2: Pagination**
```javascript
function* paginate(items, pageSize) {
    for (let i = 0; i < items.length; i += pageSize) {
        yield items.slice(i, i + pageSize);
    }
}

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const pages = paginate(items, 3);

console.log(pages.next().value); // [1, 2, 3]
console.log(pages.next().value); // [4, 5, 6]
console.log(pages.next().value); // [7, 8, 9]
console.log(pages.next().value); // [10]
```

**Example 3: Infinite Sequence**
```javascript
function* fibonacci() {
    let [prev, curr] = [0, 1];
    
    while (true) {
        yield curr;
        [prev, curr] = [curr, prev + curr];
    }
}

const fib = fibonacci();

console.log(fib.next().value); // 1
console.log(fib.next().value); // 1
console.log(fib.next().value); // 2
console.log(fib.next().value); // 3
console.log(fib.next().value); // 5
console.log(fib.next().value); // 8
```

**Example 4: Lazy Evaluation**
```javascript
function* map(iterable, fn) {
    for (const item of iterable) {
        yield fn(item);
    }
}

function* filter(iterable, predicate) {
    for (const item of iterable) {
        if (predicate(item)) {
            yield item;
        }
    }
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const result = filter(
    map(numbers, n => n * 2),
    n => n > 10
);

for (const num of result) {
    console.log(num);
}
// 12, 14, 16, 18, 20
```

---

## Iterators

### What are Iterators?

**Iterators** are objects that define a sequence and potentially a return value upon completion.

### Creating an Iterator

```javascript
const myIterator = {
    data: [1, 2, 3, 4, 5],
    index: 0,
    
    next() {
        if (this.index < this.data.length) {
            return {
                value: this.data[this.index++],
                done: false
            };
        } else {
            return {
                value: undefined,
                done: true
            };
        }
    }
};

console.log(myIterator.next()); // { value: 1, done: false }
console.log(myIterator.next()); // { value: 2, done: false }
```

### Making Objects Iterable

```javascript
class Range {
    constructor(start, end) {
        this.start = start;
        this.end = end;
    }
    
    [Symbol.iterator]() {
        let current = this.start;
        const end = this.end;
        
        return {
            next() {
                if (current <= end) {
                    return {
                        value: current++,
                        done: false
                    };
                } else {
                    return {
                        value: undefined,
                        done: true
                    };
                }
            }
        };
    }
}

const range = new Range(1, 5);

for (const num of range) {
    console.log(num);
}
// 1, 2, 3, 4, 5
```

### Practical Example: Custom Collection

```javascript
class TodoList {
    constructor() {
        this.tasks = [];
    }
    
    add(task) {
        this.tasks.push(task);
    }
    
    [Symbol.iterator]() {
        let index = 0;
        const tasks = this.tasks;
        
        return {
            next() {
                if (index < tasks.length) {
                    return {
                        value: tasks[index++],
                        done: false
                    };
                } else {
                    return { done: true };
                }
            }
        };
    }
}

const todos = new TodoList();
todos.add("Learn JavaScript");
todos.add("Build a project");
todos.add("Deploy to production");

for (const task of todos) {
    console.log(`- ${task}`);
}
```

---

## Proxies

### What are Proxies?

**Proxies** intercept and customize operations on objects.

### Basic Syntax

```javascript
const proxy = new Proxy(target, handler);
```

### Simple Example

```javascript
const person = {
    name: "Alice",
    age: 25
};

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

const proxy = new Proxy(person, handler);

console.log(proxy.name);  // Getting name → "Alice"
proxy.age = 26;           // Setting age to 26
```

### Practical Examples

**Example 1: Validation**
```javascript
const validator = {
    set(target, property, value) {
        if (property === 'age') {
            if (typeof value !== 'number') {
                throw new TypeError('Age must be a number');
            }
            if (value < 0 || value > 150) {
                throw new RangeError('Age must be between 0 and 150');
            }
        }
        
        target[property] = value;
        return true;
    }
};

const person = new Proxy({}, validator);

person.age = 25;      // OK
// person.age = -5;   // Error: Age must be between 0 and 150
// person.age = "25"; // Error: Age must be a number
```

**Example 2: Default Values**
```javascript
const withDefaults = (target, defaults) => {
    return new Proxy(target, {
        get(target, property) {
            return property in target ? target[property] : defaults[property];
        }
    });
};

const settings = withDefaults({
    theme: 'dark'
}, {
    theme: 'light',
    language: 'en',
    notifications: true
});

console.log(settings.theme);         // 'dark' (from target)
console.log(settings.language);      // 'en' (from defaults)
console.log(settings.notifications); // true (from defaults)
```

**Example 3: Read-Only Object**
```javascript
const readOnly = (target) => {
    return new Proxy(target, {
        set() {
            throw new Error('Cannot modify read-only object');
        },
        deleteProperty() {
            throw new Error('Cannot delete from read-only object');
        }
    });
};

const config = readOnly({
    apiUrl: 'https://api.example.com',
    timeout: 5000
});

console.log(config.apiUrl); // OK
// config.apiUrl = 'new-url'; // Error!
```

**Example 4: Logging**
```javascript
const withLogging = (target) => {
    return new Proxy(target, {
        get(target, property) {
            console.log(`[GET] ${property}`);
            return target[property];
        },
        set(target, property, value) {
            console.log(`[SET] ${property} = ${value}`);
            target[property] = value;
            return true;
        }
    });
};

const user = withLogging({
    name: 'Alice',
    age: 25
});

user.name;      // [GET] name
user.age = 26;  // [SET] age = 26
```

**Example 5: Negative Array Indexing**
```javascript
const negativeArray = (arr) => {
    return new Proxy(arr, {
        get(target, property) {
            const index = Number(property);
            
            if (Number.isInteger(index) && index < 0) {
                return target[target.length + index];
            }
            
            return target[property];
        }
    });
};

const arr = negativeArray([1, 2, 3, 4, 5]);

console.log(arr[-1]); // 5 (last element)
console.log(arr[-2]); // 4 (second to last)
```

---

## Reflect API

### What is Reflect?

**Reflect** provides methods for interceptable JavaScript operations.

### Why Use Reflect?

- More consistent API
- Better error handling
- Works well with Proxies

### Common Methods

```javascript
const obj = { name: 'Alice', age: 25 };

// Get property
console.log(Reflect.get(obj, 'name')); // 'Alice'

// Set property
Reflect.set(obj, 'age', 26);
console.log(obj.age); // 26

// Has property
console.log(Reflect.has(obj, 'name')); // true

// Delete property
Reflect.deleteProperty(obj, 'age');
console.log(obj.age); // undefined

// Get property names
console.log(Reflect.ownKeys(obj)); // ['name']
```

### Using with Proxies

```javascript
const handler = {
    get(target, property, receiver) {
        console.log(`Getting ${property}`);
        return Reflect.get(target, property, receiver);
    },
    
    set(target, property, value, receiver) {
        console.log(`Setting ${property} to ${value}`);
        return Reflect.set(target, property, value, receiver);
    }
};

const person = new Proxy({ name: 'Alice' }, handler);

person.name;      // Getting name
person.age = 25;  // Setting age to 25
```

---

## Symbols

### What are Symbols?

**Symbols** are unique, immutable identifiers.

### Creating Symbols

```javascript
const sym1 = Symbol();
const sym2 = Symbol();

console.log(sym1 === sym2); // false (each is unique)

const sym3 = Symbol('description');
console.log(sym3.toString()); // Symbol(description)
```

### Use Cases

**Example 1: Private Properties**
```javascript
const _private = Symbol('private');

class MyClass {
    constructor() {
        this[_private] = 'secret data';
        this.public = 'public data';
    }
    
    getPrivate() {
        return this[_private];
    }
}

const obj = new MyClass();
console.log(obj.public);        // 'public data'
console.log(obj.getPrivate());  // 'secret data'
console.log(obj[_private]);     // undefined (can't access without symbol)
```

**Example 2: Custom Iterator**
```javascript
const myIterable = {
    data: [1, 2, 3],
    
    [Symbol.iterator]() {
        let index = 0;
        const data = this.data;
        
        return {
            next() {
                if (index < data.length) {
                    return { value: data[index++], done: false };
                } else {
                    return { done: true };
                }
            }
        };
    }
};

for (const item of myIterable) {
    console.log(item);
}
// 1, 2, 3
```

**Example 3: Well-Known Symbols**
```javascript
class Collection {
    constructor(items) {
        this.items = items;
    }
    
    [Symbol.iterator]() {
        let index = 0;
        const items = this.items;
        
        return {
            next() {
                if (index < items.length) {
                    return { value: items[index++], done: false };
                }
                return { done: true };
            }
        };
    }
    
    get [Symbol.toStringTag]() {
        return 'Collection';
    }
}

const collection = new Collection([1, 2, 3]);

console.log(Object.prototype.toString.call(collection));
// [object Collection]

for (const item of collection) {
    console.log(item);
}
```

---

## WeakMap and WeakSet

### What are WeakMap and WeakSet?

**WeakMap** and **WeakSet** are collections that don't prevent garbage collection of their keys/values.

### WeakMap

```javascript
const weakMap = new WeakMap();

let obj = { name: 'Alice' };

weakMap.set(obj, 'some data');
console.log(weakMap.get(obj)); // 'some data'

obj = null; // Object can now be garbage collected
```

### Practical Example: Private Data

```javascript
const privateData = new WeakMap();

class Person {
    constructor(name, age) {
        this.name = name;
        privateData.set(this, { age });
    }
    
    getAge() {
        return privateData.get(this).age;
    }
    
    setAge(age) {
        privateData.get(this).age = age;
    }
}

const person = new Person('Alice', 25);
console.log(person.name);     // 'Alice'
console.log(person.getAge()); // 25
console.log(person.age);      // undefined (private!)
```

### WeakSet

```javascript
const weakSet = new WeakSet();

let obj1 = { id: 1 };
let obj2 = { id: 2 };

weakSet.add(obj1);
weakSet.add(obj2);

console.log(weakSet.has(obj1)); // true

obj1 = null; // Can be garbage collected
```

### Practical Example: Tracking Objects

```javascript
const processedItems = new WeakSet();

function processItem(item) {
    if (processedItems.has(item)) {
        console.log('Already processed');
        return;
    }
    
    console.log('Processing item...');
    // Process the item
    
    processedItems.add(item);
}

const item1 = { id: 1 };
const item2 = { id: 2 };

processItem(item1); // Processing item...
processItem(item1); // Already processed
processItem(item2); // Processing item...
```

---

## Advanced Async Patterns

### Async Iterators

```javascript
async function* asyncGenerator() {
    yield await Promise.resolve(1);
    yield await Promise.resolve(2);
    yield await Promise.resolve(3);
}

(async () => {
    for await (const num of asyncGenerator()) {
        console.log(num);
    }
})();
// 1, 2, 3
```

### Practical Example: Paginated API

```javascript
async function* fetchPages(url) {
    let page = 1;
    let hasMore = true;
    
    while (hasMore) {
        const response = await fetch(`${url}?page=${page}`);
        const data = await response.json();
        
        yield data.items;
        
        hasMore = data.hasMore;
        page++;
    }
}

(async () => {
    for await (const items of fetchPages('/api/items')) {
        console.log('Page items:', items);
    }
})();
```

### Promise Combinators

**Promise.allSettled:**
```javascript
const promises = [
    Promise.resolve(1),
    Promise.reject('error'),
    Promise.resolve(3)
];

const results = await Promise.allSettled(promises);

results.forEach(result => {
    if (result.status === 'fulfilled') {
        console.log('Success:', result.value);
    } else {
        console.log('Error:', result.reason);
    }
});
```

**Promise.any:**
```javascript
const promises = [
    fetch('/api/server1'),
    fetch('/api/server2'),
    fetch('/api/server3')
];

try {
    const first = await Promise.any(promises);
    console.log('First successful response:', first);
} catch (error) {
    console.log('All requests failed');
}
```

---

## Best Practices

### 1. Use Generators for Lazy Evaluation

```javascript
// ✅ Good - lazy evaluation
function* range(start, end) {
    for (let i = start; i <= end; i++) {
        yield i;
    }
}

// Only generates values as needed
for (const num of range(1, 1000000)) {
    if (num > 10) break; // Stops early
}
```

### 2. Use Proxies Sparingly

```javascript
// ✅ Good - clear use case
const validated = new Proxy(obj, validationHandler);

// ❌ Bad - unnecessary complexity
const simple = new Proxy(obj, {
    get: (t, p) => t[p] // Just use obj directly!
});
```

### 3. Use WeakMap for Private Data

```javascript
// ✅ Good - memory efficient
const privateData = new WeakMap();

class MyClass {
    constructor(secret) {
        privateData.set(this, secret);
    }
}
```

### 4. Use Symbols for Unique Keys

```javascript
// ✅ Good - guaranteed unique
const ID = Symbol('id');

const obj = {
    [ID]: 123,
    name: 'Alice'
};
```

---

## Practice Exercises

### Exercise 1: Create a Generator
```javascript
// Create a generator that yields even numbers up to n

// Your code here:
```

### Exercise 2: Make Object Iterable
```javascript
// Make this object iterable using Symbol.iterator

const obj = {
    items: [1, 2, 3, 4, 5]
};

// Your code here:
```

### Exercise 3: Create a Proxy
```javascript
// Create a proxy that logs all property access

// Your code here:
```

### Exercise 4: Use WeakMap
```javascript
// Create a class with private data using WeakMap

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Generators** - Pausable functions, lazy evaluation
2. **Iterators** - Custom iteration protocols
3. **Proxies** - Intercept object operations
4. **Reflect** - Meta-programming API
5. **Symbols** - Unique identifiers
6. **WeakMap/WeakSet** - Memory-efficient collections
7. **Async Iterators** - Async iteration
8. **Use wisely** - Don't overcomplicate

### Congratulations!

You've completed the entire JavaScript curriculum from **Basic to Expert**! You now have:

- ✅ Solid fundamentals
- ✅ Intermediate skills
- ✅ Advanced knowledge
- ✅ Expert-level techniques

### What's Next?

1. **Practice** - Build projects
2. **Review** - Go back to earlier lessons
3. **Specialize** - Choose a framework (React, Vue, Node.js)
4. **Contribute** - Open source projects
5. **Keep Learning** - JavaScript evolves constantly

---

## Quick Reference

```javascript
// Generator
function* gen() {
    yield 1;
    yield 2;
}

// Iterator
obj[Symbol.iterator] = function*() {
    yield* this.items;
};

// Proxy
new Proxy(obj, {
    get(target, prop) {
        return target[prop];
    }
});

// Reflect
Reflect.get(obj, 'prop');

// Symbol
const sym = Symbol('desc');

// WeakMap
const wm = new WeakMap();
wm.set(obj, data);

// Async Iterator
async function* asyncGen() {
    yield await promise;
}
```

**Congratulations!** You've completed the entire JavaScript learning curriculum! 🎉

Keep practicing, keep building, and keep learning. You've got this! 💪
