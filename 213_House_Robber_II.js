/*
 * @param {number[]} nums
 * @return {number}
 */
var rob = function(nums) {
    if (nums.length < 2) return nums[0]
    
    let max1 = findMax(nums.slice(1));
    let max2 = findMax(nums.slice(0, nums.length - 1));
    
    return max1 > max2 ? max1 : max2;
};

function findMax(arr) {
    let dp = new Array(arr.length + 1);
    
    dp[0] = 0;
    dp[1] = arr[0];
    
    for (let i = 1; i < arr.length; i++) {
        dp[i + 1] = Math.max(dp[i], dp[i - 1] + arr[i]);
    }
    
    return dp[arr.length];
}