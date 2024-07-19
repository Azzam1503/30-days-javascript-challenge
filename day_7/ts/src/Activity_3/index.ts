//Task 5 - Create a nested object representing a library with properties like name and books(an array book objects), and log the library object to the console
import { Book } from "../Activity_1";

interface Library{
    name: string;
    address: string;
    books: Book[],
    getLibraryInfoAndBooksTitle?: () => void
}


const library: Library = {
    name: "City Library",
    address: "Delhi, India",
    books: [
        {
            title: "Harry Potter and the Philosopher's Stone",
            author: "J.K. Rowling",
            year: 1997
        },
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year: 1960
        },
        {
            title: "1984",
            author: "George Orwell",
            year: 1949
        }
    ],
}

console.log(library);


console.log("----------------------------------------------------------------------------");

// Task 6 Access and log the name of the library and the title of all the books in the library

library.getLibraryInfoAndBooksTitle = function(){
    console.log(this.name);
    console.log(this.address);
    console.log("Books Available:")
    this.books.forEach((book) => {
        console.log(book.title);
    })
}

library.getLibraryInfoAndBooksTitle();