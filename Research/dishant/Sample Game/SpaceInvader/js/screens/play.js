game.PlayScreen = me.ScreenObject.extend({
    /**
     *  action to perform on state change
     */
    onResetEvent: function() {
        // reset the score
        me.game.world.addChild(new me.ColorLayer("background", "#000000"), 0);
        me.game.world.addChild(me.pool.pull("player"));
        me.game.world.addChild(me.pool.pull("enemy", 50, 50), 2);
    },

    /**
     *  action to perform when leaving this screen (state change)
     */
    onDestroyEvent: function() {
        // remove the HUD from the game world
        me.game.world.removeChild(this.HUD);
    }
});
