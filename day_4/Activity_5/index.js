//Task 8 program to print numbers from 1 to 10 but skip the number 5 using the continue statement
let num = 1;

//with while loop
while(num <=10){
   if(num == 5){
      num++;
      continue;
   }
   console.log(num);
   num++;
}

//with for loop
// for(let i =1; i<10; i++){
//    if(i == 5) continue;
//    console.log(i);
// }

console.log("-------------------------------");

//Task 9 program to print numbers from 1 to 10, but stop the loop when the number is 7 using break statement

let num2 = 1;
while(num2<=10){
   if(num2 == 7) break;
   console.log(num2);
   num2++;
}