/*
 * @lc app=leetcode id=96 lang=javascript
 *
 * [96] Unique Binary Search Trees
 *
 * https://leetcode.com/problems/unique-binary-search-trees/description/
 *
 * algorithms
 * Medium (44.99%)
 * Total Accepted:    184.1K
 * Total Submissions: 409.3K
 * Testcase Example:  '3'
 *
 * Given n, how many structurally unique BST's (binary search trees) that store
 * values 1 ... n?
 * 
 * Example:
 * 
 * 
 * Input: 3
 * Output: 5
 * Explanation:
 * Given n = 3, there are a total of 5 unique BST's:
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
 * @param {number} n
 * @return {number}
 */
var numTrees = function(n) {
    var dp = [];
    dp[0] = 1;
    dp[1] = 1;

    for (var i = 2; i <= n; i++) {
        dp[i] = 0;
        for(var j = 1; j <= i; j++) {
            dp[i] += dp[j-1]*dp[i-j];
        }
    }
    return dp[n]
};