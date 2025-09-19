function createTask(name, time, shouldFail = false) {
    return () =>
      new Promise((resolve, reject) => {
        setTimeout(() => {
          if (shouldFail) {
            reject(`${name} failed`);
          } else {
            resolve(`${name} done`);
          }
        }, time);
      });
  }

  
const tasks = [
    createTask("Task1", 1000),
    createTask("Task2", 500, true), // will fail
    createTask("Task3", 800)
  ];

  /// Add code here
  const runTasks = async function(tasks, mode) {
    let result =  [];
    let error = [];
    if(mode === "parallel"){
        let settled = await Promise.allSettled(tasks.map(fn=> fn()))

        settled.forEach((data) => {
            if(data.status == "fulfilled"){
                result.push(data.value)
            } else {
                error.push(data.reason)
            }
            
        })
    }
    
    if(mode === "sequential"){

        for(let task of tasks){
            try {
                const res = await task();
                results.push(res);
              } catch (err) {
                error.push(err);
              }
        }

    }

    return {
        result: result,
        error: error
    }


  }
  
//   (async () => {
    console.log("Parallel mode:");
    console.log(await runTasks(tasks, "parallel"));
  
    console.log("\nSequential mode:");
    console.log(await runTasks(tasks, "sequential"));
//   })();