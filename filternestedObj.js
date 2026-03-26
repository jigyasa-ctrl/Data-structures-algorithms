// This question was asked in Amazon's frontend interview

// Create a function in javascript which will take a nested object and a filter function as input and return the filtered object.

// Input:
const obj = {
    a: 1,
    b: {
      c: "Hello World",
      d: 2,
      e: {
       f: {
        g: -4,
        },
      },
      h: "Good Night Moon",
    },
  };
  
  const filter = (s) => typeof s === "string";
  let final = {}
  const getFilteredObject = function(objct, func) {
      let final = {};
      let arr = Object.entries(objct);
      for(let [key, value] of arr){
         if(func(value)) {
             final[key] = value
         } else if(typeof value === "object" && value !== null){
             const nested = getFilteredObject(value, func)
             
             if(Object.keys(nested).length > 0){
                 final[key] = nested
             }
         }
      }
      return final
      
  }
  
  console.log(getFilteredObject(obj, filter))
  
  // Output:
  // {
  //   b: {
  //     c: "Hello World",
  //     h: "Good Night Moon",
  //   }
  // };