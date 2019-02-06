/******************************************************
 * file : 堆
 * author : "page"
 * time : "2016/11/02"
 *******************************************************/
function Heap() {
	this.data = [];
}

Heap.prototype.print = function() {
	console.log("Heap: " + this.data);
}

Heap.prototype.build = function(data) {
	// 初始化
	this.data = [];
	if (!data instanceof Array)
		return false;

	// 入堆
	for (var i = 0; i < data.length; ++i) {
		this.insert(data[i]);
	}

	return true;
}






// 入堆
// 数组的结构存储树，根据下标去判断树的父子关系
// nLeftIndex = 2 * (nFatherIndex+1) - 1;
// nRightIndex = 2* (nFatherIndex+1);
Heap.prototype.insert = function(nValue) {
	if (!this.data instanceof Array) {
		this.data = [];
	}

	this.data.push(nValue);
	// 更新新节点
	var nIndex = this.data.length - 1;
	var nFatherIndex = Math.floor((nIndex - 1) / 2);
	while (nFatherIndex > 0) {
		// 交换节点，大的在前
		if (this.data[nIndex] < this.data[nFatherIndex]) {
			var temp = this.data[nIndex];
			this.data[nIndex] = this.data[nFatherIndex];
			this.data[nFatherIndex] = temp;
		}

		nIndex = nFatherIndex;
		nFatherIndex = Math.floor((nIndex - 1) / 2);
	}
}

// 出堆
Heap.prototype.delete = function() {
	if (!this.data instanceof Array) {
		return null;
	}

	var nIndex = 0;
	var nValue = this.data[nIndex];
	var nMaxIndex = this.data.length - 1;
	// 更新新节点
	var nLeaf = this.data.pop();
	this.data[nIndex] = nLeaf;

	while (nIndex < nMaxIndex) {
		var nLeftIndex = 2 * (nIndex + 1) - 1;
		var nRightIndex = 2 * (nIndex + 1);

		// 找最小的一个子节点(nLeftIndex < nRightIndex)
		var nSelectIndex = nLeftIndex;
		if (nRightIndex < nMaxIndex) {
			nSelectIndex = (this.data[nLeftIndex] > this.data[nRightIndex]) ? nRightIndex : nLeftIndex;
		}

		if (nSelectIndex < nMaxIndex && this.data[nIndex] > this.data[nSelectIndex]) {
			var temp = this.data[nIndex];
			this.data[nIndex] = this.data[nSelectIndex];
			this.data[nSelectIndex] = temp;
		}

		nIndex = nSelectIndex;
	}

	return nValue;
}