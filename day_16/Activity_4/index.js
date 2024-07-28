//Task 7 - Write a recusive function to perform a binary search on a sorted arary. Log the index of the target elemnt for a few test cases.

function binarySearch(arr, target, s=0, e = arr.length-1){
    if(s>e){
        return -1;
    }
    let mid = s + (e-s)/2;
    if(arr[mid] == target) return mid;

    if(arr[mid]<target){
        return binarySearch(arr, target, mid+1, e);
    }
    
    return binarySearch(arr, target, s, mid -1);

}

const arr = [2, 3, 4, 9, 9 ,9, 12, 14, 51];
console.log(binarySearch(arr, 14));
console.log(binarySearch(arr, 4));
console.log(binarySearch(arr, 1));
console.log(binarySearch(arr, 67));
console.log(binarySearch(arr, 73));

console.log("-------------------------------------------------------------");
//Task 8 - Write a recursive function to count the occurences of a target elemnet in arrary and log the result for few test cases

function countOccurence(arr, target, ind = 0, e = arr.length, count = 0){
    if(ind == e){
        return count;
    }

    if(arr[ind] == target) count = count + 1;

    return countOccurence(arr, target, ind+1, e, count);
}
console.log(countOccurence(arr, 9));
console.log(countOccurence(arr, 14));
console.log(countOccurence(arr, 17));
console.log(countOccurence([], 17));