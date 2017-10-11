var Handler=require( "./Handler.js");

module.exports = class ConcreteHandler1 extends Handler {
	
    constructor(successor) {
        super()
        this.successor = successor
    }

    handleRequest (request){
        console.log("R1 got the request...");
        if ( request==="R1" )
        {
        	console.log( this.constructor.name + " => This one is mine!");
        }
        else
        {
        	//console.log(this.successor)
            if ( this.successor)
                this.successor.handleRequest(request);
        }

    }
    
    setSuccessor(next){
    	this.successor=next;
    }
}
