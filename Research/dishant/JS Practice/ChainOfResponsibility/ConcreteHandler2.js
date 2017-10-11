var Handler=require( "./Handler.js");


module.exports = class ConcreteHandler2 extends Handler {
	
    constructor(successor) {
        super()
        this.successor = successor
    }

    handleRequest (request){
        console.log("R2 got the request...");
        if ( request==="R2" )
        {
        	console.log( this.constructor.name + " => This one is mine!");
        }
        else
        {
            if ( this.successor)
                this.successor.handleRequest(request);
        }

    }
    
    setSuccessor(next){
    	this.successor=next;
    }
}