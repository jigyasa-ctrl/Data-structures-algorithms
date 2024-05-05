// Function to call asyn operations parrallely and return results for all the async operations at the end.

const asyncParallel = function(tasks, callback){
  let results = []
  let taskCompleted = 0
  tasks.forEach((asyncTask)=>{
    asyncTask((value) => {
      results.push(value)
      taskCompleted += 1
      
      if(taskCompleted >= tasks.length){
         callback(results)
      }
    })
  })
  
}

===========================
TEST CASES
==========================

function createAsyncTask () {
const value = Math .floor( Math .random() * 10 );
return function ( callback ) {
setTimeout( () => {
callback(value);
}, value * 1000 );
};
}

const taskList = [
createAsyncTask(),
createAsyncTask()]

asyncParallel(taskList, result => {
console.log( 'results' , result);
});
