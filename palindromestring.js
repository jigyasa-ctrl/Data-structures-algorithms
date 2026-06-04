const palindrome = function(str){
  return str == str.split("").reverse().join("")
}

// time comp -> o(n) + o(n) + o(n) => o(3n) => o(n)
// space -> o(n)


// OR

const palindrome2 = function(str){
  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false
    } return true
  }
}

//OR

// two pointer

function isValidPalindrome(s) {
  if(s.length == 1) return true
  if(typeof s !== "string") return false
  let str = s
  let middle = Math.floor(str.length/2)
  let i=0,j=s.length-1;
  
  while(i<=middle){
      let curr = s[i];
      if(curr == s[j]){
          i++;
          j--
      } else {
          return false
      }
  }
  
  return true
  
}
console.log(isValidPalindrome("racecar"))
