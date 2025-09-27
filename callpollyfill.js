Function.prototype.callPollyfill = function callPollyfill(obj, ...args) {
   let fn = this;
   let unique = Symbol()
   obj[unique] = fn;
   let result = obj[unique](...args);
   delete obj[unique];
   return result
}
obj1 = {
    name: "jigyasa",
    a: 1,
    b: 2,
    func: function (a,b) {
        console.log(a + b + this.name)
      }
}

obj2 = {
    name: "Arjit",
    a: 4,
    b: 6

}
obj1.func.callPollyfill(obj2, 2, 7)