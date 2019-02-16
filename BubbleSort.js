var bubbleSort = function(nums) {
	if (nums.length <= 1) {
		return nums;
	}

	for (var i = 0; i < nums.length - 1; i++) {
		for (var j = 0; j < nums.length - i - 1; j++) {
			if (nums[j] > nums[j+1]) {
				swap(nums, j, j+1);
			}
		}
	}
}

function swap(nums, p1, p2) {
	if (p1 === p2) {
		return;
	}

	if (p1 < 0 || p2 < 0 || p1 >= nums.length || p2 >= nums.length) {
		return;
	}

	var temp = nums[p1];
	nums[p1] = nums[p2];
	nums[p2] = temp;
}