/**
 * @param {string} s
 * @return {boolean}
 */
var longestValidParentheses = function(s) {
	if (s.length === 0) {
		return 0;
	}

	var maxCount = 0;
	var count = 0;
  var stack = new Stack();  

  for (var i = 0; i < s.length; i++) {
  	var v = s[i];

  	if (v === '{' || v === '[' || v === '(') {
  		var top = stack.top(v)
  		if (top === '{' || top === '[' || top === '(') {
	  		count = 0;
  		}
  		stack.push(v)
  	}

  	if (v === '}' || v === ']' || v === ')') {
  		var left = stack.pop();

  		if (check(left, v)) {
  			count += 2
  		} else {
  			maxCount = Math.max(count, maxCount)
	  		count = 0;
  		}
  	}
  }

	maxCount = Math.max(count, maxCount)
  return maxCount;
};


function check(l, r) {
	if (l === '(' && r === ')') {
		return true;
	}

	if (l === '[' && r === ']') {
		return true;
	}

	if (l === '{' && r === '}') {
		return true;
	}

	return false;
}


function Stack() {
	this.data = [];
}

Stack.prototype.push = function(v) {
	this.data.push(v);
}

Stack.prototype.pop = function() {
	return this.data.pop();
}

Stack.prototype.size = function() {
	return this.data.length;
}

Stack.prototype.top = function() {
	var length = this.data.length;
	return this.data[length - 1];
}