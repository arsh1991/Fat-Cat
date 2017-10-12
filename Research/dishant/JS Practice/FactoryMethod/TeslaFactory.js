var Creator=require('./Creator.js');
var Electric=require('./Electric.js');

module.exports= class TeslaFactory extends Creator {

	getEngine() {
        return new Electric() ;
	}

}