//Task 7 - Write a regular expression to match a word only if it is at the begining of a strig. Log the matches.
const text = "hello World!";
const regex = /^[Hh]ello/;
console.log(text.match(regex));


//Task 8 - Write a regular expression to match a word only if it is at the end of a string. Log the matches.
const text2 = "This is at the end";
console.log(text2.match(/[eE]nd$/))