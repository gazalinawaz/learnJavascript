// ============================================
// LESSON 11: ASYNCHRONOUS JAVASCRIPT
// ============================================

// SYNCHRONOUS VS ASYNCHRONOUS
// ============================================

console.log("Start");
console.log("Middle");
console.log("End");
// Output: Start, Middle, End (in order)

// Asynchronous example
console.log("Start");
setTimeout(() => {
    console.log("Async operation");
}, 0);
console.log("End");
// Output: Start, End, Async operation (async runs last!)

// SETTIMEOUT - Execute after delay
// ============================================

setTimeout(() => {
    console.log("This runs after 2 seconds");
}, 2000);

// With parameters
setTimeout((name) => {
    console.log(`Hello, ${name}!`);
}, 1000, "Alice");

// Clear timeout
const timeoutId = setTimeout(() => {
    console.log("This won't run");
}, 5000);

clearTimeout(timeoutId); // Cancel the timeout

// SETINTERVAL - Execute repeatedly
// ============================================

let count = 0;
const intervalId = setInterval(() => {
    count++;
    console.log(`Count: ${count}`);
    
    if (count === 5) {
        clearInterval(intervalId); // Stop after 5 times
    }
}, 1000);

// CALLBACKS
// ============================================

function fetchData(callback) {
    setTimeout(() => {
        const data = {id: 1, name: "John"};
        callback(data);
    }, 1000);
}

fetchData((data) => {
    console.log("Data received:", data);
});

// Callback with error handling
function fetchDataWithError(callback) {
    setTimeout(() => {
        const error = null;
        const data = {id: 1, name: "John"};
        
        if (error) {
            callback(error, null);
        } else {
            callback(null, data);
        }
    }, 1000);
}

fetchDataWithError((error, data) => {
    if (error) {
        console.error("Error:", error);
    } else {
        console.log("Data:", data);
    }
});

// CALLBACK HELL (Pyramid of Doom)
// ============================================

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

// Nested callbacks (hard to read!)
step1(() => {
    step2(() => {
        step3(() => {
            console.log("All steps complete");
        });
    });
});

// PROMISES - Better way to handle async
// ============================================

// Creating a promise
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        const success = true;
        
        if (success) {
            resolve("Operation successful!");
        } else {
            reject("Operation failed!");
        }
    }, 1000);
});

// Consuming a promise
myPromise
    .then(result => {
        console.log(result); // "Operation successful!"
    })
    .catch(error => {
        console.error(error);
    });

// PROMISE CHAINING
// ============================================

function fetchUser() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve({id: 1, name: "Alice"});
        }, 1000);
    });
}

function fetchPosts(userId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, title: "Post 1"},
                {id: 2, title: "Post 2"}
            ]);
        }, 1000);
    });
}

function fetchComments(postId) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve([
                {id: 1, text: "Great post!"},
                {id: 2, text: "Thanks for sharing"}
            ]);
        }, 1000);
    });
}

// Chain promises
fetchUser()
    .then(user => {
        console.log("User:", user);
        return fetchPosts(user.id);
    })
    .then(posts => {
        console.log("Posts:", posts);
        return fetchComments(posts[0].id);
    })
    .then(comments => {
        console.log("Comments:", comments);
    })
    .catch(error => {
        console.error("Error:", error);
    });

// PROMISE.ALL - Wait for all promises
// ============================================

const promise1 = Promise.resolve(3);
const promise2 = new Promise(resolve => setTimeout(() => resolve(42), 1000));
const promise3 = Promise.resolve("Hello");

Promise.all([promise1, promise2, promise3])
    .then(results => {
        console.log(results); // [3, 42, "Hello"]
    });

// If any promise fails, all fails
const failingPromise = Promise.reject("Error!");
Promise.all([promise1, failingPromise, promise3])
    .then(results => {
        console.log(results);
    })
    .catch(error => {
        console.error("One promise failed:", error);
    });

// PROMISE.RACE - First to complete wins
// ============================================

const slow = new Promise(resolve => setTimeout(() => resolve("Slow"), 2000));
const fast = new Promise(resolve => setTimeout(() => resolve("Fast"), 1000));

Promise.race([slow, fast])
    .then(result => {
        console.log(result); // "Fast" (completes first)
    });

// PROMISE.ALLSETTLED - Wait for all, regardless of success/failure
// ============================================

const p1 = Promise.resolve("Success");
const p2 = Promise.reject("Failure");
const p3 = Promise.resolve("Another success");

Promise.allSettled([p1, p2, p3])
    .then(results => {
        console.log(results);
        // [
        //   {status: "fulfilled", value: "Success"},
        //   {status: "rejected", reason: "Failure"},
        //   {status: "fulfilled", value: "Another success"}
        // ]
    });

// PROMISE.ANY - First successful promise
// ============================================

const p4 = Promise.reject("Error 1");
const p5 = new Promise(resolve => setTimeout(() => resolve("Success!"), 1000));
const p6 = Promise.reject("Error 2");

Promise.any([p4, p5, p6])
    .then(result => {
        console.log(result); // "Success!" (first to succeed)
    })
    .catch(error => {
        console.error("All promises failed");
    });

// ASYNC/AWAIT - Modern syntax
// ============================================

async function getData() {
    const user = await fetchUser();
    console.log("User:", user);
    
    const posts = await fetchPosts(user.id);
    console.log("Posts:", posts);
    
    const comments = await fetchComments(posts[0].id);
    console.log("Comments:", comments);
}

getData();

// ASYNC/AWAIT with error handling
// ============================================

async function getDataWithErrorHandling() {
    try {
        const user = await fetchUser();
        const posts = await fetchPosts(user.id);
        const comments = await fetchComments(posts[0].id);
        
        return {user, posts, comments};
    } catch (error) {
        console.error("Error:", error);
        throw error;
    }
}

// PARALLEL EXECUTION with async/await
// ============================================

async function parallelExecution() {
    // Sequential (slow)
    const user1 = await fetchUser();
    const user2 = await fetchUser();
    // Takes 2 seconds total
    
    // Parallel (fast)
    const [userA, userB] = await Promise.all([
        fetchUser(),
        fetchUser()
    ]);
    // Takes 1 second total
}

// ASYNC FUNCTION ALWAYS RETURNS PROMISE
// ============================================

async function returnValue() {
    return 42;
}

returnValue().then(value => {
    console.log(value); // 42
});

// Equivalent to:
function returnValuePromise() {
    return Promise.resolve(42);
}

// ERROR HANDLING PATTERNS
// ============================================

// Pattern 1: try/catch
async function pattern1() {
    try {
        const result = await fetchUser();
        return result;
    } catch (error) {
        console.error("Error:", error);
        return null;
    }
}

// Pattern 2: .catch()
async function pattern2() {
    const result = await fetchUser().catch(error => {
        console.error("Error:", error);
        return null;
    });
    return result;
}

// PRACTICAL EXAMPLES
// ============================================

// 1. Fetch with timeout
function fetchWithTimeout(promise, timeout) {
    return Promise.race([
        promise,
        new Promise((_, reject) =>
            setTimeout(() => reject(new Error("Timeout")), timeout)
        )
    ]);
}

// 2. Retry logic
async function retry(fn, maxAttempts = 3) {
    for (let attempt = 1; attempt <= maxAttempts; attempt++) {
        try {
            return await fn();
        } catch (error) {
            if (attempt === maxAttempts) throw error;
            console.log(`Attempt ${attempt} failed, retrying...`);
        }
    }
}

// 3. Sequential execution
async function processSequentially(items, asyncFn) {
    const results = [];
    for (const item of items) {
        const result = await asyncFn(item);
        results.push(result);
    }
    return results;
}

// 4. Parallel execution with limit
async function processInBatches(items, asyncFn, batchSize) {
    const results = [];
    for (let i = 0; i < items.length; i += batchSize) {
        const batch = items.slice(i, i + batchSize);
        const batchResults = await Promise.all(batch.map(asyncFn));
        results.push(...batchResults);
    }
    return results;
}

// ============================================
// EXERCISES
// ============================================

// 1. Create a promise that resolves after 2 seconds with value "Done"
// YOUR CODE HERE:

// 2. Create a function that simulates fetching user data (returns promise)
// YOUR CODE HERE:

// 3. Chain two promises: fetch user, then fetch user's posts
// YOUR CODE HERE:

// 4. Use Promise.all to fetch 3 users simultaneously
// YOUR CODE HERE:

// 5. Convert this callback to async/await:
function oldWay(callback) {
    setTimeout(() => callback("Result"), 1000);
}
// YOUR CODE HERE:

// 6. Create an async function with proper error handling
// YOUR CODE HERE:

// 7. Implement a delay function using promises
// Usage: await delay(1000) // waits 1 second
// YOUR CODE HERE:

// 8. Create a function that retries a failed promise 3 times
// YOUR CODE HERE:
