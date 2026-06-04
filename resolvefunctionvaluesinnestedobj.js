// do not change function name

// https://devtools.tech/questions/s/resolve-function-values-in-a-nested-object---qid---Fjc1QXbghtZUOmrgQdUw?type=3
function resolveObjectFunctions(input = {}, arguments = {}) {
    // write your solution below
  
    let final = {};
    if (typeof input !== "object") return input
  
  
    for (let i in input) {
      if (Array.isArray(input)) {
        return input.map((item) => {
          if(typeof item == "function"){
            return item()
          } else {
            return item
          }
        })
      }
      if (typeof input[i] == "function") {
        if (Object.keys(arguments).length > 0) {
         
          let resolved = input[i](...arguments[i])
          final[i] = typeof resolved == "object" ? resolveObjectFunctions(resolved) : resolved
        } else {
          let resolved = input[i]()
          final[i] = typeof resolved == "object" ? resolveObjectFunctions(resolved) : resolved
        }
  
      } else if (typeof input[i] == "object") {
        final[i] = resolveObjectFunctions(input[i], arguments)
      } else {
        final[i] = input[i]
      }
  
    }
    return final
  }
  