// find the sum of salary of all the employess present in all the departments. - recurrsion practise


let company = { // the same object, compressed for brevity
  sales: [{name: 'John', salary: 1000}, {name: 'Alice', salary: 1600 }],
  development: {
    sites: [{name: 'Peter', salary: 2000}, {name: 'Alex', salary: 1800 }],
    internals: [{name: 'Jack', salary: 1300}]
  }
};

const salarySum = function(department){
  if(Array.isArray(department)){
    return department.reduce((prev, current) => prev + current.salary, 0)
    
  } else{
    let sum = 0;
    for(let company of Object.values(department)){
      sum += salarySum(company);
     
    }
    return sum
  }
}
console.log(salarySum(company)) // 7700
