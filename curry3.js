
let curry3 = function(...args){
  let storage = [...args]
  if(storage.length == 0){
    return 0
  } else{
    return function sum(...args2){
      storage.push(...args2)
      if(args2.length == 0){
        return storage.reduce((acc, curr) => acc + curr, 0)
      } else{
        return sum
      }
      
    }
  }
}

const res = curry3(1,2,3,4)(3,4,5)()
const res2 = curry3()
const res3 = curry3(1,2,3,4)()


console.log(res) // 22
console.log(res2) // 0
console.log(res3) // 10
