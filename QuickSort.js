/**
 * quickSort in place
 */
var quickSort = function(arr) {
	if (arr.length <= 1) {
		return arr;
	}

	sort(arr, 0, arr.length - 1);

	return arr;
}

function sort(arr, l, r){
	if (r <= l ) {
		return;
	}

	var pvit = partition(arr, l, r);
	sort(arr, l, pvit);
	sort(arr, pvit + 1, r);
}
       
function partition(arr, l, r) {
	var pvit = l

	for (var i = l; i <= r; i++) {
		if (arr[i] < arr[pvit]) {
			swap(arr, i, pvit);
			pvit = i
		}
	}
  return pvit;
}
   
function swap(arr, i, j){
   var temp = arr[i];
   arr[i] = arr[j];
   arr[j] = temp;
}

/**
 * quickSort in place
 */
var quickSort = function(nums) {
	if (nums.length <= 1) {
		return nums;
	}

	var mid = Math.floor(nums.length / 2);

	var left = [];
	var right = [];

	for (var i = 0; i < nums.length; i++) {
		if (i === mid) {
			continue;
		}

		if (nums[i] < nums[mid]) {
			left.push(nums[i])
		}

		if (nums[i] > nums[mid]) {
			right.push(nums[i]);
		}
	}
	
	return quickSort(left).concat(nums[mid], quickSort(right));
}