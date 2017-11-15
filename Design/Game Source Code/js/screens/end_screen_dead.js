game.EndScreenDead = me.ScreenObject.extend({
  /**
   * action to perform on state change
   */

   onResetEvent : function () {
    // title screen
    game.data.pause = true;
    var final_score;
    
    var backgroundImage = new me.Sprite(0, 0, {
      image: me.loader.getImage('game_over_died'),
    }
    );
    
    healthLevel = 1;
    if(game.data.time > "0:00"){
            var a = game.data.time.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = (+a[0]) * 60 * 60 + (+a[1]);
    final_score = (game.data.score * 1000 * healthLevel)/(6000 - seconds);

  }
    else{ //if 0 seconds were left
      final_score = (game.data.score * 1000 * healthLevel)/(300);

    }
    final_score = Math.round(final_score);
    console.log("You completed the game in " + (60 - seconds) + " seconds. \n");

    if (me.device.localStorage === true) {
      var i=0;
      var keys = JSON.parse(localStorage.getItem("me.save")) || [];
      keys.forEach(function (key) {
        print[i]=JSON.parse(localStorage.getItem("me.save." + key));

        console.log(i+":"+print[i]);
        i=i+1;
      });
    }
    if (me.save.hiscore<final_score){
      me.save.hiscore=final_score;
    }
    else if(me.save.hiscore>final_score && me.save.second < final_score){
      me.save.second=final_score;
    }
    else if(me.save.hiscore>final_score && me.save.second > final_score && me.save.third < final_score){
      me.save.third=final_score;
    }


    // position and scale to fit with the viewport size. add buttons and background images
    backgroundImage.anchorPoint.set(0, 0);
    backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
    me.game.world.addChild(backgroundImage, 1);
    this.RestartButton = new game.UI.ButtonUI(350, 255, "green", "Restart Game :D");
    this.LeaderboardButton = new game.UI.ButtonUI(350, 335, "blue","See Leaderboard!");
    me.game.world.addChild(this.RestartButton);
    me.game.world.addChild(this.LeaderboardButton);
    me.game.world.addChild(new game.EndScreenDead.Message(seconds, final_score));



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

      var Iterator = function(items) {
        this.index = 0;
        this.items = items;
      }

      Iterator.prototype = {
        first: function() {
          this.reset();
          return this.next();
        },
        next: function() {
          return this.items[this.index++];
        },
        hasNext: function() {
          return this.index <= 4;
        },
        reset: function() {
          this.index = 1;
        }
      }
      this.font.draw (renderer, "Oh no, you died! :( \n", this.pos.x -10, this.pos.y);
      this.font.draw (renderer, "You completed the game in " + this.seconds + " seconds! \nYour total score is " + this.points + " points. \n", this.pos.x -10, this.pos.y + 30);
      this.font.draw (renderer, "Want to try again? \n", this.pos.x -10, this.pos.y + 90);
   // this.font.draw (renderer, "LEADERBOARD \n", this.pos.x + 40, this.pos.y + 220);
    //this.font.draw (renderer, "POSITION  SCORES\n", this.pos.x + 20, this.pos.y+255);
/*
    var iter = new Iterator(print);  
    var a =0;
    for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
       this.font.draw (renderer, item + " \n", this.pos.x + 140, this.pos.y+284+a);
       a=a+20;
      
     }

     this.font.draw (renderer, " I \n", this.pos.x + 20, this.pos.y+284);
     this.font.draw (renderer, " II \n", this.pos.x + 20, this.pos.y+304);
     this.font.draw (renderer, " III \n", this.pos.x + 20, this.pos.y+324);*/

   }

 });