//Task 1 - write a function to if a number is even or odd and log the result
function evenOdd(num){
    if(num % 2 == 0){
        console.log("even");
        return;
    }
    console.log("odd");
}

evenOdd(5);
evenOdd(6);

console.log("-------------------------");

//Task 2 write function to calculate the square of a number and return the result

function square(num){
    return num*num;
}

let a= square(2);
console.log(a);