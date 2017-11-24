# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def detectCycle(self, head):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if head is None: return None

        s = set()

        while head.next:
            if head in s: return head
            s.add(head)
            head = head.next

        if head in s: return head

        return None