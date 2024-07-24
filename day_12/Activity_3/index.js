//Task 4 - Create a custom error class that extends the built-in Error class. Throw ans instance of this custom error in a function and handle it using a try-catch block.

class customError extends Error{
    constructor(message){
        super(message);
        this.name = 'CustomError';
    }


}

function riskyOper(){
    throw new Error("This is the message for custom error");
}

function handleRiskyOper(){
    try {
        riskyOper();
    } catch (error) {
        console.log('error ', error.message);
    }finally{
        console.log("Execution completed")
    }
}

handleRiskyOper();
console.log("------------------------------------------------------------------")
//Task 5 - wirte a fucntion that validates user input (e.g. checking if a string is not empty)  and throws a custom error if the validations fails. Handle the custom error using try-catch

function takeInput(str){
    if(str.length == 0){
        throw new customError("String length cannot be empty");
    }
    console.log(str);
}

function printStr(str){
    try {
        takeInput(str);
    } catch (error) {
        console.log(error.name);
        console.log(error.message);
    }
}

printStr("");