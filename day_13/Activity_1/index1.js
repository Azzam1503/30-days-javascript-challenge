//Task 1 - Create a module that exports a function to add two numbers. Import and use this moudle in another script
export const add = (a, b) =>{
    console.log(a+b);
}

//Task 2 - Create a module that exports an object respresenting a person with properties and methods. Import and use this module in another script.
export const obj = {
    name: "John Doe", 
    age: 42,
    greet(){
        console.log(`Hey! ${this.name} have a nice day`)
    }
}