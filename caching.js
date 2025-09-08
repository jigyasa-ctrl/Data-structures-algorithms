function abc(x){
    return x*2
}
// cacheStore is a decorator, decorator is a function that takes another function and modifyies its behaviour
// cache Store is a wrapper that can be used with any function and get values cached.


const cacheStore = function(func, x){
    let cache = new Map;
    if(cache.has(x)){
        return cache.get(x)
    }

    let result = func(x);
    cache.set(x, result)
    return result
}

console.log(cacheStore(abc, 3))

// to make if work for object use func.call like below ------------->

let worker = {
    someMethod() {
      return 1;
    },
  
    slow(x) {
      alert("Called with " + x);
      return x * this.someMethod(); // (*)
    }
  };
  
  function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
      if (cache.has(x)) {
        return cache.get(x);
      }
      let result = func.call(this, x); // "this" is passed correctly now
      cache.set(x, result);
      return result;
    };
  }
  
  worker.slow = cachingDecorator(worker.slow); // now make it caching
  
  alert( worker.slow(2) ); // works
  alert( worker.slow(2) ); // works, doesn't call the original (cached)
