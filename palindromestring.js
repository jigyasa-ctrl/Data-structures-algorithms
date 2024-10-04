const palindrome = function(str){
  return str == str.split("").reverse().join("")
}

time comp -> o(n) + o(n) + o(n) => o(3n) => o(n)
space -> o(n)


OR

const palindrome = function(str){
  for(let i=0; i<str.length/2; i++){
    if(str[i] !== str[str.length - 1 - i]){
      return false
    } return true
  }
}
