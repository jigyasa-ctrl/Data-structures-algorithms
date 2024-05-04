// promise.all() polyfill

// The Promise.all() accepts an array of promises and returns a promise
// that resolves when all of the promises in the array are fulfilled or when
// the iterable contains no promises. It rejects with the reason of the first
// promise that rejects.

const myPromiseAll = function (taskList) {
  let result = []
  let promiseCompleted = 0

  return new Promise((resolve, reject) => {
    taskList.forEach((promise, index) => {

      //if promise resolves 

      promise.then((val) => {

        //store its outcome and increment the count

        result[index] = val;
        promiseCompleted += 1;

        if (promiseCompleted === taskList.length) {
          resolve(result)
        }
      }).catch(error => reject(error))

    })
  })
}

// OR similar to any with some updates ->

    const all = function(tasks){
        const promiseCompleted = new Array(tasks.length)
        let counter = 0;

        return new Promise((resolve, reject) => {
            tasks.forEach((promise)=> {
                promise.then((value) => {
                    promiseCompleted[counter] = value
                    counter = counter + 1
                    if(counter === tasks.length){
                        resolve(promiseCompleted)
                    }
                }).catch((error) => reject(error))
            })
        })

    }



=============================================
TEST CASES 1
=============================================
const task = function(time){
return new Promise(function (resolve, reject) {
  setTimeout(function() {
    resolve(time)
  }, time)
})
}

const taskList = [task(3000), task(5000), task(1000)]



myPromiseAll(taskList).then(val => console.log("result: "+ val)).catch(err => console.log(err))

// result: [3000,5000,1000]

=============================================
TEST CASES 2
=============================================


const task = function(time){
return new Promise(function (resolve, reject) {
  setTimeout(function() {
    if(time > 3000){
      reject("Rejected")
    } else{
       resolve(time)
    }
  }, time)
})
}

const taskList = [task(3000), task(5000), task(1000)]

myPromiseAll(taskList).then(val => console.log("result: "+ val)).catch(err => console.log(err))

// "Rejected"
