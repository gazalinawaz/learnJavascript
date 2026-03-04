// ============================================
// EXERCISE SET 1: JAVASCRIPT BASICS
// ============================================

// Complete each exercise below. Run the file to test your solutions.

console.log("=== EXERCISE SET 1: BASICS ===\n");

// EXERCISE 1: Variables and Data Types
// Create variables for your name, age, and whether you're a student
// Then log them to the console

// YOUR CODE HERE:


// EXERCISE 2: String Manipulation
// Create a function that takes a first name and last name
// and returns the full name in format "Last, First"

function formatName(firstName, lastName) {
    // YOUR CODE HERE:
}

// Test
console.log(formatName("John", "Doe")); // Should output: "Doe, John"


// EXERCISE 3: Array Operations
// Given an array of numbers, return a new array with only even numbers

function getEvenNumbers(numbers) {
    // YOUR CODE HERE:
}

// Test
console.log(getEvenNumbers([1, 2, 3, 4, 5, 6, 7, 8])); // Should output: [2, 4, 6, 8]


// EXERCISE 4: Object Manipulation
// Create an object representing a car with make, model, year, and a method
// that returns a description string

// YOUR CODE HERE:


// EXERCISE 5: Control Flow
// Write a function that takes a score (0-100) and returns a letter grade
// A: 90-100, B: 80-89, C: 70-79, D: 60-69, F: below 60

function getLetterGrade(score) {
    // YOUR CODE HERE:
}

// Test
console.log(getLetterGrade(95)); // Should output: "A"
console.log(getLetterGrade(73)); // Should output: "C"


// EXERCISE 6: Loops
// Write a function that returns the sum of all numbers from 1 to n

function sumToN(n) {
    // YOUR CODE HERE:
}

// Test
console.log(sumToN(10)); // Should output: 55


// EXERCISE 7: Array Methods
// Given an array of numbers, return the average

function getAverage(numbers) {
    // YOUR CODE HERE:
}

// Test
console.log(getAverage([10, 20, 30, 40, 50])); // Should output: 30


// EXERCISE 8: String Methods
// Write a function that counts the number of vowels in a string

function countVowels(str) {
    // YOUR CODE HERE:
}

// Test
console.log(countVowels("Hello World")); // Should output: 3


// EXERCISE 9: Functions
// Write a function that checks if a number is prime

function isPrime(num) {
    // YOUR CODE HERE:
}

// Test
console.log(isPrime(7));  // Should output: true
console.log(isPrime(10)); // Should output: false


// EXERCISE 10: Objects and Arrays
// Given an array of person objects, return an array of just their names

function getNames(people) {
    // YOUR CODE HERE:
}

// Test
const people = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];
console.log(getNames(people)); // Should output: ["Alice", "Bob", "Charlie"]


// BONUS EXERCISE: FizzBuzz
// Write a function that prints numbers from 1 to n
// For multiples of 3, print "Fizz"
// For multiples of 5, print "Buzz"
// For multiples of both, print "FizzBuzz"

function fizzBuzz(n) {
    // YOUR CODE HERE:
}

// Test
fizzBuzz(15);
