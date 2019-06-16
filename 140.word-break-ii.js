/*
 * @lc app=leetcode id=140 lang=javascript
 *
 * [140] Word Break II
 *
 * https://leetcode.com/problems/word-break-ii/description/
 *
 * algorithms
 * Hard (26.85%)
 * Total Accepted:    151K
 * Total Submissions: 562.3K
 * Testcase Example:  '"catsanddog"\n["cat","cats","and","sand","dog"]'
 *
 * Given a non-empty string s and a dictionary wordDict containing a list of
 * non-empty words, add spaces in s to construct a sentence where each word is
 * a valid dictionary word. Return all such possible sentences.
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
 * Input:
 * s = "catsanddog"
 * wordDict = ["cat", "cats", "and", "sand", "dog"]
 * Output:
 * [
 * "cats and dog",
 * "cat sand dog"
 * ]
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * s = "pineapplepenapple"
 * wordDict = ["apple", "pen", "applepen", "pine", "pineapple"]
 * Output:
 * [
 * "pine apple pen apple",
 * "pineapple pen apple",
 * "pine applepen apple"
 * ]
 * Explanation: Note that you are allowed to reuse a dictionary word.
 * 
 * 
 * Example 3:
 * 
 * 
 * Input:
 * s = "catsandog"
 * wordDict = ["cats", "dog", "sand", "and", "cat"]
 * Output:
 * []
 * 
 */
/**
 * @param {string} s
 * @param {string[]} wordDict
 * @return {string[]}
 *  DFS方法超时
 */
var wordBreak = function(s, wordDict) {
    const res = [];
    let buffer = [];
    const dict = new Dict(wordDict);
    const dp = [];
    dp[0] = true;
    for (let i = 1; i <= s.length; i++) {
        dp[i] = false;
    }

    for (let end = 0; end < s.length; end++) {
        for (let start = 0; start <= end; start++) {
            const subStr = s.substr(start, end - start + 1);
            if (dp[start] && dict.has(subStr)) {
                dp[end + 1] = true;
                break;
            }
        }
    }

    if (dp[s.length] === false) {
        return res;
    }

    wordBreakRe(s, dict, 0, buffer, res);
    return res;
};

function wordBreakRe(s, dict, startIdx, buffer, res) {
    // find one break
    if (startIdx === s.length && buffer.length > 0) {
        let str = buffer.join(' ');
        res.push(str);
    }

    // 循环遍历当前startIdx开始的所有可能，所有可能都DFS
    let word = '';
    for (let i = startIdx; i < s.length; i++) {
        word += s[i];
        // 字典中有当前值
        if (dict.has(word)) {
            buffer.push(word);
            wordBreakRe(s, dict, i+1, buffer, res);
            buffer.pop();
        }
    }
}


// var wordBreak = function(s, wordDict) {
//     const res
// }

// function wordBreakRe(s, dict, path, startIdx, res) {

// }

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

