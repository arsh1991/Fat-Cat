game.EndScreenDead = me.ScreenObject.extend({
  /**
   * action to perform on state change
   */
   onResetEvent : function () {
    // title screen
    game.data.pause = true;
    
    var backgroundImage = new me.Sprite(0, 0, {
      image: me.loader.getImage('game_over_died'),
   }
   );
    //splashScreen();
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


    // position and scale to fit with the viewport size
    backgroundImage.anchorPoint.set(0, 0);
    backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
    me.game.world.addChild(backgroundImage, 1);
    //game.HUD.removeChild(TimerObject);
    //this.addChild(new game.HUD.ScoreItem(-10, -10));
   // me.game.world.removeChild(game.HUD);

    this.RestartButton = new game.UI.ButtonUI(350, 255, "green", "Restart Game :D");
    this.LeaderboardButton = new game.UI.ButtonUI(350, 335, "blue","See Leaderboard!");
    me.game.world.addChild(this.RestartButton);
    //me.game.world.addChild(this.LeaderboardButton);
    me.game.world.addChild(new game.EndScreenDead.Message(seconds, game.data.score));

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

  game.EndScreenDead.Message = me.Renderable.extend({
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
        this.font = new me.Font("arial rounded mt bold", 22, "white");
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
      this.font.draw (renderer, "Oh no, you died! :( \n", this.pos.x -10, this.pos.y);
      this.font.draw (renderer, "You completed the game in " + this.seconds + " seconds! \nYour score is " + this.points + " points. \n", this.pos.x -10, this.pos.y + 30);
      this.font.draw (renderer, "Want to try again? \n", this.pos.x -10, this.pos.y + 90);
      this.font.draw (renderer, "LEADERBOARD \n", this.pos.x + 40, this.pos.y+220);
      this.font.draw (renderer, "POSITION  SCORES\n", this.pos.x + 20, this.pos.y+255);

      this.font.draw (renderer, " I               " + me.save.hiscore + " \n", this.pos.x + 20, this.pos.y+284);
      this.font.draw (renderer, " II              " + me.save.second + " \n", this.pos.x + 20, this.pos.y+304);
      this.font.draw (renderer, " III             " + me.save.third + " \n", this.pos.x + 20, this.pos.y+324);


    }

  });