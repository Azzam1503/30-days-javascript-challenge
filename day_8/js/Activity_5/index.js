//Task 8 Use enhanced object literals to create and object with methods and properties, and log the object to the console
let student_name = "Under Taker";
let age = 50;

let obj = {
  student_name,
  age,
  greet(){
    return `Hy ${this.student_name}, your age is ${this.age}`
  }
}

console.log(obj);
console.log(obj.greet());


console.log("------------------------------------------------------------------");

// Task 9 Create an object with computed property names based on variables and log the object to the console
let n = 'student';
let a = 'age';
let g = 'greet';

let obj2 = {
  [n + '_name']: "John Cena",
  [a]: 45,
  [g](){
    return `Hy ${this.student_name} your age is ${this.age}`
  }
}

console.log(obj2);
console.log(obj2.greet());
