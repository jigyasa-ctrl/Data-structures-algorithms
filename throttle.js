// Throttling is a technique in which, no matter how many times the user fires the event, the attached function will be executed only once in a given time interval.


function throttle(func, delay) {
  // write your code here
  let isRunning = false;
  let timer;
  return function (...args) {
    if (!isRunning) {
      func(...args)
      isRunning = true;
      clearTimeout(timer)
      timer = setTimeout(() => {
        isRunning = false;
      }, delay)
    }
  }

}
