//Task 7: Write a function that takes two parameters and returns their product. provide a default value for the second parameter
const getProduct = (a:number, b:number = 5): void => {
    console.log(a*b);
}

getProduct(2);
getProduct(2, 6);

console.log("---------------");

//Task 8: Write a function that takes a person's name and age and returns a greetting message. Provide a default value for the age.

const greet = (name: string, age:number = 18): void => {
    console.log(`Have a nice day ${name}, your age is ${age}`);
};

greet("John");
greet("Jane", 25);