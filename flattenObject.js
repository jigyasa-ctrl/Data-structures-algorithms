// Write a function flattenObject(obj) in JavaScript that takes a nested object and returns a new object where all keys are flattened using dot notation.
const obj = {
    name: "John",
    address: {
      city: "New York",
      coordinates: {
        lat: 40.7128,
        lng: -74.006
      }
    },
    skills: {
      frontend: {
        html: true,
        css: true
      },
      backend: {
        node: true
      }
    }
  };
   let result ={}
  function flatenObject(input, former) {
     
     let newObj = Object.entries(input)
     
     for(let [key, value] of newObj){
         if(typeof value !== 'object'){
             if(former){
                 former = `${former ?? ""}.${key}`
             } else {
                 former = key
             }
             result[former] = value
         } else {
             if(former){
                 former = former + "." + key
             } else {
                 former = key
             }
              flatenObject(value, former)
         }
     }
      return result
      
  }
  
  console.log(flatenObject(obj))
  
  
  
  // output :- {
  //   "name": "John",
  //   "address.city": "New York",
  //   "address.coordinates.lat": 40.7128,
  //   "address.coordinates.lng": -74.006,
  //   "skills.frontend.html": true,
  //   "skills.frontend.css": true,
  //   "skills.backend.node": true
  // }

  /// another variant with array

  const nested = {
    A: "12",
    B: 23,
    C: {
      P: 23,
      O: {
         L: 56
      },
      Q: [1, 2]
     }   
  };
  
  let final = {}
  
  function flatten(obj, former=""){
   const arr = Object.entries(obj)
   for(const [key, value] of arr){
       if(typeof value == "object" && !Array.isArray(value)){
           let keyVal = former ? former + "." + key : key
           flatten(value, keyVal)
       } else if(Array.isArray(value)) {
           value.forEach((d, index) => {
               let keyVal = former + "." + key + "."+ index
               final[keyVal] = d
           })
           
       } else {
           let keyVal = former ? former + "." + key : key
           final[keyVal] = value
       }
   }
   
      
      
  }
  
  flatten(nested)
  console.log(final)