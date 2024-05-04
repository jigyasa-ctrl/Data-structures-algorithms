// Promise.race polyfill


// The Promise.race() method returns a promise that fulfills or rejects as
// soon as one of the promises in an iterable fulfills or rejects, with the
// value or reason from that promise.

const race = function(tasks){
        return new Promise((resolve, reject) => {
            tasks.forEach((promise) =>{
                promise.then((val) => resolve (val)).catch((error) => reject(error))
            })
        })
    }


=================
TEST CASE 1 
=================


    const test1 = new Promise(function (resolve, reject) {
        setTimeout(reject, 500, 'one');
    });
    const test2 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 600, 'two');
    });
    const test3 = new Promise(function (resolve, reject) {
        setTimeout(resolve, 200, 'three');
    });

    race([test1, test2, test3]).then((val) => {
        console.log(val, "resolve") 
    }).catch((error) => {
        console.log(error, "reject")
    })

// 'two resolve' -> because test3 is the one that resolves or rejects first becasue of lesser timer
