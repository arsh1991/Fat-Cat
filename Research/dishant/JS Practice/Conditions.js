/**
 * Write a program to display if person is a professor and above 50 years.
 */

"use strict";
class Person{
	
	constructor(name, age, type){
		
		this.name=name;
		this.age=age;
		this.type=type;
		
	}
}

var personArray=[];

var p1=new Person("Prof Ron Mak", 70, "Professor");
personArray[personArray.length]=p1;
var p2=new Person("Prof Chandra", 40, "Professor");
personArray[personArray.length]=p2;
var p3=new Person("Dishant", 27, "Student");
personArray[personArray.length]=p3;


for(var i=0;i<personArray.length;i++){
	
	var p=personArray[i];
	
	if(p.age>50 && p.type=="Professor")
		console.log("Name:"+p.name+"\n"+"Type:"+p.type);
}


