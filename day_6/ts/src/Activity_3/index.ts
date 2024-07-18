//Task 7 Use the map method to create a new arrat where each number is doubled and log the new array
const arr1: number[] = [2, 4, 6, 8];
const newArr = arr1.map((val) => val*2);
console.log(newArr);

console.log("-----------------------------------");

// Task 8 Use the filter method to create a new array with only even and log the new array
const arr2: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const newArr2 = arr2.filter((val: number) =>  val%2 == 0);
console.log(newArr2);


//Task 9 Use the reduce method to calculate the sum of all numbers in the array and log the result
const arr3: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const sum = arr3.reduce((acc: number, curr: number):number =>  acc = acc + curr, 10);
console.log(sum);

//another solution for this task
const max : number= arr3.reduce((acc: number, curr: number): number => {
    if(curr > acc){
        acc = curr;
    }
    return acc;
}, 0);

console.log(max);