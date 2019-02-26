/**
 * leetcode: 300
 * 最长上升子序列 Longest Increasing Sequence
 * input: [10, 9, 2, 5, 3, 7, 101, 18, 20]
 * output: [2, 3, 7, 101, 18, 20].length = 6
 */

var lengthOfLIS = function(nums) {
	if (nums.length === 0) {
		return 0
	}

	var dp = [];
	for (var i = 0; i < nums.length; i++) {
		dp[i] = 1;
	}

	var max = dp[0]

	for (var i = 1; i < nums.length; i++) {
		for (var j = 0; j < i; j++) {
			if (nums[j] < nums[i]) {
				dp[i] = Math.max(dp[j] + 1, dp[i]); 	// 前i个元素的最大值
			}
		}
		max = Math.max(dp[i], max);
	}
	return max;
}


