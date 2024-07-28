//Task 1 - Write a recusive function to calculate the factorial of a number
function factorial(n){
    if(n <= 1) return 1;
    return n * factorial(n-1);
}

console.log(factorial(5));
console.log(factorial(3));
console.log(factorial(6));

console.log("-----------------------------------------");
//Task 2 - Write a recursive to calculate the nth fibonacci number. Log the result for a few test case.
function fib(n){
    if(n < 0) return 0;
    if(n == 0 || n == 1) return n;
    return fib(n-1) + fib(n-2);
}

console.log(fib(3));
console.log(fib(4));
console.log(fib(5));
console.log(fib(6));