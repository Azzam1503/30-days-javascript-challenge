//Task 35write a arrow function to calculate the sum of two numbers log the result

const getSum =  (a, b) => {
    return a+b;
}
let sum = getSum(4, 3);
console.log(sum)


console.log("------------------------");

// Task 6 write a arrow function to check if a string contains a specific character and return the boolean;

const chcekSpecificChar = (str, char) => {
    if(str.indexOf(char) == -1) return false;
    return true;
}

let ans = chcekSpecificChar("abcdef", "de");
console.log(ans);

