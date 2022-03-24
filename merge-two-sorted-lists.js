const mergeTwoLists = function(list1, list2) {

  let result = [];

  list1.forEach(element => {
    return result.push(element);
  });

  list2.forEach(element => {
    return result.push(element);
  });

  result.sort((a, b) => a - b);

  return result;
};


let arr1 = [1, 2, 3];
let arr2 = [1, 2, 4];

mergeTwoLists(arr1, arr2)

// PLAN
// forEach each List
// Push each item onto result arr
// result.sort
// return result