

var removeDuplicates = function(nums) {
    
  for (let i = 0; i < nums.length; i++) {
    for (let j = 0; j < nums.length; j++) {
     
      if (nums[i] === nums[j]) {
        console.log('hs')
      }

    }
    console.log(nums)
  }

};

let input = [0,0,1,1,1,2,2,3,3,4]

removeDuplicates(input)