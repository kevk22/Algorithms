/*
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @param {number} target
 * @return {number}
 */

// Optimal O(H) time O(1) space
var closestValue = function (root, target) {
    let closest = Infinity;
    let dif = Infinity;

    function bSearch(node) {
        if (!node) return;

        if (Math.abs(node.val - target) < dif) {
            dif = Math.abs(node.val - target);
            closest = node.val;
        }

        if (node.val > target) {
            bSearch(node.left);
        } else {
            bSearch(node.right);
        }
    }

    bSearch(root);
    return closest;
}



// Naive O(n) time and space 
var closestValue = function(root, target) {
    let sorted = inorder(root, []);

    let dif = Infinity;
    let min = sorted[0];

    for (let i = 0; i < sorted.length; i++) {
      if (Math.abs(sorted[i] - target) < dif) {
        dif = Math.abs(sorted[i] - target);
        min = sorted[i]
      }
    }

    return min;
};

function inorder(node, arr) {
  if (!node) return arr;

  inorder(node.left, arr);
  arr.push(node.val);
  inorder(node.right, arr);

  return arr;
}

