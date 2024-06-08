/**
 * OPERATORS: 
 * 
 * 1. Operators are special keywords or symbols. 
 * 2. They can perform actions such as: 
  Operations on operands, assign values concatenate string. 
 * 3. There a variety of operators that includes arithmetic, comparison,
  logical, assignments and more.
 * 
 */

//1. Arithmetic Operators //
//They peform calculation on data.

//1a. Addition Operator
// Uses + sign to add two values
let sum = 1 + 1; // sum is 2
//1b. Subtraction Operator
// Uses - sign to subtract two values
let difference = 5 - 2; // subtract is 3
//1c. Multiply Operator
//Uses * sign to multiply two values
let product = 5 * 5; // product is 25
//1d. Division Operator
//Uses / sign to divide first value by second value
let quotient = 25 / 5 // quotient is 5
//1e. Remainder Operator
//uses % to divide first value second and returns remainder of operation
let remainder = 10 % 3; // remainder is 1
//1f. Exponential Operator
//Performs exponential operator on a first value to the power of the second value
let power = 5 ** 3; // power is 125
//1g. Increment Operator
//Uses double ++ or -- to increase or decrease by 1
let num = 10;
num++; // num is 11
num--; // num is now 10 again.

// 2. Comparison Operators //
//Comparison operators compare two values and return a boolean(true or false).

//2a. Loose comparison operator
//It uses a double == sign to compare two values.
//When it compares, it can perform type conversion as well
console.log(3 == 3); //Prints True
console.log(3 == '3'); // Prints True by converting string of 3 to integer 3
//2b. Strict comparison Operator
//Uses triple === sign to only return boolean if they are exactly equal or not.
//Performs no type conversions.
console.log(5 === 5); //Prints True
console.log(4 === '4'); //Prints False
// 2c. Not equal Operator
//It uses != to loosely compare two values but not types.
console.log(8 != '8'); //Prints False because they are loosely equal
console.log(5 != 2); // Prints True
// 2d. Strictly Not Equal operator
//It uses !== to compare two values strictly with datatypes included.
console.log(5 !== 6); // Prints True
console.log(3 !== 3); //prints False as they are strictly equal
// 2e. Greater Than Operator
//It uses > sign to test if first value is greater than second value
//Returns true or false
console.log(1 > 0); // Prints True
console.log(2 > 3); //Prints False
// 2f. Less Than Operator
//It uses < sign to test if first value is less than second value.
console.log(2 < 3); //Prints True
console.log(10 < 5); //Prints False
// 2g. Greater Than or Equal Operator
//It uses >= to test if first value is greater than or equal to second value
console.log(4 >= 4); //Prints True
console.log(3 >= 4); //Prints False
// 2h. Less Than or Equal Operator
// It uses <= to test if first value is less than or equal to second value.
console.log(2 <= 3); //Prints True
console.log(5 <= 4); //Prints False

// 3. Logical Operators //
//They use 3 types of signs to combine or invert boolean values.
// 3a. Logical AND Operator
//It uses the && sign to test both operands.
//If both operands are true, it will return true.
//If one operand is false while other is true, it will return false.
console.log(true && true); // Prints True if both operands are true.
console.log(true && false); // Prints false if one operands is false.
// 3b. Logical OR operator
//It uses || to test if atleast one operand is true.
console.log(true || false); //Prints true because atleast one operand is true.
console.log(false || false); //Prints false because both operands are false.
// 3c. Logical NOT operator
//It uses the ! sign to invert the boolean of the operand
console.log(!true); // Prints False.
console.log(!false); // Prints True.

// 4. Assignment Operators //
//They are used to assign values to variables.
// 4a. Assignment
let x = 5; // Assigns value 5 to variable x
// 4b. Addition Assignment
//uses += to add the right operand to left operand and reassigns result to the left operand.
let y = 5;
y += 5; //Adds 5 to variable y's value and reassigns it to 10.
// 4c. Subtraction Assignment
//Uses -= to subtract right operand from left and reassigns result to left operand.
let z = 6;
z -= 1; // Subtracts 1 from variable z's value of 6 and reassigns result of 5.
// 4d. Multiplcation Assignment
// Multiples left operand by right operand and reassigns result to left operand.
let a = 5;
a *= 2; // Multiplies a by 2 and reassigns a to result of 10;
// 4e. Division Assignment
// Divides left by right operand and reassigns result to left operand.
let b = 10;
b /= 2; // b = 5
// 4f. Remainder Assignment
// Divides left operand by right operand and reassigns left operand to remainder.

// 5. String Operator
//5a. String Concatenation
//uses + to combine to strings
console.log('Hello' + 'World!'); //Prints 'Hello World!' as one string

// 6. Ternary Operator //
//It is a shorthand for if-else statements
let isOdd = (num % 2 === 1) ? 'Odd' : 'Even'; //Checks if num is odd, else num is even