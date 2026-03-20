// Input:
const MY_TIMERS = {
    timer:[],
    setTimeout: function(func, delay){
        let timerId = setTimeout(() => {
            func();
        },delay)
        this.timer = [...this.timer, timerId]
        return timerId
        
    },
    clearAllTimeout: function() {
        this.timer.forEach((item) => {
            clearTimeout(item);
        })
    }
}
const id = MY_TIMERS.setTimeout(() => {console.log("hello")}, 1000);
const id2 = MY_TIMERS.setTimeout(() => {console.log("hello")}, 2000);
console.log(id, id2); // timerid
MY_TIMERS.clearAllTimeout();
// nothing should be logged as timeouts will be cleared
