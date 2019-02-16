/**
 * @param {number[][]} grid
 * @return {number}
 * 数据的路线，从上方或者从左方累加。循环二维数组，每个节点的值都取最小的可能。
 * 最终节点也一定是最小
 */
var minPathSum = function(grid) {
	if (grid.length <= 0) {
		return -1;
	}

	if (grid[0].length <= 0) {
		return -1;
	}

	const M = grid.length;
	const N = grid[0].length;

	var dp = [];

	// 设置dp为第一行的值
	dp[0] = grid[0][0];
	for (var i = 1; i < N; i++) {
		dp[i] = dp[i-1] + grid[0][i];
	}

	for (var i = 1; i < M; i++) {
		dp[0] += grid[i][0];	// 累加第一列的值
		for (var j = 1; j < N; j++) {
			dp[j] = grid[i][j] + Math.min(dp[j], dp[j-1]);	// dp[j-1]： 左边的格子， dp[j]. 上面的格子
		}
	}
	return dp[N-1];
};