// ============================================
// LESSON 6: ARRAYS
// ============================================

// CREATING ARRAYS
// ============================================

const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null, {name: "John"}];
const empty = [];

console.log(fruits);
console.log(numbers);

// Using Array constructor
const arr = new Array(3); // Creates array with 3 empty slots
const arr2 = new Array(1, 2, 3); // Creates [1, 2, 3]

// ACCESSING ELEMENTS
// ============================================

console.log(fruits[0]); // "apple" (first element)
console.log(fruits[1]); // "banana"
console.log(fruits[2]); // "orange"
console.log(fruits[3]); // undefined (doesn't exist)

// Negative indexing doesn't work in JavaScript
// Use length - 1 for last element
console.log(fruits[fruits.length - 1]); // "orange" (last element)

// ARRAY LENGTH
// ============================================

console.log(fruits.length); // 3

// Modifying length
let nums = [1, 2, 3, 4, 5];
nums.length = 3; // Truncates array
console.log(nums); // [1, 2, 3]

// MODIFYING ARRAYS
// ============================================

// Change element
fruits[1] = "grape";
console.log(fruits); // ["apple", "grape", "orange"]

// Add element at end
fruits[fruits.length] = "mango";
console.log(fruits);

// ARRAY METHODS - ADDING/REMOVING
// ============================================

// push() - Add to end
const colors = ["red", "blue"];
colors.push("green");
console.log(colors); // ["red", "blue", "green"]

colors.push("yellow", "purple"); // Add multiple
console.log(colors);

// pop() - Remove from end
const lastColor = colors.pop();
console.log(lastColor); // "purple"
console.log(colors);

// unshift() - Add to beginning
colors.unshift("black");
console.log(colors); // ["black", "red", "blue", "green", "yellow"]

// shift() - Remove from beginning
const firstColor = colors.shift();
console.log(firstColor); // "black"
console.log(colors);

// ARRAY METHODS - SEARCHING
// ============================================

const animals = ["cat", "dog", "bird", "fish", "dog"];

// indexOf() - First occurrence
console.log(animals.indexOf("dog")); // 1
console.log(animals.indexOf("elephant")); // -1 (not found)

// lastIndexOf() - Last occurrence
console.log(animals.lastIndexOf("dog")); // 4

// includes() - Check if exists
console.log(animals.includes("bird")); // true
console.log(animals.includes("lion")); // false

// find() - First element that matches condition
const numbers2 = [5, 12, 8, 130, 44];
const found = numbers2.find(num => num > 10);
console.log(found); // 12

// findIndex() - Index of first match
const foundIndex = numbers2.findIndex(num => num > 10);
console.log(foundIndex); // 1

// ARRAY METHODS - SLICING/SPLICING
// ============================================

const letters = ["a", "b", "c", "d", "e"];

// slice() - Extract portion (doesn't modify original)
const sliced = letters.slice(1, 4);
console.log(sliced); // ["b", "c", "d"]
console.log(letters); // Original unchanged

// slice with negative indices
console.log(letters.slice(-2)); // ["d", "e"]

// splice() - Add/remove elements (modifies original)
const months = ["Jan", "March", "April", "June"];

// Insert at index 1
months.splice(1, 0, "Feb");
console.log(months); // ["Jan", "Feb", "March", "April", "June"]

// Remove 1 element at index 4, add "May"
months.splice(4, 1, "May");
console.log(months); // ["Jan", "Feb", "March", "April", "May"]

// Remove 2 elements starting at index 2
const removed = months.splice(2, 2);
console.log(removed); // ["March", "April"]
console.log(months); // ["Jan", "Feb", "May"]

// ARRAY METHODS - COMBINING/SPLITTING
// ============================================

// concat() - Combine arrays
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concat(arr2);
console.log(combined); // [1, 2, 3, 4, 5, 6]

// Spread operator (modern way)
const combined2 = [...arr1, ...arr2];
console.log(combined2);

// join() - Array to string
const words = ["Hello", "World", "!"];
const sentence = words.join(" ");
console.log(sentence); // "Hello World !"

const csv = words.join(",");
console.log(csv); // "Hello,World,!"

// split() - String to array (String method)
const text = "apple,banana,orange";
const fruitArray = text.split(",");
console.log(fruitArray); // ["apple", "banana", "orange"]

// ARRAY METHODS - SORTING
// ============================================

// sort() - Sorts in place (modifies original)
const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];
unsorted.sort();
console.log(unsorted); // [1, 1, 2, 3, 4, 5, 6, 9]

// Sort strings
const names = ["Charlie", "Alice", "Bob"];
names.sort();
console.log(names); // ["Alice", "Bob", "Charlie"]

// Custom sort (numbers)
const nums2 = [10, 5, 40, 25, 1000, 1];
nums2.sort((a, b) => a - b); // Ascending
console.log(nums2);

nums2.sort((a, b) => b - a); // Descending
console.log(nums2);

// reverse() - Reverse array
const original = [1, 2, 3, 4, 5];
original.reverse();
console.log(original); // [5, 4, 3, 2, 1]

// ARRAY METHODS - ITERATION
// ============================================

const nums3 = [1, 2, 3, 4, 5];

// forEach() - Execute function for each element
nums3.forEach(num => {
    console.log(num * 2);
});

nums3.forEach((num, index) => {
    console.log(`Index ${index}: ${num}`);
});

// map() - Transform each element, return new array
const doubled = nums3.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = nums3.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// filter() - Keep elements that pass test
const evenNumbers = nums3.filter(num => num % 2 === 0);
console.log(evenNumbers); // [2, 4]

const greaterThanThree = nums3.filter(num => num > 3);
console.log(greaterThanThree); // [4, 5]

// reduce() - Reduce array to single value
const sum = nums3.reduce((total, num) => total + num, 0);
console.log(sum); // 15

const product = nums3.reduce((total, num) => total * num, 1);
console.log(product); // 120

// CHECKING ARRAYS
// ============================================

console.log(Array.isArray([1, 2, 3])); // true
console.log(Array.isArray("hello")); // false
console.log(Array.isArray({length: 3})); // false

// MULTI-DIMENSIONAL ARRAYS
// ============================================

const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

console.log(matrix[0][0]); // 1
console.log(matrix[1][2]); // 6
console.log(matrix[2][1]); // 8

// Iterate through 2D array
for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
        console.log(matrix[i][j]);
    }
}

// ARRAY DESTRUCTURING
// ============================================

const [first, second, third] = ["a", "b", "c"];
console.log(first);  // "a"
console.log(second); // "b"
console.log(third);  // "c"

// Skip elements
const [one, , three] = [1, 2, 3];
console.log(one);   // 1
console.log(three); // 3

// Rest pattern
const [head, ...tail] = [1, 2, 3, 4, 5];
console.log(head); // 1
console.log(tail); // [2, 3, 4, 5]

// COMMON PATTERNS
// ============================================

// Remove duplicates
const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];
console.log(unique); // [1, 2, 3, 4, 5]

// Flatten array
const nested = [1, [2, 3], [4, [5, 6]]];
const flat = nested.flat(2); // 2 levels deep
console.log(flat); // [1, 2, 3, 4, 5, 6]

// Check if all elements pass test
const allPositive = [1, 2, 3, 4].every(num => num > 0);
console.log(allPositive); // true

// Check if any element passes test
const hasEven = [1, 3, 5, 6].some(num => num % 2 === 0);
console.log(hasEven); // true

// ============================================
// EXERCISES
// ============================================

// 1. Create an array of your 5 favorite foods
// YOUR CODE HERE:

// 2. Add a new food to the end of the array
// YOUR CODE HERE:

// 3. Remove the first food from the array
// YOUR CODE HERE:

// 4. Find the index of a specific food
// YOUR CODE HERE:

// 5. Create a new array with numbers 1-10, then filter only even numbers
// YOUR CODE HERE:

// 6. Use map to create an array of squares from [1, 2, 3, 4, 5]
// YOUR CODE HERE:

// 7. Calculate the sum of [10, 20, 30, 40, 50] using reduce
// YOUR CODE HERE:

// 8. Sort this array in descending order: [45, 12, 78, 23, 56]
// YOUR CODE HERE:

// 9. Combine these arrays: [1, 2, 3] and [4, 5, 6]
// YOUR CODE HERE:

// 10. Remove duplicates from [1, 2, 2, 3, 4, 4, 5, 5, 5]
// YOUR CODE HERE:
