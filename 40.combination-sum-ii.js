/*
 * @lc app=leetcode id=40 lang=javascript
 *
 * [40] Combination Sum II
 *
 * https://leetcode.com/problems/combination-sum-ii/description/
 *
 * algorithms
 * Medium (40.18%)
 * Total Accepted:    201.5K
 * Total Submissions: 501.5K
 * Testcase Example:  '[10,1,2,7,6,1,5]\n8'
 *
 * Given a collection of candidate numbers (candidates) and a target number
 * (target), find all unique combinations in candidates where the candidate
 * numbers sums to target.
 * 
 * Each number in candidates may only be used once in the combination.
 * 
 * Note:
 * 
 * 
 * All numbers (including target) will be positive integers.
 * The solution set must not contain duplicate combinations.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: candidates = [10,1,2,7,6,1,5], target = 8,
 * A solution set is:
 * [
 * ⁠ [1, 7],
 * ⁠ [1, 2, 5],
 * ⁠ [2, 6],
 * ⁠ [1, 1, 6]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,5,2,1,2], target = 5,
 * A solution set is:
 * [
 * [1,2,2],
 * [5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {
  if (target < 0) {
    return [];
  }
  candidates.sort((a, b)=> a-b);
  const res = [];
  helper(candidates, target, 0, [], res);
  return res;
};

function helper(cand, remain, startIdx, tempArray, res) {
  if (remain < 0) {
    return;
  }

  if (remain === 0) {
    res.push(tempArray.concat([]));
    return ;
  }

  for (var i = startIdx; i < cand.length;i++) {
    if (i > startIdx && cand[i] === cand[i-1]) {
      continue;
    }
    tempArray.push(cand[i]);
    helper(cand, remain - cand[i], i+1, tempArray, res);
    tempArray.pop();
  }
}