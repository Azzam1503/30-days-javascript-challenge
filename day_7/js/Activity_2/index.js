//Task 3 - Add amtehod to the book object that returns a string with the book's title and author and log resutl fof calling this method.

const book = {
    title: "Harry Potter",
    author: "J K Rowling",
    year: 1997,
    func: function(){
        console.log(`Title ${this.title}, author ${this.author}`);
    },

}

book.func();

//Task 4 - Add a mothod to the book object that take a parameter (year) and updated the book's year property, then log the updated object

book.updateYear = function(year){
    this.year = year;
};
book.updateYear(2001);
console.log(book.year);