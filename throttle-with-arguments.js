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