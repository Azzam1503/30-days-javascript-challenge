const Person = require("../Person.js");
//Task 1 Define a class Person with propterties name and age and a method to return a greeting message. Create an instance of the class and log the greeting message.
const p = new Person("John", 43);
p.greet();


//Task 2 Add a method to the person calls that updates the age property and logs ths updated age
p.setAge(32);
p.greet();
