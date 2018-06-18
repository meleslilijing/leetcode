// TODO 去重
function test() {
	const array = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];

	return ksum(array, 10, 3);
}

const cache = {};
function TwoSum(array, sum) {
	const result = [];
	let a, b;

	for (let i = 0; i < array.length; i++) {
		a = array[i];
		cache[a] = a
		b = sum - a;
		if(cache[b] && b !== a) result.push([a, b]);
	}
	return result;
}

function ksum(array, sum, k) {
	const result = [];

	if (k === 2) {
		return TwoSum(array, sum)
	}

	let a, bArrays;

	for (let i = 0; i < array.length; i++) {
		a = array[i];

		cache[a] = a;

		bArrays = ksum(array, sum - a, k - 1);
		bArrays.forEach(arr => {
			arr.unshift(a);
			arr.sort()
			result.push(arr);
		})
	}
	return result
}

test();
