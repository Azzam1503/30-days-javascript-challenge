//Task 1 - Implement the linear search algorith to find the target value in an array. Log the index of the target value
let arr = [2, 12, 4, 5, 3, 1];

function linearSearch(arr, target){
    for(let i =0; i<arr.length; i++){
        if(arr[i] == target){
            return i;
        }
    }
    return -1;
}

console.log(linearSearch(arr, 5));
console.log(linearSearch(arr, 1));

console.log("------------------------------------------")

// Task 2 - Impelement the binary search to find the target element in the array.
let arr2 = [1, 2, 6, 7, 9, 12, 15, 32];
function binarySearch(arr, target){
    let n = arr.length;
    let s = 0, e = n-1;
    while(s<=e){
        let mid = Math.floor(s + (e-s)/2);
        if(arr[mid] === target){
            return mid;
        }else if(arr[mid] < target){
            s = mid +1;
        }else{
            e = mid -1;
        }
    }
    return -1;
}


console.log(binarySearch(arr2, 12));
console.log(binarySearch(arr2, 15));
console.log(binarySearch(arr2, 27));
console.log(5/2);