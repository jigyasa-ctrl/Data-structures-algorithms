function once(fn){
    let called = false;
    let result;
    return async function(...args){
        if(!called){
            result = fn.call(this, ...args)
            called = true
        } 
            return result
    }
}


