# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
    def mergeKLists(self, lists):
        """
        :type lists: List[ListNode]
        :rtype: ListNode
        """

        if len(lists) == 0:
            return None

        points = lists

        if self.checkPoints(points) == False:
            return None

        index = self.findMinPointIndex(points)
        head = points[index]
        points[index] = points[index].next

        point = head

        while self.checkPoints(points):
            index = self.findMinPointIndex(points)
            point.next = points[index]
            points[index] = points[index].next
            point = point.next

        return head

    def checkPoints(self, points):
        for point in points:
            if point is not None:
                return True

        return False

    def findMinPointIndex(self, points):
        min = 0
        for idx in range(len(points)):
            if points[idx] is None: continue
            if points[idx] < points[min]:
                min = idx

        return min