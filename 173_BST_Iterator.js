/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 */
var BSTIterator = function (root) {
    this.sorted = this.inOrder(root, []);
};

BSTIterator.prototype.inOrder = function (root, arr) {
    if (!root) return arr;

    this.inOrder(root.left, arr);
    arr.push(root.val);
    this.inOrder(root.right, arr);

    return arr;
};

/*
 * @return the next smallest number
 * @return {number}
 */
BSTIterator.prototype.next = function () {
    return this.sorted.shift();
};

/*
 * @return whether we have a next smallest number
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function () {
    return this.sorted.length > 0
};

/**
 * Your BSTIterator object will be instantiated and called as such:
 * var obj = new BSTIterator(root)
 * var param_1 = obj.next()
 * var param_2 = obj.hasNext()
 */