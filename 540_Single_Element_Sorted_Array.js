/*
 * @param {number[]} nums
 * @return {number}
 */

// Time complexity: O(n), Space complexity: O(1)
var singleNonDuplicate = function(nums) {
    let low = 0;
    let high = nums.length - 1;

    while (low <= high) {
      let mid = Math.floor( (low + high) / 2);
      
      if (nums[mid] !== nums[mid + 1] && nums[mid] !== nums[mid - 1]) {
        return nums[mid];
      }

      if ( (mid % 2 !== 0 && nums[mid] !== nums[mid - 1]) 
        || (mid % 2 === 0 && nums[mid] !== nums[mid + 1])) {
        high = mid - 1;
      } else {
        low = mid + 1;
      }

    }

    return - 1;
};