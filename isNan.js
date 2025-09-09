const a = 'BFE.dev' 
const b = 1 
console.log(Number.isNaN(a))  // false -> Number.isNaN doesnt coerce -> a is tring so false.
console.log(Number.isNaN(b)) // false -> b is a number -> false
console.log(isNaN(a))  // true - global isNaN does coerce so, NUmber('BFE.dev') ->NaN so true
console.log(isNaN(b)) // false -> coerce Number(1) -> 1 // false