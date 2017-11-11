/**
 * UI Objects
 */

game.UI = game.UI || {};

/**
 * a basic button control
 */
game.UI.ButtonUI = me.GUI_Object.extend({
    /**
     * constructor
     */
    init: function(x, y, color, label) {
        this._super(me.GUI_Object, "init", [ x, y, {
            image: game.texture,
            region : color + "_button04"
        } ]);
        this.buttons = ["Play Game","Select Player","Restart Game :D","See Leaderboard!"];  //Array of Buttons we have on Starting Page
        // offset of the two used images in the texture
        this.unclicked_region = game.texture.getRegion(color + "_button04");
        this.clicked_region = game.texture.getRegion(color + "_button05");

        this.anchorPoint.set(0, 0);
        this.setOpacity(0.5);

        this.font = new me.Font("arial rounded mt bold", 14, "black");
        this.font.textAlign = "center";
        this.font.textBaseline = "middle";

        this.label = label;

        // only the parent container is a floating object
        this.floating = false;
    },

    /**
     * function called when the object is clicked on
     */
    onClick : function (e) {

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
        this.setRegion(this.clicked_region);
        // account for the different sprite size
        this.pos.y += this.height - this.clicked_region.height ;
        this.height = this.clicked_region.height;
        buttonClicked = this.buttons.indexOf(this.label);
        console.log("Button clicked: " + buttonClicked);
        if(buttonClicked==0){
             me.audio.play("cling");
             console.log("Play is clicked");
             var change_state = new Command("change", me.state.PLAY, null);
             change_state.execute();
             //me.state.change(me.state.PLAY);

        }else if(buttonClicked==2){
            me.audio.play("cling");
            console.log("Restart is clicked");
            var change_state = new Command("change", me.state.PLAY, null);
            change_state.execute();
        }
        else if(buttonClicked==3){
            me.audio.play("cling");
            console.log("Leaderboard is clicked");
                        var iter = new Iterator(print);  

            alert("LEADERBOARD: \n I. " + iter.first() + "\nII. " + iter.next() + "\nIII. " + iter.next() + " \n");

    // for (var item = iter.first(); iter.hasNext(); item = iter.next()) {
    //   alert(item + " \n");
    // }
        }
        // don't propagate the event
        return false;
    },

    /**
     * function called when the pointer button is released
     */
    onRelease : function (/* event */) {
        this.setRegion(this.unclicked_region);
        // account for the different sprite size
        this.pos.y -= this.unclicked_region.height - this.height;
        this.height = this.unclicked_region.height;
        // don't propagate the event
        return false;
    },

    draw: function(renderer) {
        this._super(me.GUI_Object, "draw", [ renderer ]);
        this.font.draw(renderer,
            this.label,
            this.pos.x + this.width / 2,
            this.pos.y + this.height / 2
        );
    }
});

/**
 * a basic checkbox control
 */
game.UI.CheckBoxUI = me.GUI_Object.extend({
    /**
     * constructor
     */
    init: function(x, y, texture, on_icon, off_icon, on_label, off_label) {

        // call the parent constructor
        this._super(me.GUI_Object, "init", [ x, y, {
            image: texture,
            region : on_icon // default
        } ]);

        // offset of the two used images in the texture
        this.on_icon_region = texture.getRegion(on_icon);
        this.off_icon_region = texture.getRegion(off_icon);

        this.anchorPoint.set(0, 0);
        this.setOpacity(0.5);

        this.isSelected = true;

        this.label_on = on_label;
        this.label_off = off_label;

        this.font = new me.Font("kenpixel", 12, "black");
        this.font.textAlign = "left";
        this.font.textBaseline = "middle";

        // only the parent container is a floating object
        this.floating = false;
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
     * change the checkbox state
     */
    setSelected : function (selected) {
        if (selected) {
            this.setRegion(this.on_icon_region);
            this.isSelected = true;
        } else {
            this.setRegion(this.off_icon_region);
            this.isSelected = false;
        }
    },

    /**
     * function called when the object is clicked on
     */
    onClick : function (/* event */) {
        this.setSelected(!this.isSelected);
        // don't propagate the event
        return false;
    },

    draw: function(renderer) {
        this._super(me.GUI_Object, "draw", [ renderer ]);

        // save global alpha
        var alpha = renderer.globalAlpha();
        // sprite alpha value
        renderer.setGlobalAlpha(alpha * this.getOpacity());

        this.font.draw(renderer,
            " " + (this.isSelected ? this.label_on : this.label_off),
            this.pos.x + this.width,
            this.pos.y + this.height / 2
        );

        // restore global alpha
        renderer.setGlobalAlpha(alpha);
    }
});
