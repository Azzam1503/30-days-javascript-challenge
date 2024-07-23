const fs = require('fs');
const path = require('path');
//Task 1 - Create a promise that resolves with a message after a 2-second timeout and log the message to the console
const p = new Promise((resolve) =>{
    setTimeout(() =>{
        resolve("Hello! from promise");
    }, 2000)
});

p.then((msg) => {
    console.log(msg);
    console.log("-----------------------------------------");
})


// Task 2 - Create a promise that rejects with an error message after a 2-second timeout and handle the error using .catch().
const d = new Promise(function(resolve, reject){
    var error = true;
    setTimeout(() => {
        if(error){
            reject('Error whie resolving the promise')
        }else{
            resolve("Promise resolved")
        }
    }, 2000)
})

d.then((msg) => {
    console.log(msg);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log("Either promise is resolved or rejected");
})

