/*
 * @lc app=leetcode id=139 lang=javascript
 *
 * [139] Word Break
 *
 * https://leetcode.com/problems/word-break/description/
 *
 * algorithms
 * Medium (34.65%)
 * Total Accepted:    313.2K
 * Total Submissions: 904.1K
 * Testcase Example:  '"leetcode"\n["leet","code"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, determine if s can be segmented into a space-separated
 * sequence of one or more dictionary words.
 * 
 * Note:
 * 
 * 
 * The same word in the dictionary may be reused multiple times in the
 * segmentation.
 * You may assume the dictionary does not contain duplicate words.
 * 
 * 
 * Example 1:
 * 
 * 
 * Input: s = "leetcode", wordDict = ["leet", "code"]
 * Output: true
 * Explanation: Return true because "leetcode" can be segmented as "leet
 * code".
 * 
 * 
 * Example 2:
 * 
 * 
 * Input: s = "applepenapple", wordDict = ["apple", "pen"]
 * Output: true
 * Explanation: Return true because "applepenapple" can be segmented as "apple
 * pen apple".
 * Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input: s = "catsandog", wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output: false
 * 
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {boolean}
 */
var wordBreak = function(s, wordDict) {
    const dict = new Dict(wordDict);

    // init dp array
    const dp = [];
    dp[0] = true;
    
    for (let i = 1; i <= s.length; i++) {
        dp[i] = false;
    }
    

    for (let end = 0; end < s.length; end++) {
        for (let start = 0; start <= end; start++) {
            const subStr = s.substr(start, end - start + 1);
            if (dp[start] && dict.has(subStr)) {
                dp[end+1] = true;
                break;
            }
        }
    }

    return dp[s.length];
};

function Dict(array) {
    this.dict = {}
    array.forEach(value => {
        this.dict[value] = true;
    });
}

Dict.prototype.has = function (value) {
    return (typeof value === 'string' || typeof value === 'number') && this.dict[value];
}

Dict.prototype.print = function () {
    console.log(this.dict);
}

