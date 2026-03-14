# Lesson 11: Asynchronous Programming - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Synchronous vs Asynchronous](#synchronous-vs-asynchronous)
3. [setTimeout and setInterval](#settimeout-and-setinterval)
4. [Callbacks](#callbacks)
5. [Callback Hell](#callback-hell)
6. [Promises](#promises)
7. [Async/Await](#asyncawait)
8. [Error Handling](#error-handling)
9. [Practical Examples](#practical-examples)
10. [Best Practices](#best-practices)
11. [Common Mistakes](#common-mistakes)
12. [Practice Exercises](#practice-exercises)

---

## Introduction

### What is Asynchronous Programming?

**Asynchronous** means "not happening at the same time." In programming, it allows your code to do multiple things without waiting for each task to finish.

### Real-World Analogy

**Synchronous (Blocking):**
```
You're at a restaurant:
1. Order food
2. WAIT until food is ready (can't do anything else)
3. Eat food
4. Pay bill
```

**Asynchronous (Non-Blocking):**
```
You're at a restaurant:
1. Order food
2. While food is cooking, you can:
   - Check your phone
   - Talk to friends
   - Read a menu
3. When food arrives, eat it
4. Pay bill
```

### Why Do We Need Async?

**Without async:**
- App freezes while waiting
- Poor user experience
- Can't handle multiple tasks

**With async:**
- App stays responsive
- Handle multiple operations
- Better performance

---

## Synchronous vs Asynchronous

### Synchronous Code

**Executes line by line, one at a time:**

```javascript
console.log("First");
console.log("Second");
console.log("Third");

// Output (in order):
// First
// Second
// Third
```

### Asynchronous Code

**Some operations happen later:**

```javascript
console.log("First");

setTimeout(() => {
    console.log("Second (delayed)");
}, 1000);

console.log("Third");

// Output:
// First
// Third
// Second (delayed) ← Happens after 1 second
```

**Why?** `setTimeout` is asynchronous - it schedules code to run later, doesn't block execution.

### Real-World Example

```javascript
console.log("Ordering pizza...");

// Simulate pizza delivery (takes 3 seconds)
setTimeout(() => {
    console.log("🍕 Pizza delivered!");
}, 3000);

console.log("Watching TV while waiting...");
console.log("Checking phone...");

// Output:
// Ordering pizza...
// Watching TV while waiting...
// Checking phone...
// 🍕 Pizza delivered! (after 3 seconds)
```

---

## setTimeout and setInterval

### setTimeout - Run Once After Delay

```javascript
setTimeout(function, delay);
```

**Example:**
```javascript
console.log("Start");

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

console.log("End");

// Output:
// Start
// End
// This runs after 2 seconds (after 2000ms)
```

### Real-World Examples

**Example 1: Delayed Message**
```javascript
console.log("Processing your request...");

setTimeout(() => {
    console.log("✓ Request completed!");
}, 3000);
```

**Example 2: Auto-Logout**
```javascript
let loggedIn = true;

console.log("User logged in");

setTimeout(() => {
    loggedIn = false;
    console.log("Session expired. Please log in again.");
}, 5000); // 5 seconds
```

**Example 3: Cancel Timeout**
```javascript
const timeoutId = setTimeout(() => {
    console.log("This won't run");
}, 5000);

// Cancel it before it runs
clearTimeout(timeoutId);
console.log("Timeout cancelled");
```

### setInterval - Run Repeatedly

```javascript
setInterval(function, delay);
```

**Example:**
```javascript
let count = 0;

const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    
    if (count === 5) {
        clearInterval(intervalId);
        console.log("Stopped!");
    }
}, 1000);

// Output (every second):
// Count: 1
// Count: 2
// Count: 3
// Count: 4
// Count: 5
// Stopped!
```

### Real-World Examples

**Example 1: Clock**
```javascript
function displayTime() {
    const now = new Date();
    const time = now.toLocaleTimeString();
    console.log(time);
}

// Update every second
setInterval(displayTime, 1000);
```

**Example 2: Auto-Save**
```javascript
let data = { content: "User's work" };

setInterval(() => {
    console.log("Auto-saving...");
    // In real app, save to server
    console.log("✓ Saved!");
}, 30000); // Every 30 seconds
```

---

## Callbacks

### What is a Callback?

A **callback** is a function passed to another function to be executed later.

```javascript
function doSomething(callback) {
    console.log("Doing something...");
    callback();
}

doSomething(() => {
    console.log("Done!");
});

// Output:
// Doing something...
// Done!
```

### Real-World Examples

**Example 1: Fetch User Data**
```javascript
function fetchUser(userId, callback) {
    console.log(`Fetching user ${userId}...`);
    
    setTimeout(() => {
        const user = { id: userId, name: "Alice" };
        callback(user);
    }, 1000);
}

fetchUser(123, (user) => {
    console.log("User received:", user);
});

// Output:
// Fetching user 123...
// (1 second later)
// User received: { id: 123, name: "Alice" }
```

**Example 2: Process Data**
```javascript
function processData(data, onSuccess, onError) {
    console.log("Processing...");
    
    setTimeout(() => {
        if (data) {
            onSuccess("✓ Success!");
        } else {
            onError("✗ Error: No data");
        }
    }, 1000);
}

processData("some data",
    (result) => console.log(result),
    (error) => console.log(error)
);
```

---

## Callback Hell

### The Problem

**Nested callbacks become hard to read:**

```javascript
// ❌ Callback Hell (Pyramid of Doom)
getUser(userId, (user) => {
    getOrders(user.id, (orders) => {
        getOrderDetails(orders[0].id, (details) => {
            getPayment(details.paymentId, (payment) => {
                console.log("Finally got payment:", payment);
            });
        });
    });
});
```

**Problems:**
- Hard to read
- Hard to maintain
- Hard to handle errors
- Deeply nested

### Real-World Example

```javascript
// Simulating API calls
function step1(callback) {
    setTimeout(() => {
        console.log("Step 1 complete");
        callback();
    }, 1000);
}

function step2(callback) {
    setTimeout(() => {
        console.log("Step 2 complete");
        callback();
    }, 1000);
}

function step3(callback) {
    setTimeout(() => {
        console.log("Step 3 complete");
        callback();
    }, 1000);
}

// ❌ Callback Hell
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All done!");
        });
    });
});
```

**Solution:** Use Promises or Async/Await!

---

## Promises

### What is a Promise?

A **Promise** represents a value that will be available in the future. It's like a receipt - you get it now, but the actual item comes later.

**Three States:**
1. **Pending** - Waiting
2. **Fulfilled** - Success ✓
3. **Rejected** - Failed ✗

### Creating a Promise

```javascript
const promise = new Promise((resolve, reject) => {
    // Do async work
    
    if (success) {
        resolve(result); // Success!
    } else {
        reject(error);   // Failed!
    }
});
```

### Simple Example

```javascript
const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        
        if (success) {
            resolve("✓ Operation successful!");
        } else {
            reject("✗ Operation failed!");
        }
    }, 2000);
});

promise
    .then(result => {
        console.log(result); // ✓ Operation successful!
    })
    .catch(error => {
        console.log(error);
    });
```

### Real-World Examples

**Example 1: Fetch User**
```javascript
function fetchUser(userId) {
    return new Promise((resolve, reject) => {
        console.log(`Fetching user ${userId}...`);
        
        setTimeout(() => {
            const user = { id: userId, name: "Alice" };
            resolve(user);
        }, 1000);
    });
}

fetchUser(123)
    .then(user => {
        console.log("User:", user);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

**Example 2: Validate Login**
```javascript
function login(username, password) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (username === "admin" && password === "secret") {
                resolve({ username, token: "abc123" });
            } else {
                reject("Invalid credentials");
            }
        }, 1000);
    });
}

login("admin", "secret")
    .then(user => {
        console.log("Logged in:", user);
    })
    .catch(error => {
        console.log("Login failed:", error);
    });
```

### Promise Chaining

**Avoid callback hell with chaining:**

```javascript
fetchUser(123)
    .then(user => {
        console.log("Got user:", user.name);
        return fetchOrders(user.id);
    })
    .then(orders => {
        console.log("Got orders:", orders.length);
        return fetchOrderDetails(orders[0].id);
    })
    .then(details => {
        console.log("Got details:", details);
    })
    .catch(error => {
        console.log("Error:", error);
    });
```

### Promise.all - Run in Parallel

**Wait for multiple promises:**

```javascript
const promise1 = fetchUser(1);
const promise2 = fetchUser(2);
const promise3 = fetchUser(3);

Promise.all([promise1, promise2, promise3])
    .then(users => {
        console.log("All users:", users);
    })
    .catch(error => {
        console.log("One failed:", error);
    });
```

### Promise.race - First to Finish

```javascript
const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 3000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slow, fast])
    .then(result => {
        console.log("Winner:", result); // "Fast"
    });
```

---

## Async/Await

### What is Async/Await?

**Async/Await** makes asynchronous code look synchronous - easier to read and write!

### Basic Syntax

```javascript
async function myFunction() {
    const result = await somePromise;
    return result;
}
```

**Rules:**
1. Use `async` keyword before function
2. Use `await` keyword before promises
3. `await` only works inside `async` functions

### Simple Example

```javascript
// With Promises
function getUser() {
    return fetchUser(123)
        .then(user => {
            console.log(user);
            return user;
        });
}

// With Async/Await (cleaner!)
async function getUser() {
    const user = await fetchUser(123);
    console.log(user);
    return user;
}
```

### Real-World Examples

**Example 1: Fetch and Display User**
```javascript
async function displayUser(userId) {
    console.log("Loading...");
    
    const user = await fetchUser(userId);
    console.log(`Name: ${user.name}`);
    
    const orders = await fetchOrders(user.id);
    console.log(`Orders: ${orders.length}`);
}

displayUser(123);
```

**Example 2: Sequential Operations**
```javascript
async function processOrder() {
    console.log("Step 1: Validate order");
    await validateOrder();
    
    console.log("Step 2: Process payment");
    await processPayment();
    
    console.log("Step 3: Ship order");
    await shipOrder();
    
    console.log("✓ Order complete!");
}

processOrder();
```

**Example 3: Parallel Operations**
```javascript
async function loadDashboard() {
    console.log("Loading dashboard...");
    
    // Run in parallel
    const [user, orders, notifications] = await Promise.all([
        fetchUser(123),
        fetchOrders(123),
        fetchNotifications(123)
    ]);
    
    console.log("User:", user);
    console.log("Orders:", orders.length);
    console.log("Notifications:", notifications.length);
}

loadDashboard();
```

---

## Error Handling

### Try/Catch with Async/Await

```javascript
async function fetchData() {
    try {
        const user = await fetchUser(123);
        console.log("User:", user);
        
        const orders = await fetchOrders(user.id);
        console.log("Orders:", orders);
        
    } catch (error) {
        console.log("Error:", error);
    }
}
```

### Real-World Examples

**Example 1: API Call with Error Handling**
```javascript
async function getUserData(userId) {
    try {
        console.log("Fetching user...");
        const user = await fetchUser(userId);
        
        console.log("Fetching orders...");
        const orders = await fetchOrders(user.id);
        
        return { user, orders };
        
    } catch (error) {
        console.log("Failed to load data:", error);
        return null;
    }
}
```

**Example 2: Multiple Error Handling**
```javascript
async function processUser(userId) {
    try {
        const user = await fetchUser(userId);
        console.log("✓ User loaded");
        
        try {
            const orders = await fetchOrders(user.id);
            console.log("✓ Orders loaded");
        } catch (error) {
            console.log("⚠️ Orders failed, continuing anyway");
        }
        
        return user;
        
    } catch (error) {
        console.log("✗ Critical error:", error);
        throw error;
    }
}
```

**Example 3: Finally Block**
```javascript
async function loadData() {
    let loading = true;
    
    try {
        console.log("Loading...");
        const data = await fetchData();
        console.log("Data:", data);
        
    } catch (error) {
        console.log("Error:", error);
        
    } finally {
        loading = false;
        console.log("Loading complete");
    }
}
```

---

## Practical Examples

### Example 1: Simulated API Calls

```javascript
// Simulate API delay
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function simulateAPI() {
    console.log("Calling API...");
    await delay(2000);
    return { status: "success", data: "Hello!" };
}

async function main() {
    const result = await simulateAPI();
    console.log(result);
}

main();
```

### Example 2: Retry Logic

```javascript
async function fetchWithRetry(url, maxRetries = 3) {
    for (let i = 0; i < maxRetries; i++) {
        try {
            console.log(`Attempt ${i + 1}...`);
            const data = await fetch(url);
            return data;
        } catch (error) {
            if (i === maxRetries - 1) {
                throw error;
            }
            console.log("Retrying...");
            await delay(1000);
        }
    }
}
```

### Example 3: Timeout

```javascript
function timeout(ms) {
    return new Promise((_, reject) => {
        setTimeout(() => reject(new Error("Timeout")), ms);
    });
}

async function fetchWithTimeout(url, ms) {
    try {
        const result = await Promise.race([
            fetch(url),
            timeout(ms)
        ]);
        return result;
    } catch (error) {
        console.log("Request timed out");
        throw error;
    }
}
```

---

## Best Practices

### 1. Always Handle Errors

```javascript
// ❌ Bad - no error handling
async function getData() {
    const data = await fetchData();
    return data;
}

// ✅ Good - with error handling
async function getData() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.log("Error:", error);
        return null;
    }
}
```

### 2. Use Async/Await Over Callbacks

```javascript
// ❌ Callback hell
getData((data) => {
    processData(data, (result) => {
        saveData(result, () => {
            console.log("Done");
        });
    });
});

// ✅ Clean async/await
async function process() {
    const data = await getData();
    const result = await processData(data);
    await saveData(result);
    console.log("Done");
}
```

### 3. Run Independent Operations in Parallel

```javascript
// ❌ Sequential (slower)
const user = await fetchUser();
const posts = await fetchPosts();
const comments = await fetchComments();

// ✅ Parallel (faster)
const [user, posts, comments] = await Promise.all([
    fetchUser(),
    fetchPosts(),
    fetchComments()
]);
```

### 4. Don't Forget await

```javascript
// ❌ Wrong - forgot await
async function getData() {
    const data = fetchData(); // Returns promise, not data!
    console.log(data); // Promise object
}

// ✅ Correct
async function getData() {
    const data = await fetchData();
    console.log(data); // Actual data
}
```

---

## Common Mistakes

### Mistake 1: Using await in Non-Async Function

```javascript
// ❌ Wrong
function getData() {
    const data = await fetchData(); // Error!
}

// ✅ Correct
async function getData() {
    const data = await fetchData();
}
```

### Mistake 2: Not Returning Promise

```javascript
// ❌ Wrong
async function getData() {
    await fetchData();
    // Forgot to return!
}

// ✅ Correct
async function getData() {
    const data = await fetchData();
    return data;
}
```

### Mistake 3: Sequential When Should Be Parallel

```javascript
// ❌ Slow - runs one after another
async function loadAll() {
    const user = await fetchUser();      // Wait 1s
    const posts = await fetchPosts();    // Wait 1s
    const comments = await fetchComments(); // Wait 1s
    // Total: 3 seconds
}

// ✅ Fast - runs simultaneously
async function loadAll() {
    const [user, posts, comments] = await Promise.all([
        fetchUser(),
        fetchPosts(),
        fetchComments()
    ]);
    // Total: 1 second (all run together)
}
```

### Mistake 4: Not Handling Rejected Promises

```javascript
// ❌ Wrong - unhandled rejection
async function getData() {
    const data = await fetchData(); // If this fails, error not caught
}

// ✅ Correct
async function getData() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.log("Error:", error);
    }
}
```

---

## Practice Exercises

### Exercise 1: Create Delay Function
```javascript
// Create a function that waits for specified milliseconds

// Your code here:
```

### Exercise 2: Sequential Promises
```javascript
// Call three functions in sequence, each returns a promise

// Your code here:
```

### Exercise 3: Parallel Promises
```javascript
// Call three functions in parallel and wait for all

// Your code here:
```

### Exercise 4: Error Handling
```javascript
// Create async function with proper error handling

// Your code here:
```

---

## Summary

### Key Takeaways

1. **Asynchronous** code doesn't block execution
2. **setTimeout** runs code after delay
3. **Callbacks** are functions passed to be called later
4. **Promises** represent future values
5. **Async/Await** makes async code look synchronous
6. Always **handle errors** with try/catch
7. Use **Promise.all** for parallel operations
8. **await** only works in async functions

### What's Next?

Now that you understand async programming, you're ready to learn about **Object-Oriented Programming** - how to organize code with classes!

---

## Quick Reference

```javascript
// setTimeout
setTimeout(() => console.log("Later"), 1000);

// Promise
const promise = new Promise((resolve, reject) => {
    if (success) resolve(data);
    else reject(error);
});

promise
    .then(data => console.log(data))
    .catch(error => console.log(error));

// Async/Await
async function getData() {
    try {
        const data = await fetchData();
        return data;
    } catch (error) {
        console.log(error);
    }
}

// Promise.all
const [a, b, c] = await Promise.all([
    fetchA(),
    fetchB(),
    fetchC()
]);
```

**Congratulations!** You've completed Lesson 11. Practice async programming!
