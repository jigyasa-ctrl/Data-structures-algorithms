//1
const obj1 = {}
const obj2 = {}
console.log(obj1 == obj2, obj1 === obj2) // true , false.  -> 


//2
console.log(2 + 1 + "1" + 3 + 2) // 3132 


//3
console.log(test) // reference error
test = 100 //auto global variables

//4
console.log("started")
new Promise((res, rej) => {
  res()
  console.log("middle") 
})
console.log("ended")

//5

let obj = {
  user: 'karan',
  getName: function () {
    console.log(this.user)
  }
}

const getData = obj.getName
getData() // undeined


//6
for ( i = 0; i <3; i++) {
  setTimeout(() => console.log(i), 1000)
}

// 7

const arr = [{name: 'k', age: 10}, {name: 's', ageMax: {
  age: 100
} }]
// descructure to get value of age
const xxxxx  = arr // answer -> const [a,{ageMax: {age: x}}]  = arr
consoe.log(x)

// 
function closure (){
  let i = 0
  return () => {
  return  ++i
  }
}

const a = closure()
const b = closure()
const a1 = a()
console.log(a1) // 1
const b1 = b()
console.log(b1) // 1


// 

const arr = [1,2,3].forEach((i) => {
  return i * 10
})

console.log(arr) // undefine cus forEach doesnt retutn anything even though  you return from it


// 

function sum () {
  return a + b
}


const cachedValue = useMemo(() => {
  return sum
}, [])
  
const handleAdd = useCallback(() => {
  return sum
}, [])



//


const ChildComponent = React.memo((props) => {
  console.log(props)
  return <h1>Im child component</h1>
})


import { useState } from "react";

function App() {
  const [count, setCount] = useState({name: 'k'});

  return (
    <div>
      <h2>{count}</h2>
      <button onClick={() => setCount({name: 'k'})}>
        Increment
      </button>
      <button onClick={() => setCount({name: 'k'})}>
        Decrement
      </button>
			<ChildComponent/>
    </div>
  );
}

export default App;

