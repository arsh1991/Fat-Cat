/**
 *  Write a program to add a book on click of a button
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
	
	console.log("Book Details:\n")
	console.log(library.bookArray[book.length-1].name);
	console.log(library.bookArray[book.length-1].author);

}


