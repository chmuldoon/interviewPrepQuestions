// a closure is a function within a function that has reference to variables in the outer function
//three scopes: global variables, own, and outer functions

//example:

function wow(a,b){

  (function multiplyB(){
    b = b* 2
  })()

  return a * b

}