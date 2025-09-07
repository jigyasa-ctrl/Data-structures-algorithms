
const sumTo =(n) => {
  let sum = 0
  if(n == 1){
    return 1
  } else {
    return n + sumTo(n-1)
  }
}

const factorial =(n) => {
  let sum = 0
  if(n == 1){
    return 1
  } else {
    return n * factorial(n-1)
  }
}

function fib(n) {
  return n <= 1 ? n : fib(n - 1) + fib(n - 2);
}

console.log(sumTo(3))
console.log(factorial(3))
console.log(fib(3))
