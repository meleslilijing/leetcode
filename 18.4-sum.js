/*
 * @lc app=leetcode id=18 lang=javascript
 *
 * [18] 4Sum
 *
 * https://leetcode.com/problems/4sum/description/
 *
 * algorithms
 * Medium (29.62%)
 * Total Accepted:    211.1K
 * Total Submissions: 712.4K
 * Testcase Example:  '[1,0,-1,0,-2,2]\n0'
 *
 * Given an array nums of n integers and an integer target, are there elements
 * a, b, c, and d in nums such that a + b + c + d = target? Find all unique
 * quadruplets in the array which gives the sum of target.
 * 
 * Note:
 * 
 * The solution set must not contain duplicate quadruplets.
 * 
 * Example:
 * 
 * 
 * Given array nums = [1, 0, -1, 0, -2, 2], and target = 0.
 * 
 * A solution set is:
 * [
 * ⁠ [-1,  0, 0, 1],
 * ⁠ [-2, -1, 1, 2],
 * ⁠ [-2,  0, 0, 2]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[][]}
 */
var fourSum = function (nums, target) {
  const res = [];
  if (nums.length < 4) {
    return res;
  }

  nums.sort((a, b) => {
    return a - b;
  });

  let l, r;

  for (let i = 0; i < nums.length-3; i++) {

    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    for (let j = i + 1; j < nums.length - 2; j++) {

      if (j > i + 1 && nums[j] === nums[j - 1]) {
        continue
      }

      const twoSum = target - (nums[i] + nums[j]);

      l = j + 1;
      r = nums.length - 1;
      while (l < r) {
        if (nums[l] + nums[r] === twoSum) {
          res.push([nums[i], nums[j], nums[l], nums[r]]);
          while (l < r && nums[l] === nums[l + 1]) {
            l++
          }

          while (l < r && nums[r] === nums[i - 1]) {
            r--
          }
          l++;
          r--;

        } else if (nums[l] + nums[r] < twoSum) {
          l++;
        } else {
          r--;
        }
      } // endof while
    } // endof for j
  } // endof for i 
  return res;
}