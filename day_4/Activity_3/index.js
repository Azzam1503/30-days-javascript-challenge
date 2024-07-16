//Task 5 print 1 to 5 using do while
let n = 1;
do{
    console.log(n);
    n++;
}while(n<=5)

console.log("-------------------------------------------------------")

//Task 6 factorial of number using do while
let num = 5;
let fact = 1;
do{
    fact *= num;
    num--;
}while(num>1);

console.log("factorial:", fact);