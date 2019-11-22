/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/*
 * @param {TreeNode} root
 * @return {number[]}
 */

// Fast
var rightSideView = function (root) {
    if (!root) return [];

    let res = [];
    let q = [root];

    while (q.length) {
        let size = q.length;

        for (let i = 0; i < size; i++) {
            let cur = q.shift();
            if (i === size - 1) res.push(cur.val);

            if (cur.left) q.push(cur.left);
            if (cur.right) q.push(cur.right);
        }
    }

    return res;
};


// Suboptimal
var rightSideView = function(root) {
    if (!root) return [];

    let res = [];
    let q = [root, null];

    while (q.length) {
      let cur = q.shift();

      if (cur === null) {
        if (q[0] === null || !q.length) break;
        q.push(null);
        continue;
      }

      if (q[0] === null) {
        res.push(cur.val);
      }

      if (cur.left) q.push(cur.left);
      if (cur.right) q.push(cur.right);
    }

    return res;
};


// Slower DFS
var rightSideView = function (root) {
    let res = [];

    dfs(root, res, 1, [0]);

    return res;
};

function dfs(node, res, cur, max) {
    if (!node) return;

    if (cur > max[0]) {
        max[0] = cur;
        res.push(node.val);
    }

    dfs(node.right, res, cur + 1, max);
    dfs(node.left, res, cur + 1, max);
}