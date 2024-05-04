// memoization involves storing the results of expensive function calls and returning the cached result when the same inputs occur again

function memoizeOne(fn) {
  // write your solution here
  let map = new Map()
  return function (...args){
    let key = args.join("_")
    if(map.has(key)){
      return map.get(key)
    }
    let result = fn(...args);
    map.set(key, result)
    return result;
  }
}

=================
TEST CASES
-=================

function add(a, b) {
  return a + b;
}

const memoizedAdd = memoizeOne(add);
console.log(memoizedAdd(1, 2));
console.log(memoizedAdd(1, 2)); // returns from cache
console.log(memoizedAdd(3,6));
console.log(memoizedAdd(4,5));
console.log(memoizedAdd(3,6)); // returns from cache
