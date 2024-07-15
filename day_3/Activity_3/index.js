//Task 4
function getDaybyNum(a){
    if(a <= 0 || a> 7){
        return "Enter number between 1 and 7";
    };

    let day;
    switch(a){
        case 1:
            day = "Sunday";
            break;
        case 2:
            day = "Monday";
            break;
        case 3: 
            day = "Tuesday";
            break;
        case 4:
            day = "Wednesday"
            break
        case 5: 
            day = "Thursday";
            break;
        case 6: 
            day = "Firday";
            break;
        case 7: 
            day = "Saturday";
            break;
    }
    return day;
}

const day = getDaybyNum(5);
console.log(day);

//Task 5

function getGradeByMarks(marks){
    if(marks < 0 ||  marks > 100 ){
        return "Marks should be between 0 and 100";
    }
    let grade;
    switch(true){
        case (marks > 90 && marks <= 100) :
            grade = 'A';
            break;
        case (marks > 80 && marks <= 90) :
            grade = 'B';
            break;
        case (marks > 70 && marks <= 80) :
            grade = 'C';
            break;
        case (marks > 60 && marks <= 70) :
            grade = 'D';
            break;
        case (marks < 60) :
            grade = 'F';
            break;
    }

    return grade;
}


const grade = getGradeByMarks(95);
console.log(grade);