/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
	if (matrix.length === 0) {
		return false;
	}

	if (matrix[0].length === 0) {
		return false;
	}

  var lineLen = matrix[0].length;

  // find line number
  for (var i = 0; i < matrix.length; i++) {
  	var l = matrix[i][0];
  	var r = matrix[i][lineLen - 1];
  	if (target < l || target > r) {
  		continue;
  	}

  	for (var j = 0; j < lineLen; j++) {
  		if (matrix[i][j] === target) {
  			return true;
  		}
  	}

  }

  return false;
};