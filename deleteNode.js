
// do not change function name

// https://devtools.tech/questions/s/delete-nested-object-property---qid---004O0l5ORcY422melAYr?type=3
function deleteNode(collection, key) {
    var deleted = false ;
    // write your code here
    if (!key) return undefined
    if (collection == null) return undefined
    if (typeof collection !== "object") return undefined
    
    function helper(collection){
      let result = {};
  
    for (let i in collection) {
      let curr = collection[i]
      if (i !== key || deleted) {
        if (typeof curr == "object" || Array.isArray(curr)) {
          if (Array.isArray(curr)) {
  
            result[i] = [helper(curr, key)[0]]
          } else {
            result[i] = helper(curr, key)
          }
  
        } else {
          result[i] = curr
        }
  
      } else {
        deleted = true
      }
    }
    return result
    }
  
    return helper(collection)
  }
  
  const obj = {
    a: {
      e: "first"
    },
    b: {
      e: "second"
    }
  };
  
  const result = deleteNode(obj, "e");
  console.log(result)