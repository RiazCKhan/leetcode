const isValid = function (s) {

  let stack = []; // What is a Stack ?

  // IF input arr is uneven
  if (s.length % 2 !== 0) {
    return false;
  }

  for (let i = 0; i < s.length - 1; i++) { // Why s.length -1 ?
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      let last = stack.pop()
      if (!(s[i] === ')' && last === '(') ||
        (s[i] === ']' && last === '[') ||
        (s[i] === '}' && last === '{')) {
        return false
      }
    }
  }
  if (stack.length !== 0) {
    return false;
  }
  return true
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
let test4 = '{[]}'

// Unhappy --> return false
let test5 = "[)"
let test6 = "}{"
let test7 = "[](]"
let test8 = "{)[]()"
let test9 = ""

isValid(test3);