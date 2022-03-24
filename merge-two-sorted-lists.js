const mergeTwoLists = function (list1, list2) {

  if (list1.length === 0 && list2.length ===0){
    return [];
  }

  let result = [];

  for (let i = 0; i < list1.length; i++) {
    result.push(list1[i])
  }

  for (let i = 0; i < list2.length; i++) {
    result.push(list2[i])
  }

  result.sort((a, b) => a - b);

  return result;
};


let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

console.log(mergeTwoLists(arr1, arr2))

// PLAN
// forEach each List
// Push each item onto result arr
// result.sort
// return result