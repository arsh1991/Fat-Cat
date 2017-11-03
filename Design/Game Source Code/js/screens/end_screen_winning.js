game.EndScreenDead = me.ScreenObject.extend({
  /**
   * action to perform on state change
   */
  onResetEvent : function () {
    // title screen
    var backgroundImage = new me.Sprite(0, 0, {
           image: me.loader.getImage('game_over2'),
       }
    );
    console.log('T R I G G E R E D');
    healthLevel = 1;
    if(game.data.time > "0:00"){
            var a = game.data.time.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
        var seconds = (+a[0]) * 60 * 60 + (+a[1]);
        game.data.score = (game.data.score * 1000 * healthLevel)/(300 - seconds);

    }
    else{ //if 0 seconds were left
          game.data.score = (game.data.score * 1000 * healthLevel)/(300);

    }
         game.data.score = Math.round(game.data.score);
        console.log("You completed the game in " + (60 - seconds) + " seconds. \n");
      // console.log("Your score is " + game.data.score + " points. \n");
        //console.log("<a href='end-game.html'>Continue</a>");
        //var x = "<a href='end-game.html'>HELLOOOO</a>";

    // position and scale to fit with the viewport size
  backgroundImage.anchorPoint.set(0, 0);
   backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
    me.game.world.addChild(backgroundImage, 1);


   this.RestartButton = new game.UI.ButtonUI(430, 175, "green", "Restart Game :D");
   this.LeaderboardButton = new game.UI.ButtonUI(430, 250, "blue","See Leaderboard!");
   me.game.world.addChild(this.RestartButton);
   me.game.world.addChild(this.LeaderboardButton);
   me.game.world.addChild(new game.EndScreen.Message(seconds, game.data.score));
   
    this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
      if (action === "enter") {
        // play something on tap / enter
        // this will unlock audio on mobile devices
        me.audio.play("cling");
        me.state.change(me.state.PLAY);
        window.location.href = 'index.html';

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

game.EndScreen.Message = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(seconds, points) {
        // call the super constructor
        // (size does not matter here)
        var width = me.game.viewport.width;
        var height = me.game.viewport.height;
        this._super(me.Renderable, "init", [
            width/2 - 200,
            height - 500,
            10,
            10
        ]);

        // create a font
        this.font = new me.Font("arial rounded mt bold", 22, "black");
        this.seconds = 60 - seconds;
        this.points = points;
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
        this.font.draw (renderer, "Oh no, you died! :( You completed the game in " + this.seconds + " seconds! \n Your score is " + this.points + " points. \n", this.pos.x, this.pos.y);
    }

});