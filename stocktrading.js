// brute force ->
function optimalStockTrading(prices) {
    let max = 0;
    for (let i = 0; i <= prices.length - 1; i++) {
      const curr = prices[i];
      let last = prices.length - 1;
      while (last > 0) {
        let newMax = prices[last] - curr;
        if (newMax == 0 && max == 0) {
          return max;
        }
        if (newMax > max) {
          max = newMax;
        }
        last--;
      }
    }
    return max ? max : 0;
  }

  // optimal solution ->>
  export default function optimalStockTrading(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
  
    for (let price of prices) {
      minPrice = Math.min(minPrice, price); // removed repetition of calculation min prices by storing in a variable
      maxProfit = Math.max(maxProfit, price - minPrice);
    }
  
    return maxProfit;
  }

//   Input: prices = [1,2,3,4]
// Output: 3

// Input: prices = [4,3,2,1]
// Output: 0

// Input: prices = [6,8,1,2,30,19]
// Output: 29