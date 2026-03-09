
// /find multiplication of all elements leaving the index elements
// input: [2,5,10,2]
// output: [100,40,20,100]

// input: [2,5,10,2,2,5,5,4]
// output: [5000,320,400,5000,5000,320,320,10000]

const multiply = function() {
    const result = [];
    const input = [2,5,10,2,2,5,5,4];
    const newMap = new Map()
    const finalresult = input.reduce((acc, curr) => acc * curr, 1);
    // console.log(finalresult);
    for (let i=0; i<input.length; i++){
        const key = input[i];
        if(newMap.has(key)){
            newMap.set(key, newMap.get(key) + 1)
        } else {
            newMap.set(key, 1)
        }
    }
    console.log(newMap,"newMap")
    for (let i=0; i<input.length; i++){
        const key = input[i]
        const powerValueCalculated = Math.pow(key, (newMap.get(key)))
        // console.log(newMap.get(key),"newMap.get(key)")
        
        result.push(finalresult/powerValueCalculated)
    }
    console.log(result)
}

multiply()


