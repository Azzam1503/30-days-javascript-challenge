const Student = require("../Student");
//Task 3- Define a class student that extends the person classs. Add a propert studentId and a method to return the student ID. Create an instance of the student class and log the studend ID.
//Defined in the Student.js

const s1 = new Student("jane", 21, 43432);
//Task 4 is in the Student.js file
console.log(s1.getStudentID());
s1.greet();


