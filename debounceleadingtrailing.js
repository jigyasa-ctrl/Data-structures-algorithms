
// implement debounce() with leading & trailing option

/**
 * @param {(...args: any[]) => any} func
 * @param {number} wait
 * @param {boolean} option.leading
 * @param {boolean} option.trailing
 * @returns {(...args: any[]) => any}
 */

function debounce(func, wait, option = {leading: false, trailing: true}) {
  // your code here
  let timer = null;
  return function(...args){
    const shouldCallLeading = option.leading && timer === null;

    clearTimeout(timer);

    if(shouldCallLeading){
      func.apply(this, args)
    }

    timer = setTimeout(()=> {
      if(!shouldCallLeading && option.trailing){
      func.apply(this, args);
      }
      timer = null

    }, wait)
  }
}


