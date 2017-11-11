function Command (method, state, callback) {
	this.method = method;
	this.state = state;
	this.callback = callback;
	this.execute = function(){
		if (this.method == "set"){
			me.state.set(this.state, this.callback);
		} else if(this.method == "change"){
			me.state.change(this.state);
		}
	};
}