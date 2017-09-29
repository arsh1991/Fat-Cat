package designpattern;

public class DecoratorPatternDemo {
	   
	public static void main(String[] args) {

	      Vehicle car = new Car();

	      Vehicle silverCar = new SportsCar(car);

	      System.out.println("Car without alloys");
	      car.type();

	      System.out.println("\nCar with alloys");
	      silverCar.type();

	 }
}