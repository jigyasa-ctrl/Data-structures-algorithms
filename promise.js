let data = []
function abc(){
    for(let i=1; i<4; i++){
    data.push(new Promise((resolve, reject) => {
        setTimeout(() => resolve(i), i*1000)
      }))
    }
}
abc();


Promise.all(
    data
    ).then(alert); // 1,2,3

    // in promise.all , it returns with same sequence, doesnt matter how long any of the element takes to resolve.
    // if any 1 fails immediately it throws error and rejects the promise.