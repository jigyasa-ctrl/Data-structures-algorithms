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