// Create a function that accepts a function as input and a count and
// executes that input function once for a given count of calls. Known as a
// sampling function.


function message (){
console .log( "hello" );
}



let sampler = (message, count) =>{
  let counter = 0;
  
  return function(){
    counter++;
    if(counter == count){
     message();
      counter = 0;
    }
    
  }
  
}

const sample = sampler(message, 4 );

sample()
sample()
sample()
sample()
sample() // hello
sample()
sample()
sample()
sample()
sample() // hello
