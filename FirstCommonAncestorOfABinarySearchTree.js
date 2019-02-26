/**
 * 查找binary search tree上的最小共同子节点
 * 二叉搜索树，可以用数据的大小来判断是否为 LCA ( Lowest Common Ancestor )
 * 
 */
var binarySearchTreeLCA = function(root, p, q) {
	if (root === null || p === null || q === null) {
		return null;
	}

	if (root === p) {
		return p;
	}

	if (root === q) {
		return q;
	}

	var m = root.val;

	if (m > p.val && m > q.val) {
		return binarySearchTreeLCA(root.left, p, q);
	} else if (m < p.val && m < q.val) {
		return binarySearchTreeLCA(root.right, p, q);
	} else {
		// p and q is not the same side;
		return root;
	}
}