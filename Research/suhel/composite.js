'use strict';
class Component {
    constructor() {
    }

    PrintDescription (){
    }

    AddChild (Component){
    }

    RemoveChild (Component){
    }

    GetChild (key){
    }
}

class Leaf extends Component {
    constructor(description,price) {
        super()
        this.description = description
        this.price=price
    }

    PrintDescription (){
        console.log(this.description+ " "+this.price)
    }

}

class Composite extends Component {
    constructor(description) {
        super()
        this.description = description
        this.components = []
    }

    PrintDescription (){
        console.log(this.description)
        for(var i in this.components)
            this.components[i].PrintDescription()
    }

    AddChild (Component){
        this.components.push(Component)
    }

    RemoveChild (Component){
        for(var i in this.components)
            if(this.components[i] === Component)
                this.components.splice(i, 1)
    }

    GetChild (key){
        return this.components[key]
    }
}



function BuildOrder() {
    var order = new Composite('Order')
    order.AddChild(new Leaf("Crispy Onion Strings", 5.50 ))
    order.AddChild(new Leaf("The Purist", 8.00 ))

    var customBurger = new Composite('Build Your Own Burger')
    customBurger.AddChild(new Leaf("Beef, 1/3 lb on a Bun", 9.50 )) // base price for 1/3 lb
    customBurger.AddChild(new Leaf("Danish Blue Cheese", 0.00 )) // 1 cheese free, extra cheese +1.00
    customBurger.AddChild(new Leaf("Horseradish Cheddar", 1.00 )) // extra cheese +1.00
    customBurger.AddChild(new Leaf("Bermuda Red Onion", 0.00 )) // 4 toppings free, extra +.75
    customBurger.AddChild(new Leaf("Black Olives", 0.00 )) // 4 toppings free, extra +.75
    customBurger.AddChild(new Leaf("Carrot Strings", 0.00 )) // 4 toppings free, extra +.75
    customBurger.AddChild(new Leaf("Coleslaw", 0.00 )) // 4 toppings free, extra +.75
    customBurger.AddChild(new Leaf("Applewood Smoked Bacon", 1.50 )) // premium topping +1.50
    customBurger.AddChild(new Leaf("Appricot Sauce", 0.00 ))
    order.AddChild(customBurger)
    order.PrintDescription()
}

BuildOrder()