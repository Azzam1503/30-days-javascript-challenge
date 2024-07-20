//Task 5 - Use the spread opertor to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console
const arr = [1, 2, 3, 4, 5];
const arr2 = [...arr, 7, 8];
console.log(arr2)


console.log("----------------------------------------------------------------------------");

//Task 6 Use the rest operator in a function to accept an arbitary number of arguements, sum them, and return the result

function sum(firstName, lastName, ...args){
    console.log(firstName, lastName);
    return args.reduce((acc, curr) => {
        return curr += acc
    }, 0);
}

const arrSum = sum("Under", "Taker", 4, 5, 6, 7);
console.log(arrSum);



