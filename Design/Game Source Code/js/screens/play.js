game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // load a level
        me.levelDirector.loadLevel("map2");

        // reset the score
        game.data.score = 0;

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
        me.game.world.removeChild(this.HUD);
        var change_state = new Command("change", me.state.GAMEOVER, null);
        change_state.execute();

        // stop some music
        me.audio.stopTrack("dst-gameforest");
    }
});
