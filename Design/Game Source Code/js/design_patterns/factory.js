function Factory() {

    this.createButtonObject = function (type,x,y,color,text){
        
        if (type === "play"){
          object = new game.UI.ButtonUI(x, y,color,text);
        //} else if (type === "restart") {
           // object = 
       // } else if (type === "leaderBoard"){
          //  object = 
        //} 
        return object;
    }
  }
}


