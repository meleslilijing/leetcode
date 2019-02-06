/**
 * 数组事先已排序
 * 	线上环境的问题，不能改变nums1的指向
 * 
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  // 从小到大排序，从后晚前存数据，先存大的
  while(m > 0 && n > 0) {
    if (nums1[m-1] > nums2[n-1]) {
        nums1[m+n-1] = nums1[m-1];
        m--;
    } else {
        nums1[m+n-1] = nums2[n-1];
        n--;
    }
    // 合并剩余的部分。nums1多余的部分在原地不移动位置
    
  }
    if (n > 0) {
        while (n > 0) {
            nums1[n-1] = nums2[n-1];
            n--;
        }
    }
};