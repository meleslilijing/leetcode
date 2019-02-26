/**
 * 查找 binary tree 中最小共同祖先节点
 */
var firstCommonAncestor = function(root, p, q) {
	if (root === null || p === null || q === null) {
		return null
	}

	// p and q in root.left, so the ancestor is in root.left
	if (covers(root.left, p) && covers(root.left, q)) {
		return firstCommonAncestor(root.left, p, q);
	}

	if (covers(root.right, p) && covers(root.right, q)) {
		return firstCommonAncestor(root.right, p, q);
	}

	return root; 	// p and q is not on the same child side;

}

/**
 * node 是 root 的子节点
 */
function covers(root, node) {
	if (root === null) {
		return false;
	}

	if (root === node) {
		return true;
	}

	return covers(root.left, node) || covers(root.right, node)
}
