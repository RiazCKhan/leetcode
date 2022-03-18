const isPalindrome = (x) => {

  let xArray = x.toString().split('')
  let reverseArray = x.toString().split('').reverse()


  for (let i = 0; i < xArray.length; i++) {

    if(xArray[i] !== reverseArray) {
      console.log('er')
    }
    
  }


}

console.log(isPalindrome(121));
