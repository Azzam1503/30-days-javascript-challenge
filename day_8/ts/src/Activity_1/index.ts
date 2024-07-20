//Task 1 - Use template literals to create a string that includes variables for a person's name and agem, and log the string to the console
const personName: string = "John cena";
const personAge: number = 45;
let str: string = `Hello ${personName} your age is ${personAge}`;
console.log(str);

console.log("------------------------------------------")
//Task 2 - Create a multiline-line using template literals and log it to the console

str = `Hello ${personName}
your age is: ${personAge}
welcome to the javascript!`
console.log(str);
