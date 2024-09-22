// Javascript does not have any inbuilt function for this, But thanks to
// the introduction of promises and async-await in ES2018

// this does not
// stop the entire program execution like it does in other programming
// languages, instead it will just make our current function sleep.

let sleep = function(delay) => {
  return new Promise(resolve => setTimeout(resolve, delay))
}


sleep( 500 ).then( () => {
//do stuff
console .log( 'I run after 500 milliseconds' );
});
