// Task 1 -Write a regular expression to match a simple pattern (e.g. match all the occurences of word "javascript" in a string). Log the matches
let regex = /Javascript/g;
const str = "Javascript is famout language and Javascript is widely used in web application";
console.log(str.match(regex));


console.log("--------------------------------------------------------------------");

//Task 2 - Write a regular expression to match all digits in a string. Log the matches;
const reg = /\d+/g;
const str2 = "There are 150 apples and 300 oranges, cat, fat, eat Eat";
console.log(str2.match(reg));