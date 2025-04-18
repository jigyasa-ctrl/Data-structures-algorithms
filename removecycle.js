const List = function(val){
    this.next= null;
    this.val= val
}
let item1 = new List(20);
let item2 = new List(30);
let item3 = new List(40);

item1.next = item2
item2.next = item3
item3.next = item1

// remove function

const removeCycle = (obj) => {
    const set = new WeakSet([obj]);

    (function iterateObj(obj) {
        for (let key in obj) {
            if (obj.hasOwnProperty(key)) {
                if (typeof obj[key] === "object") {
                    if (set.has(obj[key])) {
                        delete obj[key]; // remove circular reference
                    } else {
                        set.add(obj[key]);
                        iterateObj(obj[key]); // recurse
                    }
                }
            }
        }
    })(obj);
};


removeCycle(item1)
console.log(item1)