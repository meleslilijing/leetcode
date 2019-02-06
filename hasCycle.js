/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    var fast = head;
    var slow = head;
    while(fast.next !== null && fast.next.next !== null) {
    	fast = fast.next.next;
    	slow = head.next;

    	if (fast === slow) return true;
    }
  	return false;
};