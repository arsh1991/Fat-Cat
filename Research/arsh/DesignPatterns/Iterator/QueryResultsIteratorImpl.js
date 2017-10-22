/**
 * 
 */
var QueryResultsIterator = require('./QueryResultsIterator.js')

module.exports=class QueryResultsIteratorImpl extends QueryResultsIterator {

     constructor(r)
    {
    	super()
        this.results = r 
        this.cursor = 0 
        this.max = r.length 

    }
     
    first() {
		return this.results[0] 
	}
    isDone() {
		return (this.cursor == this.max) 
	}
	next() {
        this.cursor++ 
        if ( !(this.isDone()) )
		    return this.results[this.cursor] 

        else
            return "<end>" 

	}

	currentItem() {
		return this.results[this.cursor ]
	}


}