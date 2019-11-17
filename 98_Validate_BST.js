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
var isValidBST = function (root) {
    if (!root) return true;

    let sorted = inOrder(root, []);

    for (let i = 0; i < sorted.length - 1; i++) {
        if (sorted[i] >= sorted[i + 1]) return false;
    }

    return true;
};

function inOrder(node, res) {
    if (!node) return res;

    inOrder(node.left, res);
    res.push(node.val);
    inOrder(node.right, res);

    return res;
}