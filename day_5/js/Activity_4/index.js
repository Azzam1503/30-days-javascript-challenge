//Task 7: Write a function that takes two parameters and returns their product. provide a default value for the second parameter
const getProduct = (a, b = 5) => {
    console.log(a*b);
}

getProduct(2);
getProduct(2, 6);

console.log("---------------");

//Task 8: Write a function that takes a person's name and age and returns a greetting message. Provide a default value for the age.

const greet = (name, age = 18) => {
    console.log(`Have a nice day ${name}, your age is ${age}`);
};

greet("John");
greet("Jane", 25);