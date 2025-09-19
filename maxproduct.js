// Maximum Product in Contiguous Array

/**
 * @param {number[]} numbers
 * @return {number}
 */
export default function maxProductSubArray(numbers) {
    let result = numbers[0];
    let maxProduct = numbers[0];
    let minProduct = numbers[0];
    if (numbers.length == 1) {
      return result;
    }
  
    if (numbers.length > 1) {
      for (let i = 1; i <= numbers.length - 1; i++) {
        let current = numbers[i];
        let prevMax = maxProduct;
        let prevMin = minProduct;
        maxProduct = Math.max(current, current * prevMax, current * prevMin);
        minProduct = Math.min(current, current * prevMax, current * prevMin);
  
        result = Math.max(maxProduct, result);
      }
    }
  
    return result;
  }
  

//   Input: numbers = [1,2,-3,5,1]
// Output: 5
// Explanation: The subarray [5, 1] has the largest product i.e 5.

// Input: numbers = [9]
// Output: 9
// Explanation: The single-element subarray [9] has the largest product

// Input: numbers = [1,2,0,-1,8,-4]
// Output: 32
// Explanation: The subarray [-1, 8, -4] has the largest product i.e 32.