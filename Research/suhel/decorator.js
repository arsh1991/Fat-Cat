'use strict';

class Component {
    constructor() {
    }

    Operation (){
    }

}

class ConcreteComponent extends Component {
    constructor() {
        super()
        
    }

    Operation (){
        return 'Hello World'
    }
    
}

class Decorator extends Component {
    constructor(component) {
        super()
        this.component = component
        
    }

    Operation (){
        return this.component.Operation()
    }
    
}

class ConcreteDecoratorA extends Decorator {
    constructor(component) {
        super(component)
        this.addedState = null
        
    }

    Operation (){
        this.addedState=super.Operation()
        return this.AddedBehaviour(this.addedState)
    }

    AddedBehaviour(input){
        return "<em>" + input + "</em>" 
    }
}

class ConcreteDecoratorB extends Decorator {
    constructor(component) {
        super(component)
        this.addedState = null
        
    }

    Operation (){
        this.addedState=super.Operation()
        return this.AddedBehaviour(this.addedState)
    }
    AddedBehaviour(input){
        return "<h1>" + input + "</h1>" 
    }
}

function init_Decorator() {
    var obj = new ConcreteDecoratorB( new ConcreteDecoratorA( new ConcreteComponent() ) )
    var result = obj.Operation() 
    console.log( result )
}   
init_Decorator()