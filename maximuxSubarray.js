/*
 * all nums are integer
 */
var maximuxSubarray = function(nums) {
	if (nums.length === 0) {
		return NaN;
	}

	if (nums.length === 1) {
		return nums[0];
	}

	var dp = [][];		
	dp[0][0] = nums[0];	// max
	dp[0][1] = nums[0];	// min
	for (var i = 1; i< nums.length; i++) {
		if (nums[i] > 0) {
			dp[i][0] = dp[i-1][0] * nums[i];
			dp[i][1] = dp[i-1][1] * nums[i];
		} else if (nums[i] === 0) {
			dp[i][0] = Math.max(dp[i-1][0], dp[i][0]);
			dp[i][0] = Math.min(dp[i-1][0], dp[i][0]);
		} else {
			dp[i][0] = dp[i-1][1] * nums[i]
			dp[i][1] = dp[i-1][0] * nums[i]
		}
	}

	return dp[nums.length - 1][0];
}