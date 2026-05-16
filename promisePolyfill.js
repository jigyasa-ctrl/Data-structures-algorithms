class MyPromise {
    constructor(executor) {
      this.state = "pending";
      this.value = undefined;
      this.handlers = [];
  
      const resolve = (value) => {
        if (this.state !== "pending") return;
  
        this.state = "fulfilled";
        this.value = value;
  
        this.handlers.forEach((h) => h.onFulfilled(value));
      };
  
      const reject = (reason) => {
        if (this.state !== "pending") return;
  
        this.state = "rejected";
        this.value = reason;
  
        this.handlers.forEach((h) => h.onRejected(reason));
      };
  
      executor(resolve, reject);
    }
  
    then(onFulfilled, onRejected) {
      return new MyPromise((resolve, reject) => {
        const fulfilled = (value) => {
          try {
            resolve(onFulfilled ? onFulfilled(value) : value);
          } catch (e) {
            reject(e);
          }
        };
  
        const rejected = (reason) => {
          try {
            if (onRejected) {
              resolve(onRejected(reason));
            } else {
              reject(reason);
            }
          } catch (e) {
            reject(e);
          }
        };
  
        if (this.state === "fulfilled") {
          queueMicrotask(() => fulfilled(this.value));
        } else if (this.state === "rejected") {
          queueMicrotask(() => rejected(this.value));
        } else {
          this.handlers.push({
            onFulfilled: fulfilled,
            onRejected: rejected,
          });
        }
      });
    }
  
    catch(onRejected) {
      return this.then(null, onRejected);
    }
  }

  //test case

  new MyPromise((resolve, reject) => {
    
    resolve(3)
}).then((val)=> console.log(val))