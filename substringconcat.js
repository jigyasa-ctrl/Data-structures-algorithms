str1 = "abcxx1234"
str2 = "1234yyyyabc"

// create a function which returns the concatinated middle substring value 
// for example str1 + str 2 should give -> abcxx1234yyyyabc
// for example str2 + str1 should give -> 1234yyyyabcxx1234


function concatString(a, b) {
    let substring = "";
    for (let i=0; i<=a.length;i++){
        let curr = substring + b[i]
        if(a.endsWith(curr)){
            let bstr = b.slice(i+1,b.length)
            return a + bstr
        } else {
            substring = curr
        }
        
    }
}

console.log(concatString(str1, str2))