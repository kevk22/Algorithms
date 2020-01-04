/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {number[]} nums
 * @return {TreeNode}
 */

// Time complexity: O(n) Space complexity O(log n)
var sortedArrayToBST = function (nums) {
    if (!nums.length) return null;

    setNodes = (left, right) => {
        if (left > right) return null;

        let midIdx = Math.floor((left + right) / 2);

        let root = new TreeNode(nums[midIdx]);
        root.left = setNodes(left, midIdx - 1);
        root.right = setNodes(midIdx + 1, right);
        return root;
    };

    return setNodes(0, nums.length - 1);
};