

// This function, findSequenceLength, finds the length of the longest consecutive sequence
// of integers that can be formed from the elements in the given array.
// For example, for [10,2,3,8,1,4], the consecutive sequence is [1,2,3,4] which has length 4.
// The function returns 4 in this case.

function findSequenceLength(arr){
    let max = 1;
    for(let i = 0; i<=arr.length-1;i++){
        let curr = arr[i]
        // Check if 'curr' is the start of a sequence (no smaller consecutive number exists)
        if(!arr.includes(curr-1)){
            let length = 1;
            // Count the length of consecutive numbers starting from 'curr'
            while(arr.includes(curr + length)){
                length++
            }
            // Update the maximum found so far
            max = Math.max(length, max)
        }
    }
    return max
}

let arr = [10,2,3,8,1,4]
// let arr = [0, 3, 7,2, 5, 8, 4,6,0,1]

console.log(findSequenceLength(arr))