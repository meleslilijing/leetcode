/*
 * @lc app=leetcode id=113 lang=javascript
 *
 * [113] Path Sum II
 *
 * https://leetcode.com/problems/path-sum-ii/description/
 *
 * algorithms
 * Medium (39.51%)
 * Total Accepted:    214.7K
 * Total Submissions: 543.5K
 * Testcase Example:  '[5,4,8,11,null,13,4,7,2,null,null,5,1]\n22'
 *
 * Given a binary tree and a sum, find all root-to-leaf paths where each path's
 * sum equals the given sum.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * Given the below binary tree and sum = 22,
 * 
 * 
 * ⁠     5
 * ⁠    / \
 * ⁠   4   8
 * ⁠  /   / \
 * ⁠ 11  13  4
 * ⁠/  \    / \
 * 7    2  5   1
 * 
 * 
 * Return:
 * 
 * 
 * [
 * ⁠  [5,4,11,2],
 * ⁠  [5,8,4,5]
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
 * @param {number} sum
 * @return {number[][]}
 */
var pathSum = function(root, sum) {
    if (root === null) {
        return [];
    }

    const res = [];
    helper(root, sum, [], res);
    return res;    
};

function helper(root, sum, buffer, res) {
    // leaf node
    if (root.left === null && root.right === null) {
        if (sum === root.val) {
            buffer.push(root.val);
            res.push(buffer.concat([]));
            return;
        }
        // no result
        return 
    }
    buffer.push(root.val);
    const remain = sum - root.val;
    if (root.left) {
        helper(root.left, remain, buffer.concat([]), res);
    }
    if (root.right) {
        helper(root.right, remain, buffer.concat([]), res);
    }
}

