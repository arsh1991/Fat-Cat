
module.exports=class Creator {

	constructor(order){
		this.order = "Default Order" ;
	}
    

	getEngine(){
		
	}

	takeOrder(order) {
        this.order = order ;
	}

	buildOrder() {
        let eng = this.getEngine() ;
        console.log( "Building Order: " + this.order );
        console.log( "Pull Engine..." + eng.constructor.name );
        console.log( "Assemble Car..." );
        console.log( "Paint...");
        console.log( "Ship...");
	}

}