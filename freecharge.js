const a = {
    ab: function() {
      console.log(this);
    },
    cd: () => {
      console.log(this);
    },
    ef() {
      console.log(this);
    }
  };
  const {
    ab,
    cd,
    ef
  } = Object.assign({}, a);
  
  // a.ab(); //  a obj
  // a.cd(); // undefined -> this sub -> window
  // a.ef(); //   a obj
  
  // ab(); // undefined
  // cd(); // undefined
  // ef(); // undefined
  
  
  
  
  // async function chart(value){
  // console.log("start", value)
  // await console.log("middle", value)
  // console.log("end",value)
  // }
  
  // chart("first")
  // chart("second")
  
  
  // // start first
  // // start second
  
  // // end first
  // // middle second
  // // end second
  
  
  console.log(1);
  setTimeout(() => console.log(1000), 1000);
  console.log(2);
  setTimeout(() => console.log(0), 0);
  console.log(3);
  Promise.resolve('Success').then(function(value) {
    console.log(value);
  });
  setTimeout(() => console.log(100), 100);
  console.log(4);
  setTimeout(() => console.log(10), 10);
  console.log(5);
  
  
  Promise.resolve('Success').then(function(value) {
    console.log(value);
  });
  
  
  // 1.    
  // 2
  // 3
  // 4
  // success 
  // success
  // 1000,
  // 0, 
  // 100, 
  // 10
  
  //  let arr = [1,2,3,[2,3,[4,5]]]
  //  let final = []
  // function flatten(arr) {
  //     arr.forEach(item => {
  //         if(!Array.isArray(item)){
  //             final.push(item)
  //         } else {
  //             flatten(item)
  //         }
          
  //     })
   
  // }
  // flatten(arr)
  // console.log(final)
  
  
  const x = {
                              a: {
                                  b: {
                                      c: "hello",
                                      d: null,
                                      e : {
                                          f: "world"
                                      }
                                  }
                              }
                          }
                          
  function path(str){
      let extractedobj = x
      let splitedStr = str.split("")
      splitedStr.forEach((item) => {
          extractedobj = extractedobj[item]
      })
      
      console.log(extractedobj)
      
      
  }
  
  
  path("abe") // { f : world}
  path("abc") // hello
  path("abd") // null
  path("ak")
  
  
  
  
  
  
  