// ============================================
// LESSON 13: MODULES (ES6 Import/Export)
// ============================================

// EXPORTING (from a module file)
// ============================================

// Named exports
export const PI = 3.14159;
export const E = 2.71828;

export function add(a, b) {
    return a + b;
}

export function subtract(a, b) {
    return a - b;
}

// Export multiple at once
const multiply = (a, b) => a * b;
const divide = (a, b) => a / b;

export { multiply, divide };

// Export with alias
const power = (base, exp) => base ** exp;
export { power as pow };

// DEFAULT EXPORT
// ============================================

// Only one default export per module
export default class Calculator {
    add(a, b) {
        return a + b;
    }
    
    subtract(a, b) {
        return a - b;
    }
}

// Or export existing value as default
const config = {
    apiUrl: "https://api.example.com",
    timeout: 5000
};

// export default config;

// IMPORTING
// ============================================

// Import named exports
// import { add, subtract } from './math.js';

// Import with alias
// import { add as addition, subtract as subtraction } from './math.js';

// Import all as namespace
// import * as MathUtils from './math.js';
// MathUtils.add(5, 3);

// Import default export
// import Calculator from './calculator.js';

// Import both default and named
// import Calculator, { add, subtract } from './calculator.js';

// DYNAMIC IMPORTS
// ============================================

// Load module conditionally
async function loadModule() {
    if (true) {
        const module = await import('./math.js');
        console.log(module.add(5, 3));
    }
}

// Load on demand
document.getElementById('button')?.addEventListener('click', async () => {
    const { default: Calculator } = await import('./calculator.js');
    const calc = new Calculator();
});

// MODULE PATTERNS (Before ES6)
// ============================================

// IIFE Module Pattern
const MyModule = (function() {
    // Private variables
    let privateVar = "I'm private";
    
    // Private function
    function privateFunction() {
        return "Private function";
    }
    
    // Public API
    return {
        publicVar: "I'm public",
        publicFunction() {
            return privateFunction();
        },
        getPrivateVar() {
            return privateVar;
        }
    };
})();

console.log(MyModule.publicVar);
console.log(MyModule.publicFunction());
// console.log(MyModule.privateVar); // undefined

// Revealing Module Pattern
const RevealingModule = (function() {
    let counter = 0;
    
    function increment() {
        counter++;
    }
    
    function decrement() {
        counter--;
    }
    
    function getCount() {
        return counter;
    }
    
    // Reveal public methods
    return {
        increment,
        decrement,
        getCount
    };
})();

// COMMONJS (Node.js style)
// ============================================

// Exporting
// module.exports = {
//     add: (a, b) => a + b,
//     subtract: (a, b) => a - b
// };

// Or
// exports.add = (a, b) => a + b;
// exports.subtract = (a, b) => a - b;

// Importing
// const math = require('./math');
// const { add, subtract } = require('./math');

// PRACTICAL MODULE EXAMPLES
// ============================================

// utils.js - Utility functions module
export const StringUtils = {
    capitalize(str) {
        return str.charAt(0).toUpperCase() + str.slice(1);
    },
    
    reverse(str) {
        return str.split('').reverse().join('');
    },
    
    truncate(str, length) {
        return str.length > length ? str.slice(0, length) + '...' : str;
    }
};

export const ArrayUtils = {
    unique(arr) {
        return [...new Set(arr)];
    },
    
    chunk(arr, size) {
        const chunks = [];
        for (let i = 0; i < arr.length; i += size) {
            chunks.push(arr.slice(i, i + size));
        }
        return chunks;
    },
    
    shuffle(arr) {
        const shuffled = [...arr];
        for (let i = shuffled.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
        }
        return shuffled;
    }
};

// api.js - API module
export class ApiClient {
    constructor(baseUrl) {
        this.baseUrl = baseUrl;
    }
    
    async get(endpoint) {
        const response = await fetch(`${this.baseUrl}${endpoint}`);
        return response.json();
    }
    
    async post(endpoint, data) {
        const response = await fetch(`${this.baseUrl}${endpoint}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });
        return response.json();
    }
}

// constants.js - Constants module
export const HTTP_STATUS = {
    OK: 200,
    CREATED: 201,
    BAD_REQUEST: 400,
    UNAUTHORIZED: 401,
    NOT_FOUND: 404,
    SERVER_ERROR: 500
};

export const COLORS = {
    PRIMARY: '#007bff',
    SUCCESS: '#28a745',
    DANGER: '#dc3545',
    WARNING: '#ffc107'
};

// validators.js - Validation module
export const Validators = {
    isEmail(email) {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    },
    
    isPhone(phone) {
        const regex = /^\d{10}$/;
        return regex.test(phone);
    },
    
    isStrongPassword(password) {
        return password.length >= 8 &&
               /[A-Z]/.test(password) &&
               /[a-z]/.test(password) &&
               /[0-9]/.test(password);
    },
    
    isUrl(url) {
        try {
            new URL(url);
            return true;
        } catch {
            return false;
        }
    }
};

// storage.js - Local storage wrapper
export class Storage {
    static set(key, value) {
        try {
            localStorage.setItem(key, JSON.stringify(value));
            return true;
        } catch (error) {
            console.error('Storage error:', error);
            return false;
        }
    }
    
    static get(key, defaultValue = null) {
        try {
            const item = localStorage.getItem(key);
            return item ? JSON.parse(item) : defaultValue;
        } catch (error) {
            console.error('Storage error:', error);
            return defaultValue;
        }
    }
    
    static remove(key) {
        localStorage.removeItem(key);
    }
    
    static clear() {
        localStorage.clear();
    }
}

// NAMESPACE PATTERN
// ============================================

const App = {
    config: {
        apiUrl: 'https://api.example.com',
        version: '1.0.0'
    },
    
    utils: {
        formatDate(date) {
            return date.toLocaleDateString();
        },
        
        formatCurrency(amount) {
            return `$${amount.toFixed(2)}`;
        }
    },
    
    api: {
        async fetchData() {
            // API call
        }
    }
};

// Usage
console.log(App.config.version);
console.log(App.utils.formatCurrency(99.99));

// SINGLETON MODULE
// ============================================

export const Logger = (function() {
    let instance;
    
    function createInstance() {
        return {
            logs: [],
            
            log(message) {
                const entry = {
                    message,
                    timestamp: new Date(),
                    level: 'info'
                };
                this.logs.push(entry);
                console.log(`[INFO] ${message}`);
            },
            
            error(message) {
                const entry = {
                    message,
                    timestamp: new Date(),
                    level: 'error'
                };
                this.logs.push(entry);
                console.error(`[ERROR] ${message}`);
            },
            
            getLogs() {
                return [...this.logs];
            }
        };
    }
    
    return {
        getInstance() {
            if (!instance) {
                instance = createInstance();
            }
            return instance;
        }
    };
})();

// Usage
const logger = Logger.getInstance();
logger.log('Application started');
logger.error('Something went wrong');

// ============================================
// BEST PRACTICES
// ============================================

// 1. One module per file
// 2. Use named exports for utilities
// 3. Use default export for main class/function
// 4. Keep modules focused (single responsibility)
// 5. Avoid circular dependencies
// 6. Use barrel exports (index.js) to group related modules

// Example barrel export (index.js):
// export { StringUtils, ArrayUtils } from './utils';
// export { ApiClient } from './api';
// export { Validators } from './validators';

// Then import from single location:
// import { StringUtils, ApiClient, Validators } from './lib';

// ============================================
// EXERCISES
// ============================================

// 1. Create a math module with add, subtract, multiply, divide functions
// YOUR CODE HERE:

// 2. Create a date utility module with formatting functions
// YOUR CODE HERE:

// 3. Create a validation module for email, phone, password
// YOUR CODE HERE:

// 4. Create a module that manages user authentication state
// YOUR CODE HERE:

// 5. Create a logger module with different log levels
// YOUR CODE HERE:

// 6. Create a module for array manipulation utilities
// YOUR CODE HERE:

// 7. Organize related modules using the namespace pattern
// YOUR CODE HERE:
