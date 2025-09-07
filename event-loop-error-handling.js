function err(e=0){
    throw new Error(e);
    }
    queueMicrotask(err);
    console.error(1);
    setTimeout(() => err(2));
    
    Promise.resolve().then(() => err(3)).then(() => err(3.1));
    
    Promise.resolve().then(() => setTimeout(() => err(4))).then(() => err(4.1));
    
    Promise.resolve().then(() => err(5)).then(() => err(5.1));
    
    setTimeout(() => err(6));


    //output ->
    // why because when browser encounters unhandled error via uh=handleld promise rejection, then it logs that error after the macrostack que,
    //  even though promise executes first, but console log of error happens after macro stack

// 1
// 0
// 2
// 6
// 4
// 3
// 4.1 
// 5

// what if errors were handeled ?

function err(e = 0) {
    throw new Error(e);
  }
  
  // Helper to catch errors in microtasks
  function safeQueueMicrotask(fn) {
    queueMicrotask(() => {
      try {
        fn();
      } catch (e) {
        console.log("Caught (microtask):", e.message);
      }
    });
  }
  
  // 1️⃣ queueMicrotask
  safeQueueMicrotask(() => err(0));
  
  // 2️⃣ Synchronous
  console.error(1);
  
  // 3️⃣ setTimeout macrotasks
  setTimeout(() => {
    try {
      err(2);
    } catch (e) {
      console.log("Caught (setTimeout):", e.message);
    }
  });
  
  setTimeout(() => {
    try {
      err(6);
    } catch (e) {
      console.log("Caught (setTimeout):", e.message);
    }
  });
  
  // 4️⃣ Promise chains
  Promise.resolve()
    .then(() => err(3))
    .then(() => err(3.1))
    .catch(e => console.log("Caught (Promise):", e.message));
  
  Promise.resolve()
    .then(() => setTimeout(() => {
      try { err(4); } catch (e) { console.log("Caught (setTimeout):", e.message); }
    }))
    .then(() => err(4.1))
    .catch(e => console.log("Caught (Promise):", e.message));
  
  Promise.resolve()
    .then(() => err(5))
    .then(() => err(5.1))
    .catch(e => console.log("Caught (Promise):", e.message));


    // output ->

    // 1
    // 0
    // 3
    // 4.1
    // 5
    // 2
    // 6
    // 4

