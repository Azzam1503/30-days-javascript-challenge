//Task 7 Leap year program
function isLeapYear(year){
   if(((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0))){
    console.log(`${year} is a leap year`);
    return;
   }

   console.log(`${year} is not a leap year`);
}

isLeapYear(1996);
isLeapYear(2000);
isLeapYear(2001);