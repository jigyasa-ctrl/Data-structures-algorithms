let arr1 = [[10,15], [20,30], [60,120]] 
let arr2 = [[0,8], [60,70]]
k=8 
// output [60, 68]

function findInterval(A, B, k) {
    let i = 0, j = 0;

    while (i < A.length && j < B.length) {
        let start = Math.max(A[i][0], B[j][0]);
        let end = Math.min(A[i][1], B[j][1]);

        // Check if overlap exists and is at least length k
        // console.log(end, start,end - start >= k)
        if (end - start >= k) {
            return [start, start + k];
        }

        // Move the pointer which has smaller end
        if (A[i][1] < B[j][1]) {
            i++;
        } else {
            j++;
        }
    }

    return null; // no valid interval found
}

console.log(findInterval(arr1, arr2, k))