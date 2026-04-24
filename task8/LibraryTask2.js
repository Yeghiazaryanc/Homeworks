class Book {
    constructor(id, title, author, year) {
        this.id = id;
        this.title = title;
        this.author = author;
        this.year = year;
        this.isAvailable = true;
    }
}

class Library {
    constructor(name) {
        this.name = name;
        this.books = [];
    }

    addBook(book) {
        if (!book.id || !book.title || !book.author) {
            console.error("Error: The book must have an id, title, and author.");
            return;
        }
        if (typeof book.year !== "number") {
            console.error("Error: The book's publication year must be a number.");
            return;
        }
        const isIdExists = this.books.some((b) => b.id === book.id);
        if (isIdExists) {
            console.error(`Error: A book with id ${book.id} already exists.`);
            return;
        }
        this.books.push(book);
        console.log(`Book added: "${book.title}"`);
    }

    removeBook(id) {
        const index = this.books.findIndex((b) => b.id === id);
        if (index === -1) {
            console.error(`Error: Book with id ${id} not found for removal.`);
            return;
        }
        const removedTitle = this.books[index].title;
        this.books.splice(index, 1);
        console.log(`Book removed: "${removedTitle}"`);
    }

    findBookByTitle(title) {
        return this.books.find((b) => b.title === title) || null;
    }

    findBookByAuthor(author) {
        return this.books.filter((b) => b.author === author);
    }

    borrowBook(id) {
        const book = this.books.find((b) => b.id === id);
        if (!book) {
            console.error(`Error: Book with id ${id} not found.`);
            return;
        }
        if (!book.isAvailable) {
            console.error(`Error: The book "${book.title}" is already borrowed.`);
            return;
        }
        book.isAvailable = false;
        console.log(`You borrowed the book: "${book.title}"`);
    }

    returnBook(id) {
        const book = this.books.find((b) => b.id === id);
        if (!book) {
            console.error(`Error: Book with id ${id} not found.`);
            return;
        }
        if (book.isAvailable) {
            console.error(`Error: The book "${book.title}" is already available in the library.`);
            return;
        }
        book.isAvailable = true;
        console.log(`You returned the book: "${book.title}"`);
    }

    listAvailableBooks() {
        return this.books.filter((b) => b.isAvailable);
    }

    listBorrowedBooks() {
        return this.books.filter((b) => !b.isAvailable);
    }

    showLibraryInfo() {
        console.log(`\n=== Library: ${this.name} ===`);
        console.log(`Total books: ${this.books.length}`);
        console.log(`Available books: ${this.listAvailableBooks().length}`);
        console.log(`Borrowed books: ${this.listBorrowedBooks().length}\n`);
    }
}


const myLibrary=new Library("My Library");
const book1 = new Book(1, "1984", "George orwell", 1949);
const book2 = new Book(2, "Samvel", "Raffi", 1886);
const book3 = new Book(3, "Qaos", "Shirvanzade", 1898);
const invalidBook = new Book(4, "esiminch", "undefined", "2020"); // Սխալ տարեթվի տիպ

myLibrary.addBook(book1);
myLibrary.addBook(book2);
myLibrary.addBook(book3);

// Թեստ: ավելացնել առանց պարամետրերի և կրկնվող ID-ով
myLibrary.addBook(invalidBook);
myLibrary.addBook(new Book(1, "copy", "author", 2000));

//Որոնել գիրք ըստ վերնագրի
//console.log(myLibrary.findBookByTitle("Samvel"));

// Որոնել գիրք ըստ հեղինակի
//console.log(myLibrary.findBookByAuthor("Raffi"));

//Վերցնել գիրք
myLibrary.borrowBook(1);

//Փորձել վերցնել արդեն վերցված գիրքը
myLibrary.borrowBook(1);//error

//Վերադարձնել գիրք
myLibrary.returnBook(1);

//Փորձել վերադարձնել արդեն հասանելի գիրքը
myLibrary.returnBook(1);//error


//Հեռացնել գիրք
myLibrary.removeBook(3);

//Փորձել հեռացնել գոյություն չունեցող գիրք
myLibrary.removeBook(3);//error


//Ցուցադրել հասանելի և վերցված գրքերը
//myLibrary.borrowBook(3);//
console.log(myLibrary.listAvailableBooks());
console.log(myLibrary.listBorrowedBooks());


//Ցուցադրել գրադարանի ամբողջական ինֆորմացիան
myLibrary.showLibraryInfo();//

