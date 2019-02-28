/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    if (nums.length === 0) {
    	return -1
    }

    var dp = [];
    dp[0] = nums[0];
    var cur = nums[0];
    for (var i = 1; i < nums.length; i++) {
    	cur = Math.max(nums[i], nums[i] + cur)

    	// 是否更新
    	if (cur > dp[i-1]) {
    		dp[i] = cur;
    	} else {
    		dp[i] = dp[i-1];
    	}
    }

    return dp[nums.length - 1];
};