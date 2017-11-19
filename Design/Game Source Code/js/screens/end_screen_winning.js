game.EndScreenWinning = me.ScreenObject.extend({
  /**
   * action to perform on state change
   */
  onResetEvent : function () {
    // title screen
    game.data.pause = true;


    //var backgroundImage = new me.Sprite(0, 0, {
           //image: me.loader.getImage('you_won'),
       //}
    //);

    var backgroundImage = factory.createImageObject(0,0,'you_won');
    console.log('T R I G G E R E D');


    var score = new Score();  
    var scoreWithTime = new TimeDecorator(score);
    scoreWithTime.gameEnd();
    final_score = game.data.score;
    console.log(final_score);
    final_score = Math.round(final_score);

    var a = game.data.time.split(':'); // split it at the colons
    var seconds = (+a[0]) * 60 * 60 + (+a[1]);

    console.log("You completed the game in " + (60 - seconds) + " seconds. \n");
 
    // position and scale to fit with the viewport size
  backgroundImage.anchorPoint.set(0, 0);
   backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
    me.game.world.addChild(backgroundImage, 1);


   //this.RestartButton = new game.UI.ButtonUI(350, 250, "green", "Restart Game :D");
   //this.LeaderboardButton = new game.UI.ButtonUI(350, 330, "blue","See Leaderboard!");
   this.RestartButton = factory.createButtonObject("restart",350, 250, "green", "Restart Game :D");
   this.LeaderboardButton = factory.createButtonObject("leader",350, 330, "blue","See Leaderboard!");

   if (this.RestartButton == null){
      this.RestartButton = new game.UI.ButtonUI(350, 250, "green", "Restart Game :D");
   }
   if (this.LeaderboardButton == null){
      this.LeaderboardButton = new game.UI.ButtonUI(350, 330, "blue","See Leaderboard!");
   }
   me.game.world.addChild(this.RestartButton);
   me.game.world.addChild(this.LeaderboardButton);
   me.game.world.addChild(new game.EndScreenWinning.Message(seconds, final_score));
   
    this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {

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

game.EndScreenWinning.Message = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(seconds, points) {
        // call the super constructor
        // (size does not matter here)
        var width = me.game.viewport.width;
        var height = me.game.viewport.height;
        this._super(me.Renderable, "init", [
            width/2 -500,
            height - 350,
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
        this.font.draw (renderer, "Wow! You're a winner! \n", this.pos.x, this.pos.y);
        this.font.draw (renderer, "Your score is " + this.points + " points. \n", this.pos.x-10, this.pos.y + 30);
        this.font.draw (renderer, "Want to beat your score? \n", this.pos.x, this.pos.y + 90);
    }

});