//Task 8 Use enhanced object literals to create and object with methods and properties, and log the object to the console
let student_name : string= "Under Taker";
let age : number = 50;

interface Student {
  student_name: string,
  age: number,
  greet: () => string
}

let obj1: Student = {
  student_name,
  age,
  greet(){
    return `Hy ${this.student_name}, your age is ${this.age}`
  }
}

console.log(obj1);
console.log(obj1.greet());


console.log("------------------------------------------------------------------");

// Task 9 Create an object with computed property names based on variables and log the object to the console
let n = 'student';
let a = 'age';
let g = 'greet';
interface DynamicStudent {
  [key: string]: any;
}
let obj2: DynamicStudent  = {
  [n + '_name']: "John Cena",
  [a]: 45,
  [g](){
    return `Hy ${this.student_name} your age is ${this.age}`
  }
}

console.log(obj2);
console.log(obj2.greet());
