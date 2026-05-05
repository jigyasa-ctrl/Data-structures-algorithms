// leading + trailing throttle.

function throttle(func, wait) {
    let isRunning = false;
    let lastArgs;
    return function (...args) {
       if (!isRunning) {
         isRunning = true;
         func.apply(this, args);
         setTimeout(() => {
           isRunning = false;
           if (lastArgs) func.apply(this, lastArgs); // training call
         }, wait);
       } else {
         lastArgs = [...args];
       }
    }
  }


  // this is to be used when you want the arguments of latest call to be used in the next throtttle call




  // throttle with leading and trailing

  function throttle(func, delay, options) {
    let { leading, trailing } = options
    let timer
    let isRunning = false
    let lastArgs
    let lastContext
    return function (...args) {
      lastContext = this
  
      if (!isRunning) {
        if (leading) {
          func.call(this, ...args)
          clearTimeout(timer)
        }
  
        isRunning = true
  
        timer = setTimeout(() => {
          isRunning = false
          if (lastArgs && trailing) {
            func.apply(this, lastArgs)
            lastArgs = null
          }
        }, delay)
      } else if (trailing) {
        lastArgs = [...args]
      }
    }
  }