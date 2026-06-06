// do not change function name
function excludeItems(items, excludes) {
    let myMap = new Map();
    let final = []
    for (let i in excludes) {
      let curr = excludes[i]
      if (!myMap.has(curr.k)) {
        myMap.set(curr.k, curr.v)
      } else {
        myMap.set(curr.k, myMap.get(curr.k).concat(",", curr.v))
      }
  
    }
    // Write your code here
    for (let i in items) {
      let curr = items[i]
      let pass;
      for (const [key, value] of myMap) {
        if (!value?.toString().includes(curr[key]?.toString()) && pass !== false) {
          pass = true
        } else {
          pass = false
        }
      }
      if (pass) {
        final.push(curr)
      }
    }
    if (!final.length) {
      final = [...items]
    }
    return final
  }
  