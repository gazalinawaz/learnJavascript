// ============================================
// PROJECT 1: TODO LIST APPLICATION
// ============================================

// Build a complete todo list application with the following features:
// 1. Add new todos
// 2. Mark todos as complete/incomplete
// 3. Delete todos
// 4. Filter todos (all, active, completed)
// 5. Clear all completed todos
// 6. Count active todos

class TodoApp {
    constructor() {
        this.todos = [];
        this.nextId = 1;
        this.filter = 'all'; // 'all', 'active', 'completed'
    }
    
    // Add a new todo
    addTodo(text) {
        // YOUR CODE HERE:
        // Create a todo object with id, text, completed, createdAt
        // Add it to the todos array
        // Return the created todo
    }
    
    // Toggle todo completion status
    toggleTodo(id) {
        // YOUR CODE HERE:
        // Find the todo by id
        // Toggle its completed status
    }
    
    // Delete a todo
    deleteTodo(id) {
        // YOUR CODE HERE:
        // Remove the todo with the given id from the array
    }
    
    // Edit todo text
    editTodo(id, newText) {
        // YOUR CODE HERE:
        // Find the todo and update its text
    }
    
    // Get all todos based on current filter
    getTodos() {
        // YOUR CODE HERE:
        // Return todos based on this.filter
        // 'all': return all todos
        // 'active': return only incomplete todos
        // 'completed': return only completed todos
    }
    
    // Set filter
    setFilter(filter) {
        // YOUR CODE HERE:
        // Set this.filter to the provided value
    }
    
    // Get count of active todos
    getActiveCount() {
        // YOUR CODE HERE:
        // Return the number of incomplete todos
    }
    
    // Get count of completed todos
    getCompletedCount() {
        // YOUR CODE HERE:
        // Return the number of completed todos
    }
    
    // Clear all completed todos
    clearCompleted() {
        // YOUR CODE HERE:
        // Remove all completed todos from the array
    }
    
    // Mark all todos as complete
    completeAll() {
        // YOUR CODE HERE:
        // Set all todos to completed = true
    }
    
    // Get todo by id
    getTodoById(id) {
        // YOUR CODE HERE:
        // Find and return the todo with the given id
    }
}

// ============================================
// TESTING YOUR TODO APP
// ============================================

console.log("=== TESTING TODO APP ===\n");

const app = new TodoApp();

// Test 1: Add todos
console.log("Test 1: Adding todos");
app.addTodo("Learn JavaScript");
app.addTodo("Build a project");
app.addTodo("Practice coding");
console.log("All todos:", app.getTodos());
console.log("Active count:", app.getActiveCount());
console.log("");

// Test 2: Toggle completion
console.log("Test 2: Toggle completion");
app.toggleTodo(1);
console.log("After toggling todo 1:", app.getTodos());
console.log("Active count:", app.getActiveCount());
console.log("Completed count:", app.getCompletedCount());
console.log("");

// Test 3: Filter todos
console.log("Test 3: Filter todos");
app.setFilter('active');
console.log("Active todos:", app.getTodos());
app.setFilter('completed');
console.log("Completed todos:", app.getTodos());
app.setFilter('all');
console.log("All todos:", app.getTodos());
console.log("");

// Test 4: Edit todo
console.log("Test 4: Edit todo");
app.editTodo(2, "Build an awesome project");
console.log("After editing todo 2:", app.getTodos());
console.log("");

// Test 5: Delete todo
console.log("Test 5: Delete todo");
app.deleteTodo(3);
console.log("After deleting todo 3:", app.getTodos());
console.log("");

// Test 6: Clear completed
console.log("Test 6: Clear completed");
app.toggleTodo(2);
app.clearCompleted();
console.log("After clearing completed:", app.getTodos());
console.log("");

// ============================================
// BONUS CHALLENGES
// ============================================

// 1. Add due dates to todos
// 2. Add priority levels (high, medium, low)
// 3. Add categories/tags to todos
// 4. Sort todos by different criteria
// 5. Search todos by text
// 6. Add undo/redo functionality
// 7. Save todos to localStorage
// 8. Add subtasks to todos

// YOUR BONUS CODE HERE:
