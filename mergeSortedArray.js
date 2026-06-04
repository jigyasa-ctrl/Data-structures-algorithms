function mergeArray(a, b){
    let i=0, j=0, result=[]
    while(i<a.length && j<b.length){
        let curr = a[i];
       
            if(curr < b[j]){
            result.push(curr)
         
            i++
        } else {
            result.push(b[j])
           
            j++
        }
     
        
    }
    while(i<a.length){
         let curr = a[i];
        result.push(curr)
        i++
    }
    while(j<b.length){
         let curr = b[j];
        result.push(curr)
        j++
    }
   
    return result
}
let a= [1,3,5]
let b = [2,4,6]

// Output
// [1,2,3,4,5,6]

console.log(mergeArray(a, b))