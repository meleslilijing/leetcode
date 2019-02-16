var mergeSort = function(nums) {
	if (nums.length <= 1) {
		return nums;
	}

	sort(nums, 0, nums.length - 1);
	return nums
}

function sort (nums, l, r) {
	if (r <= l) {
		return ;
	}

	var mid = Math.floor(l + (r - l) / 2);

	sort(nums, l, mid);
	sort(nums, mid + 1, r);

	merge(nums, l, mid, r)	// 合并两个子数组
}

function merge(nums, l, mid, r) {
	// 创建两个子数组
	var a1 = [];
	var a2 = []

	for (var i = l; i <= mid; i++) {
		a1.push(nums[i])
	}

	for (var i = mid + 1; i <= r; i++) {
		a2.push(nums[i]);
	}

	var p1 = a1.length - 1;
	var p2 = a2.length - 1;
	var k = r;

	while (a1[p1] !== undefined && a2[p2] !== undefined) {
		nums[k--] = a1[p1] > a2[p2] ? a1[p1--] : a2[p2--];
	}

	while (p1 >= 0) {
		nums[k--] = a1[p1--]
	}

	while (p2 >= 0) {
		nums[k--] = a2[p2--]
	}

	return nums
}
