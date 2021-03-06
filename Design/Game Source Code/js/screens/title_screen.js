
game.TitleScreen = me.ScreenObject.extend({
  /**
   * action to perform on state change
   */
  onResetEvent : function () {
    
    var factory = new Factory();
    // title screen
    //var backgroundImage = new me.Sprite(0, 0, {
            //image: me.loader.getImage('background'),
       // }
    //);
  var backgroundImage = factory.createImageObject(0,0,'background');
    
    // position and scale to fit with the viewport size
   backgroundImage.anchorPoint.set(0, 0);
   backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
   //clear the background
   //me.game.world.addChild(new me.ColorLayer("background", "rgba(210, 104, 40, 255)"), 0);
   me.save.add({ hiscore : 0,second:0,third:0});
 


   console.log(JSON.stringify(me.save));
   me.game.world.addChild(backgroundImage);
   //this.SelectPlayerButton = new game.UI.ButtonUI(500, 175, "green", "Select Player");
   this.PlayButton = factory.createButtonObject("play",430,535,"green","Play Game");

   
   //me.game.world.addChild(this.SelectPlayerButton);
   me.game.world.addChild(this.PlayButton); //PlayButton is added to the UI
   me.game.world.addChild(new game.TitleScreen.Message(me.save.hiscore,me.save.second,me.save.third));
    // change to play state on press Enter or click/tap
    // me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    // me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
    this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
      if (action === "enter") {
        // play something on tap / enter
        me.audio.play("cling");
        me.state.change(me.state.PLAY);
      }
    });
  },

  /**
   * action to perform when leaving this screen (state change)
   */
  onDestroyEvent : function () {
    me.input.unbindKey(me.input.KEY.ENTER);
    me.input.unbindPointer(me.input.pointer.LEFT);
    me.event.unsubscribe(this.handler);
  }
});

game.TitleScreen.Message = me.Renderable.extend({
    /**
     * constructor
     */
     init: function(points1,points2,points3) {

        // call the super constructor
        // (size does not matter here)
        var width = me.game.viewport.width;
        var height = me.game.viewport.height;
        this._super(me.Renderable, "init", [
          width/2 - 200,
          height - 500,
          -270,
          135
          ]);

        // create a font
        this.font = new me.Font("arial rounded mt bold", 22, "black");
        this.points1 = points1;
        this.points2 = points2;
        this.points3 = points3;
      },
    
    /**
     * update function
     */
     update : function (/*dt*/) {

     },

    /**
     * draw the score
     */
     draw : function (renderer) {
 

    }

  });
