/*
 * @lc app=leetcode id=222 lang=javascript
 *
 * [222] Count Complete Tree Nodes
 *
 * https://leetcode.com/problems/count-complete-tree-nodes/description/
 *
 * algorithms
 * Medium (31.35%)
 * Total Accepted:    106.9K
 * Total Submissions: 341K
 * Testcase Example:  '[1,2,3,4,5,6]'
 *
 * Given a complete binary tree, count the number of nodes.
 * 
 * Note: 
 * 
 * Definition of a complete binary tree from Wikipedia:
 * In a complete binary tree every level, except possibly the last, is
 * completely filled, and all nodes in the last level are as far left as
 * possible. It can have between 1 and 2h nodes inclusive at the last level h.
 * 
 * Example:
 * 
 * 
 * Input: 
 * ⁠   1
 * ⁠  / \
 * ⁠ 2   3
 * ⁠/ \  /
 * 4  5 6
 * 
 * Output: 6
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
 * @return {number}
 * 
 * 统计完全二叉树的结点数。完全二叉树的特点，如果一颗子数有右孩子，就一定有左孩子
 */
var countNodes = function(root) {
    if (root === null) {
      return 0;
    }

    const left = getLeftHeight(root);
    const right = getRightHeight(root);

    if (left=== right) {
      return (1 << (left - 1)) - 1;
    } else {
      return 1 + countNodes(root.left) + countNodes(root.right);
    }
};

function getLeftHeight (root) {
  if (root === null) {
    return 0;
  }
  let res = 1;
  let p = root;

  while (p !== null) {
    p = p.left;
    res++;
  }
  return res;
}

function getRightHeight(root) {
  if (root === null) {
    return 0;
  }

  let res = 1;
  let p = root;

  while (p !== null) {
    p = p.right;
    res++
  }
  return res;
}
