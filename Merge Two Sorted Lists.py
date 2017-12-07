# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeTwoLists(self, l1, l2):
        """
        :type l1: ListNode
        :type l2: ListNode
        :rtype: ListNode
        """
        if l1 is None:
            return l2
        if l2 is None:
            return l1

        p1, p2 = l1, l2
        head = None

        if p1.val < p2.val:
            head = l1
            p1 = p1.next
        else:
            head = l2
            p2 = p2.next

        p = head

        while p1 is not None and p2 is not None:
            if p1.val < p2.val:
                p.next = p1
                p1 = p1.next
                p = p.next
            else:
                p.next = p2
                p2 = p2.next
                p = p.next

        if p1 is not None:
            p.next = p1
            p1 = p1.next
            p = p.next

        if p2 is not None:
            p.next = p2
            p2 = p2.next
            p = p.next

        return head