const Person = require("../Person");
const Student = require("../Student");
//Task 5 - Add a static method to the person class that returns a generic greeting message. Class this static method without creating the instance of the class and log the message.
//Added static method to person class in the preson.js file
Person.staticMethod();
const p3 = new Person();

//Task 6 - Add a static property to student class to keep track of the number of students created. Increment this property in the constructor and log the total number of students
//Added static property to Student class in Student.js file
const s1 = new Student("Azzam Uddin", 23, 2123);
const s2 = new Student("John Doe", 33, 2124);
const s3 = new Student("Jane Doe", 23, 2125);
const s4 = new Student("John Cena", 43, 2126);
const s5 = new Student("Under Taker", 53, 2127);
console.log(s1.getStudentID());
s1.greet();

console.log(Student.getInstanceCount());