//Task 5 - Wrte a loop that creates an arary of fuctions. Each functions should log its index when called. Use a closure to ensire each function log the correct index.
const arr = []
for(let i = 0; i<10;  i++){
    arr.push((function(i) {
        return function() {
            console.log(i);
        };
    })(i)); 
}


arr[0]();
arr[1]();
arr[2]();
arr[9]();

