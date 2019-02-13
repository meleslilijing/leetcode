

/**
 * 2Sum 的进阶问题。 
 * 时间复杂度: O(n^2)
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
  var result = [];
	if (nums.length < 3) {
		return [];
	}

	nums.sort(function(a, b) {
    return Number(a) - Number(b)
  }); // 结果要求排序

  for (var i = 0; i < nums.length-2; i++) {
      if (nums[i] === -2) {
        debugger
      }

    // avoid duplicate solution 因为排序的原因，重复的数据会贴在一起
    if (i == 0 || nums[i] > nums[i - 1]) {
      
      var negate = -nums[i];

      var start = i + 1;
      var end = nums.length - 1;

      while (start < end) {
        // case 1
        if (nums[start] + nums[end] === negate) {
          var temp = [];
          temp.push(nums[i]);
          temp.push(nums[start]);
          temp.push(nums[end]);

          result.push(temp);

          start++;
          end--;

          // avoid duplicate solution 
          while (start < end && nums[end] === nums[end + 1]) {
            end--;
          }

          // avoid duplicate solution
          while (start < end && nums[start] === nums[start - 1]) {
            start++;
          }
        } else if (nums[start] + nums[end] < negate) {  // 也是因为排序
          start++; 
        } else {
          end--;
        }
      }
    }
  } // endof for
  return result
};




var a = [-1, -2, 0, 1, 2, 3]
threeSum(a);