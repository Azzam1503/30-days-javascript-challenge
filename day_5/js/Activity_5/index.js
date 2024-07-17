//Task 9 Write a higher-order function that takes a function and a number, and calls the function that many times
function innerFunction(){
    console.log("called");
}

//with loop
function higherFunction(func, num){
    for(let i = 0; i<num; i++){
        func();
    }
}

// *****with recursion ***********
// function higherFunction(func, num){
//     if(num == 0) return;
//     func();
//     higherFunction(func, num = num - 1);
// }

higherFunction(innerFunction, 5);


console.log("-------------------------------------------------");

// Task 10 write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second to the result

function first(str){
    return str.trim();
};

function second(str){
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
function higherOrderFunction(func1 , func2, val) {
    return func2(func1(val));
}

let ans = higherOrderFunction(first, second, "  hello       ");
console.log(ans);

function applyFunctions(func1, func2, value) {
    return func2(func1(value));
  }
  

  
//another solution 
  function addTwo(x) {
    return x + 2;
  }
  
  function multiplyByThree(x) {
    return x * 3;
  }
  
  const result = applyFunctions(addTwo, multiplyByThree, 5);
  console.log(result);

  