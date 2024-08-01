//Task 9 - Write a regular expression to validate a simple password (must inclue at least one uppercase letter, on lowecase letter, one digit and one speical character). Log whether the password is valid.
const password = "Password1!"
const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+{}\[\]:;"'<>,.?/~`\\|-]).{8,}$/;

const isValid = regex.test(password);

if (isValid) {
    console.log("Password is valid.");
} else {
    console.log("Password is invalid.");
}

console.log("-------------------------------------");
//Task 10 - Write a regular expression to validate a URL. Log wheter the URL is valid.

const url = "https://www.example.com";
const regex2 = /^(https?:\/\/)?(www\.)?([a-zA-Z0-9-]+)\.([a-zA-Z]{2,})(\/[^\s]*)?$/;
console.log(url.match(regex2))
const isValidUrl = regex2.test(url);

if (isValidUrl) {
    console.log("URL is valid.");
} else {
    console.log("URL is invalid.");
}