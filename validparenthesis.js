/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(typeof s !== "string") return false
     let strArr = s.split("") 
    if(strArr.length % 2 !== 0) return false

    let myMap = new Map()
    myMap.set("(",")")
    myMap.set("{","}")
    myMap.set("[","]")

    let storePoped = []
    for(let i = strArr.length-1; i>=0; i--){
        let curr = strArr[i]
        if(myMap.get(curr)){
            if(myMap.get(curr) == storePoped.pop()){
                if(i==0 && storePoped.length == 0){
                    return true
                } 
                
            } else {
                return false
            }

        } else {
            storePoped.push(curr)
           
        }
        
    }
    if(storePoped.length > 0) return false

    
};