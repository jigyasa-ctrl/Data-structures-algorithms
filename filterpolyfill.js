Array.prototype.filter = function(callback, thisArgs){
    if (typeof callback !== "function") {
        throw new TypeError(`${callback} is not a function`)
      }
    let array = this
    let finalResult = []
    for(let i=0; i< array.length; i++){
        if(i in array){
            let curr = array[i];
            if(callback.call(thisArgs, curr, i, array)){
                finalResult.push(curr)
            }
        }
        
    }
    return finalResult

}


