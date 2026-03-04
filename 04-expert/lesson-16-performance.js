// ============================================
// LESSON 16: PERFORMANCE OPTIMIZATION
// ============================================

// MEASURING PERFORMANCE
// ============================================

// console.time / console.timeEnd
console.time("operation");
let sum = 0;
for (let i = 0; i < 1000000; i++) {
    sum += i;
}
console.timeEnd("operation");

// performance.now()
const start = performance.now();
// ... some operation
const end = performance.now();
console.log(`Operation took ${end - start}ms`);

// Benchmark function
function benchmark(fn, iterations = 1000) {
    const start = performance.now();
    for (let i = 0; i < iterations; i++) {
        fn();
    }
    const end = performance.now();
    return (end - start) / iterations;
}

// ALGORITHM OPTIMIZATION
// ============================================

// Bad: O(n²)
function hasDuplicatesSlow(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] === arr[j]) return true;
        }
    }
    return false;
}

// Good: O(n)
function hasDuplicatesFast(arr) {
    const seen = new Set();
    for (const item of arr) {
        if (seen.has(item)) return true;
        seen.add(item);
    }
    return false;
}

const testArray = Array.from({length: 10000}, (_, i) => i);
console.log("Slow:", benchmark(() => hasDuplicatesSlow(testArray.slice(0, 100))));
console.log("Fast:", benchmark(() => hasDuplicatesFast(testArray)));

// LOOP OPTIMIZATION
// ============================================

const numbers = Array.from({length: 1000000}, (_, i) => i);

// Cache array length
console.time("cached length");
for (let i = 0, len = numbers.length; i < len; i++) {
    // Process
}
console.timeEnd("cached length");

// Use appropriate loop
console.time("for...of");
for (const num of numbers) {
    // Process
}
console.timeEnd("for...of");

// Avoid unnecessary operations in loops
// Bad
const results1 = [];
for (let i = 0; i < numbers.length; i++) {
    results1.push(numbers[i] * 2);
}

// Good: Pre-allocate array
const results2 = new Array(numbers.length);
for (let i = 0; i < numbers.length; i++) {
    results2[i] = numbers[i] * 2;
}

// DEBOUNCING
// ============================================

// Delays function execution until after wait time

function debounce(fn, delay) {
    let timeoutId;
    
    return function(...args) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
            fn.apply(this, args);
        }, delay);
    };
}

// Usage: Search input
const search = debounce((query) => {
    console.log(`Searching for: ${query}`);
}, 300);

// Only executes after user stops typing for 300ms
// search("h");
// search("he");
// search("hel");
// search("hello"); // Only this executes

// THROTTLING
// ============================================

// Limits function execution to once per time period

function throttle(fn, limit) {
    let inThrottle;
    
    return function(...args) {
        if (!inThrottle) {
            fn.apply(this, args);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    };
}

// Usage: Scroll event
const handleScroll = throttle(() => {
    console.log("Scroll event handled");
}, 1000);

// Executes at most once per second
// window.addEventListener("scroll", handleScroll);

// MEMOIZATION FOR PERFORMANCE
// ============================================

function memoize(fn) {
    const cache = new Map();
    
    return function(...args) {
        const key = JSON.stringify(args);
        
        if (cache.has(key)) {
            return cache.get(key);
        }
        
        const result = fn(...args);
        cache.set(key, result);
        return result;
    };
}

// Expensive calculation
function fibonacci(n) {
    if (n <= 1) return n;
    return fibonacci(n - 1) + fibonacci(n - 2);
}

const fastFib = memoize(fibonacci);

console.time("first call");
console.log(fastFib(30));
console.timeEnd("first call");

console.time("cached call");
console.log(fastFib(30));
console.timeEnd("cached call");

// LAZY LOADING
// ============================================

// Load resources only when needed

class LazyValue {
    constructor(initializer) {
        this.initializer = initializer;
        this.value = null;
        this.initialized = false;
    }
    
    get() {
        if (!this.initialized) {
            this.value = this.initializer();
            this.initialized = true;
        }
        return this.value;
    }
}

const expensiveData = new LazyValue(() => {
    console.log("Computing expensive data...");
    return Array.from({length: 1000000}, (_, i) => i);
});

// Data not computed yet
console.log("Before access");

// Data computed on first access
console.log("First access:", expensiveData.get().length);

// Uses cached value
console.log("Second access:", expensiveData.get().length);

// OBJECT POOLING
// ============================================

// Reuse objects instead of creating new ones

class ObjectPool {
    constructor(factory, reset) {
        this.factory = factory;
        this.reset = reset;
        this.pool = [];
    }
    
    acquire() {
        return this.pool.length > 0
            ? this.pool.pop()
            : this.factory();
    }
    
    release(obj) {
        this.reset(obj);
        this.pool.push(obj);
    }
}

// Example: Vector pool
const vectorPool = new ObjectPool(
    () => ({x: 0, y: 0}),
    (v) => { v.x = 0; v.y = 0; }
);

const v1 = vectorPool.acquire();
v1.x = 10;
v1.y = 20;
vectorPool.release(v1);

const v2 = vectorPool.acquire(); // Reuses v1
console.log(v2); // {x: 0, y: 0}

// VIRTUAL SCROLLING
// ============================================

// Render only visible items in large lists

class VirtualList {
    constructor(items, itemHeight, containerHeight) {
        this.items = items;
        this.itemHeight = itemHeight;
        this.containerHeight = containerHeight;
        this.scrollTop = 0;
    }
    
    getVisibleItems() {
        const startIndex = Math.floor(this.scrollTop / this.itemHeight);
        const endIndex = Math.ceil(
            (this.scrollTop + this.containerHeight) / this.itemHeight
        );
        
        return {
            items: this.items.slice(startIndex, endIndex),
            startIndex,
            offsetY: startIndex * this.itemHeight
        };
    }
    
    setScrollTop(scrollTop) {
        this.scrollTop = scrollTop;
    }
}

const largeList = Array.from({length: 100000}, (_, i) => `Item ${i}`);
const virtualList = new VirtualList(largeList, 50, 500);

console.log(virtualList.getVisibleItems());

// WEB WORKERS
// ============================================

// Run expensive operations in background thread

// Main thread
// const worker = new Worker('worker.js');

// worker.postMessage({data: largeArray});

// worker.onmessage = (e) => {
//     console.log('Result from worker:', e.data);
// };

// worker.js
// self.onmessage = (e) => {
//     const result = expensiveOperation(e.data);
//     self.postMessage(result);
// };

// REQUEST ANIMATION FRAME
// ============================================

// Optimize animations

function animate() {
    // Update animation
    requestAnimationFrame(animate);
}

// Better than setInterval for animations
// requestAnimationFrame(animate);

// BATCH DOM UPDATES
// ============================================

// Bad: Multiple reflows
function updateDOMBad(items) {
    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        document.body.appendChild(div); // Reflow each time!
    });
}

// Good: Single reflow
function updateDOMGood(items) {
    const fragment = document.createDocumentFragment();
    items.forEach(item => {
        const div = document.createElement('div');
        div.textContent = item;
        fragment.appendChild(div);
    });
    document.body.appendChild(fragment); // Single reflow
}

// EVENT DELEGATION
// ============================================

// Bad: Multiple event listeners
// items.forEach(item => {
//     item.addEventListener('click', handleClick);
// });

// Good: Single event listener on parent
// parent.addEventListener('click', (e) => {
//     if (e.target.matches('.item')) {
//         handleClick(e);
//     }
// });

// MEMORY OPTIMIZATION
// ============================================

// Avoid memory leaks

// Bad: Keeps reference
let cache = {};
function addToCache(key, value) {
    cache[key] = value;
}

// Good: Use WeakMap for garbage collection
const weakCache = new WeakMap();
function addToWeakCache(key, value) {
    weakCache.set(key, value);
}

// Clean up event listeners
// const element = document.getElementById('button');
// const handler = () => console.log('clicked');
// element.addEventListener('click', handler);
// element.removeEventListener('click', handler); // Clean up!

// TREE SHAKING
// ============================================

// Import only what you need

// Bad
// import * as _ from 'lodash';

// Good
// import { debounce, throttle } from 'lodash';

// CODE SPLITTING
// ============================================

// Load code on demand

// Dynamic import
async function loadModule() {
    const module = await import('./heavy-module.js');
    module.doSomething();
}

// COMPRESSION
// ============================================

// Minimize data transfer

// Use appropriate data structures
// Bad: Array of objects
const data1 = [
    {name: "John", age: 30},
    {name: "Jane", age: 25}
];

// Good: Separate arrays (better compression)
const data2 = {
    names: ["John", "Jane"],
    ages: [30, 25]
};

// PERFORMANCE BEST PRACTICES
// ============================================

// 1. Use const/let instead of var
// 2. Avoid global variables
// 3. Use strict mode
// 4. Minimize DOM access
// 5. Cache DOM queries
// 6. Use event delegation
// 7. Debounce/throttle expensive operations
// 8. Use Web Workers for heavy computations
// 9. Lazy load resources
// 10. Optimize images and assets

// PROFILING
// ============================================

// Chrome DevTools Performance tab
// console.profile('myProfile');
// // Code to profile
// console.profileEnd('myProfile');

// Memory profiling
// console.memory.usedJSHeapSize
// console.memory.totalJSHeapSize

// ============================================
// EXERCISES
// ============================================

// 1. Optimize this function to find duplicates
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
// YOUR OPTIMIZED CODE HERE:

// 2. Create a debounced search function
// YOUR CODE HERE:

// 3. Implement a memoized recursive function
// YOUR CODE HERE:

// 4. Create an object pool for reusable objects
// YOUR CODE HERE:

// 5. Implement virtual scrolling for a large list
// YOUR CODE HERE:

// 6. Optimize this loop
const arr = Array.from({length: 100000}, (_, i) => i);
const results = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        results.push(arr[i] * 2);
    }
}
// YOUR OPTIMIZED CODE HERE:
