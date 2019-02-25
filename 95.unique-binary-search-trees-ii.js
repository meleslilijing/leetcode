/*
 * @lc app=leetcode id=95 lang=javascript
 *
 * [95] Unique Binary Search Trees II
 *
 * https://leetcode.com/problems/unique-binary-search-trees-ii/description/
 *
 * algorithms
 * Medium (34.69%)
 * Total Accepted:    127.4K
 * Total Submissions: 367.2K
 * Testcase Example:  '3'
 *
 * Given an integer n, generate all structurally unique BST's (binary search
 * trees) that store values 1 ... n.
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output:
 * [
 * [1,null,3,2],
 * [3,2,null,1],
 * [3,1,null,null,2],
 * [2,1,3],
 * [1,null,2,null,3]
 * ]
 * Explanation:
 * The above output corresponds to the 5 unique BST's shown below:
 * 
 * ⁠  1         3     3      2      1
 * ⁠   \       /     /      / \      \
 * ⁠    3     2     1      1   3      2
 * ⁠   /     /       \                 \
 * ⁠  2     1         2                 3
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
 * @param {number} n
 * @return {TreeNode[]}
 */
var generateTrees = function(n) {
    if (n === 0) {
        return [];
    }
    return generateTreesHelper(1, n);
};

function generateTreesHelper(l, r) {
    var res = [];

    if (l > r) {
        res.push(null);
        return res;
    }

    for (var k = l; k <= r; k++) {
        var left = generateTreesHelper(l, k-1);
        var right = generateTreesHelper(k+1, r);
        for (var i = 0; i < left.length; i++) {
            for (var j = 0; j < right.length; j++) {
                var root = new TreeNode(k);
                root.left = left[i];
                root.right = right[j];

                res.push(root);
            }
        }
    }
    return res;
}