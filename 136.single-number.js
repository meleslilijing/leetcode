/*
 * @lc app=leetcode id=136 lang=javascript
 *
 * [136] Single Number
 */
/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
  return nums.reduce((cur, acc) => {
    return cur ^ acc
  }, 0)
};

