const array = [1,2,3,4, 7,8,9, 20,21,22,23,24,25]

// let sortedArr = arr.sort((a,b) => b-a)
// console.log(sortedArr)
function largestConsecutiveArrCount(arr) {
let largestCount = 1;
let currentCount = 1;

for(let i=1; i<=arr.length-1; i++){
   let curr =arr[i] 
   let prev = arr[i-1]
   if(prev == curr-1){
       currentCount++;
       if(currentCount > largestCount ){
           largestCount = currentCount
       }
   } else {
       currentCount = 1
   }
   
}
return largestCount;
}

// more testcases covered -
//  appraoch -> start checking if smaller number exist ? then ignore, else startcounting till curr + 1 exisits.
var longestConsecutive = function(nums) {
    const set = new Set(nums);
    let longest = 0;

    for (let num of set) {
        // start only from first element of sequence
        if (!set.has(num - 1)) {
            let current = num;
            let count = 1;

            while (set.has(current + 1)) {
                current++;
                count++;
            }

            longest = Math.max(longest, count);
        }
    }

    return longest;
};

console.log(largestConsecutiveArrCount(array)) // 6


