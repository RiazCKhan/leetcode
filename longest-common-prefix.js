const longestCommonPrefix = function (strs) {

// check if first letter is the same
// if same push to arr

let arr = [];

  for (let i = 0; i <= strs.length; i++) {
   
    console.log(strs[i])

  }


  // let prefixArr = [];
  // let result = [];

  // strs.forEach((str) => {
  //   if (!prefixArr.includes(str.substring(0, 1)))
  //     prefixArr.push(str.substring(0, 1));
  // });

  // let prefixStr = prefixArr.join('');

  // strs.forEach((str) => {
  //   if (prefixStr === str.substring(0, 1)) {
  //     result.push(prefixStr);
  //   }
  // });

  // if (result.length === 0) {
  //   return "";
  // } else {
  //   return result[0];
  // }

};

longestCommonPrefix(["flower", "flow", "flight"]);
// console.log(longestCommonPrefix(["dog", "racecar", "car"]));