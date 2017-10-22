/**
 * 
 */
var QueryResultsImpl = require('./QueryResultsImpl.js')
var QueryResults = require('./QueryResults.js')

module.exports = class Query {
	
	constructor(){
		
	}
	executeQuery(query) {
		console.log( "Executing Query: " + query )
		var resultSet = new QueryResultsImpl() 
		resultSet.fetchData()
		return resultSet 

	}

}