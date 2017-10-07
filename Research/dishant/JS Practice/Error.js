/**
 * Write a program to show that Integer.parseInt() method throws an error when 
 * a string is passed to it as a parameter 
 */

var str= "12ma";

try{
	console.log("In try..");
	var num= Integer.parseInt(str);
}

catch (NumberFormatException) {
	
	console.log("Exception Thrown!!");
}

finally{
	console.log("Finally block always executes!!");
}