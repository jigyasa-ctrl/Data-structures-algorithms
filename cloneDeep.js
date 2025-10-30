
function cloneDeep(data) {
  // your code here
  if(typeof data !== 'object') return data
  let result =  data ? JSON.parse(JSON.stringify(data)) : data
  if((result && Object.keys(result).length) || result == null){
      return result
  } else{
    let clone = Array.isArray(data) ? [] : {}

    let keys = Reflect.ownKeys(data)
    for(let key of keys){
      clone[key] = (typeof(data[key]) == "object" && data[key] !== null) ? cloneDeep(data[key]) : data[key]
      
    }
    console.log(clone)
    return clone
  }
  
}

cloneDeep({[Symbol()]:'bfe'})

// simpler -> but has issues
// =============================================

abc = {
  name: "jigyasa",
  age: 27,
  address: {
      house: 44,
      landmark: "city"
  }
}
function cloneDeep (obj) {
  if(typeof obj !== "object") return obj
  const final = Array.isArray(obj) ? [] : {}
  const data = Object.entries(obj)
  for(let [key, value]  of data){
      final[key] = cloneDeep(value)
  }
  return final
}

let newobj = cloneDeep(abc)
newobj.age = 67;
newobj.address.landmark = "tejaswini classes";
console.log(newobj);
console.log(abc)





// 2 out of 13 tests failed to pass

// cloneDeep(undefined)  

// cloneDeep(null)  

// cloneDeep(3)  

// cloneDeep(Number('3'))  

// cloneDeep(3n)  

// cloneDeep(Symbol())  

// cloneDeep('str')  

// cloneDeep(true)  

// cloneDeep({a:{b:{c:3}, d: 4}})  

// cloneDeep({[Symbol()]:'bfe'})  

// cloneDeep([1,[2,3],{a:{b:{c:3}, d: 4}}])  

// circular reference in {a: {b: {c:a}}} spec  TypeError: Converting circular structure to JSON
//     --> starting at object with constructor 'Object'
//     |     property 'b' -> object with constructor 'Object'
//     --- property 'c' closes the circle

// circular reference in `const arr = [1,2,{ a: arr}` spec  TypeError: Converting circular structure to JSON
//     --> starting at object with constructor 'Array'
//     |     index 2 -> object with constructor 'Object'
//     --- property 'a' closes the circle
