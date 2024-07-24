//Task 3 - Write a script that includes a try-catch block and a finally block. Log the messages in the try catch and finally blocks to observe the execution flow.
function executionWithTryCatchFinally(){
    try {
        console.log("Inside try Block: Attempting risky operation");
        throw new Error('something went wrong!'); //Commenting this line it will not throw any error and jumps directly to finally
        console.log("Completed the operation");
    } catch (error) {
        console.log("Inside catch block", error.message);
    }finally{
        console.log("Now in the finally block whatever happens, it will always log to the console");
    }
        
};

executionWithTryCatchFinally();