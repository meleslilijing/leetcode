/**
 * 把input stack 的内容按顺序的 推入新的 stack中
 * output每次push之前，进行数据比对。
 * O(n^2)
 *
 * ps: 利用两个 stack 互相进行一系列 input output操作后能保持顺序的特性
 */

var sortStack = function(input) {
	if (input.isEmpty() || input.length === 1) {
		return input;
	}

	var output = new Stack();	

	while (!input.isEmpty) {
		var val = input.pop();

		while (!output.isEmpty() && output.top() < val) {
			var tmp = output.pop();
			input.push(tmp);
		}

		output.push(val);
	}

	return output;
}