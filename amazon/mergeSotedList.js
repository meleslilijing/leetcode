/**
 * 合并两个LinkedList / merge two sorted linkedlist
 * leetcode原题
 * class ListNode {
 * 	val: number
 * 	next: ListNode
 * }
 */
var mergeSotedList = function(head1, head2) {
	if (head1 === null) {
		return head2;
	}

	if (head2 === null) {
		return head1;
	} 

	// create new empty ListNode for LinkList head
	var head = new ListNode();


	// create point for all LinkList;
	var p = head;
	var p1 = head1;
	var p2 = head2;

	while (p1 && p2) {
		if (p1.val < p2.val) {
			p.next = p1;
			p1 = p1.next;
		} else {
			p.next = p2;
			p2 = p2.next;
		}

		p = p.next;
	}

	while (p1 !== null) {
		p.next = p1;
		p1 = p1.next;
		p = p.next;
	}

	while (p2 !== null) {
		p.next = p2;
		p2 = p2.next;
		p = p.next;
	}

	return head.next;
}

function ListNode(v) {
	this.val = v
	this.next = null;
}