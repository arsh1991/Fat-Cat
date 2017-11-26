function Factory() {
    //Factory method for button only
    this.createButtonObject = function (type,x,y,color,text){
        
        if (type === "play" || type === "restart" || type === "leader"){
          object = new game.UI.ButtonUI(x, y,color,text);
        }
        return object;
    }
    //Methods for new Image Objects
    this.createImageObject = function (x,y,name){
        
        return new me.Sprite(x, y, 
        {
            image: me.loader.getImage(name),
        }
      );
    }

}



