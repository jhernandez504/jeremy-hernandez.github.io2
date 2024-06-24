/**
 * 
 * FUNCTIONS:
 * 
 * Functions are one of the fundamental building blocks in Javascript.
 * Functions are reusable blocks of code.
 * They are designed to perform a task or calculate a value.
 * 
 */

// 1. Function syntax
//Structured as keyword 'function' first.
//function is followed by a name for it.
// after function functionName is a pair of parenthesis that is the function parameters.
// Parameters will take in the inputs and the code block will use the input to perform task.
function functionName(parameters) {
    // code to be executed
}

// 2. Types of Functions //
//Functions can be presented in many ways.

// 2a. Function declarations
//function add will accept paramaters (a, b) and run the code block
//The code block will then return a value outside of function resulting from a + b 
function add(a, b) {
    return a + b;
}

function greet(name) {
    return `Hello, ${name}!`;
}
console.log(greet("Jeremy")); // output: Hello, Jeremy!

// 2b. Function expressions 
// We can assign a named function or anonymous to a variable.

const add = function(a, b) {
    return a + b;
};

const addTogether = function add(a, b) {
    return a + b;
};
//
const greet = function(name) {
    return `Hello, ${name}!`;
};
console.log(greet("Jeremy")); // Output: Hello, Jeremy!

// 2c. Arrow functions //
//Arrow functions are almost the same as normal function
//key difference is its structure

//function below is an arrow function
//It initializes a variable to a parenthesis containing parameters.
//Followed by an => which is the arrow, it will return the code written after.
//Used for cleaner code.
const add = (a, b) => a + b;

const greet = (name) => `Hello, ${name}!`;
console.log(greet("Jeremy")); // Output: Hello, Jeremy!

// 3. Function parameters & arguments //
// Parameters and arguments can take input values or inputs with assigned values.

// 3a. default
//Below we have passed in a parameter that is assigned a value of string "Guest".
function greet(name = "Guest") {
    return `Hello, ${name}!`;
}
console.log(greet()); // Output: Hello, Guest!

// 3b. Rest parameter
// If we don't know how many inputs will be provided
//we can use the ... followed by input.

//Below is a function that takes in any number of inputs and returns the sum.
function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
}
console.log(sum(1, 2, 3, 4)); // Output: 10

// 4. Return values //
//the keyword 'return' will exit the function and return any values

//function below will return the product of a * b
function multiply(a, b) {
    return a * b;
}
console.log(multiply(2, 3)); // Output: 6

// 5. Scopes and closures //
// Variables declared and initialized inside functions have a scope.
// They will either be local or global.
// A closure is a function that retains access to its lexical scope even when the function is executed outside that scope.

// 5a. Local scope
//function below declares and initializes x variable to value 10 inside a function.
//due to hoisting, the console.log(x) will be read after let x;
//Then x = 10 will be run last but an error of undefined will outputted before initialization.
function localScope() {
    let x = 10;
    console.log(x); // Output: 10
}
// console.log(x); // Error: x is not defined

// 5b. Global scope
// A variable declared outside of a function will mostly be global.
//Since y is declared and initialized outside of function. It can log value of y.
let y = 20;
function globalScope() {
    console.log(y); // Output: 20
}
globalScope();

// 5c. Closures
// A closure is a function that retains access to its lexical scope
// even when the function is executed outside that scope.

function outer() {
    let outerVar = "I'm outside!";
    function inner() {
        console.log(outerVar); // Output: I'm outside!
    }
    return inner;
}
const innerFunc = outer();
innerFunc();

// 6. High Order Functions //
// Functions that takes in other functions as arguments or
// returns functions as their result.

function higherOrder(fn, value) {
    return fn(value);
}
function double(x) {
    return x * 2;
}
console.log(higherOrder(double, 5)); // Output: 10

// 7. Immediately invoked function expressions || IIFE //
// We can declare a function while also invoking it.

// 7a. IIFE
// an anonymous function is invoked with argument name and code to execute.
//A following parenthesis has the input string to be used as argument.

(function(name) {
    console.log(`Hello, ${name}!`);
})("Dave"); // Output: Hello, Dave!

// 8. Recursion functions //
// Functions that can call itself.

//Below is a recursion function that will call itself over and over
// to find the factorials of argument n
function factorial(n) {
    //base case
    //if the n is 0 it will return 1 as last factorial of n
    if (n === 0) {
        return 1;
    } 
    //recursion case
    //if n isnt 0 it will keep multiplying n * itself but decrementing 1 from n each time
    else {
        return n * factorial(n - 1);
    }
}
console.log(factorial(5)); // Output: 120

// 9. Callback functions //
// A function passed into another function as an argument.
// It is then executed within that function.

function fetchData(callback) {
    setTimeout(() => {
        callback("Data received!");
    }, 1000);
}
fetchData((message) => {
    console.log(message); // Output: Data received!
});
