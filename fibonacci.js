Fibonacci Series ->

[0,1,1,2,3,5,8,13,....]

// f(0) = 0 , f(1) = 1
// F(n) = F(n-1) + F(-2), for n > 1

const fib = function (n) {
  if (n <= 1) return n;
  return fib(n - 1) + fib(n - 2);
}

fib(3); // 2 


OR


const fib = (n) => (n < = 1 ? n : fib(n - 1) + fib(n - 2));
