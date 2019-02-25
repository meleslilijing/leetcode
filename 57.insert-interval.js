/*
 * @lc app=leetcode id=57 lang=javascript
 *
 * [57] Insert Interval
 *
 * https://leetcode.com/problems/insert-interval/description/
 *
 * algorithms
 * Hard (30.70%)
 * Total Accepted:    163.7K
 * Total Submissions: 533.3K
 * Testcase Example:  '[[1,3],[6,9]]\n[2,5]'
 *
 * Given a set of non-overlapping intervals, insert a new interval into the
 * intervals (merge if necessary).
 * 
 * You may assume that the intervals were initially sorted according to their
 * start times.
 * 
 * Example 1:
 * 
 * 
 * Input: intervals = [[1,3],[6,9]], newInterval = [2,5]
 * Output: [[1,5],[6,9]]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: intervals = [[1,2],[3,5],[6,7],[8,10],[12,16]], newInterval = [4,8]
 * Output: [[1,2],[3,10],[12,16]]
 * Explanation: Because the new interval [4,8] overlaps with
 * [3,5],[6,7],[8,10].
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
 * @param {Interval} newInterval
 * @return {Interval[]}
 */
var insert = function(intervals, newInterval) {
    intervals.push(newInterval);
    
    var newIntervals = merge(intervals);
    return newIntervals;
};


function merge(intervals) {
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