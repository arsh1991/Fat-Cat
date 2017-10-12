
var Creator=require('./Creator.js');
var Gas=require('./Gas.js');

module.exports= class VolvoFactory extends Creator {

	getEngine() {
		return new Gas();
	}

}
