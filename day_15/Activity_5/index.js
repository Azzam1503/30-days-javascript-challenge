//Task 7 Write a function that memoizes the results of another function. Use a closure to stroe the results of previous computatoins.
function memoize(fn) {
    const cache = {};
    return (x) =>{
        if(x in cache){
            console.log(`Value of ${x} is already calculated`);
            return cache[x];
        }else{
            console.log(`Calculationg the value of ${x}`);
            const val = fn(x);
            cache[x] = val;
            return val;
        }
    }
}

function square(n) {
    return n * n;
}

const memoizedSquare = memoize(square);


console.log(memoizedSquare(5)); 
console.log(memoizedSquare(5));
console.log(memoizedSquare(10)); 
console.log(memoizedSquare(10));

console.log("--------------------------------------------------------------------");

//Task 8 - Create a memoized version of a function that calculates the factorial of a number.

function memoize(fn) {
    const cache = {};
    return function(...args) {
        const key = JSON.stringify(args);   
        if (cache[key]) {
            console.log(`Fetching from cache for key: ${key}`);
            return cache[key];
        } else {
            console.log(`Calculating result for key: ${key}`);
            const result = fn(...args);
            cache[key] = result;
            return result;
        }
    };
}


function fibonacci(n) {
    if (n < 2) {
        return n;
    }
    return fibonacci(n - 1) + fibonacci(n - 2);
}


const memoizedFibonacci = memoize(fibonacci);


console.log(memoizedFibonacci(10)); 
console.log(memoizedFibonacci(10)); 
console.log(memoizedFibonacci(15)); 
console.log(memoizedFibonacci(15)); 
