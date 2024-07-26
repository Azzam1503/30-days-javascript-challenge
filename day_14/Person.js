class Person {
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    greet(){
        console.log(`Hy! ${this.name} have a nice day, you are ${this.age} year old`);
    }

    setAge(age){
        this.age = age;
        console.log("Updated age to ", this.age)
    }

    //Task 5 - Add a static method to the person class that returns a generic greeting message. Class this static method without creating the instance of the class and log the message.
    static staticMethod(){
        console.log("I am the static method in the person class");
    }

}

module.exports = Person;