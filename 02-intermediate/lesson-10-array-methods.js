// ============================================
// LESSON 10: ADVANCED ARRAY METHODS
// ============================================

// MAP - Transform each element
// ============================================

const numbers = [1, 2, 3, 4, 5];

const doubled = numbers.map(num => num * 2);
console.log(doubled); // [2, 4, 6, 8, 10]

const squared = numbers.map(num => num ** 2);
console.log(squared); // [1, 4, 9, 16, 25]

// Map with objects
const users = [
    {name: "Alice", age: 25},
    {name: "Bob", age: 30},
    {name: "Charlie", age: 35}
];

const names = users.map(user => user.name);
console.log(names); // ["Alice", "Bob", "Charlie"]

const ages = users.map(user => user.age);
console.log(ages); // [25, 30, 35]

// Map with index
const withIndex = numbers.map((num, index) => `${index}: ${num}`);
console.log(withIndex); // ["0: 1", "1: 2", "2: 3", "3: 4", "4: 5"]

// FILTER - Keep elements that pass test
// ============================================

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const evens = nums.filter(num => num % 2 === 0);
console.log(evens); // [2, 4, 6, 8, 10]

const greaterThanFive = nums.filter(num => num > 5);
console.log(greaterThanFive); // [6, 7, 8, 9, 10]

// Filter objects
const adults = users.filter(user => user.age >= 30);
console.log(adults); // [{name: "Bob", age: 30}, {name: "Charlie", age: 35}]

// Filter with multiple conditions
const products = [
    {name: "Laptop", price: 1000, inStock: true},
    {name: "Phone", price: 500, inStock: false},
    {name: "Tablet", price: 300, inStock: true},
    {name: "Monitor", price: 200, inStock: true}
];

const availableAndAffordable = products.filter(p => 
    p.inStock && p.price < 500
);
console.log(availableAndAffordable);

// REDUCE - Reduce array to single value
// ============================================

const values = [1, 2, 3, 4, 5];

// Sum
const sum = values.reduce((total, num) => total + num, 0);
console.log(sum); // 15

// Product
const product = values.reduce((total, num) => total * num, 1);
console.log(product); // 120

// Max value
const max = values.reduce((max, num) => num > max ? num : max, values[0]);
console.log(max); // 5

// Count occurrences
const fruits = ["apple", "banana", "apple", "orange", "banana", "apple"];
const fruitCount = fruits.reduce((count, fruit) => {
    count[fruit] = (count[fruit] || 0) + 1;
    return count;
}, {});
console.log(fruitCount); // {apple: 3, banana: 2, orange: 1}

// Group by property
const people = [
    {name: "Alice", age: 25, city: "NYC"},
    {name: "Bob", age: 30, city: "LA"},
    {name: "Charlie", age: 25, city: "NYC"},
    {name: "David", age: 30, city: "NYC"}
];

const byCity = people.reduce((groups, person) => {
    const city = person.city;
    if (!groups[city]) {
        groups[city] = [];
    }
    groups[city].push(person);
    return groups;
}, {});
console.log(byCity);

// Flatten array
const nested = [[1, 2], [3, 4], [5, 6]];
const flattened = nested.reduce((flat, arr) => flat.concat(arr), []);
console.log(flattened); // [1, 2, 3, 4, 5, 6]

// FIND - First element that matches
// ============================================

const numbers2 = [5, 12, 8, 130, 44];

const found = numbers2.find(num => num > 10);
console.log(found); // 12 (first match)

const user = users.find(u => u.name === "Bob");
console.log(user); // {name: "Bob", age: 30}

// FINDINDEX - Index of first match
// ============================================

const foundIndex = numbers2.findIndex(num => num > 10);
console.log(foundIndex); // 1

// SOME - Check if at least one passes test
// ============================================

const hasEven = numbers.some(num => num % 2 === 0);
console.log(hasEven); // true

const hasNegative = numbers.some(num => num < 0);
console.log(hasNegative); // false

const hasAdult = users.some(user => user.age >= 18);
console.log(hasAdult); // true

// EVERY - Check if all pass test
// ============================================

const allPositive = numbers.every(num => num > 0);
console.log(allPositive); // true

const allEven = numbers.every(num => num % 2 === 0);
console.log(allEven); // false

const allAdults = users.every(user => user.age >= 18);
console.log(allAdults); // true

// FOREACH - Execute function for each element
// ============================================

numbers.forEach(num => {
    console.log(num * 2);
});

// With index and array
numbers.forEach((num, index, arr) => {
    console.log(`Index ${index}: ${num} (Array length: ${arr.length})`);
});

// SORT - Sort array in place
// ============================================

const unsorted = [3, 1, 4, 1, 5, 9, 2, 6];

// Default sort (converts to strings)
const sorted1 = [...unsorted].sort();
console.log(sorted1); // [1, 1, 2, 3, 4, 5, 6, 9]

// Numeric sort (ascending)
const sorted2 = [...unsorted].sort((a, b) => a - b);
console.log(sorted2);

// Numeric sort (descending)
const sorted3 = [...unsorted].sort((a, b) => b - a);
console.log(sorted3);

// Sort objects
const students = [
    {name: "Charlie", grade: 85},
    {name: "Alice", grade: 92},
    {name: "Bob", grade: 88}
];

// Sort by grade
students.sort((a, b) => b.grade - a.grade);
console.log(students);

// Sort by name
students.sort((a, b) => a.name.localeCompare(b.name));
console.log(students);

// FLAT - Flatten nested arrays
// ============================================

const nested1 = [1, [2, 3], [4, [5, 6]]];
console.log(nested1.flat());    // [1, 2, 3, 4, [5, 6]] (1 level)
console.log(nested1.flat(2));   // [1, 2, 3, 4, 5, 6] (2 levels)
console.log(nested1.flat(Infinity)); // Flatten all levels

// FLATMAP - Map then flatten
// ============================================

const sentences = ["Hello world", "How are you"];

// Using map + flat
const words1 = sentences.map(s => s.split(" ")).flat();
console.log(words1);

// Using flatMap (more efficient)
const words2 = sentences.flatMap(s => s.split(" "));
console.log(words2);

// CHAINING METHODS
// ============================================

const data = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Chain multiple operations
const result = data
    .filter(num => num % 2 === 0)  // Get evens: [2, 4, 6, 8, 10]
    .map(num => num * 2)           // Double them: [4, 8, 12, 16, 20]
    .reduce((sum, num) => sum + num, 0); // Sum: 60

console.log(result); // 60

// Complex chaining example
const orders = [
    {id: 1, items: [{name: "Book", price: 10}, {name: "Pen", price: 2}]},
    {id: 2, items: [{name: "Laptop", price: 1000}]},
    {id: 3, items: [{name: "Mouse", price: 20}, {name: "Keyboard", price: 50}]}
];

const totalRevenue = orders
    .flatMap(order => order.items)
    .map(item => item.price)
    .reduce((sum, price) => sum + price, 0);

console.log(totalRevenue); // 1082

// FROM - Create array from iterable
// ============================================

const str = "Hello";
const chars = Array.from(str);
console.log(chars); // ["H", "e", "l", "l", "o"]

// With mapping function
const range = Array.from({length: 5}, (_, i) => i + 1);
console.log(range); // [1, 2, 3, 4, 5]

// OF - Create array from arguments
// ============================================

const arr1 = Array.of(1, 2, 3);
console.log(arr1); // [1, 2, 3]

const arr2 = Array.of(7); // Different from new Array(7)
console.log(arr2); // [7]

// FILL - Fill array with static value
// ============================================

const arr3 = new Array(5).fill(0);
console.log(arr3); // [0, 0, 0, 0, 0]

const arr4 = [1, 2, 3, 4, 5];
arr4.fill(0, 2, 4); // Fill from index 2 to 4
console.log(arr4); // [1, 2, 0, 0, 5]

// PRACTICAL EXAMPLES
// ============================================

// 1. Remove duplicates
const withDuplicates = [1, 2, 2, 3, 4, 4, 5];
const unique = [...new Set(withDuplicates)];
console.log(unique);

// 2. Get unique values from array of objects
const items = [
    {id: 1, name: "A"},
    {id: 2, name: "B"},
    {id: 1, name: "A"}
];
const uniqueItems = items.filter((item, index, self) =>
    index === self.findIndex(t => t.id === item.id)
);
console.log(uniqueItems);

// 3. Partition array
const partition = (arr, predicate) => {
    return arr.reduce((acc, item) => {
        acc[predicate(item) ? 0 : 1].push(item);
        return acc;
    }, [[], []]);
};

const [evens2, odds] = partition([1, 2, 3, 4, 5, 6], n => n % 2 === 0);
console.log(evens2); // [2, 4, 6]
console.log(odds);   // [1, 3, 5]

// 4. Chunk array
const chunk = (arr, size) => {
    return arr.reduce((chunks, item, i) => {
        if (i % size === 0) {
            chunks.push([item]);
        } else {
            chunks[chunks.length - 1].push(item);
        }
        return chunks;
    }, []);
};

console.log(chunk([1, 2, 3, 4, 5, 6, 7], 3)); // [[1,2,3], [4,5,6], [7]]

// ============================================
// EXERCISES
// ============================================

// 1. Double all numbers in [1, 2, 3, 4, 5] using map
// YOUR CODE HERE:

// 2. Filter out all numbers less than 50 from [23, 45, 67, 12, 89, 34]
// YOUR CODE HERE:

// 3. Calculate the sum of [10, 20, 30, 40, 50] using reduce
// YOUR CODE HERE:

// 4. Find the first number greater than 100 in [45, 67, 123, 89, 156]
// YOUR CODE HERE:

// 5. Check if all numbers in [2, 4, 6, 8] are even
// YOUR CODE HERE:

// 6. Get all names from [{name: "Alice", age: 25}, {name: "Bob", age: 30}]
// YOUR CODE HERE:

// 7. Chain: Get even numbers, square them, then sum
// Array: [1, 2, 3, 4, 5, 6]
// YOUR CODE HERE:

// 8. Group people by age: [{name: "A", age: 20}, {name: "B", age: 20}, {name: "C", age: 30}]
// YOUR CODE HERE:

// 9. Flatten [[1, 2], [3, 4], [5, 6]] into single array
// YOUR CODE HERE:

// 10. Sort [{name: "Charlie", score: 85}, {name: "Alice", score: 92}] by score descending
// YOUR CODE HERE:
