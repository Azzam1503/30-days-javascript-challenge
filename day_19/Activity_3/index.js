//Task 5 - Write a regular expression to capture the area code, central offic code, and line number from US phone number format (e.g (123) 456-7890). Log the captures.
const regex = /\((\d{3})\)\s(\d{3})-(\d{4})/;
const phoneNumber = "(123) 456-7890";
console.log(phoneNumber.match(regex));

console.log("-------------------------------------------------------");
// 6 - Write a regular expression of to capture the username and domain from an email address. Log the captures.
let regex2 = /^([^@]+)@([^@]+)$/;
const str = "johndoe@email.com.";
const matched = str.match(regex2);
console.log(matched);