// Online Javascript Editor for free
// Write, Edit and Run your Javascript code using JS Online Compiler

// console.log("Try programiz.pro");
function mySort(compareFn) {
    const mergeSort = function(arr) {
        if (arr.length <= 1) return arr;
        
       const middle = Math.floor(arr.length/2);
       const left = mergeSort(arr.slice(0, middle));
        const right = mergeSort(arr.slice(middle));
        return merge(left, right);
    }
    const merge = function(left, right){
        let result =[],i=0,j=0;
        while(i<left.length && j<right.length){
            if(compareFn(left[i], right[j]) <= 0){
                result.push(left[i++])
            } else {
                result.push(right[j++])
            }
        }
        return result.concat(left.slice(i)).concat(right.slice(j));
    }
    return mergeSort(this);
    
    
}

Array.prototype.mySort = mySort

const count = 3;
const arr = [1,4,3,6,7, 30]
// output -> [ 30, 7, 6 ]
const desc = arr.mySort((a,b) => b-a)
const final = desc.slice(0,count)
console.log(final);
 
