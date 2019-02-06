/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 *
 * 链表的排序。
 * 归并排序的思路，需要注意的是 next 指针的变化
 * 
 * @param {ListNode} head
 * @return {ListNode}
 */
var sortList = function(head) {
		if (head === null && head.next === null) {
			return head;
		}

    var mid = findMiddle(head);
    var right = sortList(mid.next);
    mid.next = null;
    left = sortList(head);

    return merge(left, right);
};

function findMiddle(head) {
	var fast = head;
	var slow = head;

	while(fast.next != null && fast.next.next !== null) {
		slow = slow.next;
		fast = fast.next;
	}

	return slow
}

function merge(head1, head2) {
	var dummy = new ListNode(0);	// 创建一个虚拟链表，用于把两个 head 都整合到这个链表上
	var tail = dummy;		// tail 是归并用的指针

	// 归并排序
	while(head1 != null && head2 != null) {
		if (head1.val < head2.val) {
			tail.next = head1;
			head1 = head1.next;
		} else {
			tail.next = head2;
			head2 = head2.next;
		}
		tail = tail.next
	}

	// 合并后续的节点，可能两个链表的长度不一致
	if (head1 != null) {
		tail.next = head1;
	} else {
		tail.next = head2;
	}

	return dummy.next;
}