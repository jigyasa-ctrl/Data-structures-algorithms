
// In JavaScript, a Proxy is a powerful feature that allows you to create a wrapper around an object to intercept and customize operations 
//  performed on that object, such as property access, assignment, and function calls.

let obj = {
  i : 0 
}
const handler = {
  get: (target, property) => {
  if(property == 'i'){
    target[property]++
    return target[property]
    
  },
    set: () => {},
  deleteProperty: () => {},
}
  
}
  obj = new Proxy(obj, handler)

console.log(obj.i) // 1
console.log(obj.i) // 2
console.log(obj.i) // 3
console.log(obj.i) // 4
