Function.prototype.applypoly = function applypoly(obj, args) {
    let fn = this;
    let unique = Symbol()
    obj[unique] = fn;
    let result = obj[unique](...args || []);
    delete obj[unique];
    return result
 }