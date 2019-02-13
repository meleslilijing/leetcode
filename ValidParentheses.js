/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
	if (s.length === 0) {
		return true;
	}

  var stack = new Stack();  

  for (var i = 0; i < s.length; i++) {
  	var v = s[i];

  	if (v === '{' || v === '[' || v === '(') {
  		stack.push(v)
  	}

  	if (v === '}' || v === ']' || v === ')') {
  		var left = stack.pop();

  		if (!check(left, v)) {
  			return false;
  		}
  	}
  }

  if (stack.size() > 0) {
  	return false
  }

  return true;
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