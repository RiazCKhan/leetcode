const isValid = function (s) {

  let inputArr = s.split('')

  for (let i = 0; i <= inputArr.length; i++) {

    // console.log(inputArr[i])
    if (inputArr[i] === '[') {
      // console.log('first if', inputArr[i])
      if (inputArr[i + 1] !== ']') {
        return false
      }
    }

    if (inputArr[i] === '(') {
      if (inputArr[i + 1] !== ')') {
        return false
      }
    }



  }
  return true;
};

// Solution Brain Storm
// Input = string
// Output = boolean
// Split Str to get individual 'items'
//

// TEST CASES
// Happy Path --> return true
let test1 = "[]"
let test2 = "[]()"
let test3 = "[](){}"

// Unhappy --> return false
let test4 = "[)"
let test5 = "}{"
let test6 = "[](]"
let test7 = "{)[]()"
let test8 = ""

isValid(test2)