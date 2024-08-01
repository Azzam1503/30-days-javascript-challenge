// Task 1 - Implemented the bubble sort algorithm to sort an array of numbers in ascending order. Log the sorted array.
const arr = [2, 3, 4, 5, 1, 9, 12, 7];
const bubbleSort = (arr, n = arr.length) => {
    for(let i =0; i<n; i++){
        for(let j = 0; j<n-1-i; j++){
            if(arr[j] > arr[j+1]){
                let temp =arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
}
bubbleSort(arr);
console.log(arr);

//Task 2 - Implement the selection sort algorithm to sort an array of numbers in ascending order.
let arr2 = [4, 5, 1, 7, 6, 9, 3];
function selectionSort(arr, n = arr.length){
    for(let i =0; i<n-1; i++){
        let minELem = Number.MAX_VALUE;
        let minIndex = -1;
        for(let j=i; j<n; j++){
            if(arr[j]<minELem){
                minELem = arr[j];
                minIndex = j;
            }
        }

        arr[minIndex] = arr[i];
        arr[i] = minELem;
    }
}

selectionSort(arr2);
console.log(arr2);

//Task 3 - Implement the quick sort algorithm to sort an array of numbers in ascending order. Log the sorted array
function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    } 

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) continue;

        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
};

const arr3 = [11, 2, 3, 7, 5, 3, 1];
console.log(quickSort(arr3));