//Task 3 - Write a function that generates unique IDs. Use a closure to keep track of the last generated ID and incremnet it with each call.
function createIdGenerator(){
    let lastId = 0;
    return function(){
        lastId += 1;
        return lastId;
    }
}

const idGen = createIdGenerator();
console.log(idGen());
console.log(idGen());
console.log(idGen());

//Task 4 - Create a closure that captures a user's name and returns a function that greets the user by name

function createGreeting(name){
    return function(){
         console.log(`Hello! ${name} have a nice day`);
    }
}

let g1 = createGreeting("Azzam");
g1()
let g2 = createGreeting("Jane");
g2();