// Find 2 numbers in an Arr that = target num
// Input = Arr, target = int
// Output = Arr corresponding the the value position = target

// nums = arr

const twoSum = (nums, target) => {

  let result = [];

  for (let i = 0; i <= nums.length; i++) {
    console.log('this is outter i', i);
    for (let j = i + 1; j <= nums.length; j++) {
      console.log('this is inner j', j);
      if (nums[i] + nums[j] === target) {
        result.push(i);
        result.push(j);
      }
    }
  }
  return result;
};

twoSum([2, 7, 11, 15], 9);


// take first element
// add every element to it to see if  = target