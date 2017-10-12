var PriusFactory=require('./PriusFactory.js');
var VolvoFactory=require('./VolvoFactory.js');
var TeslaFactory=require('./TeslaFactory.js');



console.log( "Testing Prius Factory...") ;
let pf = new PriusFactory() ;
pf.buildOrder() ;

console.log( "Testing Volvo Factory...") ;
let vf = new VolvoFactory() ;
vf.buildOrder() ;

console.log( "Testing Tesla Factory...") ;
let tf = new TeslaFactory() ;
tf.buildOrder() ;
        
   





