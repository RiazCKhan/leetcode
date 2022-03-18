const isPalindrome = (x) => {

  let xStr = x.toString()
  let reverseStr = x.toString().split('').reverse().join('')

  if (xArray !== reverseArray) {
    return false
  }
  return true
}

console.log(isPalindrome(121));
