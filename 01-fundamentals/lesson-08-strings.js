// ============================================
// LESSON 8: STRING MANIPULATION
// ============================================

// CREATING STRINGS
// ============================================

const str1 = "Hello";
const str2 = 'World';
const str3 = `Template literal`;
const str4 = new String("String object"); // Avoid this

console.log(str1, str2, str3);

// STRING LENGTH
// ============================================

const message = "Hello, World!";
console.log(message.length); // 13

// ACCESSING CHARACTERS
// ============================================

const text = "JavaScript";

// Bracket notation
console.log(text[0]); // "J"
console.log(text[4]); // "S"
console.log(text[text.length - 1]); // "t" (last character)

// charAt()
console.log(text.charAt(0));  // "J"
console.log(text.charAt(10)); // "" (empty string if out of bounds)

// charCodeAt() - Get Unicode value
console.log(text.charCodeAt(0)); // 74 (Unicode for 'J')

// TEMPLATE LITERALS
// ============================================

const name = "Alice";
const age = 25;

// String interpolation
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Expressions in template literals
const a = 5;
const b = 10;
console.log(`${a} + ${b} = ${a + b}`);

// Multi-line strings
const multiLine = `
    This is a
    multi-line
    string
`;
console.log(multiLine);

// CONCATENATION
// ============================================

// Using + operator
const firstName = "John";
const lastName = "Doe";
const fullName = firstName + " " + lastName;
console.log(fullName);

// Using concat()
const str = "Hello".concat(" ", "World");
console.log(str);

// Using template literals (preferred)
const fullName2 = `${firstName} ${lastName}`;
console.log(fullName2);

// STRING METHODS - CASE CONVERSION
// ============================================

const original = "Hello World";

console.log(original.toLowerCase()); // "hello world"
console.log(original.toUpperCase()); // "HELLO WORLD"
console.log(original);               // "Hello World" (unchanged)

// SEARCHING IN STRINGS
// ============================================

const sentence = "The quick brown fox jumps over the lazy dog";

// indexOf() - First occurrence
console.log(sentence.indexOf("quick"));  // 4
console.log(sentence.indexOf("fox"));    // 16
console.log(sentence.indexOf("cat"));    // -1 (not found)

// lastIndexOf() - Last occurrence
console.log(sentence.lastIndexOf("o"));  // 41

// includes() - Check if substring exists
console.log(sentence.includes("fox"));   // true
console.log(sentence.includes("cat"));   // false

// startsWith() - Check if starts with substring
console.log(sentence.startsWith("The")); // true
console.log(sentence.startsWith("the")); // false (case-sensitive)

// endsWith() - Check if ends with substring
console.log(sentence.endsWith("dog"));   // true
console.log(sentence.endsWith("cat"));   // false

// EXTRACTING SUBSTRINGS
// ============================================

const str5 = "JavaScript Programming";

// slice(start, end) - Extract portion
console.log(str5.slice(0, 10));  // "JavaScript"
console.log(str5.slice(11));     // "Programming"
console.log(str5.slice(-11));    // "Programming" (negative = from end)
console.log(str5.slice(4, 10));  // "Script"

// substring(start, end) - Similar to slice
console.log(str5.substring(0, 10)); // "JavaScript"
console.log(str5.substring(11));    // "Programming"

// substr(start, length) - Deprecated, use slice instead
console.log(str5.substr(0, 10));  // "JavaScript"

// REPLACING TEXT
// ============================================

const text2 = "Hello World, World";

// replace() - Replace first occurrence
console.log(text2.replace("World", "JavaScript")); // "Hello JavaScript, World"

// replaceAll() - Replace all occurrences
console.log(text2.replaceAll("World", "JS")); // "Hello JS, JS"

// Using regex for case-insensitive replace
console.log(text2.replace(/world/i, "JS")); // "Hello JS, World"

// Using regex to replace all
console.log(text2.replace(/World/g, "JS")); // "Hello JS, JS"

// TRIMMING WHITESPACE
// ============================================

const padded = "   Hello World   ";

console.log(padded.trim());      // "Hello World"
console.log(padded.trimStart()); // "Hello World   "
console.log(padded.trimEnd());   // "   Hello World"

// SPLITTING STRINGS
// ============================================

const csv = "apple,banana,orange,grape";
const fruits = csv.split(",");
console.log(fruits); // ["apple", "banana", "orange", "grape"]

const words = "Hello World JavaScript".split(" ");
console.log(words); // ["Hello", "World", "JavaScript"]

// Split into characters
const chars = "Hello".split("");
console.log(chars); // ["H", "e", "l", "l", "o"]

// Limit number of splits
const limited = csv.split(",", 2);
console.log(limited); // ["apple", "banana"]

// REPEATING STRINGS
// ============================================

console.log("Ha".repeat(3));  // "HaHaHa"
console.log("*".repeat(10));  // "**********"

// PADDING STRINGS
// ============================================

const num = "5";

console.log(num.padStart(3, "0")); // "005"
console.log(num.padEnd(3, "0"));   // "500"

const time = "9:30";
const hour = "9".padStart(2, "0");
console.log(`${hour}:30`); // "09:30"

// COMPARING STRINGS
// ============================================

console.log("apple" === "apple");  // true
console.log("apple" === "Apple");  // false (case-sensitive)

// localeCompare() - For sorting
console.log("a".localeCompare("b")); // -1 (a comes before b)
console.log("b".localeCompare("a")); // 1 (b comes after a)
console.log("a".localeCompare("a")); // 0 (equal)

// ESCAPE SEQUENCES
// ============================================

console.log("Hello\nWorld");      // New line
console.log("Hello\tWorld");      // Tab
console.log("He said \"Hi\"");    // Quotes
console.log('It\'s a nice day');  // Single quote
console.log("C:\\Users\\John");   // Backslash

// CHECKING STRING CONTENT
// ============================================

const str6 = "12345";
const str7 = "Hello";

// Check if string contains only digits
const isNumeric = str => /^\d+$/.test(str);
console.log(isNumeric(str6)); // true
console.log(isNumeric(str7)); // false

// Check if string contains only letters
const isAlpha = str => /^[a-zA-Z]+$/.test(str);
console.log(isAlpha(str7)); // true
console.log(isAlpha(str6)); // false

// CONVERTING TO/FROM STRINGS
// ============================================

// Number to string
const num1 = 123;
console.log(String(num1));      // "123"
console.log(num1.toString());   // "123"
console.log(num1 + "");         // "123"

// String to number
const str8 = "456";
console.log(Number(str8));      // 456
console.log(parseInt(str8));    // 456
console.log(parseFloat("3.14")); // 3.14
console.log(+str8);             // 456

// Array to string
const arr = ["a", "b", "c"];
console.log(arr.join("-")); // "a-b-c"

// String to array
const str9 = "a-b-c";
console.log(str9.split("-")); // ["a", "b", "c"]

// COMMON STRING PATTERNS
// ============================================

// Capitalize first letter
const capitalize = str => str.charAt(0).toUpperCase() + str.slice(1);
console.log(capitalize("hello")); // "Hello"

// Reverse a string
const reverse = str => str.split("").reverse().join("");
console.log(reverse("hello")); // "olleh"

// Count occurrences of a character
const countChar = (str, char) => {
    return str.split(char).length - 1;
};
console.log(countChar("hello world", "o")); // 2

// Check if palindrome
const isPalindrome = str => {
    const cleaned = str.toLowerCase().replace(/[^a-z0-9]/g, "");
    return cleaned === cleaned.split("").reverse().join("");
};
console.log(isPalindrome("racecar")); // true
console.log(isPalindrome("hello"));   // false

// Title case
const titleCase = str => {
    return str.split(" ")
        .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
        .join(" ");
};
console.log(titleCase("hello world javascript")); // "Hello World Javascript"

// Truncate string
const truncate = (str, maxLength) => {
    return str.length > maxLength ? str.slice(0, maxLength) + "..." : str;
};
console.log(truncate("This is a long string", 10)); // "This is a..."

// ============================================
// EXERCISES
// ============================================

// 1. Create a string with your full name and print its length
// YOUR CODE HERE:

// 2. Convert "javascript" to "JavaScript" (capitalize first letter)
// YOUR CODE HERE:

// 3. Check if "Hello World" contains the word "World"
// YOUR CODE HERE:

// 4. Extract "Script" from "JavaScript"
// YOUR CODE HERE:

// 5. Replace all spaces in "Hello World JavaScript" with hyphens
// YOUR CODE HERE:

// 6. Split "apple,banana,orange" into an array
// YOUR CODE HERE:

// 7. Reverse the string "programming"
// YOUR CODE HERE:

// 8. Count how many times "o" appears in "Hello World"
// YOUR CODE HERE:

// 9. Check if "racecar" is a palindrome
// YOUR CODE HERE:

// 10. Create a function that converts "hello world" to "Hello World" (title case)
// YOUR CODE HERE:
