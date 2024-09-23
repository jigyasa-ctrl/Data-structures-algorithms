// Create a toggle function that accepts a list of arguments and toggles
// each of them when invoked in a cycle.

const toggle = function(...list){
  const length = list.length
  let current = -1;
  return function(){
    current ++
    if(current == length){
      current = 0
      console.log(list[current])
    }else{
       console.log(list[current])
    }
    
  }
  
}

let onOff = toggle( "on" , "off" );

onOff() // on
onOff() // off
onOff() // on 
onOff() // off
onOff() // on 
onOff()// off
onOff()// on 
onOff()// off
