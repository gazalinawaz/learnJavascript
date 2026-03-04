// ============================================
// LESSON 1: VARIABLES & DATA TYPES
// ============================================

// VARIABLES: Containers for storing data values
// JavaScript has 3 ways to declare variables: var, let, const

// 1. LET - Modern way, can be reassigned, block-scoped
let name = "John";
console.log(name); // Output: John

name = "Jane"; // Can reassign
console.log(name); // Output: Jane

// 2. CONST - Cannot be reassigned, block-scoped (use by default)
const PI = 3.14159;
console.log(PI);
// PI = 3.14; // ERROR! Cannot reassign const

// 3. VAR - Old way, function-scoped (avoid using)
var age = 25;

// ============================================
// DATA TYPES
// ============================================

// PRIMITIVE TYPES:

// 1. String - Text data
const firstName = "Alice";
const lastName = 'Smith';
const greeting = `Hello, ${firstName}!`; // Template literal
console.log(greeting);

// 2. Number - Integers and decimals
const integer = 42;
const decimal = 3.14;
const negative = -10;
console.log(typeof integer); // "number"

// 3. Boolean - true or false
const isStudent = true;
const hasGraduated = false;
console.log(isStudent); // true

// 4. Undefined - Variable declared but not assigned
let notAssigned;
console.log(notAssigned); // undefined

// 5. Null - Intentional absence of value
const emptyValue = null;
console.log(emptyValue); // null

// 6. Symbol - Unique identifier (advanced)
const uniqueId = Symbol('id');

// 7. BigInt - Large integers (advanced)
const bigNumber = 1234567890123456789012345678901234567890n;

// ============================================
// TYPE CHECKING
// ============================================

console.log(typeof "Hello"); // "string"
console.log(typeof 42); // "number"
console.log(typeof true); // "boolean"
console.log(typeof undefined); // "undefined"
console.log(typeof null); // "object" (JavaScript quirk!)
console.log(typeof {}); // "object"
console.log(typeof []); // "object"

// ============================================
// NAMING CONVENTIONS
// ============================================

// camelCase for variables and functions (recommended)
let myVariableName = "value";
let userAge = 30;

// PascalCase for classes
// const UserProfile = class {};

// UPPERCASE for constants
const MAX_SIZE = 100;
const API_KEY = "abc123";

// Rules:
// - Must start with letter, $, or _
// - Cannot use reserved keywords (let, const, if, etc.)
// - Case sensitive (age !== Age)

// ============================================
// EXERCISES
// ============================================

// 1. Create a variable for your name using const
// YOUR CODE HERE:

// 2. Create a variable for your age using let
// YOUR CODE HERE:

// 3. Create a boolean variable called isLearning and set it to true
// YOUR CODE HERE:

// 4. Use console.log to print all three variables
// YOUR CODE HERE:

// 5. Try to change your name variable - what happens?
// YOUR CODE HERE:

// 6. Change your age variable to a different number
// YOUR CODE HERE:

// 7. Create a template literal that says "My name is [name] and I am [age] years old"
// YOUR CODE HERE:
