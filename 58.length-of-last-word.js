/*
 * @lc app=leetcode id=58 lang=javascript
 *
 * [58] Length of Last Word
 */
/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
  let count=0;
  for(let i=s.length-1; i>=0; i--) {
      if(count>0 && s.charAt(i) == ' ') break;
      if(s.charAt(i) != ' ') count++;
  }
  return count;
};

