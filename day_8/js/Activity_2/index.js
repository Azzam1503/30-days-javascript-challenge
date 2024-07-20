//Task 3 - Use array destructuring to extract the first and second elements from an array of numbers and log them to the console
const arr = [1, 2, 3, 4, 5];
const [first, second] = arr;
console.log(first);
console.log(second);


console.log("----------------------------------------------");


//Task 4 - Use the object destructutring to exract the title and autheor form a book obeject and log them to the console.

const book = {
    title: "Harray Potter",
    author: "J K Rowling"
}

const {title, author} = book;
console.log(title);
console.log(author);