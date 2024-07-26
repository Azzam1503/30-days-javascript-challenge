//Task 7 Add a getter method to the person class to return the full name (assume a firstName and lastName property). Create an instance and log the full name using the getter.

class Person{
    constructor(firstName, lastName){
        this.firstName = firstName;
        this.lastName = lastName;
    }

    getPersonFullName(){
        return this.firstName + " " + this.lastName;
    }
    //Task 8 Add a setter method to the person class to set the full name (firstName and lastName property). Update the name using the setter and log the updated full name.
    setPersonFullName(first, last){
        this.firstName= first;
        this.lastName = last;
    }
}

let p = new Person("John", "Doe");
console.log(p.getPersonFullName());
p.setPersonFullName("Under", "Taker");
console.log(p.getPersonFullName());
