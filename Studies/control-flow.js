/**
 * CONTROL FLOW:
 * 
 * Control flow can be described as the order that statements, instructions or
 function is called an executed by the script.
 * Like any other language, JS can use statements to control the sequence of executions.
 * If conditions, loops or statements are used to do so.
 */

 // 1. Conditional statements //
 // Allow execution of code based on certain conditions

 // 1a.  If conditional statements
 // If conditional executes code if specified condition evaluates to true
 let x = 5;
if (x > 3) {
    console.log("x is greater than 3"); // logs to console since 5 > 3
} 
// 1b. else if conditional statement
// else if is used as a 2nd condition if 1st condition is false
let y = 2;
if(y > 10) {
    console.log("y is greater than 10"); // y fails this condition
}
else if (y < 3) {
    console.log("x is less than 3"); // logs to console since y < 3
}
// 1c. else conditional statement
// else is used last if the if condition /or every else if condition fails test
let z = 20;
if(z < 10){
    console.log("z is less than 10");// z fails this test
};
else if(z < 15){
    console.log("z is less than 15");// z fails this test
};
else {
    console.log("z is greater than 15");//logs to console since z is > 15
}

// 1d. Switch statement
//Evaluates an expression, matching the expression's value to a case clause, 
//and executes associated statements.
switch (x) {
    case 1://if x is 1 will log code below
        console.log("x is 1");
        break; // breaks the conditional check loop
    case 10: // if x isnt 1 and is 10, logs below code
        console.log("x is 10");
        break; 
    default: // if x isnt 1 or 10, by default it will log below
        console.log("x is something else");
}

// 2. Looping statements//
//repeats a block of code while a specified condition is true or
// until a certain condition is met.

// 2a. for loop
//loops thru block of code for a number of times
// i starts at 0, increments i by 1 each loop and only loops until i becomes 5
for (let i = 0; i < 5; i++) {
    console.log(i); // 0, 1, 2, 3, 4
}

// 2b. while loop
//loops thru a block of condition
//only loops as long as condition is true

let y = 0;
while (y < 5) { //as long as y < 5 will loop, if 5 it stops logging y to console.
    console.log(y); // 0, 1, 2, 3, 4
    y++; //increments y by 1 each loop
}

// 2c. do.. while loop
//does action of code once and loops while condition is true

let z = 0;
//does code block once
do {
    //logs z to console once
    console.log(z); // 0, 1, 2, 3, 4
    //increments z by 1
    z++;
} while (z < 5); //checks condition if true and loops over do code block again

// 2d. For...in loop
//loops thru properties of an object
//for each key in object it will perform action: logging key and its value
let obj = {a: 1, b: 2, c: 3};
for (let key in obj) { //key is a, b , c
    console.log(key, obj[key]); // a 1, b 2, c 3
}

// 2e. For...of loop
//loops thru iterable values of objects such as strings, arrays, etc

let arr = [10, 20, 30];
//loops thru each value in arr
for (let value of arr) {
    //logs each value
    console.log(value); // 10, 20, 30
}

// 3. Jump statements
//directly alter the flow of exection

// 3a. return 
// in functions, return exits function while returning value
function add(a, b) {
    return a + b; // exits the function and returns the sum
}

// 3b. break 
// shown in switch conditional statements also,
//ends loop immediately

for (let i = 0; i < 10; i++) {
    if (i === 3) {
        break; // stops the loop when i is 3
    }
    console.log(i);
}
