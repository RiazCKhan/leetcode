// const mergeTwoLists = function (list1, list2) {

//   if (list1.length === 0 && list2.length ===0){
//     return [];
//   }

//   let result = [];

//   let arrOne = Array.from(list1)
//   let arrTwo = Array.from(list2)

//   for (let i = 0; i < arrOne.length; i++) {
//     result.push(arrOne[i])
//   }

//   for (let i = 0; i < arrTwo.length; i++) {
//     result.push(arrTwo[i])
//   }

//   result.sort((a, b) => a - b);

//   return result;
// };

var mergeTwoLists = function(l1, l2) {
  // If there are no more items in linked list 1, return the rest of list2
  if (!l1) {
    return l2;
  }
  // If there are no more items in list2, return the rest of list1
  if (!l2) {
    return l1;
  }

  // Assign reference values
  const val1 = l1.val;
  const val2 = l2.val;

  // Create var to store sorted merged lists
  let mergedNode;

  // Compare var values
  if (val1 < val2) {
    mergedNode = new ListNode(val1);
    mergedNode.next = mergeTwoLists(l1.next, l2);
  } else {
    mergedNode = new ListNode(val2);
    mergedNode.next = mergeTwoLists(l2.next, l1);
  }
  return mergedNode;
};

let arr1 = [1, 2, 4];
let arr2 = [1, 3, 4];

console.log(mergeTwoLists(arr1, arr2))

// PLAN
// forEach each List
// Push each item onto result arr
// result.sort
// return result