Array.prototype.myBind = function(obj, ...args){
    const fn = this;
    return function(...newArgs){
        let unique = Symbol()
        obj[unique] = fn;
        const result = obj[unique](...args, ...newArgs)
        delete obj[unique];
        return result
    }

}


// proper polyfill

// DO NOT CHANGE FUNCTION NAME
function customBind(obj, ...args) {
    const fn = this;
    if (obj === undefined) { // when context passed is undefined return should be undefined
      return () => {
        return undefined
      }
    }
    return function (...newArgs) {
      obj = obj == null ? globalThis : Object(obj); // handel for strict mode undefined and window obj
      if (new.target) { // handled for new keyoword invoke
        return new fn(...args, ...newArgs)
      }
      const unique = Symbol();
      obj[unique] = fn;
      const result = obj[unique](...args, ...newArgs)
      delete obj[unique]
      return result
    }
  }
  
  Function.prototype.customBind = customBind;