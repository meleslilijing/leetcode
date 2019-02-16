/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
  var max = Number.MAX_SAFE_INTEGER;
  var min = Number.MIN_SAFE_INTEGER;

  return helper(root, min, max);
};

function helper(root, min, max) {
	if (root === null) {
  	return true;
  }

	if (
		(root.val < max || Number.MAX_SAFE_INTEGER === root.val && root.right === null)
		&& (root.val > min || Number.MIN_SAFE_INTEGER === root.val && root.left === null)
		&& helper(root.left, min, root.val)
		&& helper(root.right, root.val, max)
	) {
 		return true;
	} 

	return false;
}