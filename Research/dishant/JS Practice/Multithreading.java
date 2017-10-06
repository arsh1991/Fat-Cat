/*Write a program to how multiple threads are used in java*/

package javapractice;

public class Multithreading extends Thread {

	@Override
	public void run() {
		
		
		try {
			
			Thread.sleep(1000);
			
			
		} catch (InterruptedException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
	}
	
	

}
