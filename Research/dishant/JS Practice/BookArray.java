/*Write a program to find a book with a particular author.*/

package javapractice;

public class BookArray {


	private String bookName;
	private String author;
	
	public BookArray(){
		
	}
	public BookArray(String bookName, String author){
		
		this.bookName=bookName;
		this.author=author;
	}
	
	
	public BookArray findAuthor(BookArray[] arr, String author){
		
		for(BookArray book:arr){
			if(book.author==author)
				return book;
		}
		
		return null;
	}
}
