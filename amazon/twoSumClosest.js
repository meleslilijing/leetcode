/**
 * 给2个sorted array，和一个整数capacity，每个array各找出一个数，组成一个pair。
 * 找出pair满足以下条件：
 * 	1) sum of pair <= capacity
 * 	2) sum is maximum 后来真的遇到这道题的时候还是先用O(N*N)的算法检查了所有可能的组合。
 *
 * 3Sum closest的思路。 如果数组没有排序，需要自己排序。排序的复杂度O(nlogn)起
 *
 * ps: 需要考虑重复值的情况
 */
var twoSumClosest = function(sorted1, sorted2, capacity) {
	if (sorted1.length === 0 || sorted2.length === 0) {
		return
	}

	var sum = sorted1[0] + sorted2[0];
	var pair = [sorted1[0], sorted2[2]];
	for (var i = 0; i < sorted1.length; i++) {
		for (var j = 0; j < sorted2.length; j++) {
			if (sorted1[i] + sorted2[j] === capacity) {
				return [sorted1[i], sorted2[j]];
			}

			if (sorted1[i] + sorted2[j] > capacity) {
				return []
			} else {
				// find closest value
				if (capacity - (sorted1[i] + sorted2[j]) < capacity - sum) {
					sum = sorted1[i] + sorted2[j];
					pair = [sorted1[i], sorted2[j]];
				}
			}
		}
	}

	return pair;
}