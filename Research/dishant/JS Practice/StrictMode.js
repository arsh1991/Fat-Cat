/**
 * Write a program to show json objects must be declared before they are defined
 */

'use strict';
// 


var z = {p1:10, p2:20}; 
console.log(z);

y = {p1:10, p2:20}; //This will cause an error since variable y is not declared.

