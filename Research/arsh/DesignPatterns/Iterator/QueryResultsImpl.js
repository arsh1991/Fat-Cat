/**
 * 
 */
var QueryResultsIteratorImpl = require('./QueryResultsIteratorImpl.js')
var QueryResults = require('./QueryResults.js')

module.exports=class QueryResultsImpl extends QueryResults {
	constructor(){
		super()
		this.results = []
	}
	fetchData(){

		this.results.push( "Item 1") 
		this.results.push( "Item 2") 
		this.results.push( "Item 3") 
		this.results.push( "Item 4") 
		this.results.push( "Item 5") 
		this.results.push( "Item 6") 
		this.results.push( "Item 7") 
		this.results.push( "Item 8") 
		this.results.push( "Item 9") 
		this.results.push( "Item 10") 

    }

	createIterator() {
		return new QueryResultsIteratorImpl( this.results )
	}


}