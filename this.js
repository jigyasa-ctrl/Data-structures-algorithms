// "use strict";
let arraoe = ()=>{
    console.log(this)
}
arraoe() // {}

function abc() {
    console.log(this)
}
// abc()
var a = 6;

var obj = {
    a: 10,
    x: function () {
        function abc() {
            console.log(this) // points to undefined -> this substitution happens -> points to globalObject:Window
        }
        abc()
    }
}
// obj.x()

var obj = {
    a: 3,
    x: function () {
        console.log(this) //points to obj
    }
}

//  obj.x()

var obj = {
    a: 3,
    x: () => {
        console.log(this) // points to window in browser, in node js logs {} becz top level this in node is {}
    }
}

//  obj.x()

var obj = {
    a: 3,
    x: () => {
        function abc() {
            console.log(this) // points to undefined -> this substitution happens -> points to globalObject:Window
        }
        abc()

    }
}

//  obj.x()


var obj = {
    a: 3,
    x: function () {
        return () => {
            console.log(this) // points to obj
        }


    }
}

// normal function - this depends on call site

// here x has this = obj
// arow function -> this depends on where the funciton is created
//arraow function takes this from where it is defained , it is defined in x where this = obj


// obj.x()()
