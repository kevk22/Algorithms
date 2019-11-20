/*
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let count = {};
  
    for (let i = 0; i < nums.length; i++) {
      let num = nums[i];
      
      if (!count[num]) {
        count[num] = 1;
      } else if (count[num] > 0) {
        delete count[num];
      } else {
        count[num]++;
      } 
    }
  
    return Object.keys(count)[0];
};