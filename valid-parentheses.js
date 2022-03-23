const isValid = function (s) {

  // IF input arr is uneven
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack = []; // What is a Stack ?

  for (let i = 0; i < s.length; i++) { // Why s.length -1 ?
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i])
    } else {
      // Will always be an open bracket
      // This is because all items in the stack arr 
      // are conditional pushed based on being an 'open bracket'
      let last = stack.pop() 
      console.log('bang input', s[i])
      console.log('last', last)
      console.log('bang conditional', !(s[i] === ')' && last === '('))
      if (! ((s[i] === ')' && last === '(') ||
        (s[i] === ']' && last === '[') ||
        (s[i] === '}' && last === '{'))) {
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

isValid(test4)