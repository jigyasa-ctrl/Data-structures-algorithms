class Solution {
    /**
     * @param {string[]} strs
     * @return {string[][]}
     */
    groupAnagrams(strs) {
        let myMap = new Map()
        for (let str of strs){
            let key = str.split("").sort().join('');
            if(!myMap.has(key)){
                myMap.set(key, [])
            } 
            myMap.get(key).push(str)
           

        }
        return Array.from(myMap.values())
    }

}


// Input: strs = ["act","pots","tops","cat","stop","hat"]

// Output: [["hat"],["act", "cat"],["stop", "pots", "tops"]]
