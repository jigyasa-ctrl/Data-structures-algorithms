Array.prototype.myReduce = function (callback, initialValue) {
  if (typeof callback !== "function") {
    throw new TypeError("Callback must be a function");
  }

  const arr = this;
  const hasInitial = arguments.length > 1;

  if (arr.length === 0 && !hasInitial) {
    throw new TypeError("Reduce of empty array with no initial value");
  }

  let accumulator = hasInitial ? initialValue : arr[0];
  let startIndex = hasInitial ? 0 : 1;

  for (let i = startIndex; i < arr.length; i++) {
    if (i in arr) {
      accumulator = callback(accumulator, arr[i], i, arr);
    }
  }

  return accumulator;
};

Array.prototype.myReduce = myReduce

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0)); // 6
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4)); // 10
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr));