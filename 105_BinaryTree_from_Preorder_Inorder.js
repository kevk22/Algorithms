/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {    
    if (!inorder.length) return null;
    
    let root = new TreeNode(preorder.shift());
    let midIdx = inorder.indexOf(root.val);
    
    root.left = buildTree(preorder, inorder.slice(0, midIdx));
    root.right = buildTree(preorder, inorder.slice(midIdx + 1));
    
    return root;
};