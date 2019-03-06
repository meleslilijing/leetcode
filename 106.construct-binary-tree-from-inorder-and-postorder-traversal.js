/*
 * @lc app=leetcode id=106 lang=javascript
 *
 * [106] Construct Binary Tree from Inorder and Postorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-inorder-and-postorder-traversal/description/
 *
 * algorithms
 * Medium (37.85%)
 * Total Accepted:    140.5K
 * Total Submissions: 370.9K
 * Testcase Example:  '[9,3,15,20,7]\n[9,15,7,20,3]'
 *
 * Given inorder and postorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * 
 * inorder = [9,3,15,20,7]
 * postorder = [9,15,7,20,3]
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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var buildTree = function(inorder, postorder) {
  if (inorder.length !== postorder.length) {
    return null;
  }

  const root = helper(inorder, 0, inorder.length -1, postorder, 0, postorder.length - 1);
  return root;
};

function helper(inorder, iLeft, iRight, postorder, pLeft, pRight) {
  if (iLeft > iRight || pLeft > pRight) {
    return null;
  }

  const node = new TreeNode(postorder[pRight]);

  // find node index
  let i;
  for (i = iLeft; i < inorder.length; i++) {
    if (inorder[i] === node.val) {
      break;
    }
  }
  node.left = helper(inorder, iLeft, i - 1, postorder, pLeft, pLeft+i-iLeft-1);
  node.right = helper(inorder, i + 1, iRight, postorder, pLeft + i - iLeft , pRight - 1);

  return node;
}

