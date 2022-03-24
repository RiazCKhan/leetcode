const mergeTwoLists = function (list1, list2) {

  if (list1.length === 0 && list2.length ===0){
    return [];
  }

  let result = [];

  let arrOne = Array.from(list1)
  let arrTwo = Array.from(list2)

  for (let i = 0; i < arrOne.length; i++) {
    result.push(arrOne[i])
  }

  for (let i = 0; i < arrTwo.length; i++) {
    result.push(arrTwo[i])
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