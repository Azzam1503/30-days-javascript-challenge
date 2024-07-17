//Task 9 Write a higher-order function that takes a function and a number, and calls the function that many times
function innerFunction(): void{
    console.log("called");
}

function higherFunction(func : () => void, num: number){
    for(let i = 0; i<num; i++){
        func();
    }
}

higherFunction(innerFunction, 5);


console.log("-------------------------------------------------");

// Task 10 write a higher-order function that takes two function and a value, applies the first function to the value, and then applies the second to the result

function first(str: string): string{
    return str.trim();
};

function second(str: string): string{
    return str.charAt(0).toUpperCase() + str.substring(1).toLowerCase();
}
function higherOrderFunction(func1: (str: string) => string, func2: (str: string) => string, val: string): string {
    return func2(func1(val));
}

let retunedString = higherOrderFunction(first, second, "  hello       ");
console.log(retunedString);
