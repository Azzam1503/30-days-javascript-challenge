//Task 3 write a function expression to find the maaximum of two number and log the result

function minOfTwoNum(a, b){
    console.log(Math.max(a, b));
}

minOfTwoNum(6, 7);

console.log("------------------------");

// Task 4 write a function expression to concatenate two strings and return the result;

let str1 = "javascript";
let str2 = "Typescript";

function concatString(s1, s2){
    return s1.concat(" ", s2);
}

let result = concatString(str1, str2);
console.log(result);