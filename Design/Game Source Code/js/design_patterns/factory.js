game.Factory = me.ScreenObject.extend({
     
     init: function(type,x,y,color,text) {
          
        var object;
        var x_pos = x;
        var y_pos = y;
        var btn_color = color;
        var btn_text = text;    
        console.log("initializing");
      },

     createButtonObject : function () {
     

        if (type === "play") {
        object = new game.UI.ButtonUI(this.x_pos, this.y_pos,this.btn_color,this.btn_text);
        //} else if (type === "restart") {
           // object = 
       // } else if (type === "leaderBoard"){
          //  object = 
        //} 
        return object;
       }
    }

});

