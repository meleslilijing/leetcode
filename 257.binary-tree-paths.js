/*
 * @lc app=leetcode id=257 lang=javascript
 *
 * [257] Binary Tree Paths
 *
 * https://leetcode.com/problems/binary-tree-paths/description/
 *
 * algorithms
 * Easy (45.02%)
 * Total Accepted:    211.3K
 * Total Submissions: 469K
 * Testcase Example:  '[1,2,3,null,5]'
 *
 * Given a binary tree, return all root-to-leaf paths.
 * 
 * Note: A leaf is a node with no children.
 * 
 * Example:
 * 
 * 
 * Input:
 * 
 * ⁠  1
 * ⁠/   \
 * 2     3
 * ⁠\
 * ⁠ 5
 * 
 * Output: ["1->2->5", "1->3"]
 * 
 * Explanation: All root-to-leaf paths are: 1->2->5, 1->3
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
 * @return {string[]}
 */
var binaryTreePaths = function(root) {
  if (root === null) {
    return []
  }
  const res = [];

  helper(root, [], res);

  return res;
};

function helper(node, buffer, res) {
  buffer.push(node.val);
  const { left, right } = node;
  
  if (!left && !right) {
    res.push(buffer.join('->'))
    return;
  } 

  if (left) {
    helper(node.left, buffer.concat([]), res);
  }

  if (right) {
    helper(node.right, buffer.concat([]), res);
  }
}

