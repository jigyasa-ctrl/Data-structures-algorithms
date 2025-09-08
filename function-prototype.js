
Function.prototype.defer = function(ms){
    let f = this;
        return function(...args){
            
            setTimeout(() => f.apply(this, args), ms)
        };
}  // added defer prototype

function f(a, b) {
    console.log( a + b );
  }
  
  f.defer(1000)(1, 2);






