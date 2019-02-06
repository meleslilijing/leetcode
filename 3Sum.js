/**
 * 2Sum 的进阶问题。 
 * 时间复杂度: O(n^2)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
	if (nums.length < 3) {
		return [];
	}

	var result = []
  var sum  = 0

  for (var i = 0; i < nums.length; i++) {
  	var a = nums[i];
  	for (var j = 0; j < nums.length; j++) {
  		if (i === j) {
  			continue;
  		}

  		var b = nums[j];
  		c = sum - (a + b);
  		if (nums[j] === c) {
  			result.push([a, b, c])
  		}
  	}
  }

  return result;
};