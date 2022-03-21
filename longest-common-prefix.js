// const longestCommonPrefix = function (strs) {

//   let result = "";

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

//   for (let i = 0; i < strs.length; i++) {

//     let firstChar = strs[i].charAt(i)
//     // console.log(firstChar)

//     if (firstChar === strs[i].charAt(i)) {
//       console.log(firstChar)
//       console.log(strs[i].charAt(i))
//       result += strs[i].charAt(i)
//     }
//   }
//   console.log(result)
//   return result
// };


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

//     // console.log('first char', firstChar)
//     // console.log('OUTSIDE', commonFirstChar)

//     if (commonFirstChar === "") {

//       // console.log('common first char condition', commonFirstChar === "")

//       commonFirstChar = firstChar;

//     } else if (firstChar !== commonFirstChar) {
//       return "";
//     }
//   }

//   const newStrs = strs.map(item => item.substring(1));

//   console.log('new strs', newStrs)
//   console.log(commonFirstChar)

//   return commonFirstChar + longestCommonPrefix(newStrs);
// };

var longestCommonPrefix = function(strs) {
	// We take the first word as default longest prefix
    let longestPrefix = strs[0];
    
	// Then we iterate through the other words
    for (let i = 1; i < strs.length; i++) {
		// Creating a variable for new longest prefix, cause we need to use the previous one for comparison
        let newLongestPrefix = "";
		
		// And now we iterate through our current longest prefix and compare with new word in our loop
        for (let k = 0; k < longestPrefix.length; k++) {
			// Just compare values at same positions from the start, and write value if it exists
            if (longestPrefix[k] === strs[i][k]) {
                newLongestPrefix += strs[i][k];
            } else {
				// As our comparison is failed then we want to break our loop
                break;
            }
        }
		// And write our new longest prefix
        longestPrefix = newLongestPrefix;
    }
	
    // ta-da!
    return longestPrefix;
};


longestCommonPrefix(["flower", "flow", "flight"])
// console.log(longestCommonPrefix([""]))
// longestCommonPrefix(['dog', 'cat', 'fish'])
// longestCommonPrefix(['dog'])