const mergeTwoLists = function (list1, list2) {

  let result = [];

  list1.forEach(element => {
    result.push(element)
  });

  list2.forEach(element => {
    result.push(element)
  })

  result.sort((a, b) => a - b)

  return result
};

// PLAN
// forEach each List
// Push each item onto result arr
// result.sort
// return result

let arr1 = [1, 2, 3]
let arr2 = [1, 2, 4]

mergeTwoLists(arr1, arr2)