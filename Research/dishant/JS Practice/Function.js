/**
 * Write a program to add books to MLK library
 */

var book=[];

var library={
		name:"MLK library",
		address:"1 Washington Sq. San Jose, California",
		bookArray:book
}

function addBook(name,author){
	book[book.length]={
			name:name,
			author:author
	}
}

addBook("Game of Throne- A song of ice and fire","George R. R. Martin");

console.log("Book Details:\n")
console.log(library.bookArray[book.length-1].name);
console.log(library.bookArray[book.length-1].author);

