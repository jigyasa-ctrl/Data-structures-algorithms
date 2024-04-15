/**
 * Read FAQs section on the left for more information on how to use the editor
**/
// DO NOT CHANGE FUNCTION NAME

//Submission  -> https://devtools.tech/questions/implement-a-credit-card-masker-or-klarna-frontend-interview-question-or-javascript/submissions/BUPT4GRQpmrIFMx6ZAfH?ref=item-card 

function maskify(cardNumber) {
  // write your code below
  let inputType = typeof cardNumber
  if(inputType !== "number" && inputType !== "string"){
    return ""
  }
  let cc = String(cardNumber)
  let length = cc.length
  if(length < 6){
    return cc
  }

  let first = cc.slice(0, 1)
  let lastFour = cc.slice(-4)
  // let masked = cc.slice(1,length-4).replace(/\d/g,"#")
  let masked = ''
  for(let i = 1; i<length-4; i++){
    let current = cc[i];
    if(!isNaN(parseInt(current, 10))){
      masked += "#"
    }else{
      masked += cc[i]
    }
  }

  return `${first}${masked}${lastFour}`
}
