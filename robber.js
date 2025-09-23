/**
 * @param {number[]} numbers
 * @return {number}
 */

//Dynamic Programming Approach 
// dp[i]=max(dp[i−1],numbers[i]+dp[i−2])
export default function neighborhoodTheft(numbers) {
    let n = numbers.length 
    if(n == 0) return 0
    if(n==1) return numbers[0]
    if(n==2) return Math.max(numbers[0], numbers[1])
  
    let dp = new Array(n).fill(0)
    dp[0] = numbers[0]
    dp[1] = Math.max(numbers[0], numbers[1])
    
  
    for(let i=2;i<=numbers.length-1; i++){
      dp[i] = Math.max(dp[i-1], numbers[i] + dp[i-2])
    }
  
    return dp[n-1];
    
  }
  

// Input: numbers = [1,2,3,1]
// Output: 4

// Input: numbers = [2,7,9,3,1]
// Output: 12

// Input: numbers = [3,6,1,0,6,0,0,9]
// Output: 21