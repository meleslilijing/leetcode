/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(x) {
 if (x < 0) {
 	return new Error();
 }

 if (x === 0) {
 	return 0
 }

 if (x === 1) {
 	return 1
 }

 if (x < 1) {
 	return help(x, x, 1)
 } else {
 	return help(x, 1, x)
 }
};

function help(x, low, high) {
	const precision = 0.0001 // 误差

	const sqrt = low/2 + high/2;

	if (sqrt * sqrt - x < precision) {
		return Math.floor(sqrt) 
	} else if (sqrt * sqrt - x > 0) {
		return help(x, low, sqrt);
	} else {
		return help(x, sqrt, high);
	}
}