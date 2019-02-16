/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var threeSumClosest = function(nums, target) {
    if (nums.length < 3) {
        return 0;
    }

    var res = nums[0] + nums[1] + nums[2];
    nums.sort(function(a, b) {
        if (Number(a) - Number(b) > 0) {
            return -1
        }
        return 1
    });
    for (var i = 0; i < nums.length - 2; i++ ) {
        var l = i + 1;
        var r = nums.length - 1;
        while (l < r) {
            var threeSum = nums[i] + nums[l] + nums[r];

            if (threeSum === target) {
                return threeSum;
            }

            if (threeSum < target) {
                l++;
            } else {
                r--;
            }

            if (Math.abs(threeSum - target) < Math.abs(res - target)) {
                res = threeSum;
            }
        }
    }
    return res;
}