game.TitleScreen = me.ScreenObject.extend({
  /**
   * action to perform on state change
   */
  onResetEvent : function () {
    // title screen
    //var backgroundImage = new me.Sprite(0, 0, {
          //  image: me.loader.getImage('title_screen'),
       // }
    //);

    // position and scale to fit with the viewport size
    //backgroundImage.anchorPoint.set(0, 0);
   // backgroundImage.scale(me.game.viewport.width / backgroundImage.width, me.game.viewport.height / backgroundImage.height);
   // clear the background
   //me.game.world.addChild(new me.ColorLayer("background", "rgba(135, 206, 235, 255)"), 0);
   var sprite = new me.ImageLayer(0, 0, {
    image : "background",
    framewidth : 64,
    frameheight : 64,
    anchorPoint : new me.Vector2d(0.5, 0.5)
});
   me.game.world.addChild(sprite);
   this.SelectPlayerButton = new game.UI.ButtonUI(500, 175, "green", "Select Player");
   this.PlayButton = new game.UI.ButtonUI(500, 250,"blue","Play Game");
   me.game.world.addChild(this.SelectPlayerButton);
   me.game.world.addChild(this.PlayButton);
   

    // change to play state on press Enter or click/tap
    // me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    // me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
    this.handler = me.event.subscribe(me.event.KEYDOWN, function (action, keyCode, edge) {
      if (action === "enter") {
        // play something on tap / enter
        // this will unlock audio on mobile devices
        me.audio.play("cling");
        me.state.change(me.state.PLAY);
      }
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
