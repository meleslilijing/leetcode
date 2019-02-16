/**
 * @param {number} n
 * @return {number}
 */

var cache = {}

var climbStairs = function(n) {
	if (n === 1) {
		return 1;
	}

	if (n === 2) {
		return 2;
	}

	var a = cache[n-1];
	var b = cache[n-2];

	if (a === undefined) {
		a = climbStairs(n-1);
		cache[n-1] = a;
	}

	if (b === undefined) {
		b = climbStairs(n-2);
		cache[n-2] = b;
	}

	return a + b
};
