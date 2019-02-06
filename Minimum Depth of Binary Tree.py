# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.left = None
#         self.right = None

class Solution(object):
    def minDepth(self, root):
        """
        :type root: TreeNode
        :rtype: int
        """
        if root is None:
            return 0

        leftDepth, rightDepth = self.minDepth(root.left), self.minDepth(root.right)

        if root.left is None:
            return rightDepth + 1
        elif root.right is None:
            return leftDepth + 1
        else:
            return min(leftDepth, rightDepth) + 1
