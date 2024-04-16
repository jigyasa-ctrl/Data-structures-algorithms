"use strict";


function abc() {
    console.log(this)
}
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

 // obj.x()

var obj = {
    a: 3,
    x: () => {
        console.log(this) // points to window
    }
}

 // obj.x()

var obj = {
    a: 3,
    x: () => {
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
        return () => {
            console.log(this) // points to obj
        }


    }
}


// obj.x()
