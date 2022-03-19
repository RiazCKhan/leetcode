const longestCommonPrefix = function (strs) {

  // check if first letter is the same
  // if same push to arr

  let result = "";

  if (strs[0].substring(0, 1) !== strs[1].substring(0, 1)) {
    return ""
  }

  for (let i = 0; i < strs.length; i++) {
    // console.log('prefix', strs[0].charAt(i))
    // console.log('compare', strs[i].charAt(i))
    if (strs[0].charAt(i) === strs[i].charAt(i)) {
      result += strs[i].charAt(i)
    }
  }
  // console.log('result', result)
  return result
};

// longestCommonPrefix(["flower", "flow", "flight"]);
longestCommonPrefix(["dog", "racecar", "car"])