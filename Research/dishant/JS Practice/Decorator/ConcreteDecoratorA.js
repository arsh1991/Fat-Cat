var Decorator=require('./Decorator.js');

module.exports= class ConcreteDecoratorA extends Decorator {

	constructor( component,addedState){
		
		super(component)	
		
		this.addedState=addedState;
	}

	addedBehavior(state) {
		return "<em>" + state + "</em>" ;
	}

    operation()
    {
        this.addedState = super.operation() ;
        return this.addedBehavior( this.addedState ) ;
    }

	
}
