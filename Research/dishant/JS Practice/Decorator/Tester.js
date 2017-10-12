
var ConcreteDecoratorB=require('./ConcreteDecoratorB.js');
var ConcreteDecoratorA=require('./ConcreteDecoratorA.js');
var ConcreteComponent=require('./ConcreteComponent.js');

class Tester {

    runTest()
    {
    	
        let obj = new ConcreteDecoratorB( new ConcreteDecoratorA( new ConcreteComponent() ) ) ;
        let result = obj.operation() ;
        
        console.log(result);
    }

    
}

t = new Tester() ;
t.runTest() ;

