// ============================================
// LESSON 2: OPERATORS
// ============================================

// ARITHMETIC OPERATORS
// ============================================

let a = 10;
let b = 3;

console.log(a + b);  // Addition: 13
console.log(a - b);  // Subtraction: 7
console.log(a * b);  // Multiplication: 30
console.log(a / b);  // Division: 3.333...
console.log(a % b);  // Modulus (remainder): 1
console.log(a ** b); // Exponentiation: 1000 (10^3)

// Increment and Decrement
let count = 5;
count++;  // count = count + 1 (now 6)
count--;  // count = count - 1 (now 5)

console.log(++count); // Pre-increment: 6 (increment first, then return)
console.log(count++); // Post-increment: 6 (return first, then increment)
console.log(count);   // 7

// ASSIGNMENT OPERATORS
// ============================================

let x = 10;
x += 5;  // x = x + 5 (15)
x -= 3;  // x = x - 3 (12)
x *= 2;  // x = x * 2 (24)
x /= 4;  // x = x / 4 (6)
x %= 4;  // x = x % 4 (2)

console.log(x); // 2

// COMPARISON OPERATORS
// ============================================

// Equality
console.log(5 == "5");   // true (loose equality, converts types)
console.log(5 === "5");  // false (strict equality, checks type too)
console.log(5 != "5");   // false
console.log(5 !== "5");  // true

// ALWAYS USE === and !== (strict equality)

// Relational
console.log(10 > 5);   // true
console.log(10 < 5);   // false
console.log(10 >= 10); // true
console.log(10 <= 5);  // false

// LOGICAL OPERATORS
// ============================================

// AND (&&) - Both must be true
console.log(true && true);   // true
console.log(true && false);  // false
console.log(false && false); // false

// OR (||) - At least one must be true
console.log(true || false);  // true
console.log(false || false); // false

// NOT (!) - Inverts boolean
console.log(!true);  // false
console.log(!false); // true

// Practical examples
let age = 20;
let hasLicense = true;

let canDrive = age >= 18 && hasLicense;
console.log(canDrive); // true

let isWeekend = false;
let isHoliday = true;
let canRelax = isWeekend || isHoliday;
console.log(canRelax); // true

// STRING OPERATORS
// ============================================

// Concatenation
let firstName = "John";
let lastName = "Doe";
let fullName = firstName + " " + lastName;
console.log(fullName); // "John Doe"

// Template literals (preferred)
let greeting = `Hello, ${firstName} ${lastName}!`;
console.log(greeting);

// TERNARY OPERATOR (Conditional)
// ============================================

// Syntax: condition ? valueIfTrue : valueIfFalse
let userAge = 20;
let status = userAge >= 18 ? "Adult" : "Minor";
console.log(status); // "Adult"

// Equivalent to:
// if (userAge >= 18) {
//     status = "Adult";
// } else {
//     status = "Minor";
// }

// TYPE OPERATORS
// ============================================

console.log(typeof 42);        // "number"
console.log(typeof "hello");   // "string"
console.log(typeof true);      // "boolean"

// NULLISH COALESCING (??)
// ============================================

// Returns right side if left is null or undefined
let username = null;
let displayName = username ?? "Guest";
console.log(displayName); // "Guest"

let score = 0;
let finalScore = score ?? 100;
console.log(finalScore); // 0 (because 0 is not null/undefined)

// OPTIONAL CHAINING (?.)
// ============================================

let user = {
    name: "Alice",
    address: {
        city: "NYC"
    }
};

console.log(user?.address?.city); // "NYC"
console.log(user?.phone?.number); // undefined (no error!)

// ============================================
// EXERCISES
// ============================================

// 1. Calculate the area of a rectangle (length * width)
let length = 10;
let width = 5;
// YOUR CODE HERE:

// 2. Check if a number is even using modulus operator
let number = 8;
// YOUR CODE HERE: (hint: even numbers have remainder 0 when divided by 2)

// 3. Create a variable that checks if someone can vote (age >= 18)
let voterAge = 21;
// YOUR CODE HERE:

// 4. Use ternary operator to check if a number is positive or negative
let value = -5;
// YOUR CODE HERE:

// 5. Combine two strings using template literals
let city = "New York";
let country = "USA";
// YOUR CODE HERE: Create a sentence like "I live in New York, USA"

// 6. Check if a person is a teenager (age between 13 and 19)
let personAge = 15;
// YOUR CODE HERE: (hint: use && operator)
