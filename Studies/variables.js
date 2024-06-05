/**
 * VARIABLES:
 * 
 * 0: Variables are named containers for data in Javascript. We create variables using declarative keywords.
 * Variables are named identifiers that can point to values of a particular type. 
 * They can be a Number, String, Boolean, Array, Object or another datatype.
 * They are called variables because once they are created, they can be have their value and datatype can be changed.
 * 1: To create a variable we use the keyword, var,
 *  followed by a name (id or alias) for our variable.
 * 2: There are 2 phases of using variables: declaration
 *  and initialization (or assignment). 
 */

// 1a. declaration //
// Phase 1 of declaring a variable, it will be undefined because it has not been assigned a value.
var myName; // variable declared with no assignment
console.log(myName); // prints 'undefined'

// 1b. Initialization or assignment //
// When you assign a variable with a value.
myName = 'Jeremy';
console.log(myName); // prints 'Jeremy'

// 1c. re-assignment //
// When we change the value of the already assigned variable.
myName = 'Hernandez';
console.log(myName); // prints 'Hernandez'

/**
 *  LET, VAR, CONST
 * 
 * 0. There are 3 main keywords that can be used to declare, assign and re-assign variables.
 * let, var and const.
 * 1. Depending where and what keyword is used to declared, the variable will have a scope.
 * var is a global variable which means it can be accessed in all parts of the program.
 * let is a local scoped variable.
 * const is also a local scoped variable.
 * Scoped variable means it can only be accessed within that portion of code where it is declared.
 * 2. Hoisting refers the order in which the lines of code are read and performed. 
 * Different scoped variables are affected by hoisting.
 * Variables' declaration are only hoisted to top of their scope.
 * A variables' initialization is left in its original position.
 * 
 */

// 2a. let, var and const //
//var is a keyword that is hoisted to the top of the code
var myName = 'Jeremy'; // can be accessed in entire program 
var myName; // is hoisted to top of program without a value.
myName = 'Jeremy'; // is what the program will read later to assign its original value

// 2b. let is a keyword that declares a variable defining to be local scoped.
//Wherever it is declared is where it can only be accessed within its scope of the program.

function birthday(age){
    let birthdayGreeting = 'Happy Birthday!'; // declared variable with let inside of this function. 
    
    if(age = 31){
        let greeted = true; // cannot be accessed outside of this function if variable greeted is called.
        return birthdayGreeting; //returns let birthdayGreeting because it is within the function scope.
    }
    console.log(greeted); // prints undefined
};

// 2c. const is a keyword that declares a variable to be local scoped.
// Variables declared with const also has the property of not being able to be changed.
const array = [1, 2, 3, 4, 5]; //const variable declaring an array of numbers.
array = ''; // Prints error that says you cannot re-assign value to const variable.

/**
 * HOISTING
 * 
 * Hoisting affects all variables but the impact on the code differentiates.
 * var keyword declared variables are hoisted to the top of its global scope.
 * let and const keyword are only hoisted to the top of its scope of block code.
 * Variables that are hoisted cannot be called before they can be initialized.
 * 
 */

console.log(doSomething());// calls var greeting before its declared and initialized.
                           // prints 'Hello!'
function doSomething(){
  var greeting = 'Hello!'; // var variable declared inside of function is hoisted to top of global scope
    return  greeting;
}

//Hoisting reads lines of code and performs in a different way than us.
//Here is how the program will read our code from above.
var greeting; //var declaration is hoisted first
function doSomething(){ //functions are hoisted second.
    greeting = 'Hello!'; //initialization of var variable.
    return greeting;
}
console.log(doSomething()); // Performs last: prints 'Hello' 

//let and const are hoisted to top of their scope only, unlike var.

console.log(y); // cannot be accessed before initialization
let y = 10; // only let y; is hoisted to top of its scope.
console.log(y); //prints 10

console.log(x); // cannot be accessed before initialization
const x = 'Hello!'; // only const x; is hoisted to top of its scope
console.log(x); //prints 'Hello!'

