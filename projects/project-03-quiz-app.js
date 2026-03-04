// ============================================
// PROJECT 3: INTERACTIVE QUIZ APPLICATION
// ============================================

// Build a quiz application with the following features:
// 1. Multiple choice questions
// 2. Score tracking
// 3. Timer for each question
// 4. Review answers at the end
// 5. Different difficulty levels

class QuizApp {
    constructor(questions) {
        this.questions = questions;
        this.currentQuestionIndex = 0;
        this.score = 0;
        this.answers = [];
        this.startTime = null;
        this.timeLimit = 30; // seconds per question
    }
    
    // Start the quiz
    start() {
        // YOUR CODE HERE:
        // Reset score and answers
        // Set startTime
        // Return first question
    }
    
    // Get current question
    getCurrentQuestion() {
        // YOUR CODE HERE:
        // Return the current question object
    }
    
    // Submit answer for current question
    submitAnswer(answer) {
        // YOUR CODE HERE:
        // Check if answer is correct
        // Update score if correct
        // Store the answer with question info
        // Move to next question
        // Return result object: {correct, correctAnswer, score}
    }
    
    // Move to next question
    nextQuestion() {
        // YOUR CODE HERE:
        // Increment currentQuestionIndex
        // Return next question or null if quiz is complete
    }
    
    // Go to previous question (for review)
    previousQuestion() {
        // YOUR CODE HERE:
        // Decrement currentQuestionIndex if possible
    }
    
    // Check if quiz is complete
    isComplete() {
        // YOUR CODE HERE:
        // Return true if all questions answered
    }
    
    // Get final results
    getResults() {
        // YOUR CODE HERE:
        // Return object with:
        // - score
        // - totalQuestions
        // - percentage
        // - answers (array of question/answer/correct)
        // - timeTaken
    }
    
    // Get progress
    getProgress() {
        // YOUR CODE HERE:
        // Return current question number and total
    }
    
    // Calculate percentage score
    getPercentage() {
        // YOUR CODE HERE:
        // Return score as percentage
    }
    
    // Get time remaining for current question
    getTimeRemaining() {
        // YOUR CODE HERE:
        // Calculate time remaining based on startTime
    }
    
    // Reset quiz
    reset() {
        // YOUR CODE HERE:
        // Reset all properties to initial state
    }
}

// ============================================
// SAMPLE QUIZ DATA
// ============================================

const sampleQuestions = [
    {
        id: 1,
        question: "What is the output of: typeof null?",
        options: ["null", "undefined", "object", "number"],
        correctAnswer: 2,
        difficulty: "easy"
    },
    {
        id: 2,
        question: "Which method adds an element to the end of an array?",
        options: ["push()", "pop()", "shift()", "unshift()"],
        correctAnswer: 0,
        difficulty: "easy"
    },
    {
        id: 3,
        question: "What does '===' check for?",
        options: ["Value only", "Type only", "Value and type", "Neither"],
        correctAnswer: 2,
        difficulty: "medium"
    },
    {
        id: 4,
        question: "What is a closure in JavaScript?",
        options: [
            "A function that returns another function",
            "A function with access to outer scope variables",
            "A way to close the browser",
            "A loop structure"
        ],
        correctAnswer: 1,
        difficulty: "hard"
    },
    {
        id: 5,
        question: "Which is NOT a JavaScript data type?",
        options: ["String", "Boolean", "Float", "Symbol"],
        correctAnswer: 2,
        difficulty: "medium"
    }
];

// ============================================
// TESTING YOUR QUIZ APP
// ============================================

console.log("=== TESTING QUIZ APP ===\n");

const quiz = new QuizApp(sampleQuestions);

// Test 1: Start quiz
console.log("Test 1: Starting quiz");
quiz.start();
console.log("First question:", quiz.getCurrentQuestion());
console.log("Progress:", quiz.getProgress());
console.log("");

// Test 2: Answer questions
console.log("Test 2: Answering questions");
let result = quiz.submitAnswer(2); // Correct answer
console.log("Answer 1 result:", result);

result = quiz.submitAnswer(0); // Correct answer
console.log("Answer 2 result:", result);

result = quiz.submitAnswer(1); // Wrong answer
console.log("Answer 3 result:", result);
console.log("");

// Test 3: Check progress
console.log("Test 3: Check progress");
console.log("Current progress:", quiz.getProgress());
console.log("Is complete?", quiz.isComplete());
console.log("");

// Test 4: Complete quiz
console.log("Test 4: Complete remaining questions");
quiz.submitAnswer(1);
quiz.submitAnswer(2);
console.log("Is complete?", quiz.isComplete());
console.log("");

// Test 5: Get results
console.log("Test 5: Final results");
const results = quiz.getResults();
console.log("Final results:", results);
console.log(`Score: ${results.score}/${results.totalQuestions} (${results.percentage}%)`);
console.log("");

// ============================================
// BONUS CHALLENGES
// ============================================

// 1. Add different question types (true/false, multiple select)
// 2. Implement a leaderboard
// 3. Add hints for questions
// 4. Implement skip question functionality
// 5. Add categories for questions
// 6. Create a question bank and randomize questions
// 7. Add difficulty-based scoring (harder questions worth more)
// 8. Implement a lives/strikes system
// 9. Add achievements/badges
// 10. Save progress to localStorage

// YOUR BONUS CODE HERE:


// ============================================
// ADDITIONAL FEATURE: Question Builder
// ============================================

class QuestionBuilder {
    constructor() {
        this.questions = [];
    }
    
    addQuestion(question, options, correctAnswer, difficulty = "medium") {
        // YOUR CODE HERE:
        // Create and add a new question object
    }
    
    removeQuestion(id) {
        // YOUR CODE HERE:
        // Remove question by id
    }
    
    getQuestions() {
        // YOUR CODE HERE:
        // Return all questions
    }
    
    getQuestionsByDifficulty(difficulty) {
        // YOUR CODE HERE:
        // Filter and return questions by difficulty
    }
    
    shuffleQuestions() {
        // YOUR CODE HERE:
        // Randomize question order
    }
}

// YOUR CODE HERE:
