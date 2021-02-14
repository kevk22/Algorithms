/*
 * @param {number[]} nums
 * @return {number}
 */

//Time complexity: O(n), Space complexity: O(n)
var rob = function (nums) {
  let dp = new Array(nums.length + 1);

  dp[0] = 0;
  dp[1] = nums[0];

  for (let i = 1; i < nums.length; i++) {
    dp[i + 1] = Math.max(dp[i], dp[i - 1] + nums[i]);
  }

  return dp[nums.length];
};

//Optimized
//Time complexity: O(n), Space complexity: O(1)
var rob = function (nums) {
  let prevMax = 0;
  let curMax = 0;

  nums.forEach((el, i) => {
    let temp = curMax;
    curMax = Math.max(curMax, prevMax + el);
    prevMax = temp;
  });

  return curMax;
};