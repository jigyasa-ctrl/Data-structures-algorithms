// do not change function name
function deleteNode(obj, key){
    let final = {}
    for(let i in obj){
        if(i !== key){
            final[i] = typeof obj[i] == "object" ? deleteNode(obj[i], key) : obj[i]
        }
    }
    return final
}

// return final


let obj = {
  a: {
    b: {
        d: {
            e: "abc"
        },
    },
    c: 3
  }
};
let abc = deleteNode(obj, "e")
console.log(abc)