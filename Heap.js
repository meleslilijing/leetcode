function Heap() {
	this.data = [];
}


Heap.prototype.insert = function(nValue) {
	this.data.push(nValue);

	var nIndex = this.data.length - 1;
	var nFatherIndex = Math.floor((nIndex - 1) / 2);

	while (nFatherIndex > 0) {
		// 小顶堆
		// 自底向上遍历
		if (this.data[nIndex] < this.data[nFatherIndex]) {
			var temp = this.data[nIndex];
			this.data[nIndex] = this.data[nFatherIndex];
			this.data[nFatherIndex] = temp;
		}
		nIndex = nFatherIndex;
		nFatherIndex = Math.floor((nIndex - 1) / 2);
	}
}

Heap.prototype.delete = function() {
	if (this.data.length === 0) {
		return null
	}

	var nIndex = 0;
	var nValue = this.data[nIndex];
	var nMaxIndex = this.data.length - 1;

	var nLeaf = this.data.pop();
	this.data[nIndex] = nLeaf;

	// 遍历，堆化
	// 小顶堆
	// 自顶向下便利
	while (nIndex < nMaxIndex) {
		var nLeftIndex = (nIndex + 1) * 2 - 1;
		var nRightIndex = (nIndex + 1) * 2;

		var nSelectIndex = nLeftIndex
		nSelectIndex = this.data[nLeftIndex] > this.data[nRightIndex] ? nRightIndex : nLeftIndex;

		if (nSelectIndex < nMaxIndex && this.data[nIndex] > this.data[nSelectIndex]) {
			var temp = this.data[nIndex];
			this.data[nIndex] = this.data[nSelectIndex];
			this.data[nSelectIndex] = temp;
		}

		nIndex = nSelectIndex;
	}

	return nValue;
}
