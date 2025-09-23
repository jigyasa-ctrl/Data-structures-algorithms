

function findSequenceLength(arr){
    let max = 1;
    for(let i = 0; i<=arr.length-1;i++){
        let curr = arr[i]
        if(!arr.includes(curr-1)){
            let length = 1;
            while(arr.includes(curr + length)){
                length++
            }
            max = Math.max(length, max)
        }
    }
    return max
}
let arr = [10,2,3,8,1,4]
// let arr = [0, 3, 7,2, 5, 8, 4,6,0,1]

console.log(findSequenceLength(arr))