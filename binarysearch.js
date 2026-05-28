function binarySearch(arr, target) {
    let left = 0;
    let right = arr.length-1;
    while(left <= right){
        let mid = Math.floor((left+right)/2);
        let middle = arr[mid]
        if(middle == target) return mid;
        if(target < middle){
            right = mid - 1
        } else {
            left = mid +1
        }
    }
    return -1;
}



let arr = [3,4,5,6,7,8]
console.log(binarySearch(arr,8))