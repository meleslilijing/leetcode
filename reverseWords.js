	/**
	 * @param {string} str
	 * @returns {string}
	 */
	var reverseWords = function(str) {
		var ret = []
		var t = [];

		for (var i = 0; i < str.length; i++) {
			if (str[i] !== ' ') {
				t.push(str[i]);
			} else {
				if (t.length > 0) {
					ret.push(t.join(''));
				}

				t = [];
			}
		}
		if (t.length > 0) {
			ret.push(t.join(''));
		}

		var low = 0; 
		var high = ret.length - 1;

		while(low < high) {
				var temp = ret[low];
				ret[low] = ret[high];
				ret[high] = temp;
				low++
				high--	
		}
		return ret.join(' ');
	};
