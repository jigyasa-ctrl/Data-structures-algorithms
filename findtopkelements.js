


nums = [1,1,1,2,2,3, 4,4,4,4,4]
k = 3

// Output : [4, 1, 2]

// Aproach -> first map all elements with their frquescy of accuring, then create an array and use their frequency as index value, this will put the max freq at the end and create a desc order array, 
// then loop through that and create new array by ignore the null values in prev array and stop when new array lentgh is k.


function findTopK(num, k){
    let freqmap = new Map();
    
    for(let i=0; i<=num.length-1; i++){
        let curr = num[i]
        if(freqmap.has(curr)){
            freqmap.set(curr, freqmap.get(curr) + 1)
        } else {
            freqmap.set(curr, 1)
        }
    }
     //freqmap :  Map(4) { 1 => 3, 2 => 2, 3 => 1, 4 => 5 }
    let bucket = []
    
    for(let [key, value] of freqmap){
        bucket[value] = key
    }
    // bucket :  [ <1 empty item>, 3, 2, 1, <1 empty item>, 4 ]
    let final = []
    
    for(let j=bucket.length-1; j>=0; j--){
        let curr = bucket[j]
        if(final.length !== k && curr) {
             final.push(curr)
        }
       
    }
    return final // [ 4, 1 ]
    
}

console.log(findTopK(nums, k))