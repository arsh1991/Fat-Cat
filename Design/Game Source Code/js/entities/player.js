
game.PlayerEntity = me.Entity.extend({
    init: function(x, y, settings) {
        // call the constructor
        this._super(me.Entity, "init", [x, y , settings]);
       // this.speed={xvel:10, yvel:18};
        // player can exit the viewport (jumping, falling into a hole, etc.)
        this.alwaysUpdate = true;

        // walking & jumping speed
        this.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);
        this.body.setFriction(0.4,0);

        this.dying = false;

        this.mutipleJump = 1;

        // set the display around our position
        me.game.viewport.follow(this, me.game.viewport.AXIS.BOTH);

        // enable keyboard
        me.input.bindKey(me.input.KEY.LEFT,  "left");
        me.input.bindKey(me.input.KEY.RIGHT, "right");
        me.input.bindKey(me.input.KEY.X,     "jump", true);
        me.input.bindKey(me.input.KEY.UP,    "jump", true);
        me.input.bindKey(me.input.KEY.SPACE, "jump", true);
        me.input.bindKey(me.input.KEY.DOWN,  "down");

        me.input.bindKey(me.input.KEY.A,     "left");
        me.input.bindKey(me.input.KEY.D,     "right");
        me.input.bindKey(me.input.KEY.W,     "jump", true);
        me.input.bindKey(me.input.KEY.S,     "down");

        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_1}, me.input.KEY.UP);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_2}, me.input.KEY.UP);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.DOWN}, me.input.KEY.DOWN);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_3}, me.input.KEY.DOWN);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.FACE_4}, me.input.KEY.DOWN);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.LEFT}, me.input.KEY.LEFT);
        me.input.bindGamepad(0, {type: "buttons", code: me.input.GAMEPAD.BUTTONS.RIGHT}, me.input.KEY.RIGHT);

        // map axes
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: -0.5}, me.input.KEY.LEFT);
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: 0.5}, me.input.KEY.RIGHT);
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LY, threshold: -0.5}, me.input.KEY.UP);
        
        console.log(game.data.curranimation);

        if(game.data.curranimation=="run"){
            // set a renderable
            this.renderable = game.texture.createAnimationFromName([
                "Run (1)", "Run (2)", "Run (3)",
                "Run (4)", "Run (5)", "Run (6)",
                "Run (7)", "Run (8)"
                ]);

        
            // define a basic walking animatin
            this.renderable.addAnimation ("run",  [{ name: "Run (1)", delay: 100 }, 
                { name: "Run (2)", delay: 100 }, 
                { name: "Run (3)", delay: 100 },
                { name: "Run (4)", delay: 100 }, 
                { name: "Run (5)", delay: 100 },
                { name: "Run (6)", delay: 100 }, 
                { name: "Run (7)", delay: 100 },
                { name: "Run (8)", delay: 100 }]);

        }

        else if(game.data.curranimation=="walk1"){

             // set a renderable
            this.renderable = game.texture.createAnimationFromName([
                "Walk-1_2", "Walk-2_2",
                 "Walk-3_2", "Walk-4_2"
                ]);

            // define a basic walking animatin
            this.renderable.addAnimation ("walk1",  [
                { name: "Walk-1_2", delay: 100 }, 
                { name: "Walk-2_2", delay: 100 }, 
                { name: "Walk-3_2", delay: 100 }, 
                { name: "Walk-4_2", delay: 100 }]);
            
        }

        else if(game.data.curranimation=="walk2"){

             // set a renderable
            this.renderable = game.texture.createAnimationFromName([
                "Walk-1_3", "Walk-2_3",
                 "Walk-3_3", "Walk-4_3"
                ]);

            // define a basic walking animatin
            this.renderable.addAnimation ("walk2",  [
                { name: "Walk-1_3", delay: 100 }, 
                { name: "Walk-2_3", delay: 100 }, 
                { name: "Walk-3_3", delay: 100 }, 
                { name: "Walk-4_3", delay: 100 }]);
            // set as default
            
        }

        else if(game.data.curranimation=="walk3"){
                // set a renderable
            this.renderable = game.texture.createAnimationFromName([
                "Walk-1_4", "Walk-2_4",
                 "Walk-3_4", "Walk-4_4"
                ]);

            // define a basic walking animatin
            this.renderable.addAnimation ("walk3",  [
                { name: "Walk-1_4", delay: 100 }, 
                { name: "Walk-2_4", delay: 100 }, 
                { name: "Walk-3_4", delay: 100 }, 
                { name: "Walk-4_4", delay: 100 }]);
            // set as default
         

        }

        // set as default
        this.renderable.setCurrentAnimation(game.data.curranimation);
        

        // set the renderable position to bottom center
        this.anchorPoint.set(0.5, 1.0);
    },

    /* -----

        update the player pos

        ------            */
        update : function (dt) {

            if (me.input.isKeyPressed("left"))    {
                this.body.vel.x -= this.body.accel.x * me.timer.tick;
                this.renderable.flipX(true);
            } else if (me.input.isKeyPressed("right")) {
                this.body.vel.x += this.body.accel.x * me.timer.tick;
                this.renderable.flipX(false);
            }

            if (me.input.isKeyPressed("jump")) {
                this.body.jumping = true;

                if (this.multipleJump <= 2) {
                // easy "math" for double jump
                this.body.vel.y -= (this.body.maxVel.y * this.multipleJump++) * me.timer.tick;
                me.audio.play("jump", false);
            }
        }
        else if (!this.body.falling && !this.body.jumping) {
            // reset the multipleJump flag if on the ground
            this.multipleJump = 1;
        }
        else if (this.body.falling && this.multipleJump < 2) {
            // reset the multipleJump flag if falling
            this.multipleJump = 2;
        }

        // apply physics to the body (this moves the entity)
        this.body.update(dt);

        // check if we fell into a hole
        if (!this.inViewport && (this.pos.y > me.video.renderer.getHeight())) {
            // if yes reset the game
            me.game.world.removeChild(this);
            me.game.viewport.fadeIn("#fff", 0, function(){
                me.audio.play("die", false);


                //<aditi>    
                // me.levelDirector.reloadLevel();
                // me.state.pause(); //aditi - prevents game from restarting.

                //     window.location.href = 'end-game.html';
               
                //                      healthLevel = 1;
                // if(game.data.time > "0:00"){
                //         var a = game.data.time.split(':'); // split it at the colons

                // // minutes are worth 60 seconds. Hours are worth 60 minutes.
                //     var seconds = (+a[0]) * 60 * 60 + (+a[1]);
                //     game.data.score = (game.data.score * 1000 * healthLevel)/(300 - seconds);

                // }
                // else{ //if 0 seconds were left
                //       game.data.score = (game.data.score * 1000 * healthLevel)/(300);

                // }
                //      game.data.score = Math.round(game.data.score);
                //     document.write("You completed the game in " + game.data.time + " seconds. \n");
                //     document.write("Your score is " + game.data.score + " points. \n");
                //     document.write("<a href='end-game.html'>Continue</a>");
        
                var set_state = new Command("set", me.state.GAMEOVER, new game.EndScreenDead());
                var change_state = new Command("change", me.state.GAMEOVER, function(){});
                set_state.execute();
                change_state.execute();
                //</aditi>
                

                // me.game.viewport.fadeOut("#fff", 150);
            });
            return true;
        }

        // handle collisions against other shapes
        me.collision.check(this);

        // check if we moved (an "idle" animation would definitely be cleaner)
        if (this.body.vel.x !== 0 || this.body.vel.y !== 0 ||
            (this.renderable && this.renderable.isFlickering())
            ) {
            this._super(me.Entity, "update", [dt]);
        return true;
    }

    return false;
},


    /**
     * colision handler
     */
     onCollision : function (response, other) {
        switch (other.body.collisionType) {
            case me.collision.types.WORLD_SHAPE:
                // Simulate a platform object
                if (other.type === "platform") {
                    if (this.body.falling &&
                        !me.input.isKeyPressed("down") &&
                        // Shortest overlap would move the player upward
                        (response.overlapV.y > 0) &&
                        // The velocity is reasonably fast enough to have penetrated to the overlap depth
                        (~~this.body.vel.y >= ~~response.overlapV.y)
                        ) {
                        // Disable collision on the x axis
                    response.overlapV.x = 0;
                        // Repond to the platform (it is solid)
                        return true;
                    }
                    // Do not respond to the platform (pass through)
                    return false;
                }

                // Custom collision response for slopes
                else if (other.type === "slope") {
                    // Always adjust the collision response upward
                    response.overlapV.y = Math.abs(response.overlap);
                    response.overlapV.x = 0;

                    // Respond to the slope (it is solid)
                    return true;
                }
                break;

                case me.collision.types.ENEMY_OBJECT:

                if( game.data.health >0 )
                    game.data.health -= 1;
        
                console.log("enemy",game.data.health);
                if (!other.isMovingEnemy) {

                    // spike or any other fixed danger
                    this.body.vel.y -= this.body.maxVel.y * me.timer.tick;
                    this.hurt();
                }
                else {

                if(game.data.speed.xvel>0){
                     game.data.speed.xvel-=0.5;
                     game.data.speed.yvel-=1;
                }

                this.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);
                
                     if(game.data.health>8){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Run (1)", "Run (2)", "Run (3)",
                            "Run (4)", "Run (5)", "Run (6)",
                            "Run (7)", "Run (8)"
                            ]);

                    
                        // define a basic walking animatin
                        this.renderable.addAnimation ("run",  [{ name: "Run (1)", delay: 100 }, 
                            { name: "Run (2)", delay: 100 }, 
                            { name: "Run (3)", delay: 100 },
                            { name: "Run (4)", delay: 100 }, 
                            { name: "Run (5)", delay: 100 },
                            { name: "Run (6)", delay: 100 }, 
                            { name: "Run (7)", delay: 100 },
                            { name: "Run (8)", delay: 100 }]);

                                   
                        game.data.curranimation = "run";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                        
                    }     
                   else if(game.data.health<=8 && game.data.health>5){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Walk-1_2", "Walk-2_2",
                             "Walk-3_2", "Walk-4_2"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("walk1",  [
                            { name: "Walk-1_2", delay: 100 }, 
                            { name: "Walk-2_2", delay: 100 }, 
                            { name: "Walk-3_2", delay: 100 }, 
                            { name: "Walk-4_2", delay: 100 }]);
                        // set as default

                        game.data.curranimation = "walk1";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }

                    else  if(game.data.health<=5 && game.data.health>3){
                        // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Walk-1_3", "Walk-2_3",
                             "Walk-3_3", "Walk-4_3"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("walk2",  [
                            { name: "Walk-1_3", delay: 100 }, 
                            { name: "Walk-2_3", delay: 100 }, 
                            { name: "Walk-3_3", delay: 100 }, 
                            { name: "Walk-4_3", delay: 100 }]);
                        // set as default
                        
                        game.data.curranimation = "walk2";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }
                    

                    else  if(game.data.health<=3 && game.data.health>0){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Walk-1_4", "Walk-2_4",
                             "Walk-3_4", "Walk-4_4"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("walk3",  [
                            { name: "Walk-1_4", delay: 100 }, 
                            { name: "Walk-2_4", delay: 100 }, 
                            { name: "Walk-3_4", delay: 100 }, 
                            { name: "Walk-4_4", delay: 100 }]);
                        // set as default
                        
                        game.data.curranimation = "walk3";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }
                    

                    else  if(game.data.health==0){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Dead (1)", "Dead (3)",
                             "Dead (6)", "Dead (8)", "Dead (10)"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("dead",  [
                            { name: "Dead (1)", delay: 100 }, 
                            { name: "Dead (3)", delay: 100 },
                            { name: "Dead (6)", delay: 100 },
                            { name: "Dead (8)", delay: 100 },
                            { name: "Dead (10)", delay: 100 }  ]);
                        // set as default
                        
                        game.data.curranimation = "dead";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }
                }
                break;

                case me.collision.types.COLLECTABLE_OBJECT:

        if( game.data.health <10 )
            game.data.health += 1;
                console.log("coinnnn",game.data.health);
                if(game.data.speed.xvel<8 && game.data.speed.yvel<15){
                    game.data.speed.xvel+=1;
                    game.data.speed.yvel+=2;
                }

                this.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);

                    if(game.data.health>8){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Run (1)", "Run (2)", "Run (3)",
                            "Run (4)", "Run (5)", "Run (6)",
                            "Run (7)", "Run (8)"
                            ]);

                    
                        // define a basic walking animatin
                        this.renderable.addAnimation ("run",  [{ name: "Run (1)", delay: 100 }, 
                            { name: "Run (2)", delay: 100 }, 
                            { name: "Run (3)", delay: 100 },
                            { name: "Run (4)", delay: 100 }, 
                            { name: "Run (5)", delay: 100 },
                            { name: "Run (6)", delay: 100 }, 
                            { name: "Run (7)", delay: 100 },
                            { name: "Run (8)", delay: 100 }]);

                                   
                        game.data.curranimation = "run";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                        
                    }


                    else if(game.data.health<=8 && game.data.health>5){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Walk-1_2", "Walk-2_2",
                             "Walk-3_2", "Walk-4_2"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("walk1",  [
                            { name: "Walk-1_2", delay: 100 }, 
                            { name: "Walk-2_2", delay: 100 }, 
                            { name: "Walk-3_2", delay: 100 }, 
                            { name: "Walk-4_2", delay: 100 }]);
                        // set as default
                        
                        game.data.curranimation = "walk1";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }

                    else  if(game.data.health<=5 && game.data.health>3){
                        // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Walk-1_3", "Walk-2_3",
                             "Walk-3_3", "Walk-4_3"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("walk2",  [
                            { name: "Walk-1_3", delay: 100 }, 
                            { name: "Walk-2_3", delay: 100 }, 
                            { name: "Walk-3_3", delay: 100 }, 
                            { name: "Walk-4_3", delay: 100 }]);
                        // set as default
                        
                        game.data.curranimation = "walk2";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }
                    

                    else  if(game.data.health<=3 && game.data.health>0){

                                     // set a renderable
                        this.renderable = game.texture.createAnimationFromName([
                            "Walk-1_4", "Walk-2_4",
                             "Walk-3_4", "Walk-4_4"
                            ]);

                        // define a basic walking animatin
                        this.renderable.addAnimation ("walk3",  [
                            { name: "Walk-1_4", delay: 100 }, 
                            { name: "Walk-2_4", delay: 100 }, 
                            { name: "Walk-3_4", delay: 100 }, 
                            { name: "Walk-4_4", delay: 100 }]);
                        // set as default
                        
                        game.data.curranimation = "walk3";
                        this.renderable.setCurrentAnimation(game.data.curranimation);
                    }
                    
                break;

                default:
                // Do not respond to other objects (e.g. coins)
                return false;
            }

        // Make the object solid
        return true;
    },


    /**
     * ouch
     */
     hurt : function () {
        if (!this.renderable.isFlickering())
        {
            this.renderable.flicker(750);
            // flash the screen
            me.game.viewport.fadeIn("#FFFFFF", 75);
            me.audio.play("die", false);
        }
    }
});
