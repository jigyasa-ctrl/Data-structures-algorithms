// Currying question

// Currying is a technique in proramming where a function with multiple arguments is transformed into a sequence of function with a single argument.o a function with

function finalString(...args){
  
  const parts = args.filter(value => value!==undefined && value!==null)
  
   function collector(...next){
    if(next!== undefined && next!==null){
      parts.push(...next.flat())
     }
    return collector
  }
  collector.toString = function(){
    return parts.join("_")
  }
  
  return collector
  
}

let result = finalString(2)(3)(5)(7)(8)()()(4)([5,8])(5)(6,7,8)

console.log(result.toString()) // Output: "2_3_5_7_8_4_5_8_5"
