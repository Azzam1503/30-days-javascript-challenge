//Task 5 - Use the spread opertor to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console
const arr1: number[] = [1, 2, 3, 4, 5];
const arr2: number[] = [...arr1, 7, 8];
console.log(arr2)


console.log("----------------------------------------------------------------------------");

//Task 6 Use the rest operator in a function to accept an arbitary number of arguements, sum them, and return the result

function sum(firstName: string, lastName: string, ...args: number[]){
    console.log(firstName, lastName);
    return args.reduce((acc: number, curr: number) => {
        return curr += acc
    }, 0);
}

const arrSum = sum("Under", "Taker", 4, 5, 6, 7);
console.log(arrSum);



