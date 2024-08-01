// Task 5 - Write a script to save a string value to sessionStorage and retrieve it. Log the retreived value.
sessionStorage.setItem("item", "item");
console.log(sessionStorage.getItem("item"));

//Task 6- Write a script to save an object to sessionStorage by converting it to JSON string. Retreive and parse the object then log it.

const obj = {
    name: "John Doe",
    age: 43
}

sessionStorage.setItem("obj", JSON.stringify(obj));
const retrievedObj = JSON.parse(sessionStorage.getItem("obj"));
console.log(retrievedObj);
console.log(retrievedObj.name)