/**
 * @param {number[]} nums
 * @return {number}
 * 求众数，出现次数大于数组长度 1/2的数是众数
 */
var majorityElement = function(nums) {
    var map = {}

    var majNum = parseInt(nums.length / 2);

    for (var i = 0; i < nums.length; i++) {
    	var val = nums[i];
    	if (map[val] === undefined) {
    		map[val] = 0
    	}
    	map[val] += 1;

    	if (map[val] > majNum) {
    		return val;
    	}
    }
    return null;
};