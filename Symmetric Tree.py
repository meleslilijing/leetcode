# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def isSymmetric(self, root):
        """
        :type root: TreeNode
        :rtype: bool
        """
        if root is None: return True

        return self.solve(root.left, root.right)

    def solve(self, t1, t2):
        if t1 is None and t2 is None:
            return True

        if t1 is None and t2 is not None or \
            t1 is not None and t2 is None or \
            t1.val != t2.val:
            return False

        return self.solve(t1.left, t2.right) and self.solve(t2.left, t1.right)