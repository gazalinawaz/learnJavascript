// ============================================
// LESSON 7: OBJECTS
// ============================================

// CREATING OBJECTS
// ============================================

// Object literal (most common)
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

console.log(person);

// Empty object
const emptyObj = {};

// Using new Object()
const person2 = new Object();
person2.name = "Jane";
person2.age = 25;

// ACCESSING PROPERTIES
// ============================================

// Dot notation
console.log(person.name); // "John"
console.log(person.age);  // 30

// Bracket notation
console.log(person["name"]); // "John"
console.log(person["city"]); // "New York"

// Bracket notation with variables
const property = "age";
console.log(person[property]); // 30

// MODIFYING PROPERTIES
// ============================================

// Change existing property
person.age = 31;
console.log(person.age); // 31

// Add new property
person.country = "USA";
console.log(person);

// Delete property
delete person.city;
console.log(person);

// METHODS (Functions in Objects)
// ============================================

const calculator = {
    add: function(a, b) {
        return a + b;
    },
    subtract: function(a, b) {
        return a - b;
    },
    // Shorthand method syntax
    multiply(a, b) {
        return a * b;
    },
    divide(a, b) {
        return a / b;
    }
};

console.log(calculator.add(5, 3));      // 8
console.log(calculator.multiply(4, 2)); // 8

// THIS KEYWORD
// ============================================

const user = {
    firstName: "Alice",
    lastName: "Smith",
    fullName: function() {
        return `${this.firstName} ${this.lastName}`;
    },
    greet() {
        return `Hello, I'm ${this.firstName}`;
    }
};

console.log(user.fullName()); // "Alice Smith"
console.log(user.greet());    // "Hello, I'm Alice"

// NESTED OBJECTS
// ============================================

const student = {
    name: "Bob",
    age: 20,
    address: {
        street: "123 Main St",
        city: "Boston",
        country: "USA"
    },
    grades: {
        math: 90,
        science: 85,
        english: 88
    }
};

console.log(student.address.city);     // "Boston"
console.log(student.grades.math);      // 90
console.log(student["address"]["street"]); // "123 Main St"

// CHECKING PROPERTIES
// ============================================

const car = {
    brand: "Toyota",
    model: "Camry",
    year: 2020
};

// in operator
console.log("brand" in car);  // true
console.log("color" in car);  // false

// hasOwnProperty()
console.log(car.hasOwnProperty("model")); // true
console.log(car.hasOwnProperty("price")); // false

// Check if property exists
console.log(car.brand !== undefined); // true
console.log(car.color !== undefined); // false

// ITERATING OVER OBJECTS
// ============================================

const product = {
    name: "Laptop",
    price: 999,
    brand: "Dell",
    inStock: true
};

// for...in loop
for (const key in product) {
    console.log(`${key}: ${product[key]}`);
}

// Object.keys() - Get array of keys
const keys = Object.keys(product);
console.log(keys); // ["name", "price", "brand", "inStock"]

keys.forEach(key => {
    console.log(`${key}: ${product[key]}`);
});

// Object.values() - Get array of values
const values = Object.values(product);
console.log(values); // ["Laptop", 999, "Dell", true]

// Object.entries() - Get array of [key, value] pairs
const entries = Object.entries(product);
console.log(entries);

entries.forEach(([key, value]) => {
    console.log(`${key}: ${value}`);
});

// COPYING OBJECTS
// ============================================

const original = {
    name: "John",
    age: 30
};

// Shallow copy - Object.assign()
const copy1 = Object.assign({}, original);
copy1.name = "Jane";
console.log(original.name); // "John" (unchanged)
console.log(copy1.name);    // "Jane"

// Shallow copy - Spread operator (modern)
const copy2 = {...original};
copy2.age = 25;
console.log(original.age); // 30 (unchanged)
console.log(copy2.age);    // 25

// Deep copy issue with nested objects
const person3 = {
    name: "Alice",
    address: {
        city: "NYC"
    }
};

const shallowCopy = {...person3};
shallowCopy.address.city = "LA";
console.log(person3.address.city); // "LA" (changed! - shallow copy)

// Deep copy solution
const deepCopy = JSON.parse(JSON.stringify(person3));
deepCopy.address.city = "Boston";
console.log(person3.address.city); // "LA" (unchanged)

// MERGING OBJECTS
// ============================================

const obj1 = {a: 1, b: 2};
const obj2 = {c: 3, d: 4};
const obj3 = {e: 5};

// Using Object.assign()
const merged1 = Object.assign({}, obj1, obj2, obj3);
console.log(merged1); // {a: 1, b: 2, c: 3, d: 4, e: 5}

// Using spread operator
const merged2 = {...obj1, ...obj2, ...obj3};
console.log(merged2);

// Overwriting properties
const defaults = {theme: "light", fontSize: 14};
const userSettings = {fontSize: 16};
const settings = {...defaults, ...userSettings};
console.log(settings); // {theme: "light", fontSize: 16}

// OBJECT DESTRUCTURING
// ============================================

const employee = {
    empName: "John",
    empAge: 30,
    empCity: "NYC",
    empSalary: 50000
};

// Extract properties
const {empName, empAge} = employee;
console.log(empName); // "John"
console.log(empAge);  // 30

// Rename while destructuring
const {empName: name, empAge: age} = employee;
console.log(name); // "John"
console.log(age);  // 30

// Default values
const {empCity, empCountry = "USA"} = employee;
console.log(empCity);    // "NYC"
console.log(empCountry); // "USA" (default)

// Rest pattern
const {empSalary, ...rest} = employee;
console.log(empSalary); // 50000
console.log(rest);      // {empName: "John", empAge: 30, empCity: "NYC"}

// COMPUTED PROPERTY NAMES
// ============================================

const propName = "score";
const obj = {
    [propName]: 100,
    ["user" + "Name"]: "Alice"
};

console.log(obj); // {score: 100, userName: "Alice"}

// SHORTHAND PROPERTY NAMES
// ============================================

const username = "Bob";
const userAge = 25;

// Old way
const user1 = {
    username: username,
    userAge: userAge
};

// Shorthand (when variable name matches property name)
const user2 = {
    username,
    userAge
};

console.log(user2); // {username: "Bob", userAge: 25}

// OPTIONAL CHAINING
// ============================================

const data = {
    user: {
        profile: {
            name: "Alice"
        }
    }
};

// Without optional chaining (can cause errors)
// console.log(data.user.settings.theme); // ERROR!

// With optional chaining
console.log(data.user?.settings?.theme); // undefined (no error)
console.log(data.user?.profile?.name);   // "Alice"

// OBJECT METHODS
// ============================================

// Object.freeze() - Make object immutable
const frozen = Object.freeze({name: "John"});
frozen.name = "Jane"; // Silently fails (or error in strict mode)
console.log(frozen.name); // "John"

// Object.seal() - Prevent adding/removing properties
const sealed = Object.seal({name: "John"});
sealed.name = "Jane"; // Works
sealed.age = 30;      // Silently fails
console.log(sealed);  // {name: "Jane"}

// COMMON PATTERNS
// ============================================

// Check if object is empty
const isEmpty = obj => Object.keys(obj).length === 0;
console.log(isEmpty({}));     // true
console.log(isEmpty({a: 1})); // false

// Count properties
const countProps = obj => Object.keys(obj).length;
console.log(countProps({a: 1, b: 2, c: 3})); // 3

// Filter object properties
const filterObject = (obj, predicate) => {
    return Object.fromEntries(
        Object.entries(obj).filter(predicate)
    );
};

const numbers = {a: 1, b: 2, c: 3, d: 4};
const evens = filterObject(numbers, ([key, value]) => value % 2 === 0);
console.log(evens); // {b: 2, d: 4}

// ============================================
// EXERCISES
// ============================================

// 1. Create an object representing a book with title, author, year, and pages
// YOUR CODE HERE:

// 2. Add a method to the book object that returns a description
// YOUR CODE HERE:

// 3. Create a nested object for a company with name, address (street, city), and employees array
// YOUR CODE HERE:

// 4. Loop through the book object and print all properties
// YOUR CODE HERE:

// 5. Create a copy of the book object and modify the copy
// YOUR CODE HERE:

// 6. Merge two objects: {a: 1, b: 2} and {b: 3, c: 4}
// YOUR CODE HERE:

// 7. Destructure the book object to extract title and author
// YOUR CODE HERE:

// 8. Create an array of objects representing 3 students with name and grade
// YOUR CODE HERE:

// 9. Find the student with the highest grade
// YOUR CODE HERE:

// 10. Convert this object to an array of [key, value] pairs
const myObj = {x: 10, y: 20, z: 30};
// YOUR CODE HERE:
