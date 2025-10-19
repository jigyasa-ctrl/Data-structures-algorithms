String.prototype.repeat= function(n){
    let str = this;
    let currStr = []
    if(!str) return ""
    for(let i=1; i<=n; i++){
          currStr.push(str)
    }
    return currStr.join("")
}

String.prototype.myRepeat= function(n){
    let str = "abc";
    if(!n || n<0) return ""
   return Array(n).fill(str).join("")
}
var value = "abc"


console.log(value.myRepeat(2))


