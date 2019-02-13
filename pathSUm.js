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
 * @return {boolean}
 */
var hasPathSum = function(root, sum) {
  if (root === null) {
		return false;
	}
	return helper(root, sum);  
};


function helper(root, sum) {
	if (root === null) {
		return false;
	}

	if (root.val === sum && root.left === null && root.right === null) {
		return true;
	} else {
		return false;
	}

	return helper(root.left, sum - root.val)
	|| helper(root.right, sum - root.val);
}