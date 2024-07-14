//Task 11
let a = 10, b = 40, c = 30;
function task_11(a, b, c){
    if(a > b && a > c){
        console.log("a is greater than b and c");
    }else if(b>a && b>c){
        console.log("b is greater than a and c");
    }else{
        console.log("c is greater than a and b");
    }
}

task_11(a, b, c);


//Task 12
function task_12(a, b, c){
    if(a > b || a > c){
        console.log("a is either greater than b and c");
    }else if(b>a || b>c){
        console.log("b is either greater than a and c");
    }else{
        console.log("c is either greater than a and b");
    }
}
task_12(a, b, c);

//Task 13
function task_13(a, b){
    const condition = a == b;
    if(!condition){
        console.log("a is not equal to b");
    }else{
        console.log("a is equal to b");
    }
}

task_13(a, b);


