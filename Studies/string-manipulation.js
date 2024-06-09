/**
 * STRING MANIPULATION:
 * 
 * Strings are a sequences of characters used to represent texts.
 * In javascript, we can use a variety of methods and techniques to
  manipulate and work with strings.
 * Some methods or techniques we use on strings can concatenate and alter strings.
 *
 */

// 1. String operations //
// We can concatenate strings with + sign or use the concat() which joins two string values.
let greeting1 = 'Hello ';
let greeting2 = 'World!';
console.log(greeting1 + greeting2); // prints 'Hello World!' using + sign
let concatString = 'Hello'.concat(' ', 'World!'); // 'Hello World!'

// 1a. Accessing string characters
// We can access characters in strings using bracket notation or charAt() method.
let stringWord = 'Jeremy'; 
console.log(stringWord[0]); // Prints 'J'
console.log(stringWord.charAt(3)); // Prints 'e'

// 1b. String length method
// We can use the .length() method to find the length of a string.
let word = 'Hello World';
console.log(word.length); // 11

// 1c. upperCase/lowerCase method
// We can use these methods to capitalize or lowercase string characters.
//toUpperCase() method
let randomWord = 'jeremy';
console.log(randomWord.toUpperCase(0)); // 'Jeremy'
//toLowerCase() method
let randomWord1 = 'Hernandez';
console.log(randomWord1.toLowerCase(0)); // 'hernandez'

// 1d. trim () method
//Used to remove white space from both ends of a string.
let stringWithSpaces = '     Hello World!      ';
console.log(stringWithSpaces.trim()); // 'Hello World!'

// 1e. indexOf() and lastIndexOf() methods
// Used to find the index of substring
let str = 'Hello World';
console.log(str.indexOf('World')); // Prints 6 after finding starting index of World
console.log(str.lastIndexOf('l')); // 9

// 1f. includes() method
// Used to test if string includes substring and return true/false.
let sentence = 'The cat ate my homework.';
console.log(sentence.includes('cat')); // Prints True

// 1g. startsWith() and endsWith() methods
// Used to test if string starts/ends with a substring.
let simple = 'The dog licked my hand.'
console.log(simple.startsWith('The')); // Prints True
console.log(simple.endsWith('.')); // Prints True

// 1h. Slice() method
//used to slice out part of string.
let pie = 'Blueberries';
console.log(pie.slice(0, 4)); //Prints 'Blue'

// 1i. substring() and substr()
// Used to extract parts of a string
let str1 = 'Hello World';
console.log(str1.substring(0, 5)); // Prints 'Hello'
console.log(str1.substr(6, 5)); // Prints 'World'

// 1j. replace() method
// used to replace parts of a string with another substring.
let str3 = '$12,365';
console.log(str3.replace('$', '')); // prints '12,365'

// 2. Advanced String Methods //

// 2a. match() method
// Used to match string against a regular expression.
let str4 = 'The quick brown fox jumps over the lazy dog.';
console.log(str4.match(/[A-Z]/g)); // Finds all upperCase characters in string; Prints 'T'.

// 2b. search() method
// used to search for a match using regular expression.
console.log(str4.search(/brown/)); // prints index of substring 'brown': 10
 // 2c. replace() method with regular expression
 let str5 = str4.replace(/brown/, 'white'); // replaces 'brown' with 'white'
 console.log(str5); //'The quick white fox jumps over the lazy dog.'

// 3. Template Literals //
// Allows for easier string interpolation and multi-line strings.
//Uses backticks and ${} to reference tags of variables and doesn't need quotes.

// 3a. Interpolation 
//Using backticks(``) and ${} we can include 
let x = 'Hello';
let ezGreeting = `${x} World!`;
console.log(ezGreeting); //Prints 'Hello World!'

// 3b. Multi-line Strings
//Using backticks allow us to format strings easily into multiline.
let str6 = `This string is
a multi-line
string.`;
