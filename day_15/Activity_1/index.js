//Task 1 Write a function that returns another function, where the inner function accesses a variable from the outer function's scope. Call the inner function and log ther result
function greet(message){
   return (name) => {
    console.log(message + " " + name);
   }
}

const message = greet("Hello");
message("Azzam");
message("John");
message("Jane");

console.log("_____________________________________________________________________________________")
//Task 2 Create a closure that maintains a private counter.Implement functions to increment and get the current value of the counter.

function counter(){
    let count = 0;
    function getValue(){
        console.log(count);
    }
    return function(){
        count += 1;
        getValue();
    }
}

const c1 = counter();
c1();
c1();
c1();
c1();
c1();
console.log("another counter---------------")
const c2 = counter();
c2();
c2();
c2();