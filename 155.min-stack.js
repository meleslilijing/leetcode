/*
 * @lc app=leetcode id=155 lang=javascript
 *
 * [155] Min Stack
 */
/**
 * initialize your data structure here.
 */
function peek(arr) {
  return arr[arr.length-1];
}

var MinStack = function() {
  this.stack = [];
  this.minStack = [];
};

/** 
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function(x) {
    this.stack.push(x);
    if (this.minStack.length === 0) {
      this.minStack.push(x)
    } else {
      this.minStack.push(Math.min(x, peek(this.minStack)));
    }
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.minStack.pop();
    return this.stack.pop();
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return peek(this.stack);
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return peek(this.minStack);
};

/** 
 * Your MinStack object will be instantiated and called as such:
 * var obj = new MinStack()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

