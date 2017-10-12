var Component=require('./Component.js');

module.exports= class Decorator extends Component {

	constructor(component){
		super();
				
		this.component=component;
	}
	
	operation()
    {
        return this.component.operation() ;
    }

}
