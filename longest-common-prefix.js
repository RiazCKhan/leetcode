const longestCommonPrefix2 = function (strs) {

  let result = "";

  // how to check IF no common prefix exists
  // return empty string if non exists

  const emptyIndex = strs.findIndex(str => {

    // console.log('what am i', str) //
    // console.log("not found -1", str === "")

    return str === ""
  });


  for (let i = 0; i < strs.length; i++) {
    if (strs[0].charAt(i) === strs[i].charAt(i)) {
      result += strs[i].charAt(i)
    }
  }
  return result
};


var longestCommonPrefix = function (strs) {

  // If any str in strs has no index, end run
  const emptyIndex = strs.findIndex(str => {
    // console.log('what am i', str) //
    // console.log("not found -1", str === "")
    return str === ""
  });

  if (strs.length === 0 || emptyIndex !== -1) {
    return "";
  }
  let commonFirstChar = "";
  for (i = 0; i < strs.length; i++) {
    const firstChar = strs[i].substring(0, 1);
    if (commonFirstChar === "") {
      commonFirstChar = firstChar;
    } else {
      if (firstChar !== commonFirstChar) {
        return "";
      }
    }
  }
  const newStrs = strs.map(item => item.substring(1));
  return commonFirstChar + longestCommonPrefix(newStrs);
};


longestCommonPrefix(["flower", "flow", "flight"])
// longestCommonPrefix(["dog", "racecar", "car"])