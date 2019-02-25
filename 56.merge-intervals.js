/*
 * @lc app=leetcode id=56 lang=javascript
 *
 * [56] Merge Intervals
 *
 * https://leetcode.com/problems/merge-intervals/description/
 *
 * algorithms
 * Medium (34.75%)
 * Total Accepted:    304.3K
 * Total Submissions: 875.5K
 * Testcase Example:  '[[1,3],[2,6],[8,10],[15,18]]'
 *
 * Given a collection of intervals, merge all overlapping intervals.
 * 
 * Example 1:
 * 
 * 
 * Input: [[1,3],[2,6],[8,10],[15,18]]
 * Output: [[1,6],[8,10],[15,18]]
 * Explanation: Since intervals [1,3] and [2,6] overlaps, merge them into
 * [1,6].
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: [[1,4],[4,5]]
 * Output: [[1,5]]
 * Explanation: Intervals [1,4] and [4,5] are considered overlapping.
 * 
 */
/**
 * Definition for an interval.
 * function Interval(start, end) {
 *     this.start = start;
 *     this.end = end;
 * }
 */
/**
 * @param {Interval[]} intervals
 * @return {Interval[]}
 */
var merge = function(intervals) {
    if (intervals.length <= 1) {
        return intervals;
    }

    var intervals = intervals.sort((a, b) => {return a.start - b.start});

    var start = intervals[0].start;
    var end = intervals[0].end;
    var res = [];

    intervals.forEach((interval) => {
        if (interval.start <= end) {
            end = Math.max(end, interval.end);
        } else {
            res.push(new Interval(start, end));
            start = interval.start;
            end = interval.end;
        }
    })

    res.push(new Interval(start, end))

    return res;
};