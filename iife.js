//what is an IIFE?
//It's an immediately invoked function

(function() {
  //code
})()

(function(x) {
  return x * 2;
})(2);

// an iife preserves a private scope within the code
// withian an iife you can rewrite a global variable  and then outside you will habve access again 
//whole files can be wrapped within an iife