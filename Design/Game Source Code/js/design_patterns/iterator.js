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
