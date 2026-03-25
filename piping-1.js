// Input:
let obj = {
    a : {
      b : (a,b,c) => a+b+c,
      c : (a,b,c) => a+b-c,
    },
    d : (a,b,c) => a-b-c
  }
  
  
  
  const pipe = function(objct) {
      let final = {}
      const data = Object.entries(objct);
      return function abc(...args){
         for(const [key, value] of data){
          if(typeof value == "function"){
              
              final[key] = value(...args)
          } else {
              
              final[key] = pipe(value)(...args)
          }
      } 
      return final;
      }
      
  }
  
  const output = pipe(obj)(1,1,1);
  console.log(output);
  
  // Output:
  // {
  //   a : {
  //     b : 3,
  //     c : 1
  //   },
  //   d: -1
  // }