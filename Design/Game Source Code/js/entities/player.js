game.PlayerEntity = me.Entity.extend({
    
init: function(x, y, settings) {

        // call the constructor
        this._super(me.Entity, "init", [x, y , settings]);
       	
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
        
        // map axes
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: -0.5}, me.input.KEY.LEFT);
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LX, threshold: 0.5}, me.input.KEY.RIGHT);
        me.input.bindGamepad(0, {type:"axes", code: me.input.GAMEPAD.AXES.LY, threshold: -0.5}, me.input.KEY.UP);
	
	   this.stoutState= new StoutState(this);
	   this.plumpState= new PlumpState(this);
	   this.chubbyState= new ChubbyState(this);
	   this.obeseState= new ObeseState(this);


       this.renderable = game.texture.createAnimationFromName([
                "Walk-1_4", "Walk-2_4",
                "Walk-3_4", "Walk-4_4",
                "Walk-1_3", "Walk-2_3",
                "Walk-3_3", "Walk-4_3",
                "Walk-1_2", "Walk-2_2",
                "Walk-3_2", "Walk-4_2",
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

        this.renderable.addAnimation ("walk1",  [
        { name: "Walk-1_2", delay: 100 }, 
        { name: "Walk-2_2", delay: 100 }, 
        { name: "Walk-3_2", delay: 100 }, 
        { name: "Walk-4_2", delay: 100 }]);


        this.renderable.addAnimation ("walk2",  [
        { name: "Walk-1_3", delay: 100 }, 
        { name: "Walk-2_3", delay: 100 }, 
        { name: "Walk-3_3", delay: 100 }, 
        { name: "Walk-4_3", delay: 100 }]);


        this.renderable.addAnimation ("walk3",  [
                            { name: "Walk-1_4", delay: 100 }, 
                            { name: "Walk-2_4", delay: 100 }, 
                            { name: "Walk-3_4", delay: 100 }, 
                            { name: "Walk-4_4", delay: 100 }]);

        if(game.data.curranimation=="run"){
            this.currentState= this.stoutState;            
        }

        else if(game.data.curranimation=="walk1"){
	    this.currentState= this.chubbyState;
        }

        else if(game.data.curranimation=="walk2"){
	    this.currentState= this.plumpState;
	    
        }

        else if(game.data.curranimation=="walk3"){
	    this.currentState= this.obeseState;
	    
        }

        // set as default
        this.renderable.setCurrentAnimation(game.data.curranimation);
        

        // set the renderable position to bottom center
        this.anchorPoint.set(0.5, 1.0);
    

},

 
changeState : function (state) {
        this.currentState = state;
        game.data.curranimation = state.animation;
        this.renderable.setCurrentAnimation(state.animation);
},

update : function (dt) {

	if (me.input.isKeyPressed("left")){                
		this.body.vel.x -= this.body.accel.x * me.timer.tick;
                this.renderable.flipX(true);
        } 
	
	else if (me.input.isKeyPressed("right")) {
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
           // me.game.viewport.fadeIn("#fff", 0, function(){
                me.audio.play("die", false);
        
                var set_state = new Command("set", me.state.GAMEOVER, new game.EndScreenDead());
                var change_state = new Command("change", me.state.GAMEOVER, function(){});
                set_state.execute();
                change_state.execute();
                //</aditi>
                

                // me.game.viewport.fadeOut("#fff", 150);
           // });
            return true;
        }

        // handle collisions against other shapes
        me.collision.check(this);

        // check if we moved (an "idle" animation would definitely be cleaner)
        if (this.body.vel.x !== 0 || this.body.vel.y !== 0 || (this.renderable && this.renderable.isFlickering())) {
        	this._super(me.Entity, "update", [dt]);
        	return true;
    	}

    	return false;
},


hurt : function () {
        if (!this.renderable.isFlickering())
        {
            this.renderable.flicker(750);
            // flash the screen
            me.game.viewport.fadeIn("#FFFFFF", 75);
            me.audio.play("die", false);
        }
},




onCollision : function (response, other) {
	
	if(other.body.collisionType == me.collision.types.WORLD_SHAPE){
		        
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
	}

	else{
		this.currentState.onCollision(response, other);
	
	}


}


});






var StoutState = function (player) {
	this.player = player;
	this.animation="run";
	

	this.onCollision =function (response, other) {
	
		switch (other.body.collisionType) 
        {
		        case me.collision.types.ENEMY_OBJECT:

		             if( game.data.health >0 )
		                  game.data.health -= 1;
			
			         if (!other.isMovingEnemy) {
    		            // spike or any other fixed danger
    		            this.player.body.vel.y -= this.player.body.maxVel.y * me.timer.tick;
    		            this.player.hurt();
    		          }
		              else {

            		        if(game.data.speed.xvel>0){
            		             game.data.speed.xvel-=0.5;
            		             game.data.speed.yvel-=1;
            		        }
                        }    
		              
                      this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);
		        
		                
    		        if(game.data.health<=8){
    				    this.player.changeState(this.player.chubbyState)
    		            
                    }
		        
			     break;

		        case me.collision.types.COLLECTABLE_OBJECT:

			        if( game.data.health <10 )
		    		    game.data.health += 1;
                    
                    if(game.data.speed.xvel<8 && game.data.speed.yvel<15){
		              game.data.speed.xvel+=1;
		              game.data.speed.yvel+=2;
		            }

		            this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);		            		            
		          break;

		        default:
		        // Do not respond to other objects (e.g. coins)
		        return false;
		}

		// Make the object solid
		return true;
	
    }	
};
 
var ChubbyState = function (player) {
	this.player = player;
	this.animation="walk1";

     	// set a renderable
    // this.player.renderable = game.texture.createAnimationFromName([
    // "Walk-1_2", "Walk-2_2",
    // "Walk-3_2", "Walk-4_2"
    // ]);

            // define a basic walking animatin
    // this.player.renderable.addAnimation ("walk1",  [
    // { name: "Walk-1_2", delay: 100 }, 
    // { name: "Walk-2_2", delay: 100 }, 
    // { name: "Walk-3_2", delay: 100 }, 
    // { name: "Walk-4_2", delay: 100 }]);

	this.onCollision= function (response, other) {
	
		switch (other.body.collisionType) 
        {
		        
            case me.collision.types.ENEMY_OBJECT:

		        if( game.data.health >0 )
		            game.data.health -= 1;
			
			     if (!other.isMovingEnemy) {
		            // spike or any other fixed danger
		            this.player.body.vel.y -= this.player.body.maxVel.y * me.timer.tick;
		            this.player.hurt();
		        }
		        else {

    		        if(game.data.speed.xvel>0){
    		             game.data.speed.xvel-=0.5;
    		             game.data.speed.yvel-=1;
    		        }

    		        this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);
    		        
    		                
    		        if(game.data.health<=5){
    				    this.player.changeState(this.player.plumpState);
    		        }
		        }

			break;

		    case me.collision.types.COLLECTABLE_OBJECT:

			    if( game.data.health <10 )
		    		game.data.health += 1;
		        
                if(game.data.speed.xvel<8 && game.data.speed.yvel<15){
		            game.data.speed.xvel+=1;
		            game.data.speed.yvel+=2;
		        }
			
            this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);			
			
			if(game.data.health>7)
			{
				this.player.changeState(this.player.stoutState);
			
			}

			break;

		    default:
		    // Do not respond to other objects (e.g. coins)
		    return false;
	   }

		// Make the object solid
		return true;
	
    }	
};

var PlumpState = function (player) {
	this.player = player;
	this.animation="walk2";

     	// set a renderable
            // set a renderable
    // this.player.renderable = game.texture.createAnimationFromName([
    //       "Walk-1_3", "Walk-2_3",
    //       "Walk-3_3", "Walk-4_3"
    // ]);

    //                     // define a basic walking animatin
    // this.player.renderable.addAnimation ("walk2",  [
    // { name: "Walk-1_3", delay: 100 }, 
    // { name: "Walk-2_3", delay: 100 }, 
    // { name: "Walk-3_3", delay: 100 }, 
    // { name: "Walk-4_3", delay: 100 }]);

	this.onCollision=function (response, other) {
	
		switch (other.body.collisionType) 
        {
		        
            case me.collision.types.ENEMY_OBJECT:

		        if( game.data.health >0 )
		            game.data.health -= 1;
			
			    if (!other.isMovingEnemy) {
		            // spike or any other fixed danger
		            this.player.body.vel.y -= this.player.body.maxVel.y * me.timer.tick;
		            this.player.hurt();
		        }
		        
                else {

    		        if(game.data.speed.xvel>0){
    		             game.data.speed.xvel-=0.5;
    		             game.data.speed.yvel-=1;
    		        }

    		        this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);
    		        
    		                
    		        if(game.data.health<=3){
    				    this.player.changeState(this.player.obeseState);
    		        }
    		    }    
			break;

		    case me.collision.types.COLLECTABLE_OBJECT:

			    if( game.data.health <10 )
		    		game.data.health += 1;
		        
                if(game.data.speed.xvel<8 && game.data.speed.yvel<15){
		            game.data.speed.xvel+=1;
		            game.data.speed.yvel+=2;
		        }
			
                this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);			
			
			    if(game.data.health>4)
			    {
				    this.player.changeState(this.player.chubbyState);
			
			    }

			break;

		    default:
		        // Do not respond to other objects (e.g. coins)
		        return false;
		}

		   // Make the object solid
		   return true;
    }
    	
};


var ObeseState = function (player) {
	this.player = player;
	this.animation="walk3";

     	// set a renderable
    // this.player.renderable = game.texture.createAnimationFromName([
    //                         "Walk-1_4", "Walk-2_4",
    //                          "Walk-3_4", "Walk-4_4"
    //                         ]);

    //                     // define a basic walking animatin
    // this.player.renderable.addAnimation ("walk3",  [
    //                         { name: "Walk-1_4", delay: 100 }, 
    //                         { name: "Walk-2_4", delay: 100 }, 
    //                         { name: "Walk-3_4", delay: 100 }, 
    //                         { name: "Walk-4_4", delay: 100 }]);

	this.onCollision = function (response, other) {
	
		switch (other.body.collisionType) {
		  
            case me.collision.types.ENEMY_OBJECT:

		        if( game.data.health >0 )
		            game.data.health -= 1;
			
			    if (!other.isMovingEnemy) {
		            // spike or any other fixed danger
		            this.player.body.vel.y -= this.player.body.maxVel.y * me.timer.tick;
		            this.player.hurt();
		        }
		        
                else {

    		          if(game.data.speed.xvel>0){
    		             game.data.speed.xvel-=0.5;
    		             game.data.speed.yvel-=1;
    		        }
                }

		        this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);
		        
			break;

		    case me.collision.types.COLLECTABLE_OBJECT:

			    if( game.data.health <10 )
		    		game.data.health += 1;
		        if(game.data.speed.xvel<8 && game.data.speed.yvel<15){
		            game.data.speed.xvel+=1;
		            game.data.speed.yvel+=2;
		        }
			 
                this.player.body.setVelocity(game.data.speed.xvel, game.data.speed.yvel);			
			
    			if(game.data.health>2)
    			{
    				this.player.changeState(this.player.PlumpState);
    			
    			}

			break;

		    default:
		        // Do not respond to other objects (e.g. coins)
		    return false;
		}

		// Make the object solid
	   return true;
	}
    	
};

