/*
 * @lc app=leetcode id=39 lang=javascript
 *
 * [39] Combination Sum
 *
 * https://leetcode.com/problems/combination-sum/description/
 *
 * algorithms
 * Medium (46.63%)
 * Total Accepted:    306K
 * Total Submissions: 655.3K
 * Testcase Example:  '[2,3,6,7]\n7'
 *
 * Given a set of candidate numbers (candidates) (without duplicates) and a
 * target number (target), find all unique combinations in candidates where the
 * candidate numbers sums to target.
 * 
 * The same repeated number may be chosen from candidates unlimited number of
 * times.
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
 * Input: candidates = [2,3,6,7], target = 7,
 * A solution set is:
 * [
 * ⁠ [7],
 * ⁠ [2,2,3]
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: candidates = [2,3,5], target = 8,
 * A solution set is:
 * [
 * [2,2,2,2],
 * [2,3,3],
 * [3,5]
 * ]
 * 
 * 
 */
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function(candidates, target) {
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
    helper(cand, remain - cand[i], i, tempArray, res);
    tempArray.pop();
  }
}