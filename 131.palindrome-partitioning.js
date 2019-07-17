/*
 * @lc app=leetcode id=131 lang=javascript
 *
 * [131] Palindrome Partitioning
 */
/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function(s) {
  if (s.length === 0) {
    return [];
  }
  const res = [];
  dfs(s, [], left, res);
  return res;
};

function dfs(str, remain, left, res) {
  if (left === s.length) {
    res.push(remain);
    return;
  }
  for (let right = left; right < str.length; i++) {
    if (isPalindroom(str, left, right)) {
      remain.push(s.substring(left, right+1));
      dfs(str, remain, right+1, res);
      remain.pop();
    }
  }
}

function isPalindroom(str, left, right) {
  while (str[left] === str[right]) {
    left++;
    right--;
  }
  return left >= right
}
