Array.prototype.myBind = function(obj, ...args){
    const fn = this;
    return function(...newArgs){
        let unique = Symbol()
        obj[unique] = fn;
        const result = obj[unique](...args, ...newArgs)
        delete obj[unique];
        return result
    }

}