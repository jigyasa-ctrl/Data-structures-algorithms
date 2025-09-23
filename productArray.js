// Given an array of integers numbers, return a new array result where each element result[i] represents the product of all the elements in numbers except for numbers[i].

function arrayProductExcludingCurrent(numbers) {
    let result = [];
    for (let i = 0; i <= numbers.length-1; i++) {
      let productArr = [...numbers]
      productArr.splice(i,1)
      let data = productArr.reduce((acc, curr) => acc = acc * curr, 1)
      result.push(data)
    }
     console.log(result)
  }

  numbers = [1,2,3] // [6,3,2]
arrayProductExcludingCurrent(numbers)