/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 回文链表的判断
 * 	head = 1->2->3->2-1  true
 * 	head = 1 ->2->2->3->2->1 false
 * @param {ListNode} head
 * @return {boolean}
 * 思路。找到中间节点，拆分成两个 linkList. 开始比对 linkList
 */
var isPalindrome = function(head) {
  var fast = head;
  var slow = head;

  while (fast.next !== null && fast.next.next !== null) {
  	fast = fast.next.next;
  	slow = slow.next
  }

  var secondHead = slow.next;
  slow.next = null;

  secondHead = revert(secondHead);
  return compare(head, secondHead);
};

function revert(head) {
	var prev = null;
	var cur = head;
	var next = null;

	while (cur != null) {
		next = cur.next
		cur.next = prev
		prev = cur
		cur = next
	}
	return prev;
}

function compare(head, secondHead) {
	var p1 = head;
	var p2 = secondHead;

	while(p1 !== null && p2 !== null) {
		if (p1.val !== p2.val) {
			return false;
		}
		p1 = p1.next;
		p2 = p2.next;
	}
	return true;
}