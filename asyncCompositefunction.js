// Create composeAsync function with chaining support asked in Adobe

function a(x, y) {
    return new Promise(resolve => setTimeout(() => resolve(x * y), 100));
  }
  
  function b(z) {
    return new Promise((resolve, reject) => setTimeout(() => resolve(z + 5), 100));
  }
  
  function c(r) {
    return new Promise(resolve => setTimeout(() => resolve(r / 10), 100));
  }
  
  // create this function
  
  
  function composeAsync(func1, func2, func3) {
      return function(...args) {
          
         let finalpromise =  func3(...args).then(value => func2(value)).then(result => func1(result))
         return finalpromise
      }
  }
  
  composeAsync(c, b, a)(5, ).then(result => { console.log(result); }).catch(console.error);
  // output // 2