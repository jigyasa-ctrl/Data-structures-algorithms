//Input -> [2,5,2,1,2,4,3]

//Output ->  [[2,3] ,[1,4], 5]


// create subarrays with sum 5

let input = [2,5,2,1,2,4,3]
let done = []

let set = new Set(input)
let arr = Array.from(set)
let target = 5

let output = []

for(let i=0; i<arr.length;i++){
  for(let j=1; j<arr.length; j++){
    
    if(arr[i] + arr[j] == target && !done.includes(arr[i]) && !done.includes(arr[j])){
      let newVal = [arr[i], arr[j]]
        output.push(newVal);
      done.push(arr[i])
    } 
    else if(arr[i] == target && !output.includes(arr[i])){
      output.push(arr[i])
    }
    
      
    
  }
}

 console.log(output);
