//Task 8 User a for..in loop iterate over the properties of the book object and log each propery and its value.
const obj = {
    title: "Harry Potter and the Philosopher's Stone",
    author: "J.K. Rowling",
    year: 1997
}

for(const key in obj){
  console.log(key + ": " + obj[key])
}


console.log("------------------------------------------------------------------");

// Task 9 User Object.keys and Object.values methods to log all the keys and values of the book object

console.log(Object.keys(obj));
console.log(Object.values(obj));
