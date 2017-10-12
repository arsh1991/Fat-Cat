class Command {
 
	constructor() {
        
    }
	execute(){
		
	}
	setReceiver(target){
		
	}
}


class ConcreteCommand extends Command {
    
	constructor(theReceiver) {
        super()
        this.theReceiver = theReceiver
    }

	execute() {
		this.theReceiver.doAction();
	}

	setReceiver(target) {
		this.theReceiver = target ;
	}
	 
}

class Invoker {
	 
	setCommand(cmd){
		
	}
	invoke(){
		
	}
}

class Menu {
	
	constructor(menuItems) {
		this.menuItems = new Map();
    }
	
	addMenuItem(item, key ) {
        this.menuItems.set( key, item ) ;
    }

    selectMenuItem( key ) {
        item = menuItems.get(key) ;
        if ( item )
            item.invoke();
        else
            console.log( "Menu Item Not Found: " + key );
    }
	 
}

class MenuItem extends Invoker {
	
	constructor(theCommand) {
		this.theCommand = theCommand;
    }
    

	setCommand(cmd) {
		this.theCommand = cmd ;
	}

	invoke() {
		this.theCommand.execute();
	}
	 
}

class Receiver {
	 
	doAction(){
		
	}
	 
}

class Client {
    
	constructor(helloMessage, goodbyeMessage, appMenu) {
	    this.helloMessage = "Hello World!" ;
	    this.goodbyeMessage = "Goodbye World!" ;
	    this.appMenu = new Menu() ;
		
	}
    getMenu() {
        return appMenu ;
    }
    
    runSetup() {
        hello = new MenuItem() ;
        goodbye = new MenuItem() ;
        sayHello = new ConcreteCommand();
        sayGoodbye = new ConcreteCommand();
        sayHello.setReceiver(
                new Receiver() {
                    doAction() {
                        System.out.println( helloMessage );    
                    }
                }
        );
        sayGoodbye.setReceiver({
                
                    doAction() {
                        console.log( goodbyeMessage );
                    }
                
        );
        hello.setCommand( sayHello );
        goodbye.setCommand( sayGoodbye );
        appMenu.addMenuItem(hello, "hello");
        appMenu.addMenuItem(goodbye, "goodbye");
    }
    
   
}


let c = new Client() ;
c.runSetup() ;
let m = c.getMenu() ;
m.selectMenuItem("hello") ;
m.selectMenuItem("goodbye") ;
m.selectMenuItem("n/a") ;

 

 

 

 
 
 


 