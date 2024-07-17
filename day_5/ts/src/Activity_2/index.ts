//Task 3 write a function expression to find the maximum of two number and log the result

function minOfTwoNum(a: number, b:number): void{
    console.log(Math.max(a, b));
}

minOfTwoNum(6, 7);

console.log("------------------------");

// Task 4 write a function expression to concatenate two strings and return the result;

let str1: string = "javascript";
let str2: string = "Typescript";

function concatString(s1: string, s2: string): string{
    return s1.concat(" ", s2);
}

let result = concatString(str1, str2);
console.log(result);