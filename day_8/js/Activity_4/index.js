//Task 7 Wirte a function that takes two parameters and return theri prodcut, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.

function getProduct(a, b = 1){
    return a*b;
}

console.log(getProduct(2, 4));
console.log(getProduct(2));