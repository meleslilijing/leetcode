/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
<<<<<<< HEAD
 * Medium (39.36%)
 * Total Accepted:    199.7K
 * Total Submissions: 507.3K
=======
 * Medium (39.34%)
 * Total Accepted:    199.9K
 * Total Submissions: 507.5K
>>>>>>> 3777506c6f7ce42b0cb6a24ded50ab6968ca9bda
 * Testcase Example:  '[3,9,20,15,7]\n[9,3,15,20,7]'
 *
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * 
 * Return the following binary tree:
 * 
 * 
 * ⁠   3
 * ⁠  / \
 * ⁠ 9  20
 * ⁠   /  \
 * ⁠  15   7
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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
  if (preorder === null || inorder === null || preorder.length !== inorder.length) {
    return null;
  }
  const size = preorder.length;
  return helper(preorder, 0, inorder, 0, size);
};

function helper(preorder, s1, inorder, s2, size) {
  if (size <= 0) {
    return null;
  }
  const node = new TreeNode(preorder[s1]);
  if (size === 1) {
    return node;
  }

  // find node index in inorder list
  var pos = s2;
  while (pos <= (s2+size-1)) {
    if (inorder[pos] === preorder[s1]) {
      break
    }
    ++pos
  }
  var leftLen = pos - s2;
  node.left = helper(preorder, s1+1, inorder, s2, leftLen)
  node.right = helper(preorder, s1+leftLen+1, inorder, pos+1, size-leftLen-1)
  return node;
}

