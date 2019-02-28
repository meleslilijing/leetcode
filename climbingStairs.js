/**
 * 每次走 1步 or 2步。
 * 总共有多少种走法
 * dp
 *
 * f(n) = f(n-1) + f(n-2) 可以用递归。
 * 也可以用dp.
 * DP的关键是拆分独立子问题，以及子问题之间的转换关系
 */
var climbStairs = function(n) {
	if (n === 0 || n === 1) {
		return n;
	}

	var dp = [];

	dp[0] = 0;	// before stairs
	dp[1] = 1		// first stairs
	dp[2] = 2		// second stairs

	for (var i = 3; i <= n; i++) {
		dp[i] = dp[i-1] + dp[i-2];
	}

	return dp[n];

	// 优化，实际用 两个额外变量就可以了。不需要一整个dp数组
	// 每一节台阶的数据之和前两节有关
}



var climbStairs2 = function(n) {
	if (n === 0 || n === 1) {
		return n;
	}

	var ways = 2;
	var oneStepBefore = 2;
	var twoStepBefore = 1;

	for (var i = 3; i <= n; i++) {
		ways = oneStepBefore + twoStepBefore;
		twoStepBefore = oneStepBefore;
		oneStepBefore = ways;
	}
	return ways;
}