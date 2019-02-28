/*
 * @lc app=leetcode id=105 lang=javascript
 *
 * [105] Construct Binary Tree from Preorder and Inorder Traversal
 *
 * https://leetcode.com/problems/construct-binary-tree-from-preorder-and-inorder-traversal/description/
 *
 * algorithms
 * Medium (39.34%)
 * Total Accepted:    199.9K
 * Total Submissions: 507.5K
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
    if (preorder.length === 0 || inorder.length === 0 || preorder.length !== inorder.length) {
		return null;
	}
	return helper(preorder, 0, preorder.length - 1, inorder, 0, inorder.length - 1);
};


function helper(preorder, pstart, pend, inorder, istart, iend) {
	if (pend - pstart < 0 || iend - istart < 0) {
		return null
	}

	const node = new TreeNode(preorder[pstart]);

	if (pend - pstart === 0 || iend - istart === 0) {
		return node;
	}

	// find left length
	let rootIdx = istart;
	for (var i = istart; i <= iend; i++) {
        if (istart[i] === preorder[pstart]) {
            rootIdx = i;
            break
        }
    }

	// const leftLen = rootIdx - pstart + 1;
	// const preLeftStart = pstart + 1;
	// const preLeftEnd = pstart + leftLen + 1;
	const inLeftStart = istart;
	const inLeftEnd = rootIdx - 1;

	// const preRightStart = preLeftEnd + 1;
	// const preRightEnd = pend;
	const inRightStart = rootIdx + 1;
	const inRightEnd = iend;

	node.left = helper(preorder, preLeftStart, preLeftEnd, inorder, inLeftStart, inLeftEnd);
	node.right = helper(preorder, preRightStart, preRightEnd, inorder, inRightStart, inRightEnd);

	return node;
}


