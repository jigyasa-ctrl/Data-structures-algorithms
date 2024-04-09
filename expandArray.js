// Input -->  [ 1,"2", [3,4,[[5]]], [function(){}], [8, 9] ]

// Output ---> [ 1, '2', 3, 4, 5, [Function (anonymous)], 8, 9 ]

// expand Array function

function expandArray(arr){
    let output = []

    if(!arr.length){
        return
    } 
    for(let i=0; i<arr.length; i++){
        let current = arr[i]
        if(Array.isArray(current)){
            let newArr = expandArray(current);
            output.push(...newArr)

        }else{
            output.push(current)
        }

    }

    return output;
}
