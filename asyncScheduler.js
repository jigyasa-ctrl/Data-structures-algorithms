// async scheduler with max concurrency 

class Scheduler {
    constructor(limit) {
        this.limit = limit;
        this.queue = [];
        this.running = 0

    }

    add(task) {
        return new Promise((resolve, reject) => {
            this.queue.push({task, resolve, reject});

            this.runNext();
        })

    }

    runNext() {
        if (this.running >= this.limit  || this.queue.length == 0) return
        const {task, resolve, reject} = this.queue.shift();

        this.running++;

        task().then(resolve).catch(reject).finally(() => {
            this.running --;
            this.runNext();
        })
    }
}


// test case

function createTask(time=0, name) {
    return () => {
      return new Promise((resolve) => {
        console.log("START", name);
  
        setTimeout(() => {
          console.log("END", name);
  
          resolve(name);
        }, time);
      });
    };
  }

  const scheduler = new Scheduler(3);

  scheduler.add(createTask(1000, "Task 1"));
  scheduler.add(createTask(500, "Task 2"));
  scheduler.add(createTask(300, "Task 3"));
  scheduler.add(createTask(200, "Task 4"));
  scheduler.add(createTask(100, "Task 5"));
  
  