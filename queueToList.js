/**
 * TODO:
 * 
 * 只用 queue 组成 stack. 
 * 但是不知道为什么不通过，看线上的例子都是取巧的办法。直接通过数组的下标操作
 */

/**
 * Initialize your data structure here.
 */
var MyStack = function() {
	// only use push & unshift    
	this.s1 = [];
	this.s2 = [];
	this.cur = this.s1
};

/**
 * Push element x onto stack. 
 * @param {number} x
 * @return {void}
 */
MyStack.prototype.push = function(x) {
	this.cur.push(x);
};

/**
 * Removes the element on top of the stack and returns that element.
 * @return {number}
 */
MyStack.prototype.pop = function() {
	var another;

	if (this.cur === this.s1) {
  	another = this.s2;
  } else {
  	another = this.s1;
  }

	var len = this.cur.length;
	for (var i = 0; i < len-1; i++) {
		var val = this.cur.unshift();
		this.another.push(val);
	}

	var result = this.cur.unshift();

	// update this.cur;
  this.cur = another;

  return result;
};

/**
 * Get the top element.
 * @return {number}
 */
MyStack.prototype.top = function() {
	if (this.empty()) {
		return null;
	}

	var length = this.cur.length
	return this.cur[length - 1]
};

/**
 * Returns whether the stack is empty.
 * @return {boolean}
 */
MyStack.prototype.empty = function() {
	return this.s1.length === 0 && this.s2.length === 0
};

/** 
 * Your MyStack object will be instantiated and called as such:
 * var obj = Object.create(MyStack).createNew()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.empty()
 */