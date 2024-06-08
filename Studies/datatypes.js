/**
 * DATATYPES:
 * 
 * Datatypes are defined by the data that a variable can store.
 * Mostly, datatypes can be broken down into two types, Simple and Complex datatypes.
 * Simple datatypes are mainly strings, numbers, booleans, null and undefined.
 * Complex datatypes are typically values that are objects, 
 like objects, arrays and functions.
 * 
 */

// 1. Simple datatypes //
//1a. Number datatypes have the value of an integer.
var number = 1; // Number - simple datatype
//1b. String datatype have a value of characters within quotes ''.
var string = 'string'; // String - simple datatype
//1c. Boolean datatypes hold a simple value of true or false(on / off).
var bool = true; // Boolean true - simple datatype.
var bool = false; // Boolean false - simple datatype
//1d. Null datatype can be defined as intentionally assigning a variable 
// an empty value to be later reassigned a value.
var emptyVar = null; // var emptyVar is initialized with value of null.
//1e. Undefined datatype variables can mean either they have not been initialized,
//or the variable has been assigned value of undefined.
var setValue = undefined;// value is assigned as undefined
var setValue; // value is undefined because no assignment

//2. Complex Datatypes //
//Complex datatypes are typically considered objects.

//2a. Arrays are one of the complex datatypes that javascript considers an 'object'.
//Variables are considered arrays when as declare them with a data value of [].
var myArray = []; // Empty array is still a complex datatype, Array
var myArray = [1, 2, 3]; // Array of numbers within [].
//2b. Objects is another complex datatype.
//Objects are defined as data assigned to a variable with {}.
var user = {}; // empty object
var user = { 
    firstName: 'Jeremy',
    lastName: 'Hernandez'
}; //Object datatype assigned value of {} with key value pairs within.
//2c. Functions is another complex datatype.
//Functions are defined as keyword 'function' followed by name and () for parameters
// and {} where code is performed inside.
/** function keyword =>*/
function doNothing(x){return x;}; //Typical function structure datatype.
