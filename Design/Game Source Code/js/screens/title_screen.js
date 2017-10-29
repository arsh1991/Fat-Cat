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
   me.game.world.addChild(new me.ColorLayer("background", "rgba(210, 104, 40, 255)"), 0);
   
   this.SelectPlayerButton = new game.UI.ButtonUI(500, 175, "green", "Select Player");
   this.PlayButton = new game.UI.ButtonUI(500, 250,"blue","Play Game");
   me.game.world.addChild(this.SelectPlayerButton);
   me.game.world.addChild(this.PlayButton);
   

    // change to play state on press Enter or click/tap
    me.input.bindKey(me.input.KEY.ENTER, "enter", true);
    me.input.bindPointer(me.input.pointer.LEFT, me.input.KEY.ENTER);
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