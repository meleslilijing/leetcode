/**
 * 二叉树从跟到叶子结点。判断是否有值刚好值等于sum. 
 * DFS
 */
var pathSum = function(root, sum) {
	if (root === null) {
		return false;
	}

	if (root.val === sum) {
		return true;
	}

	return pathSum(root.left, sum - root.val) || pathSum(root.right, sum - root.val);
}

/**
 * 二叉树从跟到叶子结点。刚好值等于sum. 需要返回路径
 * DFS
 */
var pathSum2 = function(root, sum) {
	if (root === null) {
		return null
	}	

	var res = [];
	helper(root, sum, res);
	
	return res;
}