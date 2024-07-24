//Task 1 - Write a function that intentionally thrwos an error and use a try-catch block to handle the error and lov an appropriate message to the console
function sum(num1, num2){
    if(typeof(num1) != 'number' || typeof(num2) !== 'number'){
        throw new Error("Only number are allowed");
    }
    return num1 + num2;
}

function sumWithHandleError(a, b){
    try {
        sum(a, b);
    } catch (error) {
        console.log("Error: " +  error.message);
    }
}

sumWithHandleError(2, "1");


//Task 2 Create a function that divides two numbers and throws an error if the denominato is zero. Use try-catch block to handle this error

function divide(a, b){
    if(b === 0){
        throw new Error("Cannot be divided by zero");
    }

    return a/b;
}

function divideWithHanldeError(a, b){
    try {
        divide(a, b);
    } catch (error) {
        console.log("Error: " + error.message);
    }
}

divideWithHanldeError(2, 0);