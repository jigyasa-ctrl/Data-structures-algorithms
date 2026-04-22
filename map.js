// Array.prototype.myMap = function(func) {
//     let arr = this;
//     let result = []
//     for(let i = 0; i<=arr.length-1; i++){
//        let res = func(arr[i])
//        result.push(res)

//     }
//     return result
// }

// console.log([1,2,3,4].myMap((a) => a*3))


Array.prototype.MyMap = function(callback, thisArg){ // callback is the function to be called on each element, thisArg is the value of this inside the callback function
    if(typeof callback !== "function"){
        throw new TypeError(callback + "is not a function");
    }
    
    let finalResult = []
    let array = this;
    for(let i=0; i< context.length; i++){
        if(i in context){
             let curr = array[i]
        const result = callback.call(thisArg, curr, i, array) // call the callback function with the current element, index and array
        finalResult[i] = result
        }
       
    }
    return finalResult
}