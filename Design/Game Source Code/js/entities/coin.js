game.HealthyEntity = me.CollectableEntity.extend({
    /**
     * constructor
     */
    init: function (x, y, settings) {

        // call the super constructor
        this._super(me.CollectableEntity, "init", [x, y , settings]);

        // add the coin sprite as renderable
        this.body.collisionType = me.collision.types.COLLECTABLE_OBJECT;

    },

    /**
     * collision handling
     */
    onCollision : function (/*response*/) {

        // do something when collide
        me.audio.play("cling", false);
        // give some score
      //  game.data.score += 250;
        
        //avoid further collision and delete it
        this.body.setCollisionMask(me.collision.types.NO_OBJECT);

        me.game.world.removeChild(this);

        return false;
    }
});


game.CoinEntity = game.HealthyEntity.extend({
    /**
     * constructor
     */
    init: function (x, y, settings) {

        this._super(game.HealthyEntity, "init", [x, y, settings]);
        // add the coin sprite as renderable
        this.renderable = game.texture.createSpriteFromName("apple");
        // set the renderable position to center
        this.anchorPoint.set(0.5, 0.5);
    },

    
});

game.ChickenEntity = game.HealthyEntity.extend({
    /**
     * constructor
     */
    init: function (x, y, settings) {
        this._super(game.HealthyEntity, "init", [x, y, settings]);
        // add the coin sprite as renderable
        this.renderable = game.texture.createSpriteFromName("fly_normal");
        // set the renderable position to center
        this.anchorPoint.set(0.5, 0.5);
    },

    
});





game.EndEntity = me.Entity.extend({
    /**
     * constructor
     */
    init: function (x, y, settings) {

        // call the super constructor
        this._super(me.CollectableEntity, "init", [x, y , settings]);

    },

    /**
     * collision handling
     */
    onCollision : function (/*response*/) {

        // do something when collide
        me.audio.play("cling", false);
        var set_state = new Command("set", me.state.GAMEOVER, new game.EndScreenWinning());
        var change_state = new Command("change", me.state.GAMEOVER, null);
        
        set_state.execute();
        change_state.execute();
        return false;
    }
});


