// console.log(add(1, 2));
// console.log(a);
// function add(a, b) {
//     return a + b;
// }
// var a = 1;
// b = 3;
// function a(){
//     b= 7;
//     function x(){
//         console.log(b);
//     }
//     x()
// }
// a()

// function a(x){
//      return function(y){
//         return x+y
//     }
// }
// console.log(a(2)(3))

// let calculator = {
//     read: function(){
//         this.a = +prompt("a?");
//         this.b = +prompt("b?");
//     },
//     sum: function(){
//         return this.a + this.b;
//     },
//     mul: function(){
//         return this.a * this.b;
//     }
//   };
  
//   calculator.read();
//   alert( calculator.sum() );
//   alert( calculator.mul() );


// let ladder = {
//     step: 0,
//     up() {
//       this.step++;
//       return this
//     },
//     down() {
//       this.step--;
//       return this
//     },
//     showStep: function() { // shows the current step
//       console.log( this.step );
//       return this;
//     }
//   };

//   ladder.up();
// ladder.up();
// ladder.down();
// ladder.showStep(); // 1
// ladder.down();
// ladder.showStep(); // 0

// ladder.up().up().down().showStep().down().showStep();

// function foo(num){
//     this.count = 1;
//     console.log("foo:" + num);
//     this.count++;
// }
// foo.count++;

// var i;
// for (i = 0; i < 10; i++) {
//     if(i<5){
//         foo(i);
//     }
// }
// console.log(foo.count);

function delay(ms) {
    return new Promise(function(resolve, reject) {
        setTimeout(resolve, ms);
    }
    )
  }
  
  delay(3000).then(() => alert('runs after 3 seconds'));


