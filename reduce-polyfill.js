let myReduce = function (func, initialValue) {
    let array = this;
    let accumulator = initialValue ? initialValue : this[0];
    let currentValue;
    if (array.length !== 0) {
      for (let i = initialValue ? 0 : 1; i < array.length; i++) {
        if (array[i]) {
          currentValue = array[i];
          accumulator = func(accumulator, currentValue);
        }
      }
      return accumulator;
    } else return 0;
  };

Array.prototype.myReduce = myReduce

console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 0)); // 6
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr, 4)); // 10
console.log([1, 2, 3].myReduce((prev, curr) => prev + curr));