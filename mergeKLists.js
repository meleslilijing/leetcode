/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function(lists) {
		if (lists.length === 0) {
			return []
		}

    if (lists.length === 1) {
    	return lists[0]
    }

    var heap = new Heap();
    var head = new ListNode();
    var h = head

    // 将所有 链表的首元素都入堆
    for (var i = 0; i < lists.length; i++) {
    	var list = lists[i];
    	list && heap.insert(list);
    }

   	while (heap.size() > 0) {
   		var minValue = heap.delete();
   		h.next = minValue;

   		if (minValue.next !== null) {
   			heap.insert(minValue.next);
   		}
   		h = h.next
   	}
   	return head.next;
};

function Heap() {
	this.data = [];
}

Heap.prototype.insert = function (v) {
	this.data.push(v)
}

Heap.prototype.delete = function () {
	if (this.data.length === 0) {
		return null;
	}

	var minIndex = 0;
	for (var i = 0; i < this.data.length; i++) {
		if (this.data[i].val < this.data[minIndex].val) {
			minIndex = i;
		}
	} 
	
	var r = this.data[minIndex];
	this.data.splice(minIndex, 1);
	
	return r;
}

Heap.prototype.size = function() {
	return this.data.length;
}