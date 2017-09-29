package designpattern;

public class SportsCar extends ModifiedVehicle{

	public SportsCar(Vehicle vehicle) {
		super(vehicle);
		
	}
	
	public void type(){
		
		vehicle.type();
		setAlloyWheels(vehicle);
	}

	 private void setAlloyWheels(Vehicle vehicle){
	      System.out.println("Alloy Wheels : Silver");
	 }
}
