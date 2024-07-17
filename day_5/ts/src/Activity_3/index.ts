//Task 3 write a arrow function to calculate the sum of two numbers log the result

const getSum =  (a: number, b: number): number => {
    return a+b;
}
let sum = getSum(4, 3);
console.log(sum)


console.log("------------------------");

// Task 4 write a arrow function to check if a string contains a specific character and return the boolean;

const chcekSpecificChar = (str: string, char: string): boolean => {
    if(str.indexOf(char) != -1) return true;
    return false;
}

let ans = chcekSpecificChar("abcd", "c");
console.log(ans)

