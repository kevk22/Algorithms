/*
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
// O(n) time complexity
var subarraySum = function(nums, k) {
  let count = 0;
  let curSum = 0;
  let sums = {0: 1};
  
  nums.forEach(num => {
    curSum += num;

    if (sums[curSum - k]) count += sums[curSum - k];
    if (!sums[curSum]) sums[curSum] = 0;

    sums[curSum]++;
  });
    
    
  return count;
}



// Naive O(n^2) time complexity
var subarraySum = function(nums, k) {
    let count = 0;
   
    for (let i = 0; i < nums.length; i++) {
      let sum = 0;
      for (let j = i; j < nums.length; j++) {
        sum += nums[j];
        if (sum === k) count++;
      }
    }
  
    return count;
};