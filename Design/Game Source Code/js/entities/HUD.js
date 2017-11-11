

/**
 * a HUD container and child items
 */

game.HUD = game.HUD || {};


game.HUD.Container = me.Container.extend({

    init: function() {
        // call the constructor
        this._super(me.Container, "init");

        // persistent across level change
        this.isPersistent = true;

        // Use screen coordinates
        this.floating = true;

        // make sure our object is always draw first
        this.z = Infinity;

        // give a name
        this.name = "HUD";

        // add our child score object at position
        this.addChild(new game.HUD.ScoreItem(-10, -10));

        // add our audio control object
        this.addChild(new game.HUD.AudioControl(10, 10));

        if (!me.device.isMobile) {
            // add our fullscreen control object
            this.addChild(new game.HUD.FSControl(10 + 48 + 10, 10));
        }
        this.addChild(new game.HUD.TimerItem(-50,-10));

        this.addChild(new game.HUD.HPDisplay(1300, 0));

    }
});




if (me.input.isKeyPressed("pause")) {
    me.state.pause();

    var resume_loop = setInterval(function check_resume() {
        if (me.state.input.isKeyPressed("pause")) {
            clearInterval(resume_loop);
            me.state.resume();
        }
    }, 100);
}





/**
 * a basic control to toggle fullscreen on/off
 */
game.HUD.FSControl = me.GUI_Object.extend({
    /**
     * constructor
     */
    init: function(x, y) {
        this._super(me.GUI_Object, "init", [ x, y, {
            image: game.texture,
            region : "shadedDark30"
        } ]);
        this.setOpacity(0.5);
        this.anchorPoint.set(0, 0);
    },

    /**
     * function called when the pointer is over the object
     */
    onOver : function (/* event */) {
        this.setOpacity(1.0);
    },

    /**
     * function called when the pointer is leaving the object area
     */
    onOut : function (/* event */) {
        this.setOpacity(0.5);
    },

    /**
     * function called when the object is clicked on
     */
    onClick : function (/* event */) {
        if (!me.device.isFullscreen) {
            me.device.requestFullscreen();
        } else {
            me.device.exitFullscreen();
        }
        return false;
    }
});

/**
 * a basic control to toggle fullscreen on/off
 */
game.HUD.AudioControl = me.GUI_Object.extend({
    /**
     * constructor
     */
    init: function(x, y) {
        this._super(me.GUI_Object, "init", [ x, y, {
            image: game.texture,
            region : "shadedDark13" // ON by default
        } ]);
        this.anchorPoint.set(0, 0);
        this.setOpacity(0.5);
        this.isMute = false;
    },

    /**
     * function called when the pointer is over the object
     */
    onOver : function (/* event */) {
        this.setOpacity(1.0);
    },

    /**
     * function called when the pointer is leaving the object area
     */
    onOut : function (/* event */) {
        this.setOpacity(0.5);
    },

    /**
     * function called when the object is clicked on
     */
    onClick : function (/* event */) {
        if (this.isMute) {
            me.audio.unmuteAll();
            this.setRegion(game.texture.getRegion("shadedDark13"));
            this.isMute = false;
        } else {
            me.audio.muteAll();
            this.setRegion(game.texture.getRegion("shadedDark15"));
            this.isMute = true;
        }
        return false;
    }
});

/**
 * a basic HUD item to display score
 */
game.HUD.ScoreItem = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(x, y) {
        this.relative = new me.Vector2d(x, y);

        // call the super constructor
        // (size does not matter here)
        this._super(me.Renderable, "init", [
            me.game.viewport.width + x,
            me.game.viewport.height + y,
            10,
            10
        ]);

        // create a font
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'), 1.0, "right", "bottom");

        // local copy of the global score
        this.score = -1;
    },

    /**
     * update function
     */
    update : function (/*dt*/) {
        this.pos.x = me.game.viewport.width + this.relative.x;
        this.pos.y = me.game.viewport.height + this.relative.y;

        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if (this.score !== game.data.score) {
            this.score = game.data.score;
            return true;
        }
        return false;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        this.font.draw (renderer, game.data.score, this.pos.x, this.pos.y);
    }

});


/**
 * a basic HUD item for timer
 */
game.HUD.TimerItem = me.Renderable.extend({
    /**
     * constructor
     */
    init: function(x, y) {
        this.relative = new me.Vector2d(x, y);
        game.data.pause = false;
        // call the super constructor
        // (size does not matter here)
        this._super(me.Renderable, "init", [
            me.game.viewport.width + x,
            me.game.viewport.height + y,
            1100,
            1100
        ]);

        // create a font
        this.font = new me.BitmapFont(me.loader.getBinary('PressStart2P'), me.loader.getImage('PressStart2P'), 1.0, "right", "bottom");

        timer = new TimerObject(0.5 * 60 * 1000, true, 10, 10, "timer");
    },

    /**
     * update function
     */
    update : function (/*dt*/) {
        this.pos.x = me.game.viewport.width + this.relative.x;
        this.pos.y = me.game.viewport.height + this.relative.y;

        // we don't draw anything fancy here, so just
        // return true if the score has been updated
        if(!game.data.pause){
            timer.update();
        }

        return true;
    },

    /**
     * draw the score
     */
    draw : function (renderer) {
        this.font.draw (renderer, game.data.time, this.pos.x, this.pos.y);
    }

});


var TimerObject = (function() {
  function TimerObject(time, countdown, x, y, name) {
    this.time = time;
    this.countdown = countdown;
    this.x = x;
    this.y = y;
    this.name = name;
    game.data.time = this.convert();
    this.start_time = me.timer.getTime();

  }

  TimerObject.prototype.convert = function() {
    var x = this.time / 1000;
    var seconds = x % 60;
    x /= 60;
    var minutes = x % 60;
    if(Math.floor(seconds) < 10){
        return Math.floor(minutes) + ":0" + Math.floor(seconds);
    }
    else{
        return Math.floor(minutes) + ":" + Math.floor(seconds);
    }
  }

  TimerObject.prototype.update = function() {
    if(this.countdown) {   
      //this.time -= 0.01*(me.timer.getTime() - this.start_time);
      for (i = 0; i < 300; i++) {
        this.time -= 0.05;
        } 
    }

    game.data.time=this.convert();
    if(game.data.time  == "0:00"){
        //me.state.pause();
        game.data.pause = true;
        var set_state = new Command("set", me.state.GAMEOVER, new game.EndScreenTimeUp());
        var change_state = new Command("change", me.state.GAMEOVER, null);
        
        set_state.execute();
        change_state.execute();
    }

  }

  return TimerObject;
})();


game.HUD.HPDisplay =me.GUI_Object.extend({
    /**
     * constructor
     */
    init: function(x, y) {
        this._super(me.GUI_Object, "init", [ x, y, {
            image: game.texture,
            region : "healthbar" // ON by default
        } ]);
        this.anchorPoint.set(0, 0);
        this.scale(0.7,  0.5);
        this.setOpacity(0.8);


    },

    update : function (/*dt*/) {

        if(game.data.health>=10){
            this.setRegion(game.texture.getRegion("healthbar"));
        }

        else if(game.data.health==9){
            this.setRegion(game.texture.getRegion("healthbar1"));
        }

        else if(game.data.health==8){
            this.setRegion(game.texture.getRegion("healthbar2"));
        }

        else if(game.data.health==7){
            this.setRegion(game.texture.getRegion("healthbar3"));
        }

        else if(game.data.health==6){
            this.setRegion(game.texture.getRegion("healthbar4"));
        }

        else if(game.data.health==5){
            this.setRegion(game.texture.getRegion("healthbar5"));
        }

        else if(game.data.health==4){
            this.setRegion(game.texture.getRegion("healthbar6"));
        }

        else if(game.data.health==3){
            this.setRegion(game.texture.getRegion("healthbar7"));
        }

        else if(game.data.health==2){
            this.setRegion(game.texture.getRegion("healthbar8"));
        }

        else if(game.data.health==1){
            this.setRegion(game.texture.getRegion("healthbar9"));
        }

        else if(game.data.health<=0){
            this.setRegion(game.texture.getRegion("healthbar10"));
        }

    }


});
