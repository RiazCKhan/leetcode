const isValid = function(s) {

  // IF input arr is uneven
  if (s.length % 2 !== 0) {
    return false;
  }

  let stack = []; // What is a Stack ?

  for (let i = 0; i < s.length; i++) { // Why s.length -1 ?
    if (s[i] === '(' || s[i] === '[' || s[i] === '{') {
      stack.push(s[i]);
    } else {
      // --- NOTE ---
      // Variable 'last' will always be an 'open bracket'.
      // This is because all items in the stack arr
      // are conditional pushed based on being an 'open bracket'.
      let last = stack.pop();

      // --- NOTE ---
      // Inside the 'Else'  block
      // s[i] will always be a closing bracket

      console.log('bang input', s[i]);
      console.log('last', last);
      console.log('bang conditional', (!s[i] === ']' && last === '['));
      console.log('bang conditional', (!s[i] === ')' && last === '('));

      // --- BANG EXPLANATION ---
      // For example:
      // if s[i] = ] && last = (
      // The && requires both conditions to be true
      // (s[i] is true && last is false) === false
      // This indicates a invalid parentheses
      // By adding the BANG, the state is now true
      // If the condition evaluates true and the FN returns.
      if (!((s[i] === ')' && last === '(') ||
        (s[i] === ']' && last === '[') ||
        (s[i] === '}' && last === '{'))) {
        return false;
      }
    }
  }

  // IF after matching stack is not empty
  // then not all parentheses have a valid closing pair
  // FN return false
  if (stack.length !== 0) {
    return false;
  }
  return true;
};

// Solution Brain Storm
// Input = string
// Output = boolean
// Split Str to get individual 'items'

// TEST CASES
// Happy Path --> return true
let test1 = "[]";
let test2 = "[]()";
let test3 = "[](){}";
let test4 = '{[]}';

// Unhappy --> return false
let test5 = "[)";
let test6 = "}{";
let test7 = "[](]";
let test8 = "{)[]()";
let test9 = "";

isValid(test1);