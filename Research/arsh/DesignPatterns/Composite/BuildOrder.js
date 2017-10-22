var Composite=require('./Composite.js');
var Leaf=require('./Leaf.js');

module.exports = class BuildOrder{
	
	static getOrder()
    {
		let order = new Composite( "Order" ) ;
        order.addChild(new Leaf("Crispy Onion Strings", 5.50 ));
        order.addChild(new Leaf("The Purist", 8.00 ));
        
        let customBurger = new Composite( "Build Your Own Burger" ) ;
        
        customBurger.addChild(new Leaf("Beef, 1/3 lb on a Bun", 9.50 )); 
        customBurger.addChild(new Leaf("Danish Blue Cheese", 0.00 )); 
        customBurger.addChild(new Leaf("Horseradish Cheddar", 1.00 )); 
        customBurger.addChild(new Leaf("Bermuda Red Onion", 0.00 )); 
        customBurger.addChild(new Leaf("Black Olives", 0.00 )); 
        customBurger.addChild(new Leaf("Carrot Strings", 0.00 )); 
        customBurger.addChild(new Leaf("Coleslaw", 0.00 )); 
        customBurger.addChild(new Leaf("Applewood Smoked Bacon", 1.50 )); 
        customBurger.addChild(new Leaf("Appricot Sauce", 0.00 )); 
        order.addChild( customBurger );
        
        return order ;
    }

}
