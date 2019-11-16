/*
 * @param {number[]} nums
 * @return {number[][]}
 */

// Optimal
var threeSum = function (nums) {
    if (nums.length <= 2) return [];

    let sorted = nums.sort((a, b) => a - b);
    let res = [];

    for (let i = 0; i < sorted.length - 2; i++) {
        if (sorted[i] > 0) break;
        if (i !== 0 && sorted[i] === sorted[i - 1]) continue;

        let low = i + 1; 
        let high = nums.length - 1;
        let target = (sorted[i] * -1);

        while (low < high) {
            if (sorted[low] + sorted[high] === target) {
                res.push([sorted[i], sorted[low], sorted[high]]);
                while (sorted[low] === sorted[low + 1]) low++;
                while (sorted[high] === sorted[high - 1]) high--;
                low++;
                high--;
            } else if (sorted[low] + sorted[high] < target) {
                low++;
            } else {
                high--;
            }
        }

    }

    return res;
};