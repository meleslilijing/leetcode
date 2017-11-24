# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def reverseKGroup(self, head, k):
        """
        :type head: ListNode
        :rtype: ListNode
        """
        if k <= 1: return head
        if head is None: return head

        count = 0

        point = head
        prev = None

        while point:
            if count % k == 0:
                prev = point
            if count % k == k - 1:
                self._reverseVal(prev, point)

            count += 1
            point = point.next

        return head

    def _reverseVal(self, head, end):
        stack = []

        point = head
        while point != end:
            stack.append(point.val)
            point = point.next
        stack.append(end.val)

        point = head
        while point != end:
            point.val = stack.pop()
            point = point.next
        end.val = stack.pop()

