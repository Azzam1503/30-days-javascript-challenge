const Person = require("./Person.js");
class Student extends Person{
    static #instanceCount = 0;
    constructor(name, age, studendID){
        super(name, age);
        this.studendID = studendID;
        Student.#instanceCount++;
    }

    getStudentID(){
        return this.studendID;
    }

    static getInstanceCount(){
        return Student.#instanceCount;
    }

    //Task 4 Override the greet method in the student class to include the studentID of the student and log the overridden message.
    greet(){
        console.log(`Hy! ${this.name} have a nice day, you are ${this.age} year old and your studentID is ${this.studendID}`);
    }
}

module.exports = Student;