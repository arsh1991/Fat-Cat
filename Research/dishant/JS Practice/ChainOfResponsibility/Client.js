var ConcreteHandler1=require( "./ConcreteHandler1.js");
var ConcreteHandler2=require( "./ConcreteHandler2.js");
var ConcreteHandler3=require( "./ConcreteHandler3.js");



class Client {
    
    runTest()
    {
        let h1 = new ConcreteHandler1() ;
        let h2 = new ConcreteHandler2() ;
        let h3 = new ConcreteHandler3() ;

        h1.setSuccessor(h2);
        h2.setSuccessor(h3);
        
        console.log( "Sending R2...");
        h1.handleRequest("R2");
        console.log( "Sending R3...");
        h1.handleRequest("R3");
        console.log( "Sending R1...");
        h1.handleRequest("R1");
        console.log( "Sending RX...");
        h1.handleRequest("RX");

    }
    
    

};

let c = new Client() ;
c.runTest() ;
	