game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // load a level
        console.log("load");
        me.levelDirector.loadLevel("map2");

        // reset the score
        game.data= {
        score : 0,
        time : '',
        health: 10,
        speed:{xvel:8, yvel:15},
        curranimation: 'run',
        print : []
        }

        // add our HUD to the game world
        this.HUD = new game.HUD.Container();
        me.game.world.addChild(this.HUD);

        // play some music
        me.audio.playTrack("dst-gameforest");
    },

    /**
     *  action to perform on state change
     * change the state after on Completion of an Event
     */
    onDestroyEvent: function() {

        // remove the HUD from the game world
        // me.game.world.removeChild(this.HUD);

        // stop some music
        me.audio.stopTrack("dst-gameforest");
    }
});
