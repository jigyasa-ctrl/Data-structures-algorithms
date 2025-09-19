function add(a,b) {
    while(b !== 0){
        console.log(a, b)
        let carry = a & b // carry
        console.log(carry, "carrry")
         a = a ^ b // add without carry
         console.log(a, "a")
         b = carry << 1
         console.log(b, "b")
    }
    return a

}


console.log(add(5, 7));   // 12
console.log(add(-3, 6));  // 3