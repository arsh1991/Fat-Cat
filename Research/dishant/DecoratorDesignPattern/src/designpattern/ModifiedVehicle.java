package designpattern;

public abstract class ModifiedVehicle implements Vehicle {

	Vehicle vehicle;
	
	public ModifiedVehicle(Vehicle vehicle) {
		
		this.vehicle=vehicle;
	}
	
	public void type(){
		
		vehicle.type();
	}
	
}
