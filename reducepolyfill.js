/**
* Do not change the function name
**/

// reduce((acc, curr) => func, ini)

function customReduce(callback, initialValue) {
    // DO NOT REMOVE
    'use strict';
    // write your solution below
  
    if (typeof callback !== "function") { // when callback is not a function
      throw new TypeError("Callback is not a function")
    }
    if(this.length == 0 && !initialValue){ // when array is empty and initial value is not provided throw error
      throw new TypeError("Array cannot be empty.")
    }
    if(this.length ==0 && initialValue){ // when array is empty and initial value is provided return initial value
      return initialValue
    }
    
  
    let accumulator =  initialValue ?? 0; // when initial value is not provided set it to 0
    let context = this;
  
    for (let i = 0; i < context.length; i++){
      let current = context[i]
      accumulator = callback(accumulator, current)
  
    }
    return accumulator  
  
  
  }
  
  Array.prototype.customReduce = customReduce
  
  
  