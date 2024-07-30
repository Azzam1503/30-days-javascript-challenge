//Task 8 - Write a function to rotate an array by k positions. Log the rotated array.
function reverseArr(arr, start, end){
    while(start<end){
        let temp = arr[start];
        arr[start] =arr[end];
        arr[end] = temp;
        start++;
        end--;
    }
}
const arr = [1, 2, 3, 4, 5];
const arr2 = [1, 2, 3, 4, 5, 6];
function rotateArray(arr, k){
    let n = arr.length;
    if(k > n || k == 0) return arr;
    reverseArr(arr, 0, n-1);
    reverseArr(arr, 0, n-k-1);
    reverseArr(arr, n-k, n-1);
    console.log(arr)
}

function rotateArray2(arr, k){
    let n = arr.length;
    if(k > n || k == 0) return arr;
    const part1 = arr.slice(0, n-k);
    const part2 = arr.slice(n-k);
    return part2.concat(part1);
}
rotateArray(arr2, 3);
console.log(rotateArray2(arr, 2));


//Task 9 - Write a function to merege two sorted arrays into one sorted array. Log the merged array.

const a1 = [1, 3, 7, 9];
const a2 = [5, 8, 11];
function mergerTwoSortedArrays(a1, a2){
    const n = a1.length;
    const m = a2.length;

    const ans = [];
    let i = 0, j=0;
    while(i<n && j<m){
        if(a1[i] <= a2[j]){
            ans.push(a1[i]);
            i++;
        }else{
            ans.push(a2[j]);
            j++;
        }
    }

    while(i<n){
        ans.push[a1[i]];
        i++;
    }

    while(j<m){
        ans.push(a2[j]);
        j++;
    }

    return ans;
}

const ans = mergerTwoSortedArrays(a1, a2);
console.log(ans);
