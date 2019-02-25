/*
 * @lc app=leetcode id=102 lang=javascript
 *
 * [102] Binary Tree Level Order Traversal
 *
 * https://leetcode.com/problems/binary-tree-level-order-traversal/description/
 *
 * algorithms
 * Medium (46.91%)
 * Total Accepted:    334.5K
 * Total Submissions: 713K
 * Testcase Example:  '[3,9,20,null,null,15,7]'
 *
 * Given a binary tree, return the level order traversal of its nodes' values.
 * (ie, from left to right, level by level).
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
 * return its level order traversal as:
 * 
 * [
 * ⁠ [3],
 * ⁠ [9,20],
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
var levelOrder = function(root) {
    var res = [];

    travel([root], res);
    return res;   
};

 function travel(arr, res) {
    if (arr.length === 0) {
        return ;
    }

    var buffer = []
    var nextLevel = []
    while (arr.length > 0) {
        var node = arr.shift();

        if (node === null) {
            // buffer.push(null);
            continue;
        }

        buffer.push(node.val);
        nextLevel.push(node.left);
        nextLevel.push(node.right);
    }
    
    if (buffer.length > 0) {
        res.push(buffer);
    }
    
    travel(nextLevel, res);
}
