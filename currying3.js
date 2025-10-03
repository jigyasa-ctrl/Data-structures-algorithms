// add(1)(2).value() = 3; 
// add(1, 2)(3).value() = 6; 
// add(1)(2)(3).value() = 6; 
// add(1)(2).value() + 3 = 6;


function add(...args) {
    let total = [...args];
    return function abc(...args2) {
        total.push(...args2)
        abc.value = function() {
            return total.reduce((acc, curr) => acc + curr, 0 )
        }
        return abc
    }
}

console.log(add(1)(2).value())