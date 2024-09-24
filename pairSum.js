// algorith to find a apir of integers in unsorted array with a given sum k.

const getPairSum = function (arr, k){
  let set = new Set()
  let isFound = false
  for (let i=0; i < arr.length; i++){
    if(set.has(k - arr[i])){
      value = k - arr[i]
      isFound = [arr[i], value]
      break;
    } else{
      set.add(arr[i])
    }
    
  }
  return isFound
}
let arr = [2,1,44 ,5,7,3,9,33]
console.log(getPairSum(arr, 34))
