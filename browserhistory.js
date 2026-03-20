function BrowserHistory() {
    this.value = ""
    this.queue = []
    this.currentIndex = 0
    this.visit = function(url) {
        this.value = url
        this.queue = [...this.queue, url]
        this.currentIndex=this.queue.length-1
    }
    this.goBack = function() {
        this.currentIndex= this.currentIndex -1
        return this.queue[this.currentIndex]
    }
    this.current = function() {
        return this.queue[this.currentIndex]
    }
}

const bh = new BrowserHistory();

bh.visit('A');
console.log(bh.current());

bh.visit('B');
console.log(bh.current());

bh.visit('C');
console.log(bh.current());

bh.goBack();
console.log(bh.current());

bh.visit('D');
console.log(bh.current());

// Output:
// "A"
// "B"
// "C"
// "B"
// "D"