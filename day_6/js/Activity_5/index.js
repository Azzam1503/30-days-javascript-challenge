//Task 11 Create a two-dimensional array (matrix) and log the entire array to the console
const matrix = [
  [1,2,3], [4, 5, 6], [7, 8, 9], [10, 11, 12]
];

for(let i =0; i<matrix.length; i++){
  let s = "";
  for(let j = 0; j<matrix[i].length; j++){
    s += matrix[i][j] + " "; 
  }

  console.log(s);
}

console.log("-------------------------------")
// Task 13 Access and log a specific element from the two-dimensional array.

console.log(matrix[0][2]);
