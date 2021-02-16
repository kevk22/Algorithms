/*
 * @param {number[]} nums
 * @return {number[][]}
 */

// Time complexity: O(n!), Space complexity: O(n!)
var permute = function (nums) {
  let res = [];

  if (!nums.length) return res;

  let seen = new Array(nums.length).fill(false);
  let permutation = [];

  findPermutation(nums, permutation, seen, res);

  return res;
};

var findPermutation = function (nums, permutation, seen, res) {
  if (permutation.length === nums.length) {
    res.push([...permutation]);
    return;
  }

  for (let i = 0; i < nums.length; i++) {
    if (seen[i]) continue;

    seen[i] = true;
    permutation.push(nums[i]);
    findPermutation(nums, permutation, seen, res);
    permutation.pop();
    seen[i] = false;
  }

}