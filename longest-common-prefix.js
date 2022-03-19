// identify 'prefix'
// what is a prefix, common string at the begining of the world

// input = arr
// output = str

// potential tools
// match, includes, substr, split, indexOf

const longestCommonPrefix = function(strs) {

  let prefixArr = [];
  let result = [];

  strs.forEach((str) => {
    if (!prefixArr.includes(str.substring(0, 2)))
      prefixArr.push(str.substring(0, 2));
  });

  let prefixStr = prefixArr.join('');

  strs.forEach((str) => {
    if (prefixStr === str.substring(0, 2)) {
      result.push(prefixStr);
    }
  });

  return result[0];
};

console.log(longestCommonPrefix(["flower", "flow", "flight"]));