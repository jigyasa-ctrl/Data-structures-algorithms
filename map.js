Array.prototype.myMap = function(func) {
    let arr = this;
    let result = []
    for(let i = 0; i<=arr.length-1; i++){
       let res = func(arr[i])
       result.push(res)

    }
    return result
}

console.log([1,2,3,4].myMap((a) => a*3))