
/**
 * 一个m * n二维数组，求从【0， 0】到达 [m-1, n-1]的最短路径。
 * 二维数组的每个元素是路径的权重
 * @return {[type]} [description]
 */
var minPathSum = function(grid) {
	if (grid.length === 0) {
		return -1;
	}

	if (grid[0].length === 0) {
		return -1;
	}

	var M = grid.length - 1;
	var N = grid[0].length - 1;

	var dp = [];
	dp[0] = grid[0][0];
	for (var i = 1; i <= N; i++) {
		dp[i] = grid[0][i] + dp[i-1];
	}

	for (var i = 0; i <= M; i++) {
		dp[0] = dp[0] + grid[i][0];
		for (var j = 1; j <= N; j++) {
			dp[j] = grid[i][j] + Math.min(dp[j - 1], dp[j]);
		}
	}

	return dp[N];
}