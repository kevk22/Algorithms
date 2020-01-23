/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {boolean}
 */

var isBalanced = function (root) {
    if (!root) return true;

    function getHeight(root) {
        if (!root) return 0;

        let left = getHeight(root.left);
        let right = getHeight(root.right);

        return 1 + Math.max(left, right);
    }

    let dif = Math.abs(getHeight(root.left) - getHeight(root.right)) <= 1;

    return dif && isBalanced(root.left) && isBalanced(root.right);
};
