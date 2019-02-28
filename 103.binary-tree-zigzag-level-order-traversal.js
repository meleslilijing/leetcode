/*
 * @lc app=leetcode id=103 lang=javascript
 *
 * [103] Binary Tree Zigzag Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-zigzag-level-order-traversal/description/
 *
 * algorithms
 * Medium (40.36%)
 * Total Accepted:    194.7K
 * Total Submissions: 482.2K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the zigzag level order traversal of its nodes'
 * values. (ie, from left to right, then right to left for the next level and
 * alternate between).
 * 
 * 
 * For example:
 * Given binary tree [3,9,20,null,null,15,7],
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
 * 
 * 
 * 
 * return its zigzag level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [20,9],
 * ⁠ [15,7]
 * ]
 * 
 * 
 */
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
// 锯齿层次遍历，每一层遍历的方向相反（从左往右或者从右往左）。
var zigzagLevelOrder = function(root) {
    if (root === null) {
        return [];
    }

    const res = [];
    const queue = [];

    queue.push(root);
    let isLeft = true;

    while (queue.length > 0) {
        var buffer = [];
        const len = queue.length
        for (var i = 0; i < len; i++) {
            var node = queue.shift();
            buffer.push(node.val)
            if (node.left !== null) {
                queue.push(node.left);
            }

            if (node.right !== null) {
                queue.push(node.right);
            }
        }

        if (isLeft) {
            res.push(buffer);
        } else {
            res.push(buffer.reverse());
        }
        isLeft = !isLeft;
    }

    return res;
};

