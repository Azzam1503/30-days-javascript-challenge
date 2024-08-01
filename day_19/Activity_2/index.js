//Task 3 - Write a regular expression to match all words in a string that start with a capital letter. Log the matches.
const regex1 = /\b[A-Z][a-z]*\b/g
const str = "This is the String for Checking the Regualar Expresion";
console.log(str.match(regex1));

console.log("-----------------------------------------------------------");


//Task 4 - Write a regular expression to match all sequences of one or more digits in a string. Log the matches.
const regex2 = /[0-9]+/g;
const st2 = "I got 475 marks out of 500 and got 1 position";
console.log(st2.match(regex2));
