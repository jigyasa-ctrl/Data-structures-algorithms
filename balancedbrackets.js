/**
 * @param {string} str
 * @return {boolean}
 */
export default function isBalancedBrackets(str) {
    let myMap = new Map()
    myMap.set("(", ")")
    myMap.set("{", "}")
    myMap.set("[","]")
    let stack = []
    for(let char of str){
      if(myMap.has(char)){
        stack.push(myMap.get(char))
      } else {
        if(stack.pop() !== char) return false
      }
    }
      return stack.length === 0
      // throw 'Not implemented!';
    }

    
//     Input: str = "[]"
// Output: true

// Input: str = "([)]"
// Output: false

// Input: str = "([]){}"
// Output: true