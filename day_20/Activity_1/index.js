// Task 1 - Write a script to save a string value to localStorage and retreive it and log the retrieved value
localStorage.setItem("stringVal", "String value");
const val = localStorage.getItem("stringVal");
console.log(val);

//Task 2- Write a script to save an object to localstorage by converting it to JSON string. Retreive and parse the object then log it.

const obj = {
    name: "John Doe",
    age: 43
}

localStorage.setItem("obj", JSON.stringify(obj));
const retrievedObj = JSON.parse(localStorage.getItem("obj"));
console.log(retrievedObj);
console.log(retrievedObj.name)