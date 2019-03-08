/*
 * @lc app=leetcode id=42 lang=javascript
 *
 * [42] Trapping Rain Water
 *
 * https://leetcode.com/problems/trapping-rain-water/description/
 *
 * algorithms
 * Hard (41.92%)
 * Total Accepted:    259.6K
 * Total Submissions: 618.5K
 * Testcase Example:  '[0,1,0,2,1,0,1,3,2,1,2,1]'
 *
 * Given n non-negative integers representing an elevation map where the width
 * of each bar is 1, compute how much water it is able to trap after raining.
 * 
 * 
 * The above elevation map is represented by array [0,1,0,2,1,0,1,3,2,1,2,1].
 * In this case, 6 units of rain water (blue section) are being trapped. Thanks
 * Marcos for contributing this image!
 * 
 * Example:
 * 
 * 
 * Input: [0,1,0,2,1,0,1,3,2,1,2,1]
 * Output: 6
 * 
 */
/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
  if (height.length === 0) {
    return 0;
  }
  
  let leftMax = 0;
  let rightMax = 0;
  let water = 0;
  const dp = [];
  for (var i = 0; i < height.length; i++) {
    dp[i] = leftMax;
    if (height[i] > leftMax) {
      leftMax = height[i];
    }
  }

  for (var i = height.length - 1; i >= 0; i--) {
    if (Math.min(dp[i], rightMax) > height[i]) {
      water += Math.min(dp[i], rightMax) - height[i];
    }

    if (height[i] > rightMax) {
      rightMax = height[i]
    }
  }

  return water;
};

