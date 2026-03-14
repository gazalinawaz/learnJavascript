# Lesson 2: Operators - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Arithmetic Operators](#arithmetic-operators)
3. [Assignment Operators](#assignment-operators)
4. [Comparison Operators](#comparison-operators)
5. [Logical Operators](#logical-operators)
6. [String Operators](#string-operators)
7. [Ternary Operator](#ternary-operator)
8. [Operator Precedence](#operator-precedence)
9. [Common Mistakes](#common-mistakes)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Operators?

Think of operators as the **action words** in programming. Just like in math class where you use `+` to add numbers, in JavaScript, operators let you perform actions on your data.

**Real-World Analogy:**
- In cooking: "Mix" is an operator (mix flour + water)
- In math: "+" is an operator (2 + 3)
- In JavaScript: Operators work the same way!

### Why Do We Need Operators?

Without operators, you couldn't:
- Do math (calculate prices, scores, etc.)
- Compare things (is this bigger than that?)
- Make decisions (if this AND that)
- Combine text (join first name + last name)

---

## Arithmetic Operators

These are the math operators you already know from school!

### 1. Addition (+)

**What it does:** Adds two numbers together.

```javascript
const apples = 5;
const oranges = 3;
const totalFruit = apples + oranges;

console.log(totalFruit); // 8
```

**Real-World Examples:**
```javascript
// Shopping cart
const itemPrice = 25;
const shippingCost = 5;
const total = itemPrice + shippingCost;
console.log("Total: $" + total); // Total: $30

// Age calculation
const birthYear = 1995;
const currentYear = 2024;
const age = currentYear - birthYear + 1;
console.log("Age: " + age); // Age: 30
```

### 2. Subtraction (-)

**What it does:** Subtracts one number from another.

```javascript
const price = 100;
const discount = 20;
const finalPrice = price - discount;

console.log(finalPrice); // 80
```

**Real-World Examples:**
```javascript
// Bank account
const balance = 1000;
const withdrawal = 250;
const newBalance = balance - withdrawal;
console.log("New balance: $" + newBalance); // New balance: $750

// Temperature change
const morningTemp = 15;
const eveningTemp = 8;
const tempDrop = morningTemp - eveningTemp;
console.log("Temperature dropped by: " + tempDrop + "°C"); // 7°C
```

### 3. Multiplication (*)

**What it does:** Multiplies two numbers.

```javascript
const pricePerItem = 10;
const quantity = 5;
const totalCost = pricePerItem * quantity;

console.log(totalCost); // 50
```

**Real-World Examples:**
```javascript
// Calculate area
const length = 10;
const width = 5;
const area = length * width;
console.log("Area: " + area + " sq meters"); // Area: 50 sq meters

// Weekly salary
const hourlyRate = 15;
const hoursPerWeek = 40;
const weeklySalary = hourlyRate * hoursPerWeek;
console.log("Weekly salary: $" + weeklySalary); // Weekly salary: $600
```

### 4. Division (/)

**What it does:** Divides one number by another.

```javascript
const totalCost = 100;
const people = 4;
const costPerPerson = totalCost / people;

console.log(costPerPerson); // 25
```

**Real-World Examples:**
```javascript
// Split bill
const billAmount = 120;
const numberOfPeople = 3;
const eachPersonPays = billAmount / numberOfPeople;
console.log("Each person pays: $" + eachPersonPays); // Each person pays: $40

// Average score
const totalPoints = 450;
const numberOfTests = 5;
const averageScore = totalPoints / numberOfTests;
console.log("Average: " + averageScore); // Average: 90
```

### 5. Modulus (%) - The Remainder

**What it does:** Gives you the **remainder** after division.

```javascript
const number = 10;
const divisor = 3;
const remainder = number % divisor;

console.log(remainder); // 1 (because 10 ÷ 3 = 3 remainder 1)
```

**Understanding Modulus:**
```
10 ÷ 3 = 3 with remainder 1
↓
10 % 3 = 1
```

**Real-World Examples:**
```javascript
// Check if number is even or odd
const number = 7;
const remainder = number % 2;

if (remainder === 0) {
    console.log("Even number");
} else {
    console.log("Odd number"); // This runs (7 is odd)
}

// Check if divisible by 5
const score = 25;
if (score % 5 === 0) {
    console.log("Divisible by 5!"); // This runs
}
```

### 6. Exponentiation (**) - Power

**What it does:** Raises a number to a power.

```javascript
const base = 2;
const exponent = 3;
const result = base ** exponent;

console.log(result); // 8 (because 2³ = 2 × 2 × 2 = 8)
```

**Real-World Examples:**
```javascript
// Calculate area of square
const side = 5;
const area = side ** 2;
console.log("Area: " + area); // Area: 25

// Calculate volume of cube
const edge = 3;
const volume = edge ** 3;
console.log("Volume: " + volume); // Volume: 27
```

### 7. Increment (++) and Decrement (--)

**What it does:** Adds or subtracts 1 from a number.

```javascript
let count = 5;

count++;  // Same as: count = count + 1
console.log(count); // 6

count--;  // Same as: count = count - 1
console.log(count); // 5
```

**Two Ways to Use:**

```javascript
let x = 5;

// Post-increment (use value, then add)
let y = x++;
console.log(y); // 5 (original value)
console.log(x); // 6 (incremented)

let a = 5;

// Pre-increment (add first, then use)
let b = ++a;
console.log(b); // 6 (incremented value)
console.log(a); // 6 (incremented)
```

**Real-World Example:**
```javascript
let lives = 3;

console.log("Lives remaining: " + lives); // 3
lives--; // Player loses a life
console.log("Lives remaining: " + lives); // 2

let score = 0;
score++; // Player scores a point
console.log("Score: " + score); // 1
```

---

## Assignment Operators

These operators assign values to variables.

### 1. Basic Assignment (=)

```javascript
let age = 25;
let name = "Alice";
```

### 2. Compound Assignment

Instead of writing `x = x + 5`, you can write `x += 5`.

```javascript
let score = 10;

// Long way
score = score + 5;

// Short way (same result)
score += 5;

console.log(score); // 15
```

**All Compound Operators:**

```javascript
let x = 10;

x += 5;  // x = x + 5  → 15
x -= 3;  // x = x - 3  → 12
x *= 2;  // x = x * 2  → 24
x /= 4;  // x = x / 4  → 6
x %= 4;  // x = x % 4  → 2

console.log(x); // 2
```

**Real-World Example:**
```javascript
let bankBalance = 1000;

// Deposit money
bankBalance += 500;
console.log("After deposit: $" + bankBalance); // $1500

// Pay bills
bankBalance -= 200;
console.log("After bills: $" + bankBalance); // $1300

// Interest (multiply by 1.05 for 5% interest)
bankBalance *= 1.05;
console.log("After interest: $" + bankBalance); // $1365
```

---

## Comparison Operators

These operators compare values and return `true` or `false`.

### 1. Equality Operators

**Loose Equality (==) - Converts types**
```javascript
console.log(5 == "5");   // true (converts string to number)
console.log(1 == true);  // true (converts boolean to number)
```

**Strict Equality (===) - Checks type AND value**
```javascript
console.log(5 === "5");   // false (different types)
console.log(5 === 5);     // true (same type and value)
```

**⚠️ IMPORTANT: Always use `===` (strict equality)**

```javascript
// ❌ Bad - can cause bugs
if (userInput == 0) {
    // This runs for 0, "0", false, "", null
}

// ✅ Good - precise
if (userInput === 0) {
    // This only runs for exactly 0
}
```

### 2. Inequality Operators

```javascript
console.log(5 != "5");   // false (loose - converts types)
console.log(5 !== "5");  // true (strict - different types)
```

**Always use `!==` (strict inequality)**

### 3. Relational Operators

```javascript
console.log(10 > 5);   // true (10 is greater than 5)
console.log(10 < 5);   // false (10 is not less than 5)
console.log(10 >= 10); // true (10 is greater than or equal to 10)
console.log(5 <= 10);  // true (5 is less than or equal to 10)
```

**Real-World Examples:**
```javascript
const age = 20;
const minimumAge = 18;

if (age >= minimumAge) {
    console.log("You can vote!"); // This runs
}

const temperature = 35;
if (temperature > 30) {
    console.log("It's hot outside!"); // This runs
}

const score = 85;
if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B"); // This runs
}
```

---

## Logical Operators

These combine multiple conditions.

### 1. AND (&&) - Both Must Be True

**Think:** "This AND that"

```javascript
const age = 20;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can drive!"); // Runs only if BOTH are true
}
```

**Truth Table:**
```javascript
true  && true   // true
true  && false  // false
false && true   // false
false && false  // false
```

**Real-World Examples:**
```javascript
// Online shopping
const hasStock = true;
const hasEnoughMoney = true;

if (hasStock && hasEnoughMoney) {
    console.log("Purchase successful!");
}

// Restaurant entry
const hasReservation = true;
const isDressCodeMet = true;

if (hasReservation && isDressCodeMet) {
    console.log("Welcome! Please follow me to your table.");
}

// Multiple conditions
const age = 25;
const hasTicket = true;
const isVIP = false;

if (age >= 18 && hasTicket && (isVIP || age >= 21)) {
    console.log("Entry granted");
}
```

### 2. OR (||) - At Least One Must Be True

**Think:** "This OR that"

```javascript
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No work today!"); // Runs if EITHER is true
}
```

**Truth Table:**
```javascript
true  || true   // true
true  || false  // true
false || true   // true
false || false  // false
```

**Real-World Examples:**
```javascript
// Free shipping
const orderValue = 40;
const isPremiumMember = false;

if (orderValue >= 50 || isPremiumMember) {
    console.log("Free shipping!");
} else {
    console.log("Shipping: $5");
}

// Emergency contact
const isFamilyMember = false;
const isEmergencyContact = true;

if (isFamilyMember || isEmergencyContact) {
    console.log("Access granted"); // This runs
}
```

### 3. NOT (!) - Opposite/Negation

**Think:** "NOT this"

```javascript
const isRaining = false;

if (!isRaining) {
    console.log("No umbrella needed!"); // Runs because NOT false = true
}
```

**Examples:**
```javascript
!true   // false
!false  // true

const isLoggedIn = false;
if (!isLoggedIn) {
    console.log("Please log in"); // This runs
}

const hasErrors = false;
if (!hasErrors) {
    console.log("Form submitted successfully!"); // This runs
}
```

**Combining Logical Operators:**
```javascript
const age = 25;
const hasLicense = true;
const hasInsurance = true;
const hasCar = false;

// Complex condition
if ((age >= 18 && hasLicense && hasInsurance) || hasCar) {
    console.log("Can rent a car");
}

// Readable version
const canDrive = age >= 18 && hasLicense && hasInsurance;
const ownsCar = hasCar;

if (canDrive || ownsCar) {
    console.log("Can rent a car");
}
```

---

## String Operators

### 1. Concatenation (+)

**What it does:** Joins strings together.

```javascript
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;

console.log(fullName); // "John Doe"
```

**Real-World Examples:**
```javascript
// Build a greeting
const greeting = "Hello";
const name = "Alice";
const message = greeting + ", " + name + "!";
console.log(message); // "Hello, Alice!"

// Build an address
const street = "123 Main St";
const city = "New York";
const zip = "10001";
const fullAddress = street + ", " + city + " " + zip;
console.log(fullAddress); // "123 Main St, New York 10001"
```

### 2. Template Literals (Better Way!)

**Instead of concatenation, use template literals:**

```javascript
const name = "Alice";
const age = 25;

// Old way (concatenation)
const message1 = "My name is " + name + " and I am " + age + " years old.";

// New way (template literal) - Much cleaner!
const message2 = `My name is ${name} and I am ${age} years old.`;

console.log(message2); // "My name is Alice and I am 25 years old."
```

**Real-World Examples:**
```javascript
// Shopping cart
const item = "Laptop";
const price = 999;
const quantity = 2;
const total = price * quantity;

const receipt = `
Item: ${item}
Price: $${price}
Quantity: ${quantity}
Total: $${total}
`;

console.log(receipt);

// Email template
const userName = "John";
const orderNumber = "12345";
const email = `
Dear ${userName},

Your order #${orderNumber} has been confirmed.

Thank you for shopping with us!
`;

console.log(email);
```

---

## Ternary Operator

**What it is:** A shortcut for simple if-else statements.

**Syntax:**
```javascript
condition ? valueIfTrue : valueIfFalse
```

**Example:**
```javascript
const age = 20;
const status = age >= 18 ? "Adult" : "Minor";

console.log(status); // "Adult"
```

**Equivalent to:**
```javascript
let status;
if (age >= 18) {
    status = "Adult";
} else {
    status = "Minor";
}
```

**Real-World Examples:**
```javascript
// Discount eligibility
const purchaseAmount = 150;
const discount = purchaseAmount >= 100 ? 20 : 0;
console.log(`Discount: $${discount}`); // Discount: $20

// Greeting based on time
const hour = 14;
const greeting = hour < 12 ? "Good morning" : "Good afternoon";
console.log(greeting); // "Good afternoon"

// Pass/Fail
const score = 75;
const result = score >= 60 ? "Pass" : "Fail";
console.log(result); // "Pass"

// Stock status
const inStock = 5;
const status = inStock > 0 ? "Available" : "Out of stock";
console.log(status); // "Available"
```

**Nested Ternary (Use Sparingly):**
```javascript
const score = 85;
const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";
console.log(grade); // "B"

// Better: Use if-else for complex logic
let grade;
if (score >= 90) {
    grade = "A";
} else if (score >= 80) {
    grade = "B";
} else if (score >= 70) {
    grade = "C";
} else {
    grade = "F";
}
```

---

## Operator Precedence

**What is it?** The order in which operators are evaluated.

**Remember PEMDAS from math?** JavaScript follows similar rules.

```javascript
const result = 2 + 3 * 4;
console.log(result); // 14 (not 20!)
// Multiplication happens first: 3 * 4 = 12, then 2 + 12 = 14
```

**Precedence Order (High to Low):**
1. Parentheses `()`
2. Exponentiation `**`
3. Multiplication `*`, Division `/`, Modulus `%`
4. Addition `+`, Subtraction `-`
5. Comparison `<`, `>`, `<=`, `>=`
6. Equality `===`, `!==`
7. Logical AND `&&`
8. Logical OR `||`

**Examples:**
```javascript
// Use parentheses for clarity
const result1 = (2 + 3) * 4;
console.log(result1); // 20

const result2 = 2 + 3 * 4;
console.log(result2); // 14

// Complex example
const a = 5;
const b = 10;
const c = 2;

const result3 = a + b * c;
console.log(result3); // 25 (not 30)
// Calculation: 10 * 2 = 20, then 5 + 20 = 25

const result4 = (a + b) * c;
console.log(result4); // 30
// Calculation: 5 + 10 = 15, then 15 * 2 = 30
```

**Best Practice: Use Parentheses**
```javascript
// ❌ Unclear
const total = price + tax * quantity - discount;

// ✅ Clear
const total = (price + (tax * quantity)) - discount;
```

---

## Common Mistakes

### Mistake 1: Using == Instead of ===

```javascript
// ❌ Wrong - can cause bugs
if (userInput == 0) {
    // Runs for 0, "0", false, ""
}

// ✅ Correct
if (userInput === 0) {
    // Only runs for exactly 0
}
```

### Mistake 2: Confusing = and ===

```javascript
// ❌ Wrong - this is assignment, not comparison!
if (age = 18) {
    console.log("Always runs!");
}

// ✅ Correct - this is comparison
if (age === 18) {
    console.log("Only runs if age is 18");
}
```

### Mistake 3: String + Number Confusion

```javascript
const age = "25";
const nextYear = age + 1;
console.log(nextYear); // "251" (string concatenation, not math!)

// ✅ Correct - convert to number first
const ageNumber = Number(age);
const nextYear = ageNumber + 1;
console.log(nextYear); // 26
```

### Mistake 4: Forgetting Operator Precedence

```javascript
// ❌ Wrong
const total = 10 + 5 * 2; // 20 (not 30)

// ✅ Correct - use parentheses
const total = (10 + 5) * 2; // 30
```

---

## Practice Exercises

### Exercise 1: Basic Arithmetic
```javascript
// Calculate the total cost
const itemPrice = 25;
const quantity = 3;
const taxRate = 0.08; // 8%

// Your code here:
const subtotal = itemPrice * quantity;
const tax = subtotal * taxRate;
const total = subtotal + tax;

console.log(`Total: $${total}`);
```

### Exercise 2: Comparison
```javascript
// Check voting eligibility
const age = 17;
const isCitizen = true;

// Your code here:
if (age >= 18 && isCitizen) {
    console.log("Can vote");
} else {
    console.log("Cannot vote");
}
```

### Exercise 3: Ternary Operator
```javascript
// Determine shipping cost
const orderAmount = 75;

// Your code here:
const shipping = orderAmount >= 50 ? 0 : 5;
console.log(`Shipping: $${shipping}`);
```

### Exercise 4: String Operations
```javascript
// Build a full address
const street = "123 Main St";
const city = "Boston";
const state = "MA";
const zip = "02101";

// Your code here:
const fullAddress = `${street}, ${city}, ${state} ${zip}`;
console.log(fullAddress);
```

---

## Summary

### Key Takeaways

1. **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `**`
2. **Comparison Operators**: Always use `===` and `!==`
3. **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)
4. **Assignment Operators**: `=`, `+=`, `-=`, `*=`, `/=`
5. **Ternary Operator**: `condition ? true : false`
6. **Use parentheses** for clarity
7. **Template literals** are better than string concatenation

### What's Next?

Now that you understand operators, you're ready to learn about **control flow** - how to make decisions and control the flow of your program!

---

## Quick Reference

```javascript
// Arithmetic
5 + 3    // 8
5 - 3    // 2
5 * 3    // 15
5 / 2    // 2.5
5 % 2    // 1
5 ** 2   // 25

// Comparison (use strict!)
5 === 5  // true
5 !== 3  // true
5 > 3    // true
5 >= 5   // true

// Logical
true && true   // true
true || false  // true
!false         // true

// Ternary
age >= 18 ? "Adult" : "Minor"

// Template Literal
`Hello, ${name}!`
```

**Congratulations!** You've completed Lesson 2. Practice these operators before moving forward!
