
// 进位 eg: [12, 34] --> [1,5,4]
function jinweiArr(array) {
    let temp = 0;
    if (array[0] !== 0) {
        array.unshift(0);
    }

    for (let i = array.length - 1; i >= 0; i--) {
        array[i] = array[i] + temp;
        temp = parseInt(array[i] / 10);
        array[i] = array[i] % 10;
    }
    return array;
}

// 数组相加 eg: [1, 2] + [1, 2, 3] --> [1, 3, 5]

function addArray(arr1, arr2) {
	const result = [];

	let p1 = arr1.length - 1,
      p2 = arr2.length - 1;

    if (p1 === 0) return arr2.concat();
    if (p2 === 0) return arr1.concat();

	let p = Math.max(p1, p2);

    while(true) {
		let v1 = arr1[p1],
			v2 = arr2[p2];

		if(p1 < 0) v1 = 0;
		if(p2 < 0) v2 = 0;

		result[p] = v1 + v2;
		p1--;
		p2--;
		p--;
		if(p < 0) break;
	}

	return result;
}

// 时间：O(n^2)
function bigMulti(n1, n2) {
	let n1Str = n1.toString(), n2Str = n2.toString();
	const n1Len = n1Str.length, n2Len = n2Str.length;

	let buffer = [];

	for (let i = n2Len - 1; i >= 0; i--) {
        let pointValue = n2Str[i];
        let temp = buffer.concat([]);
        buffer = [];

		for (let j = n1Len - 1; j >= 0; j--) {
			buffer[j] = pointValue * n1Str[j];
        }

        for (let k = 0; k < n2Len - 1 - i; k++) {
            buffer.push(0);
        }

        buffer = jinweiArr(buffer);
		buffer = addArray(temp, buffer);
		buffer = jinweiArr(buffer);
	}

    return buffer.join('').replace(/^0+/g, '');
}