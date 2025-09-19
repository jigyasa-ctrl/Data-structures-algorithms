function mostCommonElements(numbers, k) {
    let largest = 0;
    let myMap = new Map();
    let result = []
    for (let i = 0; i <= numbers.length - 1; i++) {
      let curr = numbers[i];
      if (myMap.has(curr)) {
        let val = myMap.get(curr);
        myMap.set(curr, val + 1);
      } else {
        myMap.set(curr, 1);
      }
    }
    for(const[key, value] of myMap){
        if(value >= largest){
            result.unshift(key)
            largest = value
        } else {
            result.push(key)
        }
       
    }
    return result.splice(0, k)
  }

  console.log(mostCommonElements([7,7,7,8,8,9,9,9], 3))
