// promise.any Polyfill

    const any = function(tasks){

    // set length for errors
        const errors = new Array(tasks.length)
        let counter = 0; // set counter 
        
     // returns promise 
        return new Promise((resolve, reject) => {
        
           // loop over each task
            tasks.forEach((promise) =>{
            
            // returns the first resolved promise
                Promise.resolve(promise).then(resolve).catch((err)=>{
                    errors[counter] = err;
                    counter = counter + 1;

                    if(counter === tasks.length){
                    // returns all the promisses if none resolved
                        reject(errors)
                    }
                })
            })

        })

    }






===========================================
TEST CASE 1 
===========================================

const test1 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 500 , 'one' );
});
const test2 = new Promise ( function ( resolve, reject ) {
setTimeout(resolve, 600 , 'two' );
});
const test3 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 200 , 'three' );
});

any([test1, test2, test3]).then((val) => {
  console.log(val)
}).catch((error) =>{
  console.log(error)
})

// 'two'



===========================================
TEST CASE 2 
===========================================

const test1 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 500 , 'one' );
});
const test2 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 600 , 'two' );
});
const test3 = new Promise ( function ( resolve, reject ) {
setTimeout(reject, 200 , 'three' );
});

any([test1, test2, test3]).then((val) => {
  console.log(val)
}).catch((error) =>{
  console.log(error)
})

// Array(3) ['three', 'one', 'two']
