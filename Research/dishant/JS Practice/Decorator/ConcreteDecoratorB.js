
var Decorator=require('./Decorator.js');

module.exports= class ConcreteDecoratorB extends Decorator {

	constructor(component,addedState){
		
		super(component)
		this.addedState=addedState;
	}

	addedBehavior(state) {
		return "<h1>" + state + "</h1>" ;
	}

    operation()
    {
        this.addedState = super.operation() ;
        return this.addedBehavior( this.addedState ) ;
    }

	
}
