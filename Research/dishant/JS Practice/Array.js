/**
 * Write a program to display books of a library stored in an array.
 */

var book=[];

var library={
		name:"MLK library",
		address:"1 Washington Sq. San Jose, California",
		bookArray:book
}

book[book.length]={
		name:'CMPE 273',
		author:'Prof. Simon Shim'
}

book[book.length]={
		name:'CMPE 281',
		author:'Prof. Zeyu Gao'
}

book[book.length]={
		name:'CMPe 272',
		author:'Prof.Rakesh Ranjan'
}


console.log("Book List:\n");

for(var i=0;i<book.length;i++){
	
	console.log("Book Name:"+library.bookArray[i].name);
	console.log("Author:"+library.bookArray[i].author);

}
