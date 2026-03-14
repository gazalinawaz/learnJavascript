# Lesson 16: Performance Optimization - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Measuring Performance](#measuring-performance)
3. [Algorithm Optimization](#algorithm-optimization)
4. [Debouncing and Throttling](#debouncing-and-throttling)
5. [Memoization](#memoization)
6. [Lazy Loading](#lazy-loading)
7. [DOM Optimization](#dom-optimization)
8. [Memory Management](#memory-management)
9. [Best Practices](#best-practices)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What is Performance Optimization?

**Performance optimization** makes your code run faster and use less resources (memory, CPU, network).

### Why Optimize?

**Benefits:**
- Faster user experience
- Lower server costs
- Better mobile performance
- Higher user satisfaction
- Better SEO rankings

### When to Optimize?

**Remember:** "Premature optimization is the root of all evil"

1. **First:** Make it work
2. **Second:** Make it right
3. **Third:** Make it fast (if needed)

---

## Measuring Performance

### console.time()

```javascript
console.time("operation");

// Code to measure
for (let i = 0; i < 1000000; i++) {
    // Some operation
}

console.timeEnd("operation");
// operation: 5.234ms
```

### performance.now()

```javascript
const start = performance.now();

// Code to measure
for (let i = 0; i < 1000000; i++) {
    // Some operation
}

const end = performance.now();
console.log(`Time: ${end - start}ms`);
```

### Benchmarking Function

```javascript
function benchmark(fn, iterations = 1000) {
    const start = performance.now();
    
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    
    const end = performance.now();
    const total = end - start;
    const average = total / iterations;
    
    console.log(`Total: ${total.toFixed(2)}ms`);
    console.log(`Average: ${average.toFixed(4)}ms`);
}

// Usage
benchmark(() => {
    const arr = [1, 2, 3, 4, 5];
    arr.map(n => n * 2);
}, 10000);
```

### Comparing Approaches

```javascript
function comparePerformance(fn1, fn2, iterations = 1000) {
    console.log("Testing Function 1...");
    const start1 = performance.now();
    for (let i = 0; i < iterations; i++) fn1();
    const time1 = performance.now() - start1;
    
    console.log("Testing Function 2...");
    const start2 = performance.now();
    for (let i = 0; i < iterations; i++) fn2();
    const time2 = performance.now() - start2;
    
    console.log(`Function 1: ${time1.toFixed(2)}ms`);
    console.log(`Function 2: ${time2.toFixed(2)}ms`);
    console.log(`Winner: Function ${time1 < time2 ? 1 : 2} (${Math.abs(time1 - time2).toFixed(2)}ms faster)`);
}

// Example
comparePerformance(
    () => [1, 2, 3].concat([4, 5, 6]),
    () => [...[1, 2, 3], ...[4, 5, 6]],
    100000
);
```

---

## Algorithm Optimization

### Big O Notation Basics

**Time Complexity:**
- **O(1)** - Constant (best)
- **O(log n)** - Logarithmic (good)
- **O(n)** - Linear (okay)
- **O(n log n)** - Linearithmic (acceptable)
- **O(n²)** - Quadratic (slow)
- **O(2ⁿ)** - Exponential (very slow)

### Example: Finding Duplicates

**❌ Slow - O(n²):**
```javascript
function findDuplicates(arr) {
    const duplicates = [];
    
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    
    return duplicates;
}
```

**✅ Fast - O(n):**
```javascript
function findDuplicates(arr) {
    const seen = new Set();
    const duplicates = new Set();
    
    for (const item of arr) {
        if (seen.has(item)) {
            duplicates.add(item);
        } else {
            seen.add(item);
        }
    }
    
    return Array.from(duplicates);
}
```

### Example: Sum of Array

**❌ Slow - O(n²):**
```javascript
function sum(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j <= i; j++) {
            if (j === i) total += arr[i];
        }
    }
    return total;
}
```

**✅ Fast - O(n):**
```javascript
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}
```

### Loop Optimization

**❌ Slow:**
```javascript
for (let i = 0; i < arr.length; i++) {
    // arr.length calculated every iteration
}
```

**✅ Fast:**
```javascript
const len = arr.length;
for (let i = 0; i < len; i++) {
    // Length cached
}

// Or even better
for (const item of arr) {
    // Cleaner and fast
}
```

---

## Debouncing and Throttling

### Debouncing

**Debouncing** delays function execution until after a pause in events.

**Use Case:** Search input - wait until user stops typing

```javascript
function debounce(func, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        
        timeoutId = setTimeout(() => {
            func.apply(this, args);
        }, delay);
    };
}

// Usage
const searchInput = document.getElementById('search');

const handleSearch = debounce((event) => {
    console.log('Searching for:', event.target.value);
    // Make API call
}, 500);

searchInput.addEventListener('input', handleSearch);
```

**How it works:**
```
User types: h
Wait 500ms...
User types: e (reset timer)
Wait 500ms...
User types: l (reset timer)
Wait 500ms...
User types: l (reset timer)
Wait 500ms...
User types: o (reset timer)
Wait 500ms...
(No more typing)
Execute search for "hello"
```

### Throttling

**Throttling** limits function execution to once per time period.

**Use Case:** Scroll events - execute at most once per 100ms

```javascript
function throttle(func, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            func.apply(this, args);
            inThrottle = true;
            
            setTimeout(() => {
                inThrottle = false;
            }, limit);
        }
    };
}

// Usage
const handleScroll = throttle(() => {
    console.log('Scroll position:', window.scrollY);
}, 100);

window.addEventListener('scroll', handleScroll);
```

**How it works:**
```
Event fires → Execute immediately
Event fires (50ms later) → Ignore (within 100ms)
Event fires (80ms later) → Ignore (within 100ms)
Event fires (120ms later) → Execute (100ms passed)
```

### Practical Examples

**Example 1: Window Resize**
```javascript
const handleResize = debounce(() => {
    console.log('Window resized to:', window.innerWidth);
    // Recalculate layout
}, 250);

window.addEventListener('resize', handleResize);
```

**Example 2: Infinite Scroll**
```javascript
const loadMore = throttle(() => {
    const scrollPosition = window.scrollY + window.innerHeight;
    const pageHeight = document.documentElement.scrollHeight;
    
    if (scrollPosition >= pageHeight - 100) {
        console.log('Loading more content...');
        // Load more items
    }
}, 200);

window.addEventListener('scroll', loadMore);
```

---

## Memoization

### What is Memoization?

**Memoization** caches function results to avoid recalculating.

### Basic Implementation

```javascript
function memoize(fn) {
    const cache = {};
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache[key]) {
            console.log('From cache');
            return cache[key];
        }
        
        console.log('Calculating...');
        const result = fn(...args);
        cache[key] = result;
        return result;
    };
}

// Usage
const expensiveCalculation = (n) => {
    let result = 0;
    for (let i = 0; i < n * 1000000; i++) {
        result += i;
    }
    return result;
};

const memoized = memoize(expensiveCalculation);

console.log(memoized(10)); // Calculating... (slow)
console.log(memoized(10)); // From cache (instant!)
console.log(memoized(20)); // Calculating... (slow)
console.log(memoized(20)); // From cache (instant!)
```

### Fibonacci with Memoization

**❌ Slow - O(2ⁿ):**
```javascript
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

console.time('fib');
console.log(fibonacci(40)); // Very slow!
console.timeEnd('fib');
```

**✅ Fast - O(n):**
```javascript
const fibonacci = (function() {
    const cache = {};
    
    return function fib(n) {
        if (n <= 1) return n;
        
        if (cache[n]) {
            return cache[n];
        }
        
        cache[n] = fib(n - 1) + fib(n - 2);
        return cache[n];
    };
})();

console.time('fib');
console.log(fibonacci(40)); // Fast!
console.timeEnd('fib');
```

### Practical Example

```javascript
const fetchUser = memoize(async (userId) => {
    console.log(`Fetching user ${userId}...`);
    const response = await fetch(`/api/users/${userId}`);
    return response.json();
});

// First call - fetches from API
await fetchUser(123);

// Second call - returns cached result
await fetchUser(123);
```

---

## Lazy Loading

### What is Lazy Loading?

**Lazy loading** delays loading resources until they're needed.

### Image Lazy Loading

```javascript
// HTML
// <img data-src="image.jpg" class="lazy" alt="Description">

const lazyImages = document.querySelectorAll('img.lazy');

const imageObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const img = entry.target;
            img.src = img.dataset.src;
            img.classList.remove('lazy');
            imageObserver.unobserve(img);
        }
    });
});

lazyImages.forEach(img => imageObserver.observe(img));
```

### Module Lazy Loading

```javascript
// Load module only when needed
document.getElementById('loadButton').addEventListener('click', async () => {
    const module = await import('./heavy-module.js');
    module.initialize();
});
```

### Component Lazy Loading

```javascript
class LazyComponent {
    constructor() {
        this.loaded = false;
        this.component = null;
    }
    
    async load() {
        if (this.loaded) {
            return this.component;
        }
        
        console.log('Loading component...');
        const module = await import('./component.js');
        this.component = new module.default();
        this.loaded = true;
        
        return this.component;
    }
}

const lazyComp = new LazyComponent();

// Load when needed
document.getElementById('showComponent').addEventListener('click', async () => {
    const component = await lazyComp.load();
    component.render();
});
```

---

## DOM Optimization

### Batch DOM Updates

**❌ Slow - Multiple reflows:**
```javascript
const list = document.getElementById('list');

for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    list.appendChild(li); // Reflow for each item!
}
```

**✅ Fast - Single reflow:**
```javascript
const list = document.getElementById('list');
const fragment = document.createDocumentFragment();

for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    fragment.appendChild(li);
}

list.appendChild(fragment); // Single reflow!
```

### Event Delegation

**❌ Slow - Multiple listeners:**
```javascript
const buttons = document.querySelectorAll('.button');

buttons.forEach(button => {
    button.addEventListener('click', handleClick);
});
```

**✅ Fast - Single listener:**
```javascript
document.getElementById('container').addEventListener('click', (e) => {
    if (e.target.classList.contains('button')) {
        handleClick(e);
    }
});
```

### Virtual Scrolling

```javascript
class VirtualList {
    constructor(container, items, itemHeight) {
        this.container = container;
        this.items = items;
        this.itemHeight = itemHeight;
        this.visibleCount = Math.ceil(container.clientHeight / itemHeight);
        this.startIndex = 0;
        
        this.render();
        this.container.addEventListener('scroll', () => this.onScroll());
    }
    
    onScroll() {
        const scrollTop = this.container.scrollTop;
        this.startIndex = Math.floor(scrollTop / this.itemHeight);
        this.render();
    }
    
    render() {
        const endIndex = this.startIndex + this.visibleCount;
        const visibleItems = this.items.slice(this.startIndex, endIndex);
        
        this.container.innerHTML = '';
        this.container.style.height = `${this.items.length * this.itemHeight}px`;
        
        visibleItems.forEach((item, index) => {
            const div = document.createElement('div');
            div.textContent = item;
            div.style.position = 'absolute';
            div.style.top = `${(this.startIndex + index) * this.itemHeight}px`;
            div.style.height = `${this.itemHeight}px`;
            this.container.appendChild(div);
        });
    }
}

// Usage
const items = Array.from({ length: 10000 }, (_, i) => `Item ${i}`);
const list = new VirtualList(document.getElementById('list'), items, 30);
```

---

## Memory Management

### Avoid Memory Leaks

**❌ Memory Leak - Event Listener:**
```javascript
function createButton() {
    const button = document.createElement('button');
    const data = new Array(1000000); // Large data
    
    button.addEventListener('click', () => {
        console.log(data.length); // Keeps data in memory!
    });
    
    return button;
}
```

**✅ Fixed:**
```javascript
function createButton() {
    const button = document.createElement('button');
    const data = new Array(1000000);
    const dataLength = data.length; // Store only what's needed
    
    button.addEventListener('click', () => {
        console.log(dataLength);
    });
    
    return button;
}
```

### WeakMap for Caching

```javascript
// Regular Map keeps references
const cache = new Map();

function process(obj) {
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    
    const result = expensiveOperation(obj);
    cache.set(obj, result);
    return result;
}

// WeakMap allows garbage collection
const cache = new WeakMap();

function process(obj) {
    if (cache.has(obj)) {
        return cache.get(obj);
    }
    
    const result = expensiveOperation(obj);
    cache.set(obj, result);
    return result;
}
// When obj is no longer referenced, it can be garbage collected
```

### Object Pooling

```javascript
class ObjectPool {
    constructor(createFn, resetFn) {
        this.createFn = createFn;
        this.resetFn = resetFn;
        this.pool = [];
    }
    
    acquire() {
        if (this.pool.length > 0) {
            return this.pool.pop();
        }
        return this.createFn();
    }
    
    release(obj) {
        this.resetFn(obj);
        this.pool.push(obj);
    }
}

// Usage
const particlePool = new ObjectPool(
    () => ({ x: 0, y: 0, vx: 0, vy: 0 }),
    (particle) => {
        particle.x = 0;
        particle.y = 0;
        particle.vx = 0;
        particle.vy = 0;
    }
);

// Get particle from pool instead of creating new
const particle = particlePool.acquire();
particle.x = 100;
particle.y = 200;

// Return to pool when done
particlePool.release(particle);
```

---

## Best Practices

### 1. Measure Before Optimizing

```javascript
// ✅ Good - measure first
console.time('operation');
const result = expensiveOperation();
console.timeEnd('operation');

// Then optimize if needed
```

### 2. Use Appropriate Data Structures

```javascript
// ❌ Slow - Array lookup O(n)
const users = [{ id: 1 }, { id: 2 }, { id: 3 }];
const user = users.find(u => u.id === 2);

// ✅ Fast - Map lookup O(1)
const users = new Map([
    [1, { id: 1 }],
    [2, { id: 2 }],
    [3, { id: 3 }]
]);
const user = users.get(2);
```

### 3. Avoid Premature Optimization

```javascript
// ✅ Good - clear and simple
function sum(arr) {
    return arr.reduce((total, num) => total + num, 0);
}

// ❌ Bad - over-optimized, hard to read
function sum(arr) {
    let total = 0;
    const len = arr.length;
    for (let i = 0; i < len; ++i) {
        total += arr[i];
    }
    return total;
}
// Only optimize if profiling shows it's a bottleneck
```

### 4. Cache Expensive Calculations

```javascript
// ✅ Good
const expensiveResult = memoize(expensiveCalculation);

// Use cached result
const result1 = expensiveResult(10);
const result2 = expensiveResult(10); // From cache
```

---

## Practice Exercises

### Exercise 1: Optimize This Function
```javascript
// Optimize this function
function findDuplicates(arr) {
    const duplicates = [];
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j] && !duplicates.includes(arr[i])) {
                duplicates.push(arr[i]);
            }
        }
    }
    return duplicates;
}

// Your optimized version:
```

### Exercise 2: Create Debounce Function
```javascript
// Implement your own debounce function

// Your code here:
```

### Exercise 3: Memoize Factorial
```javascript
// Create a memoized factorial function

// Your code here:
```

### Exercise 4: Optimize DOM Updates
```javascript
// Optimize this code that adds 1000 items to a list

const list = document.getElementById('list');
for (let i = 0; i < 1000; i++) {
    const li = document.createElement('li');
    li.textContent = `Item ${i}`;
    list.appendChild(li);
}

// Your optimized version:
```

---

## Summary

### Key Takeaways

1. **Measure** before optimizing
2. **Algorithm choice** matters most
3. **Debounce** for delayed execution
4. **Throttle** for rate limiting
5. **Memoize** expensive calculations
6. **Lazy load** resources
7. **Batch** DOM updates
8. **Manage** memory carefully
9. **Don't** optimize prematurely
10. **Profile** to find bottlenecks

### What's Next?

Now that you understand performance optimization, you're ready for the final lesson on **Advanced JavaScript Concepts** - cutting-edge features and techniques!

---

## Quick Reference

```javascript
// Measure
console.time('label');
// code
console.timeEnd('label');

// Debounce
const debounced = debounce(fn, 500);

// Throttle
const throttled = throttle(fn, 100);

// Memoize
const memoized = memoize(fn);

// Batch DOM
const fragment = document.createDocumentFragment();
// add elements to fragment
container.appendChild(fragment);

// Event Delegation
container.addEventListener('click', (e) => {
    if (e.target.matches('.button')) {
        // handle
    }
});

// WeakMap
const cache = new WeakMap();
```

**Congratulations!** You've completed Lesson 16. One more lesson to go!
