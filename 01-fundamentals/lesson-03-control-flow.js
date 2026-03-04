// ============================================
// LESSON 3: CONTROL FLOW (if/else, switch)
// ============================================

// IF STATEMENT
// ============================================

let age = 18;

if (age >= 18) {
    console.log("You are an adult");
}

// IF-ELSE
// ============================================

let temperature = 25;

if (temperature > 30) {
    console.log("It's hot!");
} else {
    console.log("It's comfortable");
}

// IF-ELSE IF-ELSE
// ============================================

let score = 85;

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

// NESTED IF STATEMENTS
// ============================================

let userAge = 20;
let hasTicket = true;

if (userAge >= 18) {
    if (hasTicket) {
        console.log("You can enter the concert");
    } else {
        console.log("You need a ticket");
    }
} else {
    console.log("You must be 18 or older");
}

// LOGICAL OPERATORS IN CONDITIONS
// ============================================

// AND (&&)
let hour = 14;
let isWeekday = true;

if (hour >= 9 && hour <= 17 && isWeekday) {
    console.log("Office is open");
}

// OR (||)
let day = "Saturday";

if (day === "Saturday" || day === "Sunday") {
    console.log("It's the weekend!");
}

// NOT (!)
let isRaining = false;

if (!isRaining) {
    console.log("You don't need an umbrella");
}

// SWITCH STATEMENT
// ============================================

let dayOfWeek = 3;

switch (dayOfWeek) {
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

// SWITCH WITH STRINGS
// ============================================

let fruit = "apple";

switch (fruit) {
    case "banana":
        console.log("Bananas are yellow");
        break;
    case "apple":
        console.log("Apples are red or green");
        break;
    case "orange":
        console.log("Oranges are orange");
        break;
    default:
        console.log("Unknown fruit");
}

// SWITCH WITH FALL-THROUGH (Multiple cases)
// ============================================

let month = "December";

switch (month) {
    case "December":
    case "January":
    case "February":
        console.log("Winter");
        break;
    case "March":
    case "April":
    case "May":
        console.log("Spring");
        break;
    case "June":
    case "July":
    case "August":
        console.log("Summer");
        break;
    case "September":
    case "October":
    case "November":
        console.log("Fall");
        break;
    default:
        console.log("Invalid month");
}

// TRUTHY AND FALSY VALUES
// ============================================

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy

let username = "";

if (username) {
    console.log(`Welcome, ${username}`);
} else {
    console.log("Please enter a username");
}

let count = 0;
if (count) {
    console.log("Count is truthy");
} else {
    console.log("Count is falsy"); // This runs
}

// GUARD CLAUSES (Early returns)
// ============================================

function checkAccess(user) {
    if (!user) {
        console.log("No user provided");
        return;
    }
    
    if (!user.isActive) {
        console.log("User is not active");
        return;
    }
    
    if (!user.hasPermission) {
        console.log("User lacks permission");
        return;
    }
    
    console.log("Access granted");
}

// TERNARY OPERATOR (Review)
// ============================================

let userScore = 75;
let result = userScore >= 60 ? "Pass" : "Fail";
console.log(result);

// Nested ternary (use sparingly, can be hard to read)
let grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : "F";

// ============================================
// EXERCISES
// ============================================

// 1. Write an if statement that checks if a number is positive, negative, or zero
let num = -5;
// YOUR CODE HERE:

// 2. Check if a year is a leap year
// (divisible by 4 AND not divisible by 100) OR divisible by 400
let year = 2024;
// YOUR CODE HERE:

// 3. Create a simple calculator using switch statement
let operation = "add";
let num1 = 10;
let num2 = 5;
// YOUR CODE HERE: Handle add, subtract, multiply, divide

// 4. Check if a person can watch a movie based on age and rating
let movieRating = "R"; // G, PG, PG-13, R
let viewerAge = 16;
// YOUR CODE HERE:

// 5. Determine the largest of three numbers
let x = 15;
let y = 23;
let z = 19;
// YOUR CODE HERE:

// 6. Check if a character is a vowel using switch
let char = "a";
// YOUR CODE HERE:

// 7. Create a traffic light system
let light = "yellow";
// YOUR CODE HERE: green = "Go", yellow = "Slow down", red = "Stop"
