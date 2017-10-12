var Creator=require('./Creator.js');
var Hybrid=require('./Hybrid.js');

module.exports= class PriusFactory extends Creator {

	getEngine() {
		return new Hybrid();
	}

}