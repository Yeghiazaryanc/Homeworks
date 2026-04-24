function Book(title,author,year){
    this.title=title;
    this.author=author;
    this.year=year;
    this.isAvailable=true;
}
Book.prototype.getInfo=function(){
    return `${this.title} by ${this.author} (${this.year}) - ${this.isAvailable ? "Available" : "Borrwed"}`;
};

Book.prototype.borrowBook=function(){
    if(this.isAvailable){
        this.isAvailable=false;
    }else{
        console.log(`The book "${this.title}" is already borrowed.`);
    };
};

Book.prototype.returnBook=function(){
    if(!this.isAvailable){
        this.isAvailable=true;
    }else{
        console.log(`The book "${this.title}" is already available.`);
    };
};

Book.prototype.matchesAuthor=function(authorName){
    return this.author.toLowerCase()===authorName.toLowerCase();
};
Book.prototype.matchesTitle=function(word){
    return this.title.toLowerCase().includes(word.toLowerCase());
};

function Library(){
    this.books=[];
}
Library.prototype.addBook=function(book){
    this.books.push(book);
};

Library.prototype.removeBook=function(title){
    const index=this.books.findIndex((b)=>b.title===title);
    if(index !== -1){
        this.books.splice(index,1);
    }else{
        console.log(`Book "${title}" not found for removal.`);
    };
};

Library.prototype.findBookByTitle=function(title){
    return this.books.find((b)=>b.title===title) || null;
};

Library.prototype.findBookByAuthor=function(authorName){
    return this.books.filter((b)=>b.matchesAuthor(authorName));
};

Library.prototype.getAvailableBooks=function(){
    return this.books.filter((b)=>b.isAvailable);
};

Library.prototype.borrowBook=function(title){
    const book=this.findBookByTitle(title);
    if(book){
        book.borrowBook();
    }else{
        console.log(`Book "${title}" not found in the library.`);
    };
};

Library.prototype.returnBook=function(title){
    const book=this.findBookByTitle(title);
    if(book){
        book.returnBook();
    }else{
        console.log(`Book "${title}" not found in the library.`);
    };
};

Library.prototype.showAllBooks=function(){
    this.books.forEach((b)=>console.log(b.getInfo()));
};

Library.prototype.countBooks=function(){
    return this.books.length;
};

Library.prototype.countAvailableBooks = function() {
  return this.getAvailableBooks().length;
};

Library.prototype.searchBooks = function(word) {
  return this.books.filter((b) => b.matchesTitle(word));
};

Library.prototype.getOldestBook = function() {
  if (this.books.length === 0) return null;
  return this.books.reduce((oldest, current) => 
    current.year < oldest.year ? current : oldest
  );
};



const book1 = new Book("Harry Potter", "J. K. Rowling", 1997);
const book2 = new Book("1984", "George Orwell", 1949);
const book3 = new Book("Animal Farm", "George Orwell", 1945);
const book4 = new Book("The Hobbit", "J. R. R. Tolkien", 1937);

const library = new Library();

library.addBook(book1);
library.addBook(book2);
library.addBook(book3);
library.addBook(book4);

console.log("=== All books ===");
library.showAllBooks();

console.log("=== Count books ===");
console.log(library.countBooks()); // 4

console.log("=== Count available books ===");
console.log(library.countAvailableBooks()); // 4

console.log("=== Find by title ===");
console.log(library.findBookByTitle("1984"));

console.log("=== Find by author ===");
console.log(library.findBookByAuthor("George Orwell"));

console.log("=== Search books ===");
console.log(library.searchBooks("Harry"));

console.log("=== Borrow book ===");
library.borrowBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Borrow same book again ===");
library.borrowBook("1984");

console.log("=== Return book ===");
library.returnBook("1984");
console.log(library.findBookByTitle("1984"));

console.log("=== Available books ===");
console.log(library.getAvailableBooks());

console.log("=== Oldest book ===");
console.log(library.getOldestBook());

console.log("=== Remove book ===");
library.removeBook("The Hobbit");
console.log(library.countBooks()); // 3

console.log("=== Final books ===");
library.showAllBooks();