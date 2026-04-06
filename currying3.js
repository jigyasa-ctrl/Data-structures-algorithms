// add(1)(2).value() = 3; 
// add(1, 2)(3).value() = 6; 
// add(1)(2)(3).value() = 6; 
// add(1)(2).value() + 3 = 6;

// valueOf() is used when JS tries to coerce an object into a primitive (like in +, ==, or console.log in some cases).
// Valeof should be a function which is called automatically by JS on coersion

let final = [];
function addedSum(func){
    return function added(...args){
        final.push(...args)
        added.value = function() {
            return func(...final)
        }
        added.valueOf = added.value
        return added
    }
}

const sum = function(...args) {
    
    return [...args].reduce((acc, curr) => acc + curr, 0)
    
}

const add = addedSum(sum)
console.log(add(1, 2)(3) + 6) // 12