# Lesson 8: Strings - Complete Guide

## 📚 Table of Contents
1. [Introduction](#introduction)
2. [Creating Strings](#creating-strings)
3. [String Properties](#string-properties)
4. [Accessing Characters](#accessing-characters)
5. [String Methods](#string-methods)
6. [Template Literals](#template-literals)
7. [String Searching](#string-searching)
8. [String Manipulation](#string-manipulation)
9. [String Comparison](#string-comparison)
10. [Common Patterns](#common-patterns)
11. [Best Practices](#best-practices)
12. [Common Mistakes](#common-mistakes)
13. [Practice Exercises](#practice-exercises)

---

## Introduction

### What are Strings?

Strings are **text** in programming - any sequence of characters like words, sentences, emails, or messages.

### Real-World Examples

- User names: "Alice", "Bob"
- Email addresses: "user@example.com"
- Messages: "Hello, World!"
- URLs: "https://example.com"
- File names: "document.pdf"

### Why Are Strings Important?

Almost every program works with text:
- User input
- Display messages
- File names
- API responses
- Database queries

---

## Creating Strings

### Single Quotes

```javascript
const name = 'Alice';
const message = 'Hello, World!';
```

### Double Quotes

```javascript
const name = "Alice";
const message = "Hello, World!";
```

### Backticks (Template Literals)

```javascript
const name = `Alice`;
const message = `Hello, World!`;
```

### Which to Use?

**All three work the same for simple strings:**

```javascript
const str1 = 'Hello';
const str2 = "Hello";
const str3 = `Hello`;

console.log(str1 === str2); // true
console.log(str2 === str3); // true
```

**Use backticks for:**
- Multi-line strings
- Embedded variables
- Expressions inside strings

### Quotes Inside Strings

```javascript
// ❌ Error - quote mismatch
const str = "She said "Hello""; // Syntax error!

// ✅ Solution 1: Different quotes
const str1 = "She said 'Hello'";
const str2 = 'She said "Hello"';

// ✅ Solution 2: Escape character
const str3 = "She said \"Hello\"";

// ✅ Solution 3: Template literal
const str4 = `She said "Hello"`;
```

---

## String Properties

### Length Property

```javascript
const text = "Hello";
console.log(text.length); // 5

const empty = "";
console.log(empty.length); // 0

const sentence = "JavaScript is awesome!";
console.log(sentence.length); // 22
```

### Real-World Examples

**Example 1: Password Validation**
```javascript
const password = "secret123";

if (password.length < 8) {
    console.log("Password too short! Must be at least 8 characters.");
} else {
    console.log("Password length OK");
}
```

**Example 2: Character Counter**
```javascript
const tweet = "Learning JavaScript is fun!";
const maxLength = 280;
const remaining = maxLength - tweet.length;

console.log(`Characters remaining: ${remaining}`);
```

**Example 3: Check Empty String**
```javascript
const username = "";

if (username.length === 0) {
    console.log("Please enter a username");
} else {
    console.log(`Welcome, ${username}!`);
}
```

---

## Accessing Characters

### Bracket Notation

```javascript
const word = "Hello";

console.log(word[0]); // "H"
console.log(word[1]); // "e"
console.log(word[2]); // "l"
console.log(word[3]); // "l"
console.log(word[4]); // "o"
```

**Zero-indexed like arrays:**
```
Index: 0   1   2   3   4
Char:  H   e   l   l   o
```

### charAt() Method

```javascript
const word = "Hello";

console.log(word.charAt(0)); // "H"
console.log(word.charAt(4)); // "o"
console.log(word.charAt(10)); // "" (empty string, not error)
```

### First and Last Character

```javascript
const word = "JavaScript";

const first = word[0];
const last = word[word.length - 1];

console.log(`First: ${first}`); // First: J
console.log(`Last: ${last}`);   // Last: t
```

### Real-World Examples

**Example 1: Get Initials**
```javascript
const firstName = "John";
const lastName = "Doe";

const initials = firstName[0] + lastName[0];
console.log(initials); // "JD"
```

**Example 2: Check First Character**
```javascript
const filename = "document.pdf";

if (filename[0] === ".") {
    console.log("Hidden file");
} else {
    console.log("Regular file");
}
```

---

## String Methods

### toUpperCase() and toLowerCase()

```javascript
const text = "Hello World";

console.log(text.toUpperCase()); // "HELLO WORLD"
console.log(text.toLowerCase()); // "hello world"
console.log(text);               // "Hello World" (original unchanged)
```

**Real-World Examples:**

**Example 1: Case-Insensitive Comparison**
```javascript
const userInput = "YES";
const expected = "yes";

if (userInput.toLowerCase() === expected) {
    console.log("Match!");
}
```

**Example 2: Format Name**
```javascript
const name = "alice smith";

const formatted = name
    .split(" ")
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(" ");

console.log(formatted); // "Alice Smith"
```

### trim(), trimStart(), trimEnd()

```javascript
const text = "   Hello World   ";

console.log(text.trim());      // "Hello World"
console.log(text.trimStart()); // "Hello World   "
console.log(text.trimEnd());   // "   Hello World"
```

**Real-World Example:**
```javascript
const userInput = "  alice@example.com  ";
const email = userInput.trim();

console.log(email); // "alice@example.com"
```

### repeat()

```javascript
const star = "*";
console.log(star.repeat(5)); // "*****"

const dash = "-";
console.log(dash.repeat(10)); // "----------"
```

**Real-World Example:**
```javascript
function createSeparator(length) {
    return "=".repeat(length);
}

console.log(createSeparator(20));
// ====================
```

### padStart() and padEnd()

```javascript
const num = "5";

console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0"));   // "500"
```

**Real-World Examples:**

**Example 1: Format Time**
```javascript
const hours = "9";
const minutes = "5";

const formatted = `${hours.padStart(2, "0")}:${minutes.padStart(2, "0")}`;
console.log(formatted); // "09:05"
```

**Example 2: Align Text**
```javascript
const items = ["Apple", "Banana", "Orange"];

items.forEach(item => {
    console.log(item.padEnd(10, ".") + " $2.99");
});
// Apple..... $2.99
// Banana.... $2.99
// Orange.... $2.99
```

---

## Template Literals

### Basic Usage

```javascript
const name = "Alice";
const age = 25;

// Old way (concatenation)
const message1 = "My name is " + name + " and I am " + age + " years old.";

// New way (template literal)
const message2 = `My name is ${name} and I am ${age} years old.`;

console.log(message2);
// My name is Alice and I am 25 years old.
```

### Expressions Inside

```javascript
const price = 100;
const quantity = 3;

console.log(`Total: $${price * quantity}`); // Total: $300

const a = 5;
const b = 10;
console.log(`${a} + ${b} = ${a + b}`); // 5 + 10 = 15
```

### Multi-Line Strings

```javascript
const message = `
Hello,

This is a multi-line
message using template
literals.

Best regards,
Alice
`;

console.log(message);
```

### Real-World Examples

**Example 1: Email Template**
```javascript
const userName = "John";
const orderNumber = "12345";
const total = 99.99;

const email = `
Dear ${userName},

Your order #${orderNumber} has been confirmed.

Order Total: $${total}

Thank you for your purchase!
`;

console.log(email);
```

**Example 2: HTML Generation**
```javascript
const title = "Welcome";
const content = "Hello, World!";

const html = `
<div class="card">
    <h1>${title}</h1>
    <p>${content}</p>
</div>
`;

console.log(html);
```

**Example 3: Dynamic URL**
```javascript
const userId = 123;
const apiUrl = `https://api.example.com/users/${userId}`;

console.log(apiUrl);
// https://api.example.com/users/123
```

---

## String Searching

### indexOf()

```javascript
const text = "Hello World";

console.log(text.indexOf("World")); // 6
console.log(text.indexOf("o"));     // 4 (first occurrence)
console.log(text.indexOf("xyz"));   // -1 (not found)
```

**Real-World Example:**
```javascript
const email = "user@example.com";

if (email.indexOf("@") !== -1) {
    console.log("Valid email format");
} else {
    console.log("Invalid email");
}
```

### lastIndexOf()

```javascript
const text = "Hello World Hello";

console.log(text.indexOf("Hello"));     // 0 (first)
console.log(text.lastIndexOf("Hello")); // 12 (last)
```

### includes()

```javascript
const text = "JavaScript is awesome";

console.log(text.includes("JavaScript")); // true
console.log(text.includes("Python"));     // false
```

**Real-World Examples:**

**Example 1: Filter Messages**
```javascript
const message = "This is urgent! Please respond ASAP.";

if (message.includes("urgent")) {
    console.log("⚠️ Urgent message");
}
```

**Example 2: Check File Extension**
```javascript
const filename = "document.pdf";

if (filename.includes(".pdf")) {
    console.log("PDF file");
} else if (filename.includes(".jpg")) {
    console.log("Image file");
}
```

### startsWith() and endsWith()

```javascript
const text = "Hello World";

console.log(text.startsWith("Hello")); // true
console.log(text.startsWith("World")); // false

console.log(text.endsWith("World")); // true
console.log(text.endsWith("Hello")); // false
```

**Real-World Examples:**

**Example 1: URL Validation**
```javascript
const url = "https://example.com";

if (url.startsWith("https://")) {
    console.log("✓ Secure connection");
} else {
    console.log("⚠️ Insecure connection");
}
```

**Example 2: File Type Check**
```javascript
const filename = "photo.jpg";

if (filename.endsWith(".jpg") || filename.endsWith(".png")) {
    console.log("Image file");
} else {
    console.log("Not an image");
}
```

---

## String Manipulation

### slice()

```javascript
const text = "Hello World";

console.log(text.slice(0, 5));  // "Hello"
console.log(text.slice(6));     // "World"
console.log(text.slice(-5));    // "World" (from end)
console.log(text.slice(6, 11)); // "World"
```

**Real-World Examples:**

**Example 1: Extract Username**
```javascript
const email = "john.doe@example.com";
const username = email.slice(0, email.indexOf("@"));

console.log(username); // "john.doe"
```

**Example 2: Truncate Text**
```javascript
const longText = "This is a very long text that needs to be shortened";
const preview = longText.slice(0, 20) + "...";

console.log(preview); // "This is a very long ..."
```

### substring()

```javascript
const text = "Hello World";

console.log(text.substring(0, 5)); // "Hello"
console.log(text.substring(6));    // "World"
```

### replace()

```javascript
const text = "Hello World";

console.log(text.replace("World", "JavaScript"));
// "Hello JavaScript"

console.log(text.replace("o", "0"));
// "Hell0 World" (only first occurrence)
```

### replaceAll()

```javascript
const text = "Hello World Hello";

console.log(text.replaceAll("Hello", "Hi"));
// "Hi World Hi"

console.log(text.replaceAll("o", "0"));
// "Hell0 W0rld Hell0"
```

**Real-World Examples:**

**Example 1: Clean User Input**
```javascript
const userInput = "Hello   World   !";
const cleaned = userInput.replaceAll("  ", " ");

console.log(cleaned); // "Hello World !"
```

**Example 2: Mask Credit Card**
```javascript
const cardNumber = "1234567890123456";
const masked = cardNumber.slice(0, -4).replace(/\d/g, "*") + cardNumber.slice(-4);

console.log(masked); // "************3456"
```

### split()

```javascript
const text = "apple,banana,orange";
const fruits = text.split(",");

console.log(fruits); // ["apple", "banana", "orange"]
```

**Real-World Examples:**

**Example 1: Parse CSV**
```javascript
const csv = "John,Doe,30,New York";
const [firstName, lastName, age, city] = csv.split(",");

console.log(firstName); // "John"
console.log(age);       // "30"
```

**Example 2: Word Count**
```javascript
const sentence = "JavaScript is awesome and fun";
const words = sentence.split(" ");

console.log(`Word count: ${words.length}`); // Word count: 5
```

**Example 3: Split by Multiple Characters**
```javascript
const text = "apple;banana,orange;grape";
const fruits = text.split(/[;,]/);

console.log(fruits); // ["apple", "banana", "orange", "grape"]
```

---

## String Comparison

### Equality

```javascript
const str1 = "hello";
const str2 = "hello";
const str3 = "Hello";

console.log(str1 === str2); // true
console.log(str1 === str3); // false (case-sensitive)
```

### Case-Insensitive Comparison

```javascript
const str1 = "Hello";
const str2 = "hello";

console.log(str1.toLowerCase() === str2.toLowerCase()); // true
```

### Alphabetical Comparison

```javascript
console.log("apple" < "banana");  // true
console.log("zebra" > "apple");   // true
console.log("Apple" < "apple");   // true (uppercase comes first)
```

### Real-World Examples

**Example 1: Sort Names**
```javascript
const names = ["Charlie", "Alice", "Bob"];
names.sort();

console.log(names); // ["Alice", "Bob", "Charlie"]
```

**Example 2: Login Validation**
```javascript
const storedPassword = "secret123";
const userInput = "Secret123";

if (storedPassword === userInput) {
    console.log("Login successful");
} else {
    console.log("Incorrect password");
}
// Incorrect password (case-sensitive)
```

---

## Common Patterns

### Capitalize First Letter

```javascript
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}

console.log(capitalize("hello")); // "Hello"
console.log(capitalize("javascript")); // "Javascript"
```

### Reverse String

```javascript
function reverse(str) {
    return str.split("").reverse().join("");
}

console.log(reverse("hello")); // "olleh"
```

### Check Palindrome

```javascript
function isPalindrome(str) {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
}

console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false
console.log(isPalindrome("A man a plan a canal Panama")); // true
```

### Count Vowels

```javascript
function countVowels(str) {
    const matches = str.toLowerCase().match(/[aeiou]/g);
    return matches ? matches.length : 0;
}

console.log(countVowels("Hello World")); // 3
console.log(countVowels("JavaScript"));  // 3
```

### Remove Whitespace

```javascript
function removeWhitespace(str) {
    return str.replace(/\s/g, "");
}

console.log(removeWhitespace("Hello World")); // "HelloWorld"
```

### Truncate with Ellipsis

```javascript
function truncate(str, maxLength) {
    if (str.length <= maxLength) return str;
    return str.slice(0, maxLength) + "...";
}

console.log(truncate("This is a long text", 10));
// "This is a ..."
```

### Slug Generation

```javascript
function createSlug(str) {
    return str
        .toLowerCase()
        .trim()
        .replace(/[^\w\s-]/g, "")
        .replace(/\s+/g, "-");
}

console.log(createSlug("Hello World! This is JavaScript"));
// "hello-world-this-is-javascript"
```

---

## Best Practices

### 1. Use Template Literals

```javascript
// ❌ Hard to read
const message = "Hello, " + name + "! You have " + count + " messages.";

// ✅ Clean and readable
const message = `Hello, ${name}! You have ${count} messages.`;
```

### 2. Use Appropriate Methods

```javascript
// ❌ Inefficient
if (str.indexOf("hello") !== -1) { }

// ✅ More readable
if (str.includes("hello")) { }
```

### 3. Remember Strings are Immutable

```javascript
const str = "Hello";
str[0] = "h"; // Doesn't work!

console.log(str); // Still "Hello"

// ✅ Create new string
const newStr = "h" + str.slice(1);
console.log(newStr); // "hello"
```

### 4. Trim User Input

```javascript
// ✅ Always trim user input
const username = userInput.trim();
const email = emailInput.trim().toLowerCase();
```

---

## Common Mistakes

### Mistake 1: Treating Strings Like Arrays

```javascript
// ❌ Can't modify strings directly
const str = "Hello";
str[0] = "h"; // Doesn't work!

// ✅ Create new string
const newStr = "h" + str.slice(1);
```

### Mistake 2: Forgetting Case Sensitivity

```javascript
// ❌ Won't match
if (userInput === "yes") { }

// ✅ Case-insensitive
if (userInput.toLowerCase() === "yes") { }
```

### Mistake 3: Not Checking for Empty Strings

```javascript
// ❌ Might cause errors
const firstChar = str[0];

// ✅ Check first
if (str.length > 0) {
    const firstChar = str[0];
}
```

### Mistake 4: Confusing indexOf with includes

```javascript
// ❌ Wrong check
if (str.indexOf("hello")) { }  // 0 is falsy!

// ✅ Correct
if (str.indexOf("hello") !== -1) { }
// or better:
if (str.includes("hello")) { }
```

---

## Practice Exercises

### Exercise 1: Email Validator
```javascript
// Check if email contains @ and .
function isValidEmail(email) {
    // Your code here
}

console.log(isValidEmail("user@example.com")); // true
console.log(isValidEmail("invalid"));          // false
```

### Exercise 2: Word Counter
```javascript
// Count words in a sentence
function countWords(sentence) {
    // Your code here
}

console.log(countWords("Hello World")); // 2
```

### Exercise 3: Title Case
```javascript
// Convert to title case
function toTitleCase(str) {
    // Your code here
}

console.log(toTitleCase("hello world")); // "Hello World"
```

### Exercise 4: Remove Duplicates
```javascript
// Remove duplicate characters
function removeDuplicates(str) {
    // Your code here
}

console.log(removeDuplicates("hello")); // "helo"
```

---

## Summary

### Key Takeaways

1. **Strings** are text data in JavaScript
2. **Immutable** - can't change, only create new strings
3. **Template literals** for clean string formatting
4. **Many methods** for searching and manipulation
5. **Case-sensitive** by default
6. **Zero-indexed** like arrays
7. Always **trim** user input

### What's Next?

Congratulations on completing the Fundamentals! You're now ready for **Intermediate** topics like scope, closures, and advanced array methods!

---

## Quick Reference

```javascript
// Create
const str = "Hello";
const str = 'Hello';
const str = `Hello ${name}`;

// Properties
str.length

// Access
str[0]
str.charAt(0)

// Case
str.toUpperCase()
str.toLowerCase()

// Trim
str.trim()
str.trimStart()
str.trimEnd()

// Search
str.indexOf("text")
str.includes("text")
str.startsWith("text")
str.endsWith("text")

// Extract
str.slice(0, 5)
str.substring(0, 5)

// Replace
str.replace("old", "new")
str.replaceAll("old", "new")

// Split/Join
str.split(",")
arr.join(",")

// Repeat/Pad
str.repeat(3)
str.padStart(5, "0")
str.padEnd(5, "0")
```

**Congratulations!** You've completed Lesson 8 and the Fundamentals section!
