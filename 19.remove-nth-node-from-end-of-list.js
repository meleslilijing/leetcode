/*
 * @lc app=leetcode id=19 lang=javascript
 *
 * [19] Remove Nth Node From End of List
 *
 * https://leetcode.com/problems/remove-nth-node-from-end-of-list/description/
 *
 * algorithms
 * Medium (33.98%)
 * Total Accepted:    354K
 * Total Submissions: 1M
 * Testcase Example:  '[1,2,3,4,5]\n2'
 *
 * Given a linked list, remove the n-th node from the end of list and return
 * its head.
 * 
 * Example:
 * 
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes
 * 1->2->3->5.
 * 
 * 
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
 * 
 */
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (n === 0) {
        return head;
    }

    let p = head;
    while (p !== null && n > 0) {
        p = p.next;
        n--
    }
    // n大于link长度
    if (n > 0 && p === null) {
        return head;
    }

    // n与link长度相同
    if (n === 0 && p === null) {
        const temp = head.next;
        head.next = null;
        return temp;
    }

    let prev = head;
    while (p.next !== null) {
        prev = prev.next;
        p = p.next;
    }

    prev.next = prev.next.next;
    return head;
};

