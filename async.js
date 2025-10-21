console.log("Strat")
for (let i = 0; i < 3; i++) {
    setTimeout(() => console.log("Timeout", i), 0)
    Promise.resolve().then(() => console.log("promise", i))
    
}

async function asynctask() {
    console.log("Async Start")
    await Promise.resolve();
    console.log("Async End")
}

asynctask()

console.log("end")


// Start
// Async Start
// End
// promise 0
// promise 1
// promise 2
// Async End
// Timeout 0 
// Timeout 1
// Timeout 2
