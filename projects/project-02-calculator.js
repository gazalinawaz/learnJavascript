// ============================================
// PROJECT 2: ADVANCED CALCULATOR
// ============================================

// Build a calculator with the following features:
// 1. Basic operations: +, -, *, /
// 2. Advanced operations: power, square root, percentage
// 3. Memory functions: store, recall, clear
// 4. History of calculations
// 5. Chain operations

class Calculator {
    constructor() {
        this.currentValue = 0;
        this.memory = 0;
        this.history = [];
    }
    
    // Basic Operations
    add(value) {
        // YOUR CODE HERE:
        // Add value to currentValue
        // Record in history
        // Return this for chaining
    }
    
    subtract(value) {
        // YOUR CODE HERE:
    }
    
    multiply(value) {
        // YOUR CODE HERE:
    }
    
    divide(value) {
        // YOUR CODE HERE:
        // Handle division by zero
    }
    
    // Advanced Operations
    power(exponent) {
        // YOUR CODE HERE:
        // Raise currentValue to the power of exponent
    }
    
    squareRoot() {
        // YOUR CODE HERE:
        // Calculate square root of currentValue
        // Handle negative numbers
    }
    
    percentage(value) {
        // YOUR CODE HERE:
        // Calculate percentage of currentValue
    }
    
    // Memory Operations
    memoryStore() {
        // YOUR CODE HERE:
        // Store currentValue in memory
    }
    
    memoryRecall() {
        // YOUR CODE HERE:
        // Set currentValue to memory value
    }
    
    memoryClear() {
        // YOUR CODE HERE:
        // Clear memory
    }
    
    memoryAdd(value) {
        // YOUR CODE HERE:
        // Add value to memory
    }
    
    // Utility Methods
    clear() {
        // YOUR CODE HERE:
        // Reset currentValue to 0
    }
    
    getValue() {
        // YOUR CODE HERE:
        // Return currentValue
    }
    
    setValue(value) {
        // YOUR CODE HERE:
        // Set currentValue
    }
    
    getHistory() {
        // YOUR CODE HERE:
        // Return calculation history
    }
    
    clearHistory() {
        // YOUR CODE HERE:
        // Clear calculation history
    }
    
    // Helper method to record operations
    recordOperation(operation, value, result) {
        // YOUR CODE HERE:
        // Add operation to history array
        // Format: {operation, value, result, timestamp}
    }
}

// ============================================
// TESTING YOUR CALCULATOR
// ============================================

console.log("=== TESTING CALCULATOR ===\n");

const calc = new Calculator();

// Test 1: Basic operations
console.log("Test 1: Basic operations");
calc.setValue(10);
calc.add(5);
console.log("10 + 5 =", calc.getValue()); // Should be 15

calc.multiply(2);
console.log("15 * 2 =", calc.getValue()); // Should be 30

calc.subtract(10);
console.log("30 - 10 =", calc.getValue()); // Should be 20

calc.divide(4);
console.log("20 / 4 =", calc.getValue()); // Should be 5
console.log("");

// Test 2: Chaining operations
console.log("Test 2: Chaining operations");
calc.clear();
const result = calc.setValue(5).add(3).multiply(2).subtract(4).getValue();
console.log("(5 + 3) * 2 - 4 =", result); // Should be 12
console.log("");

// Test 3: Advanced operations
console.log("Test 3: Advanced operations");
calc.setValue(2);
calc.power(3);
console.log("2^3 =", calc.getValue()); // Should be 8

calc.setValue(16);
calc.squareRoot();
console.log("√16 =", calc.getValue()); // Should be 4

calc.setValue(200);
calc.percentage(10);
console.log("10% of 200 =", calc.getValue()); // Should be 20
console.log("");

// Test 4: Memory operations
console.log("Test 4: Memory operations");
calc.setValue(42);
calc.memoryStore();
console.log("Stored 42 in memory");

calc.setValue(10);
console.log("Current value:", calc.getValue()); // Should be 10

calc.memoryRecall();
console.log("Recalled from memory:", calc.getValue()); // Should be 42
console.log("");

// Test 5: History
console.log("Test 5: History");
console.log("Calculation history:", calc.getHistory());
console.log("");

// ============================================
// BONUS CHALLENGES
// ============================================

// 1. Add trigonometric functions (sin, cos, tan)
// 2. Add logarithmic functions
// 3. Handle complex expressions with parentheses
// 4. Add scientific notation support
// 5. Implement undo/redo functionality
// 6. Add unit conversions
// 7. Support different number bases (binary, hex, octal)
// 8. Add statistical functions (mean, median, mode)

// YOUR BONUS CODE HERE:
