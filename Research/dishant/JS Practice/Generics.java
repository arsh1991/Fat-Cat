/*Write a program to sort integers, characters, double using a single method*/
package javapractice;

import java.util.Arrays;

public class Generics {
	
	
	   public < E > E[] sort( E[] arr ) {
	      
		   Arrays.sort(arr);
		   
		   return arr;
	   }
	
}
