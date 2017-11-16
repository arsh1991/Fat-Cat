/*Using Proxy design Pattern for validating parameters*/
let validator = {
  set: function(obj, prop, value) {
      if (!(typeof obj == 'object')) {
        throw new TypeError('It is not json!');
      } 
    // Indicate success
    return true;
  }
};

export default validator();


//Check if the an object is created using proxy pattern
//if (object == null){
   //this.object = new Object(); create new object
//}