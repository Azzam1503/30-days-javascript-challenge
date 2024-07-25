//Task 3 - Create a module that epxors multiple functions using named eports. Import and use these functions in another script
function a(){
    console.log('a');
}
function b(){
    console.log('b');
}
function c(){
    console.log('c');
}

export const multiple = {
    a, b, c
}
//Task 4 Create a module that epxors multiple functions using named eports. Import and use these functions in another script

export default () => {
    console.log("I am the defaul function");
}