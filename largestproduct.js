arr = [1,2,5,4,9,6]
let largest = 0;
let secondlargest = 0;
for(let i=0;i<=arr.length-1;i++){
    const curr = arr[i]
    if(curr > largest){
        secondlargest = largest
        largest = curr
    } else if (curr > secondlargest && curr !==largest){
        secondlargest = curr
        
    }
    
    
}
console.log(largest * secondlargest)