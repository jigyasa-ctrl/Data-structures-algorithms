//This question was asked in Amazon's frontend interview.
// Get object value from string path
const obj = {
    a: {
      b: {
        c: [1,2,3]
      }
    }
  };

  
  
  const get = function(obj, str) {
      const arr = str.split("."); // [a,b,c,0]
      let latestObj = obj
      for(let i=0; i<=arr.length-1;i++){
          let curr = arr[i];
          if(latestObj[curr]){
              latestObj = latestObj[curr]
          } else {
              let index = curr.substring(2,curr.length-1)
              latestObj = latestObj[curr[0]][index]
             
              
          }
          
      }
      
      return latestObj
      
  }
  
  console.log(get(obj, 'a.b.c')); 
  console.log(get(obj, 'a.b.c.0')); 
  console.log(get(obj, 'a.b.c[1]')); 
  console.log(get(obj, 'a.b.c[3]')); 
  
  
  // Output:
  // [1,2,3]
  // 1
  // 2
  // undefined