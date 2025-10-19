// Top K Frequent Elements


class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let myMap = new Map()
        for(let i=0; i<=nums.length-1; i++){
            let curr = nums[i]
            if(myMap.has(curr)){
               const val = myMap.get(curr)
                myMap.set(curr, val+1)
            } else {
            myMap.set(curr, 1);
            }
        }

        const entries = Array.from(myMap.entries())
        
        let finalArr = entries.sort((a,b) => b[1] - a[1])

        return finalArr.slice(0, k).map(([data]) => data)
    }
}
