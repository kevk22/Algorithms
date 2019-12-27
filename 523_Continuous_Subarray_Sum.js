/*
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */

 // one pass O(n) time complexity, O(n) space complexity
var checkSubarraySum = function (nums, k) {
    let kMap = { 0: -1 };
    let sum = 0;

    for (let i = 0; i < nums.length; i++) {
        sum += nums[i];

        if (k !== 0) sum = sum % k;

        if (kMap[sum] !== undefined) {
            if (i - kMap[sum] > 1) return true;
        } else {
            kMap[sum] = i;
        }
    }

    return false;
};

// O(n^2) time complexity, O(1) space complexity
var checkSubarraySum = function (nums, k) {
    for (let i = 0; i < nums.length - 1; i++) {
        let sum = nums[i];

        for(let j = i + 1; j < nums.length; j++) {
            sum += nums[j];
            if (sum === k || (k !== 0 && sum % k == 0)) return true;
        }
    }

    return false;
};