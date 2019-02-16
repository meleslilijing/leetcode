/**
 * @param {character[]} s
 * @return {void} Do not return anything, modify s in-place instead.
 */
var reverseString = function(s) {
  var len = s.length;
  if (len <= 1) {
  	return s;
  }

  var low = 0;
  var high = s.length - 1;

  while (low < high) {
  	var temp = s[low];
  	s[low] = s[high];
  	s[high] = temp;

  	low++;
  	high--;
  }
};