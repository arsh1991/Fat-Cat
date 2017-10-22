/**
 * 
 */
var Query = require('./Query.js')

module.exports= class QueryTool {
   
	constructor(){	
	}
    
	runTest(){
		var q = new Query() 
		var resultSet = q.executeQuery("select * from test")
	    var iter =  resultSet.createIterator() 
	    while ( !iter.isDone()  )
	    {
		    	console.log( iter.currentItem() )
		    	iter.next()

	    }	

    }

 
}