const longestCommonPrefix = function (strs) {

  let result = "";

  // IF any str in strs has no index, 
  const emptyIndex = strs.findIndex(str => {
    // console.log('what am i', str) //
    // console.log("empty index conditional", str === "")
    return str === ""
  });

  // IF [strs] is empty OR IF no index
  if (strs.length === 0 || emptyIndex !== -1) {
    // console.log('empty index FN', emptyIndex)
    // console.log('empty conditional', emptyIndex !== -1)
    // console.log('arr length check', strs.length === 0)
    return "";
  }


  for (let i = 0; i < strs.length; i++) {
    if (strs[0].charAt(i) === strs[i].charAt(i)) {
      result += strs[i].charAt(i)
    }
  }
  return result
};


// var longestCommonPrefix = function (strs) {

//   // IF any str in strs has no index, 
//   const emptyIndex = strs.findIndex(str => {
//     // console.log('what am i', str) //
//     // console.log("empty index conditional", str === "")
//     return str === ""
//   });

//   // IF [strs] is empty OR IF no index
//   if (strs.length === 0 || emptyIndex !== -1) {
//     // console.log('empty index FN', emptyIndex)
//     // console.log('empty conditional', emptyIndex !== -1)
//     // console.log('arr length check', strs.length === 0)
//     return "";
//   }

//   let commonFirstChar = "";
//   for (i = 0; i < strs.length; i++) {
//     const firstChar = strs[i].substring(0, 1);
//     if (commonFirstChar === "") {
//       commonFirstChar = firstChar;
//     } else {
//       if (firstChar !== commonFirstChar) {
//         return "";
//       }
//     }
//   }
//   const newStrs = strs.map(item => item.substring(1));

//   return commonFirstChar + longestCommonPrefix(newStrs);
// };


// console.log(longestCommonPrefix(["flower", "flow", "flight"]))
// console.log(longestCommonPrefix([""]))
// longestCommonPrefix(['dog', 'cat', 'fish'])
// longestCommonPrefix(['dog'])