const longestCommonPrefix = function (strs) {

  // check if first letter is the same
  // if same push to arr

  let result = "";

  for (let i = 0; i < strs.length; i++) {
    if (strs[0].charAt(i) !== strs[i].charAt(i)) {
      return "";
    } else if (strs[0].charAt(i) !== strs[i].charAt(i)) {
      result += strs[i].charAt(i)
    }
  }
  return result
};

// longestCommonPrefix(["flower", "flow", "flight"]);
console.log(longestCommonPrefix(["dog", "racecar", "car"]))