/*
 * @lc app=leetcode id=9 lang=javascript
 *
 * [9] Palindrome Number
 */
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
  if (x < 0) {
    return false;
  }

  let tmp = x;
  let reverseX = 0;
  while (tmp > 0) {
    reverseX = reverseX * 10 + tmp % 10
    tmp = Math.floor(tmp / 10)
  }

  return reverseX === x
};

