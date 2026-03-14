# Lesson 3: Control Flow (if/else, switch) - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [If Statements](#if-statements)
3. [If-Else Statements](#if-else-statements)
4. [If-Else If-Else](#if-else-if-else)
5. [Nested If Statements](#nested-if-statements)
6. [Switch Statements](#switch-statements)
7. [Truthy and Falsy Values](#truthy-and-falsy-values)
8. [Best Practices](#best-practices)
9. [Common Mistakes](#common-mistakes)
10. [Practice Exercises](#practice-exercises)

---

## Introduction

### What is Control Flow?

Imagine you're following a recipe:
- **IF** you have eggs, make an omelet
- **ELSE** make toast instead

This is control flow - making decisions based on conditions. Your program doesn't just run top to bottom; it can choose different paths based on what's happening.

### Real-World Analogy

**Traffic Light:**
- IF light is green → Go
- ELSE IF light is yellow → Slow down
- ELSE (light is red) → Stop

**ATM Machine:**
- IF PIN is correct → Show menu
- ELSE → Show error message

In programming, we use control flow to make these kinds of decisions.

---

## If Statements

### Basic Syntax

```javascript
if (condition) {
    // Code runs ONLY if condition is true
}
```

### Simple Example

```javascript
const age = 20;

if (age >= 18) {
    console.log("You are an adult");
}
// Output: "You are an adult"
```

**How it works:**
1. Check if `age >= 18` is true
2. If true, run the code inside `{}`
3. If false, skip the code inside `{}`

### Real-World Examples

**Example 1: Temperature Warning**
```javascript
const temperature = 35;

if (temperature > 30) {
    console.log("It's very hot! Stay hydrated.");
}
```

**Example 2: Low Battery Alert**
```javascript
const batteryLevel = 15;

if (batteryLevel < 20) {
    console.log("⚠️ Low battery! Please charge your device.");
}
```

**Example 3: Sale Eligibility**
```javascript
const purchaseAmount = 150;

if (purchaseAmount >= 100) {
    console.log("🎉 You qualify for free shipping!");
}
```

**Example 4: Password Strength**
```javascript
const password = "MySecurePass123";

if (password.length >= 8) {
    console.log("✓ Password meets minimum length requirement");
}
```

### Multiple Conditions with AND (&&)

```javascript
const age = 25;
const hasLicense = true;

if (age >= 18 && hasLicense) {
    console.log("You can rent a car");
}
```

**Both conditions must be true:**
- age >= 18 ✓
- hasLicense ✓
- Result: Code runs

### Multiple Conditions with OR (||)

```javascript
const isWeekend = true;
const isHoliday = false;

if (isWeekend || isHoliday) {
    console.log("No work today!");
}
```

**At least one condition must be true:**
- isWeekend ✓
- Result: Code runs

---

## If-Else Statements

### Basic Syntax

```javascript
if (condition) {
    // Runs if condition is TRUE
} else {
    // Runs if condition is FALSE
}
```

### Simple Example

```javascript
const temperature = 15;

if (temperature > 20) {
    console.log("It's warm outside");
} else {
    console.log("It's cold outside");
}
// Output: "It's cold outside"
```

**How it works:**
1. Check if `temperature > 20`
2. If true → run first block
3. If false → run else block
4. **Only ONE block runs, never both**

### Real-World Examples

**Example 1: Login System**
```javascript
const enteredPassword = "secret123";
const correctPassword = "secret123";

if (enteredPassword === correctPassword) {
    console.log("✓ Login successful! Welcome back.");
} else {
    console.log("✗ Incorrect password. Please try again.");
}
// Output: "✓ Login successful! Welcome back."
```

**Example 2: Age Verification**
```javascript
const userAge = 16;

if (userAge >= 18) {
    console.log("Access granted");
} else {
    console.log("You must be 18 or older");
}
// Output: "You must be 18 or older"
```

**Example 3: Stock Availability**
```javascript
const itemsInStock = 0;

if (itemsInStock > 0) {
    console.log("✓ In Stock - Add to Cart");
} else {
    console.log("✗ Out of Stock - Notify Me");
}
// Output: "✗ Out of Stock - Notify Me"
```

**Example 4: Even or Odd**
```javascript
const number = 7;

if (number % 2 === 0) {
    console.log(number + " is even");
} else {
    console.log(number + " is odd");
}
// Output: "7 is odd"
```

**Example 5: Discount Eligibility**
```javascript
const totalPurchase = 75;
const minimumForDiscount = 100;

if (totalPurchase >= minimumForDiscount) {
    const discount = totalPurchase * 0.1;
    console.log(`You get a $${discount} discount!`);
} else {
    const needed = minimumForDiscount - totalPurchase;
    console.log(`Spend $${needed} more to get 10% off!`);
}
// Output: "Spend $25 more to get 10% off!"
```

---

## If-Else If-Else

### Basic Syntax

```javascript
if (condition1) {
    // Runs if condition1 is TRUE
} else if (condition2) {
    // Runs if condition1 is FALSE and condition2 is TRUE
} else if (condition3) {
    // Runs if condition1 and condition2 are FALSE and condition3 is TRUE
} else {
    // Runs if ALL conditions are FALSE
}
```

### Simple Example

```javascript
const score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else if (score >= 60) {
    console.log("Grade: D");
} else {
    console.log("Grade: F");
}
// Output: "Grade: B"
```

**How it works:**
1. Check score >= 90? NO → Skip
2. Check score >= 80? YES → Run this block
3. Stop checking (found a match)

**Important:** Only the FIRST matching condition runs!

### Real-World Examples

**Example 1: Traffic Light**
```javascript
const lightColor = "yellow";

if (lightColor === "green") {
    console.log("GO");
} else if (lightColor === "yellow") {
    console.log("SLOW DOWN");
} else if (lightColor === "red") {
    console.log("STOP");
} else {
    console.log("Light malfunction!");
}
// Output: "SLOW DOWN"
```

**Example 2: Shipping Cost**
```javascript
const orderValue = 75;

if (orderValue >= 100) {
    console.log("Shipping: FREE");
} else if (orderValue >= 50) {
    console.log("Shipping: $5");
} else if (orderValue >= 25) {
    console.log("Shipping: $10");
} else {
    console.log("Shipping: $15");
}
// Output: "Shipping: $5"
```

**Example 3: Temperature Description**
```javascript
const temp = 28;

if (temp >= 30) {
    console.log("🔥 Very Hot");
} else if (temp >= 20) {
    console.log("☀️ Warm");
} else if (temp >= 10) {
    console.log("🌤️ Cool");
} else {
    console.log("❄️ Cold");
}
// Output: "☀️ Warm"
```

**Example 4: BMI Calculator**
```javascript
const bmi = 22.5;

if (bmi < 18.5) {
    console.log("Underweight");
} else if (bmi < 25) {
    console.log("Normal weight");
} else if (bmi < 30) {
    console.log("Overweight");
} else {
    console.log("Obese");
}
// Output: "Normal weight"
```

**Example 5: Time-Based Greeting**
```javascript
const hour = 14; // 2 PM

if (hour < 12) {
    console.log("Good morning!");
} else if (hour < 18) {
    console.log("Good afternoon!");
} else {
    console.log("Good evening!");
}
// Output: "Good afternoon!"
```

---

## Nested If Statements

### What Are Nested If Statements?

An if statement inside another if statement - like boxes inside boxes.

### Basic Syntax

```javascript
if (condition1) {
    if (condition2) {
        // Runs if BOTH condition1 AND condition2 are true
    }
}
```

### Simple Example

```javascript
const age = 20;
const hasTicket = true;

if (age >= 18) {
    if (hasTicket) {
        console.log("You can enter the concert");
    } else {
        console.log("You need a ticket");
    }
} else {
    console.log("You must be 18 or older");
}
// Output: "You can enter the concert"
```

**How it works:**
1. Check age >= 18? YES → Enter first if
2. Check hasTicket? YES → Run innermost code
3. Output: "You can enter the concert"

### Real-World Examples

**Example 1: Online Purchase Validation**
```javascript
const isLoggedIn = true;
const hasPaymentMethod = true;
const itemInStock = true;

if (isLoggedIn) {
    if (hasPaymentMethod) {
        if (itemInStock) {
            console.log("✓ Order placed successfully!");
        } else {
            console.log("✗ Item out of stock");
        }
    } else {
        console.log("✗ Please add a payment method");
    }
} else {
    console.log("✗ Please log in first");
}
// Output: "✓ Order placed successfully!"
```

**Example 2: Movie Rating System**
```javascript
const age = 16;
const hasParentConsent = true;
const movieRating = "PG-13";

if (movieRating === "G") {
    console.log("Everyone can watch");
} else if (movieRating === "PG-13") {
    if (age >= 13) {
        console.log("You can watch this movie");
    } else {
        if (hasParentConsent) {
            console.log("You can watch with parent consent");
        } else {
            console.log("You need parent consent");
        }
    }
} else if (movieRating === "R") {
    if (age >= 17) {
        console.log("You can watch this movie");
    } else {
        console.log("You must be 17 or older");
    }
}
// Output: "You can watch this movie"
```

**Better Alternative - Use AND (&&):**
```javascript
const age = 20;
const hasTicket = true;

if (age >= 18 && hasTicket) {
    console.log("You can enter the concert");
} else if (age >= 18 && !hasTicket) {
    console.log("You need a ticket");
} else {
    console.log("You must be 18 or older");
}
```

---

## Switch Statements

### What is a Switch Statement?

A cleaner way to check one value against multiple options. Like a multiple-choice question.

### Basic Syntax

```javascript
switch (value) {
    case option1:
        // Code if value === option1
        break;
    case option2:
        // Code if value === option2
        break;
    default:
        // Code if no cases match
}
```

### Simple Example

```javascript
const day = 3;

switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
    case 3:
        console.log("Wednesday");
        break;
    case 4:
        console.log("Thursday");
        break;
    case 5:
        console.log("Friday");
        break;
    case 6:
        console.log("Saturday");
        break;
    case 7:
        console.log("Sunday");
        break;
    default:
        console.log("Invalid day");
}
// Output: "Wednesday"
```

**Important:** The `break` keyword stops the switch from continuing. Without it, code "falls through" to the next case!

### Real-World Examples

**Example 1: Calculator**
```javascript
const operation = "add";
const num1 = 10;
const num2 = 5;
let result;

switch (operation) {
    case "add":
        result = num1 + num2;
        break;
    case "subtract":
        result = num1 - num2;
        break;
    case "multiply":
        result = num1 * num2;
        break;
    case "divide":
        result = num1 / num2;
        break;
    default:
        result = "Invalid operation";
}

console.log("Result: " + result); // Result: 15
```

**Example 2: Fruit Prices**
```javascript
const fruit = "apple";
let price;

switch (fruit) {
    case "apple":
        price = 1.50;
        break;
    case "banana":
        price = 0.75;
        break;
    case "orange":
        price = 2.00;
        break;
    case "grape":
        price = 3.50;
        break;
    default:
        price = "Not available";
}

console.log(`Price: $${price}`); // Price: $1.50
```

**Example 3: Season Detector**
```javascript
const month = "December";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter ❄️");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring 🌸");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer ☀️");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall 🍂");
        break;
    default:
        console.log("Invalid month");
}
// Output: "Winter ❄️"
```

**Example 4: HTTP Status Codes**
```javascript
const statusCode = 404;

switch (statusCode) {
    case 200:
        console.log("✓ Success");
        break;
    case 201:
        console.log("✓ Created");
        break;
    case 400:
        console.log("✗ Bad Request");
        break;
    case 401:
        console.log("✗ Unauthorized");
        break;
    case 404:
        console.log("✗ Not Found");
        break;
    case 500:
        console.log("✗ Server Error");
        break;
    default:
        console.log("Unknown status");
}
// Output: "✗ Not Found"
```

### Switch vs If-Else

**Use Switch When:**
- Checking ONE variable against MANY values
- Values are exact matches (===)
- Code is cleaner and more readable

**Use If-Else When:**
- Checking different variables
- Using comparison operators (>, <, >=, <=)
- Conditions are complex

```javascript
// ✅ Good use of switch
const color = "red";
switch (color) {
    case "red":
        console.log("Stop");
        break;
    case "yellow":
        console.log("Slow");
        break;
    case "green":
        console.log("Go");
        break;
}

// ✅ Good use of if-else
const age = 25;
if (age < 13) {
    console.log("Child");
} else if (age < 20) {
    console.log("Teenager");
} else {
    console.log("Adult");
}
```

---

## Truthy and Falsy Values

### What Are They?

In JavaScript, values can be "truthy" (act like true) or "falsy" (act like false) in conditions.

### Falsy Values (Only 6!)

These values are considered FALSE in conditions:
1. `false` - the boolean false
2. `0` - the number zero
3. `""` - empty string
4. `null` - intentionally empty
5. `undefined` - not assigned
6. `NaN` - Not a Number

### Truthy Values

**Everything else** is truthy! Including:
- `true` - boolean true
- Any non-zero number (1, -1, 3.14, etc.)
- Any non-empty string ("hello", "0", "false")
- Arrays `[]` (even empty!)
- Objects `{}` (even empty!)

### Examples

```javascript
// Falsy examples
if (false) {
    console.log("Won't run");
}

if (0) {
    console.log("Won't run");
}

if ("") {
    console.log("Won't run");
}

// Truthy examples
if (true) {
    console.log("Will run"); ✓
}

if (1) {
    console.log("Will run"); ✓
}

if ("hello") {
    console.log("Will run"); ✓
}

if ([]) {
    console.log("Will run"); ✓
}
```

### Real-World Examples

**Example 1: Check if String is Empty**
```javascript
const username = "";

if (username) {
    console.log(`Welcome, ${username}!`);
} else {
    console.log("Please enter a username");
}
// Output: "Please enter a username"
```

**Example 2: Check if Array Has Items**
```javascript
const items = [];

if (items.length) {
    console.log("You have items in your cart");
} else {
    console.log("Your cart is empty");
}
// Output: "Your cart is empty"
```

**Example 3: Default Values**
```javascript
const userInput = "";
const displayName = userInput || "Guest";

console.log(`Hello, ${displayName}!`);
// Output: "Hello, Guest!"
```

---

## Best Practices

### 1. Use Strict Equality (===)

```javascript
// ❌ Bad
if (age == 18) {
    // Might match "18" (string) too
}

// ✅ Good
if (age === 18) {
    // Only matches number 18
}
```

### 2. Use Curly Braces

```javascript
// ❌ Bad (works but risky)
if (age >= 18)
    console.log("Adult");

// ✅ Good
if (age >= 18) {
    console.log("Adult");
}
```

### 3. Handle All Cases

```javascript
// ❌ Bad - what if score is 95?
if (score < 60) {
    console.log("Fail");
}

// ✅ Good - handles all cases
if (score >= 60) {
    console.log("Pass");
} else {
    console.log("Fail");
}
```

### 4. Avoid Deep Nesting

```javascript
// ❌ Bad - hard to read
if (a) {
    if (b) {
        if (c) {
            if (d) {
                // Too deep!
            }
        }
    }
}

// ✅ Good - use AND operator
if (a && b && c && d) {
    // Much cleaner!
}
```

### 5. Use Guard Clauses

```javascript
// ❌ Bad - nested
function processOrder(order) {
    if (order) {
        if (order.items.length > 0) {
            if (order.total > 0) {
                // Process order
            }
        }
    }
}

// ✅ Good - early returns
function processOrder(order) {
    if (!order) return;
    if (order.items.length === 0) return;
    if (order.total <= 0) return;
    
    // Process order
}
```

---

## Common Mistakes

### Mistake 1: Assignment Instead of Comparison

```javascript
// ❌ Wrong - assigns 18 to age (always true!)
if (age = 18) {
    console.log("This always runs!");
}

// ✅ Correct - compares age to 18
if (age === 18) {
    console.log("Only runs if age is 18");
}
```

### Mistake 2: Forgetting Break in Switch

```javascript
// ❌ Wrong - falls through!
switch (day) {
    case 1:
        console.log("Monday");
    case 2:
        console.log("Tuesday");
    // Both print if day is 1!
}

// ✅ Correct
switch (day) {
    case 1:
        console.log("Monday");
        break;
    case 2:
        console.log("Tuesday");
        break;
}
```

### Mistake 3: Wrong Operator Order

```javascript
// ❌ Wrong - checks if 18 <= age <= 65
if (18 <= age <= 65) {
    // Doesn't work as expected!
}

// ✅ Correct
if (age >= 18 && age <= 65) {
    // This works!
}
```

### Mistake 4: Truthy/Falsy Confusion

```javascript
const count = 0;

// ❌ Wrong - 0 is falsy!
if (count) {
    console.log("Has items"); // Won't run even though count exists
}

// ✅ Correct
if (count !== undefined) {
    console.log("Count is set");
}
```

---

## Practice Exercises

### Exercise 1: Grade Calculator
```javascript
const score = 78;

// Write code to print the grade:
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60

// Your code here:
```

### Exercise 2: Leap Year Checker
```javascript
const year = 2024;

// A leap year is:
// - Divisible by 4 AND not divisible by 100
// - OR divisible by 400

// Your code here:
```

### Exercise 3: Traffic Light
```javascript
const light = "yellow";

// Print the action:
// green: "GO", yellow: "SLOW DOWN", red: "STOP"

// Your code here:
```

### Exercise 4: Temperature Converter
```javascript
const celsius = 25;
const unit = "F"; // or "C"

// If unit is "F", convert to Fahrenheit
// If unit is "C", keep as Celsius
// Formula: F = (C * 9/5) + 32

// Your code here:
```

---

## Summary

### Key Takeaways

1. **If statements** check conditions and run code if true
2. **If-else** provides an alternative path
3. **If-else if-else** handles multiple conditions
4. **Switch** is cleaner for checking one value against many options
5. **Truthy/Falsy** - understand which values act as true/false
6. Always use `===` for comparison
7. Use `break` in switch statements
8. Keep code readable - avoid deep nesting

### What's Next?

Now that you can make decisions in your code, you're ready to learn about **loops** - how to repeat actions multiple times!

---

## Quick Reference

```javascript
// If
if (condition) {
    // code
}

// If-Else
if (condition) {
    // code
} else {
    // code
}

// If-Else If-Else
if (condition1) {
    // code
} else if (condition2) {
    // code
} else {
    // code
}

// Switch
switch (value) {
    case option1:
        // code
        break;
    case option2:
        // code
        break;
    default:
        // code
}

// Falsy Values
false, 0, "", null, undefined, NaN
```

**Congratulations!** You've completed Lesson 3. Practice making decisions in your code!
