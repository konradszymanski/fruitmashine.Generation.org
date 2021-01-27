
let test = '12345'// a word i want to know if there is 10 inside
let p1=1
let p2=2
let p3=3

  //CREATE a FUNCTION NAMED checkIfLetterIn  accepting 2 parameters named word and named letter. function should check if a letter is inside of the word and return true or false
  function checkIfLetterIn(word,letter){
  if (word.includes(letter)){
  return true
  }else{
  return false}
  }
  
  //USER ANSWERED PU ON HOLD 1 AND 3
  //SO WE KNOW THAT WE NEED TO SPIN AGAIN 2
  let hold='1'
  
  if(!(checkIfLetterIn(hold,'1'))){
  console.log('1 needs spin')
  p1 = 4 //=Math.floor ......
  }
  if(!(checkIfLetterIn(hold,'2'))){
  console.log('2 needs spin')
  p2=4
  }
  if(!(checkIfLetterIn(hold,'3'))){
  console.log('3 needs spin')
  p3=4
  }
//   reel[p1]
  
  
  console.log([p1,p2,p3])
