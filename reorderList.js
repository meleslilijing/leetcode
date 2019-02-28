/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @return {void} Do not return anything, modify head in-place instead.
 */
var reorderList = function(head) {
	if (!head || !head.next) {
		return head
	}

  var fast = head;
  var slow = head;
  while (fast.next !== null && fast.next.next !==null) {
  	fast = fast.next.next;
  	slow = slow.next
  }  

  var head2 = slow.next
  slow.next = null;

  head2 = revert(head2);
  return merge(head, head2);
};

function revert(head) {
	var cur = head;
	var pre = null;

	while (cur.next !== null) {
		var next = cur.next
		cur.next = pre
		pre = cur
		cur = next
	}
	cur.next = pre;

	return cur
}

function merge(head1, head2) {
	var head = new ListNode();
	var p = head;
	var p1 = head1;
	var p2 = head2;

	while (p1 && p2) {
			p.next = p1
			p1 = p1.next
			p = p.next

			p.next = p2
			p2 = p2.next
			p = p.next
	}

	// if p1还没结束
	while (p1) {
		p.next = p1
		p1 = p1.next
		p = p.next
	}

	// if p2还没结束
	while (p2) {
		p.next = p2
		p2 = p2.next
		p = p.next
	}

	return head.next;
}