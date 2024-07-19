//Task 7 Add a method to the book object that uses the this keyword to return a string with the book's title and year and log the result off calling this method

const book = {
    title: "Harry Potter",
    author: "J K Rowling",
    year: 1997,
    func: function(){
        console.log(`Title ${this.title}, author ${this.author}`);
    },

}

book.func();


