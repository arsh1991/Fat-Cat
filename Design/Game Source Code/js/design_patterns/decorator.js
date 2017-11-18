var Score = function() {
    
}

Score.prototype = {
   
    collisionWithHealthyObj: function() {
        return game.data.score + 100;
    },
    collisionWithUnhealthyObj: function() {
        if(game.data.score-100<0)
            return 0;
        return game.data.score - 100;
    },
    gameEnd: function() {
        return game.data.score;
    }
}


var ScoreDecorator = function(score){
    this.score = score;

}

ScoreDecorator.prototype = {
    
    collisionWithHealthyObj: function() {
        return  this.score.collisionWithHealthyObj();
    },
    collisionWithUnhealthyObj: function() {
        return this.score.collisionWithUnhealthyObj();
    },
    gameEnd: function() {
        return this.score.gameEnd();
    }
}

var HealthDecorator = function(score) {
    ScoreDecorator.call(this, score);
    
}


HealthDecorator.prototype = new ScoreDecorator();
HealthDecorator.prototype.collisionWithHealthyObj = function() {
    game.data.score =  this.score.collisionWithHealthyObj()+(game.data.health*10);
    
}

HealthDecorator.prototype.collisionWithUnhealthyObj = function() {
    if(this.score.collisionWithUnhealthyObj()-(game.data.health*10)<0)
        game.data.score=0;
    else
    game.data.score =  this.score.collisionWithUnhealthyObj()-(game.data.health*10);
    
}


var TimeDecorator = function(score) {
    ScoreDecorator.call(this, score);
    
}


TimeDecorator.prototype = new ScoreDecorator();
TimeDecorator.prototype.gameEnd = function() {

    
    var a = game.data.time.split(':'); // split it at the colons

    // minutes are worth 60 seconds. Hours are worth 60 minutes.
    var seconds = (+a[0]) * 60 * 60 + (+a[1]);
    game.data.score = (game.data.score * 100)/(60 - seconds);

    
}
