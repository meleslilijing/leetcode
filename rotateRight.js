/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * 链表的移动，
 * eg: head = 1 -> 2 -> 3 -> 4 -> 5 
 * rotateRight(head, 2) // return 4 -> 5 -> 1 -> 2 -> 3
 * 
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function(head, k) {
	// 找到最后一个 node
	// 计算length
  var last = head;
  var length = 1
  while(last.next != null) {
  	last = last.next;
  	length++
  }  

  var k = length % k

  // 最后一个 node 指向 head
  last.next = head;

  // 找到 倒数 k 个 node 的前一个node
  var cur = head;

  for (var i = 0; i < length - 1 - k; i++) {
  	cur = cur.next;
  }

  head = cur.next;
  cur.next = null;

  return head;
};