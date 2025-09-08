let head = {
    glasses: 1
  };
  
  let table = {
    pen: 3,
    __proto__: head
  };
  
  let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table
    
  };
  
  let pockets = {
    money: 2000,
    __proto__: bed
  };


//   pockets → bed → table → head.

// question 2

let hamster = {
    stomach: [],
  
    eat(food) {
    //   this.stomach.push(food);
      this.stomach=[food]  //  another appraoch 
    }
  };
  
  let speedy = {
    // stomach: [],  correct appraoch
    __proto__: hamster
  };
  
  let lazy = {
    // stomach: [],   correct appraoch
    __proto__: hamster
  };
  
  // This one found the food
  speedy.eat("apple");
  console.log( speedy.stomach ); // apple
  
  // This one also has it, why? fix please.
  console.log( lazy.stomach ); // apple

  