//Task 1 write a function to check if a number is even or odd and log the result

function evenOdd(num: number): string {
    if(num % 2 == 0){
        return "even";
    }
    return "odd";
}

let a = evenOdd(5);
let b = evenOdd(6);
console.log(a);
console.log(b);


console.log("-------------------");
//Task 2 write function to calculate the square of a number and return the result

function square(num : number): number{
    return num*num;
}

let sq = square(2);
console.log(sq);