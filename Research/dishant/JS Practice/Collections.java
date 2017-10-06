/*Write a program to check if a student has been issued more than 2 books*/

package javapractice;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Map;
import java.util.Map.Entry;
import java.util.Set;

public class Collections {

	
	public Set<Student> checkBooksIssued(Map<Book, Student> map){
		
		List<Integer> list = new ArrayList<>();
		Set<Student> studentList = new HashSet<>();
		
		Set<Entry<Book, Student>> set= map.entrySet();
		
		for(Entry<Book, Student> entry: set){
			
			Student stud= (Student)entry.getValue();
		
			if(list.contains(stud.enrollmentNo)){
				studentList.add(stud);
			}
			
			else{
				list.add(stud.enrollmentNo);
			}
		}
		
		return studentList;
	}
	
}
