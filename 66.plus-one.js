/*
 * @lc app=leetcode id=66 lang=javascript
 *
 * [66] Plus One
 */
/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
  if (digits == null || digits.length === 0) {
    return digits;
  }
  const len = digits.length;
  digits[len-1] = digits[len-1] + 1;

  for (let i = len - 1; i >= 0; i--) {
    if (digits[i] < 10) {
      return digits;
    }

    if (digits[0] === 10) {
      const newDigits = [];
      for (let j = 1; j < len+1; j++) {
        newDigits[j] = 0;
      }
      newDigits[0] = 1;
      return newDigits;
    }

    digits[i-1] += 1;
    digits[i] = 0;
  }

};

