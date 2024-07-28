//Task 3 - Write a recursive function to find the sum of all elements in an array. Log the result to the console for few test cases
const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const arr2 = [1, 2, 3];
const arr3 = [];
const arr4 = [2, 3, 4, -1, 2, -5];
function sum(arr, ind, length){
    if(ind == length){
        return 0;
    }

    return arr[ind] + sum(arr, ind+1, length)
}

console.log(sum(arr, 0, arr.length));
console.log(sum(arr2, 0, arr2.length));
console.log(sum(arr3, 0, arr3.length));
console.log(sum(arr4, 0, arr4.length));

console.log("-------------------------------------------------------------")

//Task 4 - Write a recusive function to find the maximum elemtn in an array. Log the result for a few test cases

function maxInArray(arr, index = 0, length = arr.length, max = Number.MIN_VALUE){
    if(index === length){
        return max;
    }
    
    max = Math.max(max, arr[index]);
    return maxInArray(arr, index+1, length, max);
}

const arr5 = [2, 2, 432, 1212, 343, 2311, 4343, -65655, -12212, 3221, 4348, -1222];
console.log(maxInArray(arr));
console.log(maxInArray(arr2));
console.log(maxInArray(arr4));
console.log(maxInArray(arr5));
