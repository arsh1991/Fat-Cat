var Component=require('./Component.js');

module.exports=class ConcreteComponent extends Component {

	constructor(){
		super()
		
	}
	operation() {
		
		return "Hello World!";
	}

}