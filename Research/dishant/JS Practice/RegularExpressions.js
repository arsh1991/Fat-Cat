/**
 * Write a program to validate  a phone number (123) 456-7890 or 123-456-7890 or (123)-456-7890
 */

var phNo1="(123) 456-7890";
var phNo2="123-456-7890";
var phNo3="(123)-456-7890";


var check=/^(\([0-9]{3}\)|[0-9]{3})[-|\s]{0,1}[0-9]{3}-[0-9]{4}$/;

console.log("phNo1 matches regex:",phNo1.match(check)[0]===phNo1);
console.log("phNo2 matches regex:",phNo2.match(check)[0]===phNo2);
console.log("phNo3 matches regex:",phNo3.match(check)[0]===phNo3);
	