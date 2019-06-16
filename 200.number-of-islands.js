/*
 * @lc app=leetcode id=200 lang=javascript
 *
 * [200] Number of Islands
 *
 * https://leetcode.com/problems/number-of-islands/description/
 *
 * algorithms
 * Medium (40.37%)
 * Total Accepted:    308.3K
 * Total Submissions: 763.6K
 * Testcase Example:  '[["1","1","1","1","0"],["1","1","0","1","0"],["1","1","0","0","0"],["0","0","0","0","0"]]'
 *
 * Given a 2d grid map of '1's (land) and '0's (water), count the number of
 * islands. An island is surrounded by water and is formed by connecting
 * adjacent lands horizontally or vertically. You may assume all four edges of
 * the grid are all surrounded by water.
 * 
 * Example 1:
 * 
 * 
 * Input:
 * 11110
 * 11010
 * 11000
 * 00000
 * 
 * Output: 1
 * 
 * 
 * Example 2:
 * 
 * 
 * Input:
 * 11000
 * 11000
 * 00100
 * 00011
 * 
 * Output: 3
 * 
 */
/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function(grid) {
    if (!grid || !grid.length || !grid[0].length) {
        return 0;
    }
    
    const visted = [];
    let count = 0;

    for (let i = 0; i < grid.length; i++) {
        visted[i] = [];
        for (let j = 0; j < grid[0].length; j++) {
            visted[i][j] = false;
        }
    }

    for (let i = 0; i < grid.length; i++) {
        for (let j = 0; j < grid[0].length; j++) {
            if (grid[i][j] === '1' && !visted[i][j]) {
                count++;
                setTagInVisted(grid, visted, i, j);
            }
        }
    }
    return count;
};

function setTagInVisted(grid, visted, i, j) {
    // check if out of range
    if (i >= grid.length || i < 0) {
        return;
    }

    if (j >= grid[0].length || j < 0) {
        return;
    }

    // check value
    if (grid[i][j] !== '1') {
        return;
    }

    if (visted[i][j]) {
        return;
    }

    // set tag in visted
    visted[i][j] = true;

    // DFS
    setTagInVisted(grid, visted, i-1, j);
    setTagInVisted(grid, visted, i, j-1);
    setTagInVisted(grid, visted, i+1, j);
    setTagInVisted(grid, visted, i, j+1);
}

