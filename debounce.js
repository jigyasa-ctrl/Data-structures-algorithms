// In the debouncing technique, no matter how many times the user fires the event, the attached 
// function will be executed only after the specified time once the user stops firing the event.

let debounce = function(func, timeout) {
  let timer;
  return function(...args){
   clearTimeout(timer)
    timer = setTimeout(() =>{
      func.apply(this, args)
    }, timeout)
    
  }
}
