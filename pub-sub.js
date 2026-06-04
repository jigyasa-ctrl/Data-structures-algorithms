class Observer{
    constructor(){
        this.queue = []
    }

    subscribe(task) {
        this.queue.push(task)
    }
    unsubscribe(task) {
        this.queue =  this.queue.filter((item) => item !== task)
    }


    notify(data) {
        this.queue.forEach((item) => {
            item(data)
        })

    }



}

function username(data) {
    console.log(data)
}
function username2(data) {
    console.log(data)
}

const PubSub = new Observer();
PubSub.subscribe(username)
PubSub.subscribe(username2)
PubSub.unsubscribe(username2)
PubSub.notify("hello")