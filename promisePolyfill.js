class MyPromise {
  // write your code below
  constructor(executor) {
    this.state = "pending"
    this.handelers = []
    this.value = undefined;

    const resolve = (value) => {

      if (this.state !== "pending") return;

      if (value && typeof value.then === "function") {
        return value.then(resolve, reject);
      }
      this.state = "fulfilled";
      this.value = value

      this.handelers.forEach((h) => h.onFulfilled(value))

    }
    const reject = (value) => {
      if (this.state !== "pending") return;
      
      this.state = "rejected";
      this.value = value

      this.handelers.forEach((h) => h.onRejected(value))
    }

    try {
      executor(resolve, reject);
    } catch (error) {
      reject(error);
    }

  }
  then(onFulfilled, onRejected) {
    return new MyPromise((resolve, reject) => {
      const fulfilled = (value) => {
        try {
          resolve(onFulfilled ? onFulfilled(value) : value)
        } catch (e) {
          reject(e)
        }
      }
      const rejected = (reason) => {
        try {
          if (onRejected) {
            resolve(onRejected(reason))
          } else {
            reject(reason)
          }
        } catch (e) {
          reject(e)
        }
      }

      if (this.state == "fulfilled") {
        queueMicrotask(() => fulfilled(this.value))
      } else if (this.state == "rejected") {
        queueMicrotask(() => rejected(this.value))
      } else {
        this.handelers.push({
          onFulfilled: fulfilled,
          onRejected: rejected
        })
      }

    })

  }
  catch(onRejected) {
    return this.then(null, onRejected)
  }
};

  //test case

  new MyPromise((resolve, reject) => {
    
    resolve(3)
}).then((val)=> console.log(val))