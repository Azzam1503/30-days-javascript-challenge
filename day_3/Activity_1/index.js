//Task 1
function checkPosNeg(a){
    if(a<0){
        console.log("Number is negative");
    }else if(a ==0){
        console.log("Number is zero");
    }else{
        console.log("Number is positive"); 
    }
}

checkPosNeg(-1);
checkPosNeg(1);
checkPosNeg(0);


//Task 2 
function isElligibleForVote(a){
    if(a<18){
        console.log("No elligible for voting");
    }else{
        console.log("Elligible for voting");
    }
}

isElligibleForVote(19);
isElligibleForVote(18);
isElligibleForVote(12);