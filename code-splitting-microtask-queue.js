// problamatic snippet


let i = 0
start = Date.now()
function abc(){
    do {
        i++
    } while (i % 1e9 !== 0){
        alert("Done in" + (Date.now() - start) + "ms")
    }
}
abc() 

// Done in 2371ms -> blocks the call thread till this time


//alternate solution


let y = 0;
start = Date.now()

function count() {
    do {
        y++
    } while (y % 1e6 !== 0){
        if(y == 1e9){
         alert("Done in" + (Date.now() - start) + "ms")

        } else{
            setTimeout(() =>{
                count()
            }, 0)
        }
    }
}
count()

// Done in7022ms -> took more time but doesnt block the main tread

let z = 0;
start = Date.now()

function count() {
    if(z < 1e9-1e5){
        setTimeout(count);
    }
    do {
        z++
    } while (z % 1e5 !== 0){
        if(z == 1e9){
         alert("Done in" + (Date.now() - start) + "ms")
        }
    }
}
count()


// way faster approach ->

// because microstack has no delay unlike setimeout and executes immediately without any delay

k = 0
start = Date.now()
async function count() {
    while (k < 1e9) {
      for (let j = 0; j < 1e5; j++) k++;
      await Promise.resolve(); // yield to event loop
    }
    alert("Done in" + (Date.now() - start) + "ms");
  }
  count();

// what if we want to use something in macrostack only but takes less time and no delay like settimeout ?
// MessageChannel 
let l = 0;
let start = Date.now();

// Create a MessageChannel
const channel = new MessageChannel();

channel.port1.onmessage = () => {
  let chunk = 0;
  do {
    l++;
    chunk++;
  } while (chunk < 1e6 && i < 1e9);

  if (l < 1e9) {
    channel.port2.postMessage(null); // schedule next chunk
  } else {
    alert("Done in " + (Date.now() - start) + " ms");
  }
};

// start the first chunk
channel.port2.postMessage(null);
