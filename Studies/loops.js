/**
 * LOOPS:
 * 
 * Loops are one of the most useful structures in javascript.
 * They allow us to execute code for a number of times based on a certain condition.
 * They are essential for executing code repeatedly, efficiently.
 * 
 */

// 1. For loop //
// executers code for a specified number of times

for (initialization; condition; increment/decrement) {
 //  ^ set counter.  ^condition.  ^increments counter each loop  
    // code to be executed
}
for (let i = 0; i < 5; i++) {
    console.log(i); // Output: 0, 1, 2, 3, 4
}

// 2. while loop
//while a condition remains true, the code block will continue to loop.

while (condition) {
    // code to be executed
}
let i = 0;
while (i < 5) {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
}

// 3. do while loop
// executes code block once then checks condition. 
// while condition is still true, continues to loop.

do {
    // code to be executed
} while (condition);

let i = 0;
do {
    console.log(i); // Output: 0, 1, 2, 3, 4
    i++;
} while (i < 5);

// 4. for...in loop
// iterates over key properties of an object

for (variable in object) {
    // code to be executed
}

let obj = {a: 1, b: 2, c: 3};
for (let key in obj) {
    console.log(key, obj[key]); // Output: a 1, b 2, c 3
}

// 5. for...of loop
//iterates over values of an object such as arrays or strings.

for (variable of iterable) {
    // code to be executed
}

let arr = [10, 20, 30];
for (let value of arr) {
    console.log(value); // Output: 10, 20, 30
}