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
    }
}

var HealthDecorator = function(score) {
    ScoreDecorator.call(this, score);
    
}
HealthDecorator.prototype = new ScoreDecorator();
HealthDecorator.prototype.collisionWithHealthyObj = function() {
    game.data.score =  this.score.collisionWithHealthyObj()+game.data.health;
    
}

HealthDecorator.prototype.collisionWithUnhealthyObj = function() {
    if(this.score.collisionWithUnhealthyObj()-(game.data.health<0)
        game.data.score=0;
    else
    game.data.score =  this.score.collisionWithUnhealthyObj()-game.data.health;
    
}